import { AppDataSource } from "../database/Index";
import { Organ } from "../entities/Organ";

const organRepo = AppDataSource.getRepository(Organ);

export class OrgansRepository {
  getById = async (organ_id: string) => {
    const result = organRepo
      .createQueryBuilder("organ")
      .where("organ_id = :organ_id", { organ_id })
      .getOne();
    return result;
  };

  getByDescription = async (description: string) => {
    const result = organRepo
      .createQueryBuilder("organ")
      .where("description = :description", { description })
      .getOne();
    return result;
  };

  getAll = async () => {
    const result = organRepo.createQueryBuilder().getMany();
    return result;
  };

  createOrgan = async (organ_type: string, description: string) => {
    const result = organRepo.create({
      organ_type,
      description,
    });

    await organRepo.save(result);
    return result;
  };

  updateOrgan = async (
    organ_id: string,
    organ_type: string,
    description: string
  ) => {
    const organ = await organRepo.findOne({
      where: { organ_id: organ_id },
    });

    (organ.organ_type = organ_type ? organ_type : organ.organ_type),
      (organ.description = description ? description : organ.description),
      await organRepo.save(organ);
    return organ;
  };

  organDelete = async (organ_id: string) => {
    const organ = await organRepo.findOne({
      where: { organ_id: organ_id },
    });

    await organRepo.delete(organ);
    return organ;
  };
}
