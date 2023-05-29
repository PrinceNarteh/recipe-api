import { Module } from '@nestjs/common';
import { RecipesModule } from './recipes/recipes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient, Recipe } from './recipes/entity/recipe.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {validate} from "./config/env.validation"

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        synchronize: configService.get<boolean>('DB_SYNCHRONIZE'),
        entities: [Recipe, Ingredient],
      }),
    }),
    RecipesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
