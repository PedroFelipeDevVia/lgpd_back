import {
  Column,
  CreateDateColumn, Entity, JoinColumn,
  ManyToOne, PrimaryColumn, UpdateDateColumn
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Log } from "./Log";

@Entity("log_details")
class LogDetail {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  field: string;

  @Column()
  new_value: string;

  @Column()
  old_value: string;

  @Column()
  log_id: string;

  @JoinColumn({ name: "log_id" })
  @ManyToOne(() => Log)
  log: Log;

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

export { LogDetail };

