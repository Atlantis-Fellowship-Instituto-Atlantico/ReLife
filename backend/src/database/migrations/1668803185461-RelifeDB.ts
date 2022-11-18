import { MigrationInterface, QueryRunner } from "typeorm";

export class RelifeDB1668803185461 implements MigrationInterface {
  name = "RelifeDB1668803185461";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "organs" ("organ_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "organ_type" character varying(50) NOT NULL, "description" character varying(50) NOT NULL, "user_id" uuid, CONSTRAINT "UQ_966edce44af6823a28fa7637f54" UNIQUE ("description"), CONSTRAINT "PK_9a4ae133beb2340df3e9e04112f" PRIMARY KEY ("organ_id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "role" character varying(20) NOT NULL, "full_name" character varying(150) NOT NULL, "sex" character varying(20) NOT NULL, "cpf" character varying(14) NOT NULL, "phone" character varying(15) NOT NULL, "email" character varying(40) NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "mother_name" character varying(45) DEFAULT '', "blood_type" character varying(10) DEFAULT '', "avatar" character varying DEFAULT '', "address_id" uuid, "institution_id" uuid, CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_1b05689f6b6456680d538c3d2e" UNIQUE ("address_id"), CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "institutions" ("institution_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "role" character varying NOT NULL DEFAULT 'INSTITUTION', "institution_name" character varying(100) NOT NULL, "responsible_name" character varying(150) NOT NULL, "cnpj" character varying(20) NOT NULL, "phone" character varying(20) NOT NULL, "email" character varying(60) NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "avatar" character varying DEFAULT '', "address_id" uuid, CONSTRAINT "UQ_dca76003f76967c71b72e2a8766" UNIQUE ("institution_name"), CONSTRAINT "UQ_9e970cb85e04351d5eb97f41f59" UNIQUE ("cnpj"), CONSTRAINT "UQ_827fd731b1c316be1302ddc0645" UNIQUE ("phone"), CONSTRAINT "UQ_8d110b8f5288cfb6d0e10d938cb" UNIQUE ("email"), CONSTRAINT "REL_f6debf818490ee14c2fbfa3001" UNIQUE ("address_id"), CONSTRAINT "PK_0b7c9b88f0f4a4428d17848d84c" PRIMARY KEY ("institution_id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "addresses" ("address_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "zip_code" character varying(10) NOT NULL, "country" character varying(50) NOT NULL, "uf" character varying(2) NOT NULL, "city" character varying(50) NOT NULL, "district" character varying(50) NOT NULL, "street" character varying(50) NOT NULL, "number" character varying(10) DEFAULT 's/n', "complement" character varying(50) DEFAULT '', CONSTRAINT "PK_7075006c2d82acfeb0ea8c5dce7" PRIMARY KEY ("address_id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "admins" ("admin_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "role" character varying NOT NULL DEFAULT 'ADMIN', "phone" character varying(15) NOT NULL, "email" character varying(40) NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_bacf1cabdd51dca73d1a57ea66d" UNIQUE ("phone"), CONSTRAINT "UQ_051db7d37d478a69a7432df1479" UNIQUE ("email"), CONSTRAINT "PK_88070d08be64522fc84fdefef85" PRIMARY KEY ("admin_id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "organs" ADD CONSTRAINT "FK_5e221472987d5af7d263c7108b8" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_1b05689f6b6456680d538c3d2ea" FOREIGN KEY ("address_id") REFERENCES "addresses"("address_id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_822972ceea1fda0973b8acc7bbe" FOREIGN KEY ("institution_id") REFERENCES "institutions"("institution_id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "institutions" ADD CONSTRAINT "FK_f6debf818490ee14c2fbfa30019" FOREIGN KEY ("address_id") REFERENCES "addresses"("address_id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "institutions" DROP CONSTRAINT "FK_f6debf818490ee14c2fbfa30019"`
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_822972ceea1fda0973b8acc7bbe"`
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_1b05689f6b6456680d538c3d2ea"`
    );
    await queryRunner.query(
      `ALTER TABLE "organs" DROP CONSTRAINT "FK_5e221472987d5af7d263c7108b8"`
    );
    await queryRunner.query(`DROP TABLE "admins"`);
    await queryRunner.query(`DROP TABLE "addresses"`);
    await queryRunner.query(`DROP TABLE "institutions"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "organs"`);
  }
}
