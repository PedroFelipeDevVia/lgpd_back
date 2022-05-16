import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { CompaniesRepositories } from "../repositories/CompaniesRepositories";

class CreateCompanyService {
  async execute(name: string, description: string, document: string ) {
    const companiesRepositories = getCustomRepository(CompaniesRepositories);

    if (!name) {
      throw new Error("Incorrect name!");
    }
    
    if (!description) {
      throw new Error("Incorrect description!");
    }
    
    if (!document) {
      throw new Error("Incorrect document!");
    }

    // SELECT * FROM TAGS WHERE NAME = 'name'
    const companyAlreadyExists = await companiesRepositories.findOne({
      name, 
      description, 
      document
    });

    if (companyAlreadyExists) {
      throw new Error("Company already exists!");
    }

    const company = companiesRepositories.create({
      name, 
      description, 
      document
    });

    await companiesRepositories.save(company);

    return company;
  }
}

class ListCompaniesService {
  async execute() {
    const companiesRepositories = getCustomRepository(CompaniesRepositories);

    const companies = await companiesRepositories.find();

    return classToPlain(companies);
  }
}

export { CreateCompanyService, ListCompaniesService };

