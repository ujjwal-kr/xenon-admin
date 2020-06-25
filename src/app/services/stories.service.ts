import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private afs: AngularFirestore) { }

  getStories() {
    return this.afs.collection('stories').valueChanges({idField: 'id'})
  }

  addStory(data) {
    return this.afs.collection('stories').add(data);
  }
}
