import { PrimaryGeneratedColumn } from 'typeorm'

export class AbstractEntity<T> {
  @PrimaryGeneratedColumn()
    public id: number

  constructor(entity: Partial<T>) {
      Object.assign(this, entity)
  }
}