import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LessonCategoriesComponent } from './lesson-categories/lesson-categories.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonComponent } from './lesson/lesson.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { LibraryComponent } from './library/library.component';
import { WordLibraryComponent } from './library/word-library/word-library.component';
import { VideoLibraryComponent } from './library/video-library/video-library.component';
import { PhraseLibraryComponent } from './library/phrase-library/phrase-library.component';
import { StoryLibraryComponent } from './library/story-library/story-library.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'library/words', component: WordLibraryComponent },
  { path: 'library/phrases', component: PhraseLibraryComponent },
  { path: 'library/stories', component: StoryLibraryComponent },
  { path: 'library/videos', component: VideoLibraryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'lesson-categories', component: LessonCategoriesComponent },
  { path: 'lessons/:catid', component: LessonListComponent },
  { path: 'lesson/:catid/:lessonid', component: LessonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
