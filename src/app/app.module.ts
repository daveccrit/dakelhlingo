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
import { LessonComponent } from './lesson/lesson.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuListItemComponent } from './shared/menu-list-item/menu-list-item.component';
import { WordLearningExampleComponent } from './learning-modules/word-learning-example/word-learning-example.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { WordsLearningExampleComponent } from './learning-modules/words-learning-example/words-learning-example.component';
import { DragDropExampleComponent } from './learning-modules/drag-drop-example/drag-drop-example.component';
import { LibraryComponent } from './library/library.component';
import { VideoLibraryComponent } from './library/video-library/video-library.component';
import { WordLibraryComponent } from './library/word-library/word-library.component';
import { LessonService } from './shared/services/lesson.service';
import { WordsDictionaryService } from './shared/services/words-dictionary.service';
import { MenuDataService } from './shared/services/menu-data.service';
import { SettingsService } from './shared/services/settings.service';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { SideScrollImageSearchComponent } from './learning-modules/side-scroll-image-search/side-scroll-image-search.component';
import { CarouselItemDirective } from './learning-modules/side-scroll-image-search/carousel-item.directive';
import { CarouselComponent } from './learning-modules/side-scroll-image-search/carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { PhraseBuilderComponent } from './learning-modules/phrase-builder/phrase-builder.component';
import { PhraseLearningComponent } from './learning-modules/phrase-learning/phrase-learning.component';
import { LessonCompletedComponent } from './learning-modules/lesson-completed/lesson-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonCategoriesComponent,
    LessonListComponent,
    LessonComponent,
    MenuListItemComponent,
    WordLearningExampleComponent,
    SettingsComponent,
    HelpComponent,
    WordsLearningExampleComponent,
    DragDropExampleComponent,
    LibraryComponent,
    VideoLibraryComponent,
    WordLibraryComponent,
    SideScrollImageSearchComponent,
    CarouselItemDirective,
    CarouselComponent,
    PhraseBuilderComponent,
    PhraseLearningComponent,
    LessonCompletedComponent
  ],
  imports: [
    CommonModule,
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
  providers: [
    LessonService,
    MenuDataService,
    WordsDictionaryService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
