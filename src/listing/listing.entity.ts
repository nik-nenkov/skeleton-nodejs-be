import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/orm/user.entity';

@Entity()
export class Listing {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column()
  price?: number;

  @ManyToOne(() => User, user => user.listings, { eager: true })
  user!: User;

constructor(partial?: Partial<Listing>) {
    Object.assign(this, partial);
  }
}
