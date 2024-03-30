import { Test, TestingModule } from '@nestjs/testing';
import { KprService } from './kpr.service';

describe('KprService', () => {
  let service: KprService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KprService],
    }).compile();

    service = module.get<KprService>(KprService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
