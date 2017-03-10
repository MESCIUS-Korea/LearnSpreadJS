import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


import { OverviewComponent } from "./overview/overview.component";
import { InstallationComponent } from "./installation/installation.component";
import { RequirementsComponent } from "./requirements/requirements.component";
import { LicensingComponent } from "./licensing/licensing.component";
import { InitializeComponent } from "./core/initialize/initialize.component";
import { ScrollBarComponent } from './core/Spread/scroll-bar/scroll-bar.component';
import { TabStripComponent } from './core/spread/tab-strip/tab-strip.component';
import { SpreadsheetComponent } from './core/spread/spreadsheet/spreadsheet.component';

const APP_ROUTES:Routes = [
    { path: '', component: OverviewComponent },  
    { path: 'main', component: OverviewComponent },  
    { path: 'installation', component: InstallationComponent },      
    { path: 'requirements', component: RequirementsComponent },      
    { path: 'licensing', component: LicensingComponent },              
    { path: 'initialize', component: InitializeComponent },     
    { path: 'ScrollBar', component: ScrollBarComponent },  
    { path: 'licensing', component: LicensingComponent },   
    { path: 'initialize', component: InitializeComponent },
    { path: 'spreadsheet', component: SpreadsheetComponent },    
    { path: 'tabstrip', component: TabStripComponent },

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