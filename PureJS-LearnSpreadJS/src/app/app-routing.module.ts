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
import { WhatComponent } from './use-cases/templates/what/what.component';
import { RealEstateInvestmentAnalysisComponent } from './use-cases/templates/real-estate-investment-analysis/real-estate-investment-analysis.component';
import { ExpenseBudgetComponent } from './use-cases/samples/expense-budget/expense-budget.component';
import { CookBookComponent } from './use-cases/samples/cook-book/cook-book.component';
import { TaxFormComponent } from './use-cases/samples/1040-tax-form/1040-tax-form.component';
import { StudentCalendarComponent } from './use-cases/samples/student-calendar/student-calendar.component';
import { CostOfGoodsSoldComponent } from './use-cases/samples/cost-of-goods-sold/cost-of-goods-sold.component'
import { EVAExampleComponent } from './use-cases/templates/eva-example/eva-example.component'
import { BasicfunctionsComponent } from './calc/basicfunctions/basicfunctions.component'
import { IndirectFunctionComponent } from './calc/indirect-function/indirect-function.component'
import { Excel2010functionComponent } from './calc/excel2010function/excel2010function.component'
import { FunctionWildcardsComponent } from './calc/function-wildcards/function-wildcards.component'
import { CustomFunctionsComponent } from './calc/custom-functions/custom-functions.component'
import { AsyncFunctionComponent } from './calc/async-function/async-function.component'
import { ArrayFormulaIntroductionComponent } from './calc/array-formula-introduction/array-formula-introduction.component'
import { ArrayFormulaUsageComponent } from './calc/array-formula-usage/array-formula-usage.component'
import { SheetLevelBindingComponent } from './data/sheet-level-binding/sheet-level-binding.component'
import { CellLevelBindingComponent } from './data/cell-level-binding/cell-level-binding.component'
import { TableBindingComponent } from './data/table-binding/table-binding.component'
import { BasictableComponent } from './data/basictable/basictable.component'
import { CustomtableComponent } from './data/customtable/customtable.component'
import { TablestyleComponent } from './data/tablestyle/tablestyle.component'
import { BasicSparklineComponent } from './data/basic-sparkline/basic-sparkline.component'
import { CustomSparklineComponent } from './data/custom-sparkline/custom-sparkline.component'
import { SparklineComponent } from './data/sparkline/sparkline.component'
import { CascadeSparklineComponent } from './data/cascade-sparkline/cascade-sparkline.component'

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
    { path: 'RealEstateInvestmentAnalysisComponent', component: RealEstateInvestmentAnalysisComponent },
    { path: 'ExpenseBudgetComponent', component: ExpenseBudgetComponent },
    { path: 'CookBookComponent', component: CookBookComponent },
    { path: 'TaxFormComponent', component: TaxFormComponent },
    { path: 'StudentCalendarComponent', component: StudentCalendarComponent },
    { path: 'CostOfGoodsSoldComponent', component: CostOfGoodsSoldComponent },
    { path: 'EVAExampleComponent', component: EVAExampleComponent },
    { path: 'BasicfunctionsComponent', component: BasicfunctionsComponent },
    { path: 'IndirectFunctionComponent', component: IndirectFunctionComponent },
    { path: 'Excel2010functionComponent', component: Excel2010functionComponent },
    { path: 'FunctionWildcardsComponent', component: FunctionWildcardsComponent },
    { path: 'CustomFunctionsComponent', component: CustomFunctionsComponent },
    { path: 'AsyncFunctionComponent', component: AsyncFunctionComponent },
    { path: 'ArrayFormulaIntroductionComponent', component: ArrayFormulaIntroductionComponent },
    { path: 'ArrayFormulaUsageComponent', component: ArrayFormulaUsageComponent },
    { path: 'SheetLevelBindingComponent', component: SheetLevelBindingComponent },
    { path: 'CellLevelBindingComponent', component: CellLevelBindingComponent },
    { path: 'TableBindingComponent', component: TableBindingComponent },
    { path: 'BasictableComponent', component: BasictableComponent },
    { path: 'CustomtableComponent', component: CustomtableComponent },
    { path: 'TablestyleComponent', component: TablestyleComponent },
    { path: 'BasicSparklineComponent', component: BasicSparklineComponent },
    { path: 'CustomSparklineComponent', component: CustomSparklineComponent },
    { path: 'SparklineComponent', component: SparklineComponent },
    { path: 'CascadeSparklineComponent', component: CascadeSparklineComponent },
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