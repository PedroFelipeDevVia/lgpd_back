import { getCustomRepository } from "typeorm";
import { LogsRepositories } from "../repositories/LogsRepositories";

class CreateLogService {
  async execute(description: string, collection: string, id_register: string) {
    const logsRepositories = getCustomRepository(LogsRepositories);

    if (!description) {
      throw new Error("Incorrect description!");
    }
    
    if (!collection) {
      throw new Error("Incorrect collection!");
    }
    
    if (!id_register) {
      throw new Error("Incorrect id_register!");
    }

    const log = logsRepositories.create({
      description,
      collection,
      id_register
    });

    await logsRepositories.save(log);

    return log;
  }
}

export { CreateLogService };

