import { Injectable } from '@nestjs/common';
import { Recipe } from './entity/recipe.entity';

@Injectable()
export class RecipesService {
  private _recipes: Recipe[] = [];

  async getRecipes(): Promise<Recipe[]> {
    return this._recipes;
  }
}
