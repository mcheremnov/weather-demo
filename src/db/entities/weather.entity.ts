import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WeatherEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  latitude: number;

  @Column({ nullable: false })
  longitude: number;

  @Column({ type: 'json', nullable: false })
  data: Record<string, unknown>;
}
