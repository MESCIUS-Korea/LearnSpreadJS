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
import { SpreadfromJSONToJSONComponent } from './core/spread/spreadfrom-json-to-json/spreadfrom-json-to-json.component';
import { DataSourceSerializeComponent } from './core/spread/data-source-serialize/data-source-serialize.component';
import { CustomItemSerializeComponent } from './core/spread/custom-item-serialize/custom-item-serialize.component';
import { InitializeSheetComponent } from './core/sheet/initialize-sheet/initialize-sheet.component';
import { SheetAppearanceComponent } from './core/sheet/sheet-appearance/sheet-appearance.component';
import { SheetheaderComponent } from './core/sheet/sheetheader/sheetheader.component';
import { RowsAndColumnsComponent } from './core/sheet/rows-and-columns/rows-and-columns.component';
import { CellsComponent } from './core/sheet/cells/cells.component';
import { CellSpanComponent } from './core/sheet/cell-span/cell-span.component';
import { FrozenlineAndViewportComponent } from './core/sheet/frozenline-and-viewport/frozenline-and-viewport.component';
import { GetsetdataComponent } from './core/sheet/getsetdata/getsetdata.component';
import { FormulaComponent } from './core/sheet/formula/formula.component';
import { StyleComponent } from './core/sheet/style/style.component';
import { CellpaddingLabelsComponent } from './core/sheet/cellpadding-labels/cellpadding-labels.component';
import { SelectionComponent } from './core/sheet/selection/selection.component';
import { SheetActionsComponent } from './core/sheet/sheet-actions/sheet-actions.component';
import { ChangeValueByActionsComponent } from './core/sheet/change-value-by-actions/change-value-by-actions.component';
import { ProtectionComponent } from './core/sheet/protection/protection.component';
import { SheeteventsComponent } from './core/sheet/sheetevents/sheetevents.component';
import { SheetpaintComponent } from './core/sheet/sheetpaint/sheetpaint.component';
import { DocumentthemeComponent } from './core/documenttheme/documenttheme/documenttheme.component';
import { SpreadthemeComponent } from './core/theme/spreadtheme/spreadtheme.component';
import { ExternalthemeComponent } from './core/theme/externaltheme/externaltheme.component';





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
    SpreadfromJSONToJSONComponent,
    DataSourceSerializeComponent,
    CustomItemSerializeComponent,
    InitializeSheetComponent,
    SheetAppearanceComponent,
    SheetheaderComponent,
    RowsAndColumnsComponent,
    CellsComponent,
    CellSpanComponent,
    FrozenlineAndViewportComponent,
    GetsetdataComponent,
    FormulaComponent,
    StyleComponent,
    CellpaddingLabelsComponent,
    SelectionComponent,
    SheetActionsComponent,
    ChangeValueByActionsComponent,
    ProtectionComponent,
    SheeteventsComponent,
    SheetpaintComponent,
    DocumentthemeComponent,
    SpreadthemeComponent,
    ExternalthemeComponent,
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
