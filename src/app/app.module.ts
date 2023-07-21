import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SubjectexpampleComponent } from './subjectexpample/subjectexpample.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FirebasedataComponent } from './firebasedata/firebasedata.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { InitialsPipePipe } from './initials-pipe.pipe';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UnsavedchangesGuard } from './unsavedchanges.guard';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdetailsComponent,
    SubjectexpampleComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    FirebasedataComponent,
    ParentComponent,
    ChildComponent,
    InitialsPipePipe,
    PagenotfoundComponent,
    ReactiveformComponent,
    DemoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [UnsavedchangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
