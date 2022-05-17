import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AlterUserAddProfile1652813764099 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "profile_id",
        type: "uuid"
      })
    );
    await queryRunner.createForeignKey(
      "users", 
      new TableForeignKey({
        name: "FKProfileUser",
        referencedTableName: "profiles",
        referencedColumnNames: ["id"],
        columnNames: ["profile_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "profile_id");
  }
}
