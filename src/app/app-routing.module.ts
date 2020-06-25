import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StoriesComponent } from './stories/stories.component';
import { AddStoriesComponent } from './add-stories/add-stories.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'stories', component: StoriesComponent},
  {path: 'addStories', component: AddStoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


