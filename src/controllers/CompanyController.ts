import { Request, Response } from "express";
import { CreateCompanyService, ListCompaniesService } from "../services/CompanyService";

class CreateCompanyController {
  async handle(request: Request, response: Response) {
    const { name, description, document } = request.body;

    const createCompanyService = new CreateCompanyService();

    const company = await createCompanyService.execute(name, description, document );

    return response.json(company);
  }
}

class ListCompaniesController {
  async handle(request: Request, response: Response) {
    const listCompaniesService = new ListCompaniesService();

    const companies = await listCompaniesService.execute();

    return response.json(companies);
  }
}

export { CreateCompanyController, ListCompaniesController };

