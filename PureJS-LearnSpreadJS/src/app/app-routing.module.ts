import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


import { OverviewComponent } from "./overview/overview.component";
import { InstallationComponent } from "./installation/installation.component";
import { RequirementsComponent } from "./requirements/requirements.component";
import { LicensingComponent } from "./licensing/licensing.component";
import { InitializeComponent } from "./core/initialize/initialize.component";
import { SpreadsheetComponent } from './core/spread/spreadsheet/spreadsheet.component';
import { TabStripComponent } from './core/spread/tab-strip/tab-strip.component';
import { ScrollBarComponent } from './core/Spread/scroll-bar/scroll-bar.component';
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
import { WhatComponent } from './use cases/templates/what/what.component';

const APP_ROUTES:Routes = [
    { path: '', component: OverviewComponent },  
    { path: 'main', component: OverviewComponent },  
    { path: 'installation', component: InstallationComponent },      
    { path: 'requirements', component: RequirementsComponent },
    { path: 'licensing', component: LicensingComponent },              
    { path: 'initialize', component: InitializeComponent },
    { path: 'spreadsheet', component: SpreadsheetComponent },    
    { path: 'tabstrip', component: TabStripComponent },
    { path: 'ScrollBar', component: ScrollBarComponent },
    { path: 'spreadbackground', component: SpreadBackgroundComponent },    
    { path: 'spreadpaint', component: SpreadpaintComponent },
    { path: 'spreadevents', component: SpreadeventsComponent },
    { path: 'SpreadfromJSONToJSONComponent', component: SpreadfromJSONToJSONComponent },
    { path: 'DataSourceSerializeComponent', component: DataSourceSerializeComponent },
    { path: 'CustomItemSerializeComponent', component: CustomItemSerializeComponent },
    { path: 'InitializeSheetComponent', component: InitializeSheetComponent },
    { path: 'SheetAppearanceComponent', component: SheetAppearanceComponent },
    { path: 'SheetheaderComponent', component: SheetheaderComponent },
    { path: 'RowsAndColumnsComponent', component: RowsAndColumnsComponent },
    { path: 'CellsComponent', component: CellsComponent },
    { path: 'CellSpanComponent', component: CellSpanComponent },
    { path: 'FrozenlineAndViewportComponent', component: FrozenlineAndViewportComponent },
    { path: 'GetsetdataComponent', component: GetsetdataComponent },
    { path: 'FormulaComponent', component: FormulaComponent },
    { path: 'StyleComponent', component: StyleComponent },
    { path: 'CellpaddingLabelsComponent', component: CellpaddingLabelsComponent },
    { path: 'SelectionComponent', component: SelectionComponent },
    { path: 'SheetActionsComponent', component: SheetActionsComponent },
    { path: 'ChangeValueByActionsComponent', component: ChangeValueByActionsComponent },
    { path: 'ProtectionComponent', component: ProtectionComponent },
    { path: 'SheeteventsComponent', component: SheeteventsComponent },
    { path: 'SheetpaintComponent', component: SheetpaintComponent },
    { path: 'DocumentthemeComponent', component: DocumentthemeComponent },
    { path: 'SpreadthemeComponent', component: SpreadthemeComponent },
    { path: 'ExternalthemeComponent', component: ExternalthemeComponent },
    { path: 'WhatComponent', component: WhatComponent },
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