import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { AppComponent } from './app.component';
import { MaterialModule } from "./MaterialModule";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterComponent } from './counter/counter.component';
import { MenuComponent } from './menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FireserviceService } from './fireservice.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import {ReactiveFormsModule  } from "@angular/forms";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import {CommonModule} from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { HovercardComponent } from './hovercard/hovercard.component';
import { WishpageComponent } from './wishpage/wishpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MenuComponent,
    GalleryComponent,
    HovercardComponent,
    WishpageComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    
  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
  AngularFireAuthModule, // auth
  AngularFireStorageModule , // storage,
  AngularFireDatabaseModule,
  ReactiveFormsModule,
  CommonModule
  ],
  exports:[MaterialModule],
  providers: [FireserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
