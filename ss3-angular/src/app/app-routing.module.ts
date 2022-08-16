import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NabarComponent} from "./practice1/hackernews/nabar/nabar.component";


const routes: Routes = [{
  path:'',component:NabarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
