import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AddPostComponent } from './page/add-post/add-post.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'postadd', component: AddPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
