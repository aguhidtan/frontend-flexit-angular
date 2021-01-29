import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceshipComponent } from './components/spaceship/spaceship.component';
import { TravelComponent } from './components/travel/travel.component';

const routes: Routes = [
  {path: 'spaceships', component: SpaceshipComponent},
  {path: 'travels', component: TravelComponent},
  {path: '**', redirectTo: 'spaceships', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
