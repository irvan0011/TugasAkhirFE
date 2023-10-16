import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { DetailPostComponent } from './pages/detail-post/detail-post.component';
import { HomeComponent } from './pages/home/home.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'postadd', component: AddPostComponent },
  { path: 'post/:id', component: DetailPostComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
