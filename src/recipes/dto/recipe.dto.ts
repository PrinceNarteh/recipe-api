import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  Min,
  IsNumber,
  IsEnum,
  ValidateNested,
  IsArray,
  IsString,
  ArrayMinSize,
  MinLength,
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
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEnum(Unit)
  unit: Unit;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  quantity: number;
}

export class RecipeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  description: string;

  @IsArray({
    message: 'Ingredients is required',
  })
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => IngredientDto)
  ingredients: IngredientDto[];
}
