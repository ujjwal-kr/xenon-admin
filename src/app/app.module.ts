import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const options = {
    apiKey: "AIzaSyAeW_5x-REWWAzcDcO-w6BAEE2B7qe1xhg",
    authDomain: "xenon-4dfeb.firebaseapp.com",
    databaseURL: "https://xenon-4dfeb.firebaseio.com",
    projectId: "xenon-4dfeb",
    storageBucket: "xenon-4dfeb.appspot.com",
    messagingSenderId: "847112549528",
    appId: "1:847112549528:web:0efc1e4d65b28ff5528ced"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(options),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
