import { Test, TestingModule } from '@nestjs/testing';
import { KprController } from './kpr.controller';
import { KprService } from './kpr.service';

describe('KprController', () => {
  let controller: KprController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KprController],
      providers: [KprService],
    }).compile();

    controller = module.get<KprController>(KprController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
