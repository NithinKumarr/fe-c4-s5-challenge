import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { LoginComponent } from './login/login.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: "home",
    component: NoteViewComponent
  },
  {
    path: "home/:id",
    component: NoteDetailComponent,
    canActivate:[AuthGuard],
    canDeactivate:[CanDeactivateGuard]
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  searchText:string="";
 }
