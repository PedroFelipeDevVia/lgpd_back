import { EntityRepository, Repository } from "typeorm";
import { Menu } from "../entities/Menu";

@EntityRepository(Menu)
class MenusRepositories extends Repository<Menu> {}

export { MenusRepositories };

