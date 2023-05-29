import { Module } from '@nestjs/common';
import { RecipesModule } from './recipes/recipes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient, Recipe } from './recipes/entity/recipe.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'recipes',
      entities: [Recipe, Ingredient],
      synchronize: true,
    }),
    RecipesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
