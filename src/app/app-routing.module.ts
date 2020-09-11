import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from "./MaterialModule";

import { CounterComponent } from './counter/counter.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HovercardComponent } from './hovercard/hovercard.component';
import { WishpageComponent } from './wishpage/wishpage.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'wishupload', component: GalleryComponent },
  { path: 'celebcard', component: HovercardComponent },
  { path: 'celebpage', component: WishpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
