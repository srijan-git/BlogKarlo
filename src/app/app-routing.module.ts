import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { NavbarComponent } from './components/Admin/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './components/Admin/bloglist/bloglist.component';
import { BlogsEditComponent } from './components/Admin/blogs-edit/blogs-edit.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { SignupComponent } from './components/Auth/signup/signup.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HomeComponent } from './components/home/home.component';
import { MyBlogsComponent } from './components/my-blogs/my-blogs.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewsComponent } from './components/views/views.component';
import { WritersProfileComponent } from './components/writers-profile/writers-profile.component';
import { AdminGuard } from './Guard/admin.guard';
import { AuthGuard } from './Guard/auth.guard';
import { NoAuthViewComponent } from './Layout/no-auth-view/no-auth-view.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'noauthview', pathMatch: 'full'
  }, {
    path: 'home', component: HomeComponent
  }, {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'myblogs/:id', component: MyBlogsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'profile/:id', component: ProfileComponent
  }, {
    path: 'edit-profile/:id', component: EditProfileComponent
  },
  {
    path: 'view/:postId/:userid', component: ViewsComponent
  },
  {
    path: 'writersView/:postId', component: WritersProfileComponent
  },
  {
    path: 'noauthview', component: NoAuthViewComponent
  },
  // {
  //   path: 'Dashboard', component: DashboardComponent
  // },
  {
    path: 'AdminblogList', component: BloglistComponent, canActivate: [AdminGuard]
  },

  {
    path: 'BlogEdit/:id', component: BlogsEditComponent, canActivate: [AdminGuard]
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
