import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { OfficeRtl } from './office.entity';

@Entity()
export class CountryRtl {
  @PrimaryColumn()
  country: string;
  @Column()
  timezone: string;
  @OneToMany(() => OfficeRtl, (office) => office.country)
  offices: OfficeRtl[];
  constructor(data?: Partial<CountryRtl>) {
    if (data) {
      Object.assign(this, data);
    }
  }
  // addOffice(office: OfficeRtl) {
  //   if (!this.offices) {
  //     this.offices = [];
  //   }
  //   this.offices.push(office);
  // }
}
