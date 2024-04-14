import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { RepoService } from './repo.service';
import { Repository } from 'typeorm';

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
      providers: [RepoService<T>, Repository<T>],
      exports: [feature],
    };

    return module;
  }
}
