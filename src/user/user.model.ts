import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Url } from '../url/url.model';


@Table({
  tableName: 'user',
  timestamps: true,
})
export class User extends Model {
  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

  @HasMany(() => Url)
  urls: Url[];
}
