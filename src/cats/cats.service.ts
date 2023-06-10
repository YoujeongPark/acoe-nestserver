import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities/cat.entity'
import { getConnection } from "typeorm";

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) { }

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: any): Promise<Cat> {
    return this.catsRepository.findOne(id);
  }

  async create(cat: Cat): Promise<void> {
    await this.catsRepository.save(cat);
  }

  async remove(id: number): Promise<void> {
    await this.catsRepository.delete(id);
  }

  async update(id: any, cat: Cat): Promise<void> {
    const existCat = await this.catsRepository.findOne(id);
    if (existCat) {
      await getConnection()
        .createQueryBuilder()
        .update(Cat)
        .set({
          name: cat.name,
          age: cat.age,
          breed: cat.breed
        })
        .where("id = :id", { id })
        .execute();
    }
  }
}