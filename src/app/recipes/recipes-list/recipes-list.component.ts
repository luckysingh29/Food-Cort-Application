import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a Test description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3WC8Qq-5vKEw_iDyI7pD_fPK3RU1IHQeDg&usqp=CAU'
    ),
    new Recipe(
      'Test Recipe',
      'This is a Test description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3WC8Qq-5vKEw_iDyI7pD_fPK3RU1IHQeDg&usqp=CAU'
    ),
    new Recipe(
      'Test Recipe',
      'This is a Test description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3WC8Qq-5vKEw_iDyI7pD_fPK3RU1IHQeDg&usqp=CAU'
    ),
    new Recipe(
      'Test Recipe',
      'This is a Test description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3WC8Qq-5vKEw_iDyI7pD_fPK3RU1IHQeDg&usqp=CAU'
    )
  ];
}
