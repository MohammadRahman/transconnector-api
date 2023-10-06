import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryColumn()
  country: string;
  @Column()
  timezone: string;
  constructor(data?: Partial<Country>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
