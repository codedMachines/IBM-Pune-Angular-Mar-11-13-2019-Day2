import { Injectable } from '@angular/core';

import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorlistService {

  actorList: Actor[];

  constructor() {
    this.actorList = [
      { name: 'Amitabh Bachhan', followers: 300000 },
      { name: 'Kamal Hasan', followers: 25000 },
      { name: 'Deepika Padukone', followers: 220000 },
      { name: 'Rekha', followers: 350000 },
      { name: 'Rajnikant', followers: 500000 }
    ];
  }

  getActors() {
    return this.actorList;
  }

  deleteActor(index) {
    this.actorList.splice(index, 1);
  }

  addActor(actor: Actor){
    this.actorList.push(actor);
  }

  updateActor(index, actor) {
    this.actorList.splice(index, 1, actor);
  }
}
