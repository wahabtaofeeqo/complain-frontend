import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProComponent } from './pro/pro.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminsComponent } from './admins/admins.component';
import { LogoutAdminComponent } from './logout-admin/logout-admin.component';
import { ProSidebarComponent } from './pro-sidebar/pro-sidebar.component';
import { DeptComplaintsComponent } from './dept-complaints/dept-complaints.component';
import { LogoutProComponent } from './logout-pro/logout-pro.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComplaintComponent } from './search-complaint/search-complaint.component';
import { StuSidebarComponent } from './stu-sidebar/stu-sidebar.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdminComponent,
    RegisterComponent,
    LoginComponent,
    AdminLoginComponent,
    LogoutComponent,
    ProComponent,
    ViewComplaintComponent,
    AddAdminComponent,
    SidebarComponent,
    AdminsComponent,
    LogoutAdminComponent,
    ProSidebarComponent,
    DeptComplaintsComponent,
    LogoutProComponent,
    ProfileComponent,
    SearchComplaintComponent,
    StuSidebarComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
