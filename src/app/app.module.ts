
import { AuthorsService } from './authors.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SummaryComponent } from './summary/summary.component';
import { LinksComponent } from './links/links.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';
import { OutfooterComponent } from './outfooter/outfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    SummaryComponent,
    LinksComponent,
    MainfooterComponent,
 
    OutfooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
