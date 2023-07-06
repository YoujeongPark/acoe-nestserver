import { PrimaryGeneratedColumn, Column, PrimaryColumn, Entity } from 'typeorm';

@Entity()
export class CafeEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cafeNm: string;

  @Column()
  roadAddr: string;

  @Column()
  appOrderYn: string;

  @Column()
  kioskYn: string;

  @Column()
  discountAmt: number;

//   @Column({ default: true })
//   isActive: boolean;
}