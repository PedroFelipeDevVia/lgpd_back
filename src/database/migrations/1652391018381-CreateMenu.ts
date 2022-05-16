import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMenu1652391018381 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {    
    await queryRunner.createTable(
      new Table({
        name: "menus",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "description",
            type: "varchar",
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("menus");

  }

}
