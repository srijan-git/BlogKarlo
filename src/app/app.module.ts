import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './Layout/header/header.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { SignupComponent } from './components/Auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MyBlogsComponent } from './components/my-blogs/my-blogs.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AuthService } from './Services/auth.service';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostComponent } from './components/post/post.component';
import { ViewsComponent } from './components/views/views.component';
import { WritersProfileComponent } from './components/writers-profile/writers-profile.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LoaderComponent } from './Layout/loader/loader.component';
import { LoaderIntercepterService } from './Services/loader-intercepter.service';
import { NoAuthViewComponent } from './Layout/no-auth-view/no-auth-view.component';
import { BloglistComponent } from './components/Admin/bloglist/bloglist.component';
import { BlogsEditComponent } from './components/Admin/blogs-edit/blogs-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    MyBlogsComponent,
    CreatepostComponent,
    EditProfileComponent,
    ProfileComponent,
    PostComponent,
    ViewsComponent,
    WritersProfileComponent,
    CommentsComponent,
    LoaderComponent,
    NoAuthViewComponent,
    BloglistComponent,
    BlogsEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    AppRoutingModule

  ],
  providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: LoaderIntercepterService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
