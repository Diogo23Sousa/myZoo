import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewAnimalComponent } from './components/create-new-animal/create-new-animal.component';
import { CheckAnimalsComponent } from './components/check-animals/check-animals.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OurUsersComponent } from './components/our-users/our-users.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { CreateNewUserComponent } from './components/create-new-user/create-new-user.component';
import { AuthGuard } from './security-services/auth-guard.service';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'createanimals', component: CreateNewAnimalComponent},
  { path: 'animals', canActivate:[AuthGuard], component: CheckAnimalsComponent},
  { path: 'ourusers', component: OurUsersComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'createuser', component: CreateNewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
