
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
    SheetLevelBindingComponent,
    CellLevelBindingComponent,
    TableBindingComponent,
    BasictableComponent,
    CustomtableComponent,
    TablestyleComponent,
    BasicSparklineComponent,
    CustomSparklineComponent,
    SparklineComponent,
    CascadeSparklineComponent,
    ClientSideExcelIOComponent,
    BoxplotSparklineComponent,
    BulltetSparklineComponent,
    HbarVbarComponent,
    ParetoSparklineComponent,
    PieSparklineComponent,
    AreaSparklineComponent,
    ScatterComponent,
    SpreadSparklineComponent,
    StackedSparklineComponent,
    VariSaprkineComponent,
    CompatibleComponent,
    CustomeSparklineexComponent,
    MonthSparklineComponent,
    YearComponent,
    BasicFloatingObjectComponent,
    CustomFloatingObjectComponent,
    PictureComponent,
    FixedPositionComponent,
    FloatingObjectActionsComponent,
    FloatingObjectEventsComponent,
    BasicCommnetComponent,
    CustomCommentComponent,
    CommentActionsComponent,
    CommentEventsComponent,
    LocalizationComponent,
    GlobalizationComponent,
    BasicGroupComponent,
    CustomGroupComponent,
    BasicUsageComponent,
    ActionSupportComponent,
    SearchTagComponent,
    SlicerIntroductionComponent,
    SlicerSettingComponent,
    GeneralSlicerDataComponent,
    TableSlicerDataComponent,
    ItemSlicerComponent,
    ChartSlicerUseCaseComponent,
    TreeSlicerUseCaseComponent,
    AggregationSlicerUseCaseComponent,
    StudentSlicerUseCaseComponent,
    AmazonSlicerUseCaseComponent,
    NavigationActionsComponent,
    DirtyItemsComponent,
    CopyPasteExcelStypeComponent,
    PasteExtendRangeComponent,
    CopyPasteEngancementComponent,
    BasicSearchComponent,
    BasicCelltypeComponent,
    ButtonCelltypeComponent,
    CheckboxCelltypeComponent,
    ComboboxCelltypeComponent,
    HyperlinkCelltypeComponent,
    CustomCelltypeComponent,
    CustomheaderCelltypeComponent,
    BasicFormulaTextboxComponent,
    RangeSelectComponent,
    BasicComponent,
    ConditionalRulesComponent,
    BasicDataValidatorComponent,
    CustomDataValidatorsComponent,
    BasicFillComponent,
    CustomFillComponent,
    BasicFormatterComponent,
    CustomFormatterComponent,
    BasicFilterComponent,
    FilterButtonVisibleComponent,
    FilterActionComponent,
    CustomFiltersComponent,
    BasicTouchComponent,
    TouchToolStripComponent,
    BasicPrintComponent,
    CustomPrintComponent,
    
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
