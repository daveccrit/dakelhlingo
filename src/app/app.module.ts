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
  MatRadioModule,
  MatInputModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { GlobalData } from './shared/app-data';
import { HttpClientModule } from '@angular/common/http';
import { MenuListItemComponent } from './shared/menu-list-item/menu-list-item.component';
import { WordLearningExampleComponent } from './learning-modules/word-learning-example/word-learning-example.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { WordsLearningExampleComponent } from './learning-modules/words-learning-example/words-learning-example.component';
import { DragDropExampleComponent } from './learning-modules/drag-drop-example/drag-drop-example.component';
import { AppDataService } from './shared/app-data.service';
import { LibraryComponent } from './library/library.component';
import { VideoLibraryComponent } from './library/video-library/video-library.component';
import { WordLibraryComponent } from './library/word-library/word-library.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDataService,
    HomeComponent,
    LessonCategoriesComponent,
    LessonsComponent,
    LessonComponent,
    MenuListItemComponent,
    WordLearningExampleComponent,
    SettingsComponent,
    HelpComponent,
    WordsLearningExampleComponent,
    DragDropExampleComponent,
    LibraryComponent,
    VideoLibraryComponent,
    WordLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    HttpClientModule
  ],
  entryComponents: [AppDataService],
  providers: [GlobalData],
  bootstrap: [AppComponent]
})
export class AppModule {}
