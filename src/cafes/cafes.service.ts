import { Injectable } from '@nestjs/common';
import { CreateCafeDto } from './dto/create-cafe.dto';
import { UpdateCafeDto } from './dto/update-cafe.dto';
import { Repository } from 'typeorm/index';
import { CafeEntity } from './entities/cafe.entity'
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CafesService {
  constructor(
    @InjectRepository(CafeEntity) private cafeRepository: Repository<CafeEntity>) {
      this.cafeRepository = cafeRepository;
    }

  create(createCafeDto: CreateCafeDto) {
    return 'This action adds a new cafe';
  }

  findAll(): Promise<CafeEntity[]>{
    return this.cafeRepository.find();
  }

  // findOne(): Promise<CafeEntity>{
  //   return this.cafeRepository.findOne({ id : id });
  // }

  update(id: number, updateCafeDto: UpdateCafeDto) {
    return `This action updates a #${id} cafe`;
  }

  remove(id: number) {
    return `This action removes a #${id} cafe`;
  }
}
