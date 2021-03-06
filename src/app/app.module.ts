import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './other/another.component';
import { DatabindingComponent } from './other/databinding/databinding.component';
import { EventBindingComponent } from './other/databinding/event-binding.component';
import { TwowaybindingComponent } from './other/databinding/twowaybinding.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DatabindingTestComponent } from './other/databinding-test/databinding-test.component';
import { DirectivesComponent } from './other/directives/directives.component';
import { DirectivesHwComponent } from './other/directives/directives-hw/directives-hw.component';


@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    DatabindingComponent,
    EventBindingComponent,
    TwowaybindingComponent,
    LifecycleComponent,
    DatabindingTestComponent,
    DirectivesComponent,
    DirectivesHwComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
