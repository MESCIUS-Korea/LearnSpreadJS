import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


import { OverviewComponent } from "./overview/overview.component";
import { InstallationComponent } from "./installation/installation.component";
import { RequirementsComponent } from "./requirements/requirements.component";
import { LicensingComponent } from "./licensing/licensing.component";
import { InitializeComponent } from "./core/initialize/initialize.component";



const APP_ROUTES:Routes = [
    { path: '', component: OverviewComponent },  
    { path: 'installation', component: InstallationComponent },      
    { path: 'requirements', component: RequirementsComponent },      
    { path: 'licensing', component: LicensingComponent },              
    { path: 'initialize', component: InitializeComponent },      
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}