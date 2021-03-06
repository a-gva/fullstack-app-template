import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  maritalStatus: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  plan: string;

  @Column()
  password: string;
}
