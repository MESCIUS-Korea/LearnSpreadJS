import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


import { OverviewComponent } from "./overview/overview.component";
import { InstallationComponent } from "./installation/installation.component";
import { RequirementsComponent } from "./requirements/requirements.component";
import { ReferencingComponent } from "./referencing/referencing.component";
import { FilterComponent } from "./flexgrid/filter/filter.component";



const APP_ROUTES:Routes = [
    { path: '', component: OverviewComponent },  
    { path: 'installation', component: InstallationComponent },      
    { path: 'requirements', component: RequirementsComponent },      
    { path: 'referencing', component: ReferencingComponent },  
    { path: 'flexgrid-filter', component: FilterComponent },
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