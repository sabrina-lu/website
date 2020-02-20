import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, InstructionsComponent, NarrationComponent, CharactersComponent } from './components'


const routes: Routes = [
  { path: 'avalon', component: HomeComponent },
  { path: 'avalon/instructions', component: InstructionsComponent },
  { path: 'avalon/narration', component: NarrationComponent },
  { path: 'avalon/characters', component: CharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
