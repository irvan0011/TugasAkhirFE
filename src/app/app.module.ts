import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginService } from './services/login.service';
import { HomeService } from './services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { DetailPostComponent } from './pages/detail-post/detail-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FormLoginComponent,
    FormRegisterComponent,
    NavbarComponent,
    PostComponent,
    CardPostComponent,
    DetailPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [LoginService, HomeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
