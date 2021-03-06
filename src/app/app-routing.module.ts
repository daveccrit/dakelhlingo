import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LessonCategoriesComponent } from './lesson-categories/lesson-categories.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { LibraryComponent } from './library/library.component';
import { WordLibraryComponent } from './library/word-library/word-library.component';
import { VideoLibraryComponent } from './library/video-library/video-library.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'library/words', component: WordLibraryComponent },
  { path: 'library/videos', component: VideoLibraryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'lesson-categories', component: LessonCategoriesComponent },
  { path: 'lessons/:catid', component: LessonsComponent },
  { path: 'lesson/:catid/:lessonid', component: LessonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
