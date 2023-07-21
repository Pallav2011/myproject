import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { LoginComponent } from './login/login.component';
import { SubjectexpampleComponent } from './subjectexpample/subjectexpample.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { FirebasedataComponent } from './firebasedata/firebasedata.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UnsavedchangesGuard } from './unsavedchanges.guard';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes=[
  { path:'', redirectTo:'home',pathMatch:'full' },
  { path:'home',component:SubjectexpampleComponent },
  { path:'comp1',component:Comp1Component },
  { path:'comp2',component:Comp2Component },
  { path:'comp3',component:Comp3Component },
  { path:'comp4',component:Comp4Component },
  { path:'login',component:LoginComponent },
  { path:'users',component:UserdetailsComponent },
  { path:'firebase',component:FirebasedataComponent},
  { path:'parent', component:ParentComponent},
  { path:'child', component:ChildComponent},
  { path:'reactive', component:ReactiveformComponent, canDeactivate:[UnsavedchangesGuard] },
  { path:'demo',component:DemoComponent},
  {  path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
