import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LessonCategoriesComponent } from './lesson-categories/lesson-categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatRadioModule
} from '@angular/material';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { GlobalData } from './shared/app-data';
import { HttpClientModule } from '@angular/common/http';
import { MenuListItemComponent } from './shared/menu-list-item/menu-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonCategoriesComponent,
    LessonsComponent,
    LessonComponent,
    MenuListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [GlobalData],
  bootstrap: [AppComponent]
})
export class AppModule {}
