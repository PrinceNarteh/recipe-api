import { Type } from 'class-transformer';
import {
  IsString,
  IsPositive,
  IsEnum,
  ValidateNested,
  IsArray,
} from 'class-validator';

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

  @IsPositive({
    message: 'Quantity must be a number',
  })
  quantity: number;
}

export class RecipeDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray({
    message: 'Ingredients is required',
  })
  @ValidateNested({ each: true })
  @Type(() => IngredientDto)
  ingredients: IngredientDto[];
}
