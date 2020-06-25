import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
  ) { 
  }

  signIn(password) {
    return this.afAuth.signInWithEmailAndPassword('ujjwal@xenon.now.sh', password);
  }
}
