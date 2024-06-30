import { Routes } from '@angular/router';
import {GlucoseListComponent} from "./glucose-list/glucose-list.component";
import {GlucoseFormComponent} from "./glucose-form/glucose-form.component";
import {GlucoseEditComponent} from "./glucose-edit/glucose-edit.component";

export const routes: Routes = [

  { path: 'glucose', component: GlucoseListComponent },
  { path: 'addGlucose', component: GlucoseFormComponent },
  { path: 'update-glucose/:id', component: GlucoseEditComponent },
  { path:'deleteGlucose' ,component: GlucoseListComponent},

{ path: '', redirectTo: '/addGlucose', pathMatch: 'full' }
];
