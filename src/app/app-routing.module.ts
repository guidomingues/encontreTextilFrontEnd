import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FillInComponent } from './fill-in/fill-in.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [

  {path:'', redirectTo: 'menu', pathMatch: 'full'},
  
  {path: 'sign-in', component: SignInComponent},
  {path:'menu', component: MenuComponent}, 
  {path:'rodape', component: RodapeComponent}, 
  {path: 'fill-in', component: FillInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
