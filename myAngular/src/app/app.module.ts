import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RajanService } from './rajan.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SperoService } from './spero.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RajanService, SperoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
