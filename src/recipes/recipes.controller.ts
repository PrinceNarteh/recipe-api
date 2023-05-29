import { Controller, Get, Post, Body } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './entity/recipe.entity';
import { RecipeDto } from './dto/recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipeService: RecipesService) {}

  @Get()
  async getRecipes(): Promise<Recipe[]> {
    return this.recipeService.getRecipes();
  }

  @Post()
  async createRecipe(@Body() recipeDto: RecipeDto) {
    return this.recipeService.createRecipe(recipeDto);
  }
}
