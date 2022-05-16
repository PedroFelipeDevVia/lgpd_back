import { EntityRepository, Repository } from "typeorm";
import { LogDetail } from "../entities/LogDetail";

@EntityRepository(LogDetail)
class LogDetailsRepositories extends Repository<LogDetail> {}

export { LogDetailsRepositories };

