import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewAnimalComponent } from './components/create-new-animal/create-new-animal.component';
import { OurAnimalsComponent } from './components/our-animals/our-animals.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OurUsersComponent } from './components/our-users/our-users.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { CreateNewUserComponent } from './components/create-new-user/create-new-user.component';
import { AuthGuard } from './security-services/auth-guard.service';
import { OurZooComponent } from './components/our-zoo/our-zoo.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'createanimals', canActivate:[AuthGuard], component: CreateNewAnimalComponent},
  { path: 'animals', canActivate:[AuthGuard], component: OurAnimalsComponent},
  { path: 'users', canActivate:[AuthGuard], component: OurUsersComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'createuser', component: CreateNewUserComponent},
  { path: 'zoo', component: OurZooComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
