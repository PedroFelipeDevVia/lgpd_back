import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLogDetail1652391429191 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "log_details",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "field",
              type: "varchar",
            },
            {
              name: "new_value",
              type: "varchar",
            },
            {
              name: "old_value",
              type: "varchar",
            },
            {
              name: "log_id",
              type: "uuid",
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            },
            {
              name: "updated_at",
              type: "timestamp",
              default: "now()",
            },
          ],
          foreignKeys: [
            {
              name: "FKLogLogDetails",
              referencedTableName: "logs",
              referencedColumnNames: ["id"],
              columnNames: ["log_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL",
            },
          ],
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("log_details");
    }

}
