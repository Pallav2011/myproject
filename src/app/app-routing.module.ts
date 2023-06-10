import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { LoginComponent } from './login/login.component';
import { SubjectexpampleComponent } from './subjectexpample/subjectexpample.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { AuthGuard } from './auth.guard';
import { FirebasedataComponent } from './firebasedata/firebasedata.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes=[
  { path:'', redirectTo:'home',pathMatch:'full' },
  { path:'home',component:SubjectexpampleComponent },
  { path:'comp1',component:Comp1Component },
  { path:'comp2',component:Comp2Component },
  { path:'comp3',component:Comp3Component },
  { path:'comp4',component:Comp4Component },
  { path:'login',component:LoginComponent },
  { path:'users',component:UserdetailsComponent },
  { path:'firebase',component:FirebasedataComponent },
  { path:'parent', component:ParentComponent},
  { path:'child', component:ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
