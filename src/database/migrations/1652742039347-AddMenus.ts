import { MigrationInterface, QueryRunner } from "typeorm";
import { Menu } from "../../entities/Menu";

export class AddMenus1652742039347 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		const MenuRepo = queryRunner.connection.getRepository(Menu);

		await MenuRepo.insert([
			{
				id: 'b5afa9d8-2565-437e-b1a3-9d775e55b46f',
				description: 'Peril',
				icon: '',
				route: '/perfil'
			},
			{
				id: 'e87786c4-d89f-4464-a956-bbfd3b4fe728',
				description: 'Empresa',
				icon: '',
				route: '/empresa'
			},
			{
				id: 'd7d5d742-a3b1-48a4-8404-b07c7fb83e3a',
				description: 'Usuário',
				icon: '',
				route: '/usuario'
			},
			{
				id: '5042c8ae-6a3d-4473-a8ed-14cffce5eeb9',
				description: 'Log',
				icon: '',
				route: '/log'
			},
			{
				id: '1d269583-3bfc-4d16-a2bd-e35c1c5c3344',
				description: 'Menu',
				icon: '',
				route: '/menu'
			}
		])
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
	}

}
