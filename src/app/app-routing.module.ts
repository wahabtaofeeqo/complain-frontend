import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from "./register/register.component";
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from "./admin-login/admin-login.component"
import { LoginComponent } from "./login/login.component"
import { LogoutComponent } from "./logout/logout.component"
import { ProComponent } from './pro/pro.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminsComponent } from './admins/admins.component';
import { LogoutAdminComponent } from './logout-admin/logout-admin.component';
import { DeptComplaintsComponent } from './dept-complaints/dept-complaints.component';
import { LogoutProComponent } from './logout-pro/logout-pro.component';
import { SearchComplaintComponent } from './search-complaint/search-complaint.component';
import { ProfileComponent } from './profile/profile.component'; 
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'login', component: LoginComponent},
	{path: 'admin', component: AdminComponent},
	{path: 'admin-login', component: AdminLoginComponent},
	{path: 'logout', component: LogoutComponent},
	{path: 'pro', component: ProComponent},
	{path: 'view-complaint/:id', component: ViewComplaintComponent},
	{path: 'new-admin', component: AddAdminComponent},
	{path: 'admins', component: AdminsComponent},
	{path: 'logout-admin', component: LogoutAdminComponent},
	{path: 'departmental-complaints', component: DeptComplaintsComponent},
	{path: 'logout-pro', component: LogoutProComponent},
	{path: 'search-complaint', component: SearchComplaintComponent},
	{path: 'profile', component: ProfileComponent},
	{path: 'edit-profile', component: EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }