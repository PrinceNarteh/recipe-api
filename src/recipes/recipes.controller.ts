import { Controller, Get } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './entity/recipe.entity';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipeService: RecipesService) {}

  @Get()
  async getRecipes(): Promise<Recipe[]> {
    return this.recipeService.getRecipes();
  }
}
