import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CreateSongDto } from 'src/song/dto';
import { send } from 'process';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = await moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();
  });

  describe('songs', () => {
    it('should create song', () => {
      const dto = <CreateSongDto>{
        title: 'Machine Gun Funk',
        artists: ['The Notorius B.I.G.'],
        releaseDate: '1994-09-13' as any,
        duration: '04:15' as any,
      };

      return request(app.getHttpServer())
        .post('/songs')
        .send(dto)
        .set('Accept', 'application/json')
        .expect(201);
    });
  });
});
