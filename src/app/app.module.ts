import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ChartsModule } from 'ng2-charts';
import { ChartjsDemoComponent } from './chartjs-demo/chartjs-demo.component';
import { BarchartComponent } from './chartjs-demo/barchart/barchart.component';
import { LinechartComponent } from './chartjs-demo/linechart/linechart.component';
import { PiechartComponent } from './chartjs-demo/piechart/piechart.component';
import { RadarchartComponent } from './chartjs-demo/radarchart/radarchart.component';
import { DoughnutchartComponent } from './chartjs-demo/doughnutchart/doughnutchart.component';
import { PolarareachartComponent } from './chartjs-demo/polarareachart/polarareachart.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        ChartjsDemoComponent,
        BarchartComponent,
        LinechartComponent,
        PiechartComponent,
        RadarchartComponent,
        DoughnutchartComponent,
        PolarareachartComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING,
        ChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
