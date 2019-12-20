import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNewAnimalComponent } from './components/create-new-animal/create-new-animal.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { OurAnimalsComponent } from './components/our-animals/our-animals.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AnimalService } from './services/animal.service';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OurUsersComponent } from './components/our-users/our-users.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { CreateNewUserComponent } from './components/create-new-user/create-new-user.component';
import { AuthenticationService } from './security-services/authentication.service';
import { AuthGuard } from './security-services/auth-guard.service';
import { AuthHttpInterceptorService } from './security-services/auth-http-interceptor.service';
import { OurZooComponent } from './components/our-zoo/our-zoo.component';
import { MyAccountComponent } from './components/my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewAnimalComponent,
    NavbarComponent,
    FooterComponent,
    OurAnimalsComponent,
    HomePageComponent,
    OurUsersComponent,
    UserLoginComponent,
    CreateNewUserComponent,
    OurZooComponent,
    MyAccountComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [AnimalService, UserService, AuthenticationService, AuthGuard,  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
