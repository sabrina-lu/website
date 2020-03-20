import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { HomeComponent } from './components/home/home.component';
import { NarrationComponent } from './components/narration/narration.component';
import { CharactersComponent } from './components/characters/characters.component';
import { GetCharactersService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InstructionsComponent,
    HomeComponent,
    NarrationComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [GetCharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
