import { AuthorsService } from './../authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl:'./authors.component.html',
  styleUrls:['./authors.component.css']
  
})
export class AuthorsComponent  {

    isFavorite: Boolean;
    authorsList;

    constructor (authorService:AuthorsService){
        this.authorsList=authorService.getAuthors();

    }
    onClick(){
      this.isFavorite=!this.isFavorite;
    }
}
