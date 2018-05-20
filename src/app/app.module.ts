import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCheckboxModule,MatButtonToggleModule,MatButtonModule,MatCardModule,MatToolbarModule,MatIconModule,MatMenuModule,MatSelectModule,MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,MatCheckboxModule,MatCardModule,MatButtonToggleModule,MatToolbarModule,MatIconModule,MatMenuModule,BrowserAnimationsModule,MatSelectModule,MatTabsModule
  ],
  exports:[MatButtonModule,MatCheckboxModule,MatCardModule,MatButtonToggleModule,MatToolbarModule,MatIconModule,MatMenuModule,BrowserAnimationsModule,MatSelectModule,MatTabsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
