import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  constructor(partial?: Partial<User>) {
    Object.assign(this, partial);
  }
}