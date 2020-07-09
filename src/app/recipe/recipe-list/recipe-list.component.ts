import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';
// import { from } from 'rxjs';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe ('test', 'testtest', 'https://dummyimage.com/16:9x1080'),
  new Recipe ('test', 'testtest', 'https://dummyimage.com/16:9x1080'),
  new Recipe ('test', 'testtest', 'https://dummyimage.com/16:9x1080'),
  new Recipe ('test', 'testtest', 'https://dummyimage.com/16:9x1080'),
  new Recipe ('test', 'testtest', 'https://dummyimage.com/16:9x1080'),
  new Recipe ('test', 'testtest', 'https://dummyimage.com/16:9x1080'),
  new Recipe ('test', 'testtest', 'https://dummyimage.com/16:9x1080'),
  new Recipe ('test', 'testtest', 'https://dummyimage.com/16:9x1080'),
  new Recipe ('test', 'testtest', 'https://dummyimage.com/16:9x1080'),
  new Recipe ('test', 'testtest', 'https://dummyimage.com/16:9x1080'),
  new Recipe ('test', 'testtest', 'https://dummyimage.com/16:9x1080'),
  new Recipe ('test', 'testtest', 'https://dummyimage.com/16:9x1080'),
  new Recipe ('test', 'testtest', 'https://dummyimage.com/16:9x1080')
];
constructor() { }

ngOnInit(): void {
}

}
