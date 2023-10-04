import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { CountryRtl } from './conutry.entity';

@Entity()
export class OfficeRtl {
  @PrimaryColumn()
  name: string;

  @Column()
  city: string;

  @ManyToOne(() => CountryRtl, (country) => country.offices)
  country: CountryRtl;

  @Column('double precision')
  latitude: number;
  @Column('double precision')
  longitude: number;
  constructor(data?: Partial<OfficeRtl>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
