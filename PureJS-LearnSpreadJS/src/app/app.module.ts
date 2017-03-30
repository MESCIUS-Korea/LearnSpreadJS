
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
import { WhatComponent } from './use-cases/templates/what/what.component';
import { RealEstateInvestmentAnalysisComponent } from './use-cases/templates/real-estate-investment-analysis/real-estate-investment-analysis.component';
import { ExpenseBudgetComponent } from './use-cases/samples/expense-budget/expense-budget.component';
import { CookBookComponent } from './use-cases/samples/cook-book/cook-book.component';
import { TaxFormComponent } from './use-cases/samples/1040-tax-form/1040-tax-form.component';
import { StudentCalendarComponent } from './use-cases/samples/student-calendar/student-calendar.component';
import { CostOfGoodsSoldComponent } from './use-cases/samples/cost-of-goods-sold/cost-of-goods-sold.component'
import { EVAExampleComponent } from './use-cases/templates/eva-example/eva-example.component';
import { BasicfunctionsComponent } from './calc/basicfunctions/basicfunctions.component';
import { IndirectFunctionComponent } from './calc/indirect-function/indirect-function.component';
import { Excel2010functionComponent } from './calc/excel2010function/excel2010function.component';
import { FunctionWildcardsComponent } from './calc/function-wildcards/function-wildcards.component';
import { CustomFunctionsComponent } from './calc/custom-functions/custom-functions.component';
import { AsyncFunctionComponent } from './calc/async-function/async-function.component';
import { ArrayFormulaIntroductionComponent } from './calc/array-formula-introduction/array-formula-introduction.component';
import { ArrayFormulaUsageComponent } from './calc/array-formula-usage/array-formula-usage.component'

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
    WhatComponent,
    RealEstateInvestmentAnalysisComponent,
    ExpenseBudgetComponent,
    CookBookComponent,
    TaxFormComponent, 
    CostOfGoodsSoldComponent, 
    StudentCalendarComponent,
    EVAExampleComponent,
    BasicfunctionsComponent,
    IndirectFunctionComponent,
    Excel2010functionComponent,
    FunctionWildcardsComponent,
    CustomFunctionsComponent,
    AsyncFunctionComponent,
    ArrayFormulaIntroductionComponent,
    ArrayFormulaUsageComponent,
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
