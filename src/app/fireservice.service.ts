import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, timer } from 'rxjs';
import { Users } from "./model/Users";

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {
  createUser(value, url, wishto) {
    return this.db.collection(wishto).add({
      wishes: value.wishes,
      ImageUrl: url,
      from: value.from
    });
  }

  itemsCollection: AngularFirestoreCollection<Users>;
  items: Observable<Users[]>;
  items1: Observable<Users[]>;

  constructor(private firebase: AngularFireDatabase, public db: AngularFirestore, public afAuth: AngularFireAuth, public database: AngularFireDatabase) {
    this.items = this.db.collection('Users').valueChanges();
  }

  getImages(wishto) {
    console.log(wishto);
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/' + wishto).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots)
        })
    })
  }
  getUsers() {
    return this.items;
  }
  tryUsers() {
    var now = new Date();
    now.setHours(0, 0, 0, 0)
    this.items1 = this.db.collection('Users', ref => ref.where('dob', '==', now)).valueChanges();
    //console.log(now);
    return this.items1;

  }
  registerUser(value, url) {
    return this.db.collection('Users').add({
      about: value.about,
      dob: value.dob,
      fname: value.fname,
      lname: value.lname,
      proimg: url

    });

  }


}

