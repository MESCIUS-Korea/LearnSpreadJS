import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { InstallationComponent } from './installation/installation.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { LicensingComponent } from './licensing/licensing.component';
import { InitializeComponent } from './core/initialize/initialize.component';
import { ScrollBarComponent } from './core/Spread/scroll-bar/scroll-bar.component';
import { SpreadsheetComponent } from './core/spread/spreadsheet/spreadsheet.component';
import { TabStripComponent } from './core/spread/tab-strip/tab-strip.component';
import { SpreadBackgroundComponent } from './core/spread/spread-background/spread-background.component';
import { SpreadpaintComponent } from './core/spread/spreadpaint/spreadpaint.component';
import { SpreadeventsComponent } from './core/spread/spreadevents/spreadevents.component';





@NgModule({
  declarations: [
    AppComponent,    
    OverviewComponent,    
    InstallationComponent,
    RequirementsComponent,
    LicensingComponent,
    InitializeComponent,
    SpreadsheetComponent,
    TabStripComponent,    
    ScrollBarComponent,
    SpreadBackgroundComponent,
    SpreadpaintComponent,
    SpreadeventsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
