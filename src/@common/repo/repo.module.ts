import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

@Module({})
export class RepoModule {
  static forFeature<T extends EntityClassOrSchema>(entity: T): DynamicModule {
    return RepoModule.forFeatures(entity)
  }

  static forFeatures<T extends EntityClassOrSchema>(...entities: T[]): DynamicModule {
    const feature = TypeOrmModule.forFeature([...entities]);

    const module: DynamicModule = {
      module: RepoModule,
      imports: [feature],
      exports: [feature],
    };

    return module;
  }
}
