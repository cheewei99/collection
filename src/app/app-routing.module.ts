import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { MarkIComponent } from './mark-i/mark-i.component';
import { MarkIIComponent } from './mark-ii/mark-ii.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "login" , component: LoginComponent },
  { path: "movie", component: MovieComponent },
  { path: "home", component: HomeComponent},
  { path: "marki", component: MarkIComponent},
  { path: "markii", component: MarkIIComponent},
  { path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



