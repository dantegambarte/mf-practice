import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  { path: '**', component: EmptyRouteComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
