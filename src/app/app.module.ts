import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppCustomContainerComponent } from './app-custom-container/app-custom-container.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { CustomItemComponent } from './custom-item/custom-item.component';
import { GridCntListComponent } from './grid-cnt-list/grid-cnt-list.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { CustomFooterComponent } from './custom-footer/custom-footer.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AppCustomContainerComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    AppCustomContainerComponent,
    MenuListComponent,
    CustomItemComponent,
    GridCntListComponent,
    PeopleListComponent,
    CustomFooterComponent
      ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/