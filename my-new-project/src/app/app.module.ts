import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNewAnimalComponent } from './components/create-new-animal/create-new-animal.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CheckAnimalsComponent } from './components/check-animals/check-animals.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AnimalService } from './services/animal.service';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OurUsersComponent } from './components/our-users/our-users.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { CreateNewUserComponent } from './components/create-new-user/create-new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewAnimalComponent,
    NavbarComponent,
    FooterComponent,
    CheckAnimalsComponent,
    HomePageComponent,
    OurUsersComponent,
    UserLoginComponent,
    CreateNewUserComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [AnimalService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
