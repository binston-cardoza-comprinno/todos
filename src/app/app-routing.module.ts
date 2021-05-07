import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TododetailComponent } from './tododetail/tododetail.component'

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch:'full' },
  { path: 'todo', component: AppComponent },
  { path: 'todo/:id', component: TododetailComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
