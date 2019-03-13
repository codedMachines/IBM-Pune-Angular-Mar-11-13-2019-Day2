import { Component, OnInit } from '@angular/core';

import { Actor } from '../../models/actor.model';

import { ActorlistService } from '../../services/actorlist.service';

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {

  actorList: Actor[];
  tempActorList: Actor[];
  newName: string;
  newFollowers;
  listFlag: boolean;
  btnText: string;
  selectedIndex: number;
  tempActor: Actor;

  constructor(private actorlistService: ActorlistService) { }

  ngOnInit() {
    this.actorList = this.actorlistService.getActors();
    this.tempActorList = this.actorList.slice();
    this.newFollowers = 0;
    this.newName = '';

    this.listFlag = true;
    this.btnText = 'Hide List';

    this.selectedIndex = -1;
    this.tempActor = null;
  }

  deleteActor(index: number) {
    // this.actorList.splice(index, 1);
    this.actorlistService.deleteActor(index);
  }

  addActor() {
    // this.actorList.push({
    //   name: this.newName,
    //   followers: parseInt(this.newFollowers, 10)
    // });

    this.actorlistService.addActor({
      name: this.newName,
      followers: this.newFollowers
    });
    this.newName = '';
    this.newFollowers = 0;
  }

  toggleList() {
    this.listFlag = !this.listFlag;
    this.btnText = (this.listFlag) ? 'Hide List' : 'Show List';
  }

  editActor(index: number) {
    // BUG FIX

    if (this.selectedIndex > -1 && this.selectedIndex !== index) {
      this.cancelEdit(this.selectedIndex);
    }

    ////////////////End Bug Fix

    this.selectedIndex = index;

    // Don't do this
    // SHALLOW COPY!!!!
    // this.tempActor = this.actorList[index];

    // DEEP COPY

    // Approach - 1 (not recommended)
    // this.tempActor = {
    //   name: this.actorList[index].name,
    //   followers: this.actorList[index].followers
    // };

    // Approach - 2 (recommended approach)
    this.tempActor = Object.assign({}, this.actorList[index]);
  }

  saveActor(index: number) {
    this.selectedIndex = -1;
  }

  cancelEdit(index: number) {
    // this.actorList.splice(index, 1, this.tempActor);
    this.actorlistService.updateActor(index, this.tempActor);
    this.selectedIndex = -1;
  }

  handleKey(event, index) {
    if (event.key === 'Escape') {
      this.cancelEdit(index);
    }
  }

  sortValues(prop: string, direction: string) {
    this.actorList.sort((first, second) => {
      if (prop === 'name') {
        // String Comparison
        if (direction === 'ascending') {
          if (first[prop] < second[prop]) { return -1; }
          if (first[prop] > second[prop]) { return 1; }
          if (first[prop] === second[prop]) { return 0; }
        } else {
          if (first[prop] < second[prop]) { return 1; }
          if (first[prop] > second[prop]) { return -1; }
          if (first[prop] === second[prop]) { return 0; }
        }
      }
      if (prop === 'followers') {
        // Numeric Comparison
        if (direction === 'ascending') {
          return first[prop] - second[prop];
        } else {
          return second[prop] - first[prop];
        }
      }
    });
  }

  resetList() {
    this.actorList = this.tempActorList.slice();
  }

}
