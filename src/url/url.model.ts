import { Table, Column, Model, DataType, ForeignKey,BelongsTo } from 'sequelize-typescript';
import { User } from '../user/user.model';

@Table({
  tableName: 'url',
  timestamps: true,
})
export class Url extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  longUrl: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  shortUrl: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    allowNull: false,
  })
  clickCount: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  expiresAt: Date;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
