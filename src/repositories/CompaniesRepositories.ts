import { EntityRepository, Repository } from "typeorm";
import { Company } from "../entities/Company";

@EntityRepository(Company)
class CompaniesRepositories extends Repository<Company> {}

export { CompaniesRepositories };

