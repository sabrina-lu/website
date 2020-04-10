import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent, InstructionsComponent, HomeComponent, NarrationComponent, CharactersComponent, DescriptionsComponent } from './components'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InstructionsComponent,
    HomeComponent,
    NarrationComponent,
    CharactersComponent,
    DescriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
