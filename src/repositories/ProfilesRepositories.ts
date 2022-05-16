import { EntityRepository, Repository } from "typeorm";
import { Profile } from "../entities/profile";

@EntityRepository(Profile)
class ProfilesRepositories extends Repository<Profile> {}

export { ProfilesRepositories };

