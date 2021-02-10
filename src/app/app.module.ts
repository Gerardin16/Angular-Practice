
import { AuthorsService } from './authors.service';
import { CoursesService } from './course.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { AuthorsComponent } from './authors/authors.component';
import { TitleCaseComponent } from './titlecase/titlecase.component';
import { HomeComponent } from './home/home.component';
import { TitlePipe } from './titlecase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    TitleCaseComponent,
    HomeComponent,
    TitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService,AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
