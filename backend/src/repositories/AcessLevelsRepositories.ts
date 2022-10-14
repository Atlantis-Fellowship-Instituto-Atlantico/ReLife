import { AppDataSource } from "../database/Index";
import { AcessLevel } from "../entities/AcessLevel";

export const AcessLevelsRepositories = AppDataSource.getRepository(AcessLevel);

const acessLevelAdm = new AcessLevel();
const acessLevelInstitution = new AcessLevel();
const acessLevelDonor = new AcessLevel();
const acessLevelReceiver = new AcessLevel();

acessLevelAdm.acess_type = "Administrator";
acessLevelInstitution.acess_type = "Institution";
acessLevelDonor.acess_type = "Donor";
acessLevelReceiver.acess_type = "Receiver";

AcessLevelsRepositories.save(acessLevelAdm);
AcessLevelsRepositories.save(acessLevelInstitution);
AcessLevelsRepositories.save(acessLevelDonor);
AcessLevelsRepositories.save(acessLevelReceiver);
