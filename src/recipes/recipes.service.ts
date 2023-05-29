import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecipeDto } from './dto/recipe.dto';
import { Recipe } from './entity/recipe.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe) private readonly recipeRepo: Repository<Recipe>,
  ) {}

  async getRecipes(): Promise<Recipe[]> {
    return await this.recipeRepo.find();
  }

  async getRecipe(recipeId: string): Promise<Recipe> {
    const recipe = await this.recipeRepo.findOne({ where: { id: recipeId } });
    if (!recipe) {
      throw new NotFoundException('Recipe Not Found');
    }
    return recipe;
  }

  async createRecipe(recipeDto: RecipeDto): Promise<Recipe> {
    const recipe = this.recipeRepo.create(recipeDto);
    await this.recipeRepo.save(recipe);
    return recipe;
  }

  async deleteRecipe(recipeId: string): Promise<void> {
    await this.recipeRepo.delete({ id: recipeId });
  }
}
