import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
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

  @Get(':recipeId')
  async getRecipe(@Param('recipeId', ParseUUIDPipe) recipeId: string) {
    return this.recipeService.getRecipe(recipeId);
  }

  @Post()
  async createRecipe(@Body() recipeDto: RecipeDto) {
    return this.recipeService.createRecipe(recipeDto);
  }
}
