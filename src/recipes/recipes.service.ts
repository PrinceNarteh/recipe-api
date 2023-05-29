import { Injectable } from '@nestjs/common';
import { Recipe } from './entity/recipe.entity';
import { RecipeDto } from './dto/recipe.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class RecipesService {
  private _recipes: Recipe[] = [];

  async getRecipes(): Promise<Recipe[]> {
    return this._recipes;
  }

  async createRecipe(recipeDto: RecipeDto): Promise<Recipe> {
    const recipeEntity = {
      id: uuid(),
      ...recipeDto,
    };
    this._recipes.push(recipeEntity);
    return recipeEntity;
  }
}
