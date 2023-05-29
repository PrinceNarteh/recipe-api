import { Unit } from '../dto/recipe.dto';

export class Ingredient {
  name: string;
  unit: Unit;
  quantity: number;
}

export class Recipe {
  id: string;
  description: string;
  ingredients: Ingredient[];
}
