import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RajanService } from './rajan.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SperoService } from './spero.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [RajanService, SperoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
