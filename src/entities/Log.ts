import {
  Column,
  CreateDateColumn, Entity,
  PrimaryColumn, UpdateDateColumn
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("logs")
class Log {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  description: string;

  @Column()
  collection: string;

  @Column()
  id_register: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Log };

