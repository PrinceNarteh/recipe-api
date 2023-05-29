import { Type } from 'class-transformer';
import { IsString, IsInt, IsEnum, ValidateNested } from 'class-validator';

export enum Unit {
  MILLILITERS = 'milliliters',
  LITERS = 'liters',
  GRAMS = 'grams',
  KILOGRAMS = 'kilograms',
  SPOONS = 'spoons',
  CUPS = 'cups',
  PIECES = 'pieces',
}

export class IngredientDto {
  @IsString()
  name: string;

  @IsEnum(Unit)
  unit: Unit;

  @IsInt()
  quantity: number;
}

export class RecipeDto {
  @IsString()
  name: string;

  @ValidateNested({ each: true })
  @Type(() => IngredientDto)
  ingredients: IngredientDto[];
}
