import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LessonCategoriesComponent } from './lesson-categories/lesson-categories.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponent },
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
