import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true, nullable: false })
  public firstName: string;

  @Column({ unique: true, nullable: false })
  public lastName: string;
}

export default User;
