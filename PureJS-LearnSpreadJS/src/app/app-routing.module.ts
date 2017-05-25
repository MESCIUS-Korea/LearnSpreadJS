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
import { CostOfGoodsSoldComponent } from './use-cases/samples/cost-of-goods-sold/cost-of-goods-sold.component';
import { EVAExampleComponent } from './use-cases/templates/eva-example/eva-example.component';
import { BasicfunctionsComponent } from './calc/basicfunctions/basicfunctions.component';
import { IndirectFunctionComponent } from './calc/indirect-function/indirect-function.component';
import { Excel2010functionComponent } from './calc/excel2010function/excel2010function.component';
import { FunctionWildcardsComponent } from './calc/function-wildcards/function-wildcards.component';
import { CustomFunctionsComponent } from './calc/custom-functions/custom-functions.component';
import { AsyncFunctionComponent } from './calc/async-function/async-function.component';
import { ArrayFormulaIntroductionComponent } from './calc/array-formula-introduction/array-formula-introduction.component';
import { ArrayFormulaUsageComponent } from './calc/array-formula-usage/array-formula-usage.component';
import { SheetLevelBindingComponent } from './data/sheet-level-binding/sheet-level-binding.component';
import { CellLevelBindingComponent } from './data/cell-level-binding/cell-level-binding.component';
import { TableBindingComponent } from './data/table-binding/table-binding.component';
import { BasictableComponent } from './data/basictable/basictable.component';
import { CustomtableComponent } from './data/customtable/customtable.component';
import { TablestyleComponent } from './data/tablestyle/tablestyle.component';
import { BasicSparklineComponent } from './data/basic-sparkline/basic-sparkline.component';
import { CustomSparklineComponent } from './data/custom-sparkline/custom-sparkline.component';
import { SparklineComponent } from './data/sparkline/sparkline.component';
import { CascadeSparklineComponent } from './data/cascade-sparkline/cascade-sparkline.component';
import { ClientSideExcelIOComponent } from './Excel-IO/Client-Side-Excel-IO/client-side-excel-io/client-side-excel-io.component';
import { BoxplotSparklineComponent } from './data/boxplot-sparkline/boxplot-sparkline.component';
import { BulltetSparklineComponent } from './data/bulltet-sparkline/bulltet-sparkline.component';
import { HbarVbarComponent } from './data/hbar-vbar/hbar-vbar.component';
import { ParetoSparklineComponent } from './data/pareto-sparkline/pareto-sparkline.component';
import { PieSparklineComponent } from './data/pie-sparkline/pie-sparkline.component';
import { AreaSparklineComponent } from './data/area-sparkline/area-sparkline.component';
import { ScatterComponent } from './data/scatter/scatter.component';
import { SpreadSparklineComponent } from './data/spread-sparkline/spread-sparkline.component';
import { StackedSparklineComponent } from './data/stacked-sparkline/stacked-sparkline.component';
import { VariSaprkineComponent } from './data/vari-saprkine/vari-saprkine.component';
import { CompatibleComponent } from './data/compatible/compatible.component';
import { CustomeSparklineexComponent } from './data/custome-sparklineex/custome-sparklineex.component';
import { MonthSparklineComponent } from './data/month-sparkline/month-sparkline.component';
import { YearComponent } from './data/year/year.component';
import { BasicFloatingObjectComponent } from './data/basic-floating-object/basic-floating-object.component';
import { CustomFloatingObjectComponent } from './data/custom-floating-object/custom-floating-object.component';
import { PictureComponent } from './data/picture/picture.component';
import { FixedPositionComponent } from './data/fixed-position/fixed-position.component';
import { FloatingObjectActionsComponent } from './data/floating-object-actions/floating-object-actions.component';
import { FloatingObjectEventsComponent } from './data/floating-object-events/floating-object-events.component';
import { BasicCommnetComponent } from './data/basic-commnet/basic-commnet.component';
import { CustomCommentComponent } from './data/custom-comment/custom-comment.component';
import { CommentActionsComponent } from './data/comment-actions/comment-actions.component';
import { CommentEventsComponent } from './data/comment-events/comment-events.component';
import { LocalizationComponent } from './data/localization/localization.component';
import { GlobalizationComponent } from './data/globalization/globalization.component';
import { BasicGroupComponent } from './data/basic-group/basic-group.component';
import { CustomGroupComponent } from './data/custom-group/custom-group.component';
import { BasicUsageComponent } from './data/basic-usage/basic-usage.component';
import { ActionSupportComponent } from './data/action-support/action-support.component';
import { SearchTagComponent } from './data/search-tag/search-tag.component';
import { SlicerIntroductionComponent } from './behavior/slicer-introduction/slicer-introduction.component';
import { SlicerSettingComponent } from './behavior/slicer-setting/slicer-setting.component';
import { GeneralSlicerDataComponent } from './behavior/general-slicer-data/general-slicer-data.component';
import { TableSlicerDataComponent } from './behavior/table-slicer-data/table-slicer-data.component';
import { ItemSlicerComponent } from './behavior/item-slicer/item-slicer.component';
import { ChartSlicerUseCaseComponent } from './behavior/chart-slicer-use-case/chart-slicer-use-case.component';
import { TreeSlicerUseCaseComponent } from './behavior/tree-slicer-use-case/tree-slicer-use-case.component';
import { AggregationSlicerUseCaseComponent } from './behavior/aggregation-slicer-use-case/aggregation-slicer-use-case.component';
import { StudentSlicerUseCaseComponent } from './behavior/student-slicer-use-case/student-slicer-use-case.component';
import { AmazonSlicerUseCaseComponent } from './behavior/amazon-slicer-use-case/amazon-slicer-use-case.component';
import { NavigationActionsComponent } from './behavior/navigation-actions/navigation-actions.component';
import { DirtyItemsComponent } from './behavior/dirty-items/dirty-items.component';
import { CopyPasteExcelStypeComponent } from './behavior/copy-paste-excel-stype/copy-paste-excel-stype.component';
import { PasteExtendRangeComponent } from './behavior/paste-extend-range/paste-extend-range.component';
import { CopyPasteEngancementComponent } from './behavior/copy-paste-engancement/copy-paste-engancement.component';
import { BasicSearchComponent } from './behavior/basic-search/basic-search.component';
import { BasicCelltypeComponent } from './behavior/basic-celltype/basic-celltype.component';
import { ButtonCelltypeComponent } from './behavior/button-celltype/button-celltype.component';
import { CheckboxCelltypeComponent } from './behavior/checkbox-celltype/checkbox-celltype.component';
import { ComboboxCelltypeComponent } from './behavior/combobox-celltype/combobox-celltype.component';
import { HyperlinkCelltypeComponent } from './behavior/hyperlink-celltype/hyperlink-celltype.component';
import { CustomCelltypeComponent } from './behavior/custom-celltype/custom-celltype.component';
import { CustomheaderCelltypeComponent } from './behavior/customheader-celltype/customheader-celltype.component';
import { BasicFormulaTextboxComponent } from './behavior/basic-formula-textbox/basic-formula-textbox.component';
import { RangeSelectComponent } from './behavior/range-select/range-select.component';
import { BasicComponent } from './behavior/basic/basic.component';
import { ConditionalRulesComponent } from './behavior/conditional-rules/conditional-rules.component';
import { BasicDataValidatorComponent } from './behavior/basic-data-validator/basic-data-validator.component';
import { CustomDataValidatorsComponent } from './behavior/custom-data-validators/custom-data-validators.component';
import { BasicFillComponent } from './behavior/basic-fill/basic-fill.component';
import { CustomFillComponent } from './behavior/custom-fill/custom-fill.component';
import { BasicFormatterComponent } from './behavior/basic-formatter/basic-formatter.component';
import { CustomFormatterComponent } from './behavior/custom-formatter/custom-formatter.component';
import { BasicFilterComponent } from './behavior/basic-filter/basic-filter.component';
import { FilterButtonVisibleComponent } from './behavior/filter-button-visible/filter-button-visible.component';
import { FilterActionComponent } from './behavior/filter-action/filter-action.component';
import { CustomFiltersComponent } from './behavior/custom-filters/custom-filters.component';
import { BasicTouchComponent } from './behavior/basic-touch/basic-touch.component';
import { TouchToolStripComponent } from './behavior/touch-tool-strip/touch-tool-strip.component';
import { BasicPrintComponent } from './behavior/basic-print/basic-print.component';
import { CustomPrintComponent } from './behavior/custom-print/custom-print.component';


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
    { path: 'ClientSideExcelIOComponent', component: ClientSideExcelIOComponent },
    { path: 'BoxplotSparklineComponent', component: BoxplotSparklineComponent },
    { path: 'BulltetSparklineComponent', component: BulltetSparklineComponent },
    { path: 'HbarVbarComponent', component: HbarVbarComponent },
    { path: 'ParetoSparklineComponent', component: ParetoSparklineComponent},
    { path: 'PieSparklineComponent', component: PieSparklineComponent},
    { path: 'AreaSparklineComponent', component: AreaSparklineComponent},
    { path: 'ScatterComponent', component: ScatterComponent},
    { path: 'SpreadSparklineComponent', component: SpreadSparklineComponent},
    { path: 'StackedSparklineComponent', component: StackedSparklineComponent},
    { path: 'VariSaprkineComponent', component: VariSaprkineComponent},
    { path: 'CompatibleComponent', component: CompatibleComponent},
    { path: 'CustomeSparklineexComponent', component: CustomeSparklineexComponent},
    { path: 'MonthSparklineComponent', component: MonthSparklineComponent},
    { path: 'YearComponent', component: YearComponent},
    { path: 'BasicFloatingObjectComponent', component: BasicFloatingObjectComponent},
    { path: 'CustomFloatingObjectComponent', component: CustomFloatingObjectComponent},
    { path: 'PictureComponent', component: PictureComponent},
    { path: 'FixedPositionComponent', component: FixedPositionComponent},
    { path: 'FloatingObjectActionsComponent', component: FloatingObjectActionsComponent},
    { path: 'FloatingObjectEventsComponent', component: FloatingObjectEventsComponent},
    { path: 'BasicCommnetComponent', component: BasicCommnetComponent},
    { path: 'CustomCommentComponent', component: CustomCommentComponent},
    { path: 'CommentActionsComponent', component: CommentActionsComponent},
    { path: 'CommentEventsComponent', component: CommentEventsComponent},
    { path: 'LocalizationComponent', component: LocalizationComponent},
    { path: 'GlobalizationComponent', component: GlobalizationComponent},
    { path: 'BasicGroupComponent', component: BasicGroupComponent},
    { path: 'CustomGroupComponent', component: CustomGroupComponent},
    { path: 'BasicUsageComponent', component: BasicUsageComponent},
    { path: 'ActionSupportComponent', component: ActionSupportComponent},
    { path: 'SearchTagComponent', component: SearchTagComponent},
    { path: 'SlicerIntroductionComponent', component: SlicerIntroductionComponent},
    { path: 'SlicerSettingComponent', component: SlicerSettingComponent},
    { path: 'GeneralSlicerDataComponent', component: GeneralSlicerDataComponent},
    { path: 'TableSlicerDataComponent', component: TableSlicerDataComponent},
    { path: 'ItemSlicerComponent', component: ItemSlicerComponent},
    { path: 'ChartSlicerUseCaseComponent', component: ChartSlicerUseCaseComponent},
    { path: 'TreeSlicerUseCaseComponent', component: TreeSlicerUseCaseComponent},
    { path: 'AggregationSlicerUseCaseComponent', component: AggregationSlicerUseCaseComponent},
    { path: 'StudentSlicerUseCaseComponent', component: StudentSlicerUseCaseComponent},
    { path: 'AmazonSlicerUseCaseComponent', component: AmazonSlicerUseCaseComponent},
    { path: 'NavigationActionsComponent', component: NavigationActionsComponent},
    { path: 'DirtyItemsComponent', component: DirtyItemsComponent},
    { path: 'CopyPasteExcelStypeComponent', component: CopyPasteExcelStypeComponent},
    { path: 'PasteExtendRangeComponent', component: PasteExtendRangeComponent},
    { path: 'CopyPasteEngancementComponent', component: CopyPasteEngancementComponent},
    { path: 'BasicSearchComponent', component: BasicSearchComponent },
    { path: 'BasicCelltypeComponent', component: BasicCelltypeComponent},
    { path: 'ButtonCelltypeComponent', component: ButtonCelltypeComponent},
    { path: 'CheckboxCelltypeComponent', component: CheckboxCelltypeComponent},
    { path: 'ComboboxCelltypeComponent', component: ComboboxCelltypeComponent},
    { path: 'HyperlinkCelltypeComponent', component: HyperlinkCelltypeComponent},
    { path: 'CustomCelltypeComponent', component: CustomCelltypeComponent},
    { path: 'CustomheaderCelltypeComponent', component: CustomheaderCelltypeComponent},
    { path: 'BasicFormulaTextboxComponent', component: BasicFormulaTextboxComponent},
    { path: 'RangeSelectComponent', component: RangeSelectComponent},
    { path: 'BasicComponent', component: BasicComponent},
    { path: 'ConditionalRulesComponent', component: ConditionalRulesComponent},
    { path: 'BasicDataValidatorComponent', component: BasicDataValidatorComponent},
    { path: 'CustomDataValidatorsComponent', component: CustomDataValidatorsComponent},
    { path: 'BasicFillComponent', component: BasicFillComponent},
    { path: 'CustomFillComponent', component: CustomFillComponent},
    { path: 'BasicFormatterComponent', component: BasicFormatterComponent},
    { path: 'CustomFormatterComponent', component: CustomFormatterComponent},
    { path: 'BasicFilterComponent', component: BasicFilterComponent},
    { path: 'FilterButtonVisibleComponent', component: FilterButtonVisibleComponent},
    { path: 'FilterActionComponent', component: FilterActionComponent},
    { path: 'BasicTouchComponent', component: BasicTouchComponent},
    { path: 'TouchToolStripComponent', component: TouchToolStripComponent},
    { path: 'BasicPrintComponent', component: BasicPrintComponent},
    { path: 'CustomPrintComponent', component: CustomPrintComponent},
    { path: 'CustomFiltersComponent', component: CustomFiltersComponent},

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