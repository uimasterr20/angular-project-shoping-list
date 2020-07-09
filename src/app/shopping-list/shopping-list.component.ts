import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { from } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient [] = [
  new Ingredient ('apple', 5),
  new Ingredient ('broccoli', 15),
  new Ingredient ('corn', 65),
  new Ingredient ('cucumber', 55),
  new Ingredient ('lettuce', 50),
  new Ingredient ('pumpkin', 15),
  new Ingredient ('tomato', 10)
];
  constructor() { }

  ngOnInit(): void {
  }

}
