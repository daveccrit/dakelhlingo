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
  MatInputModule,
  MatTreeModule,
  MatExpansionModule,
  MatStepperModule,
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
import { PhraseLibraryComponent } from './library/phrase-library/phrase-library.component';
import { StoryLibraryComponent } from './library/story-library/story-library.component';
import { RecipeLibraryComponent } from './library/recipe-library/recipe-library.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { MusicLibraryComponent } from './library/music-library/music-library.component';
import { GamesLibraryComponent } from './library/games-library/games-library.component';
import { WordSpellingComponent } from './learning-modules/word-spelling/word-spelling.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselItemDirective,
    DragDropExampleComponent,
    HelpComponent,
    HomeComponent,
    LessonCategoriesComponent,
    LessonCompletedComponent,
    LessonComponent,
    LessonListComponent,
    LibraryComponent,
    MenuListItemComponent,
    PhraseBuilderComponent,
    PhraseLearningComponent,
    PhraseLibraryComponent,
    SettingsComponent,
    SideScrollImageSearchComponent,
    StoryLibraryComponent,
    VideoLibraryComponent,
    WordLearningExampleComponent,
    WordLibraryComponent,
    WordsLearningExampleComponent,
    RecipeLibraryComponent,
    FlashcardsComponent,
    MusicLibraryComponent,
    GamesLibraryComponent,
    WordSpellingComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatStepperModule,
    MatTreeModule,
  ],
  providers: [LessonService, MenuDataService, WordsDictionaryService, SettingsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
