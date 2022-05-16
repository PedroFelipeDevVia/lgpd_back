import {
  Column,
  CreateDateColumn, Entity,
  PrimaryColumn, UpdateDateColumn
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("profiles")
class Profile {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  description: string;

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

export { Profile };

