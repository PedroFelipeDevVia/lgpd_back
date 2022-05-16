import { EntityRepository, Repository } from "typeorm";
import { Log } from "../entities/Log";

@EntityRepository(Log)
class LogsRepositories extends Repository<Log> {}

export { LogsRepositories };

