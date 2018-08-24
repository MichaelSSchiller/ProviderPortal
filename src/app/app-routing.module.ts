import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderdummyComponent } from './headerdummy/headerdummy.component';
import { MainComponent} from './main/main.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',  
    component: MainComponent
  },
  {
    path: 'main',  
    component: MainComponent
  },
  {
    path: 'headerdummy',  
    component: HeaderdummyComponent
  },
  {
    path: 'signup/:fn',  
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
