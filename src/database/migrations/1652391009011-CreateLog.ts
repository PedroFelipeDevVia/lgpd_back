import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLog1652391009011 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {			
		await queryRunner.createTable(
			new Table({
				name: "logs",
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
						name: "collection",
						type: "varchar",
					},
					{
						name: "id_register",
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
    await queryRunner.dropTable("logs");

	}

}
