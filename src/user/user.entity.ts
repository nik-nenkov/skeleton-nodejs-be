import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Listing } from '../listing/listing.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true }) // Make email unique
  email!: string;


  @Column({ nullable: true }) // Age is optional
  age?: number;

  @Column({ nullable: true }) // Phone is optional
  phone?: string;

  @Column({ default: true }) // Active status with default value
  isActive: boolean = true;

  @OneToMany(() => Listing, (listing: Listing) => listing.user)
  listings?: Listing[];

  constructor(partial?: Partial<User>) {
    Object.assign(this, partial);
  }
}