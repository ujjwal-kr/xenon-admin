import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getFeedbacks() {
    return this.afs.collection('feedback').valueChanges()
  }
}
