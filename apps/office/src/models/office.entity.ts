import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Office {
  @PrimaryColumn()
  name: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column('double precision')
  latitude: number;
  @Column('double precision')
  longitude: number;
  constructor(data?: Partial<Office>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
