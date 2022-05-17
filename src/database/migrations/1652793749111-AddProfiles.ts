import { MigrationInterface, QueryRunner } from "typeorm";
import { Profile } from "../../entities/Profile";

export class AddProfiles1652793749111 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {    
		const ProfileRepo = queryRunner.connection.getRepository(Profile);

		await ProfileRepo.insert([
			{
				id: '465748ec-c266-43aa-9188-e67515ce1f2d',
				description: 'Administrator',
        translate: 'Administrador',
			},
			{
				id: 'e7ffd012-82b4-45e6-994d-fdce0b39c795',
				description: 'Data Protection', // DPO - Data Protection Officer, encarregado de proteção de dados
        translate: 'Proteção de dados',
			},
			{
				id: '6069b3e1-b55a-4e1a-a219-fe4952317089',
				description: 'Client',
        translate: 'Cliente',
			}
		])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
