import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationRelife1666277337624 implements MigrationInterface {
    name = 'MigrationRelife1666277337624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "country_name" character varying(50) NOT NULL, "uf" character varying(5) NOT NULL, "city_name" character varying(50) NOT NULL, "zip_code" character varying(10) NOT NULL, "district" character varying(50) NOT NULL, "street" character varying(50) NOT NULL, "number" character varying(10) NOT NULL, "complement" character varying(50) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "role_name" character varying(20) NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(45) NOT NULL, "last_name" character varying(45) NOT NULL, "cpf" character varying(11) NOT NULL, "telephone" character varying(15) NOT NULL, "email" character varying(40) NOT NULL, "user_name" character varying(40) NOT NULL, "password" character varying(25) NOT NULL, "isActive" boolean NOT NULL, "role_id" integer, "address_id" uuid, CONSTRAINT "REL_1b05689f6b6456680d538c3d2e" UNIQUE ("address_id"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "receivers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name_mother" character varying(45) NOT NULL, "blood_type" character varying(10) NOT NULL, "receiver_organs" boolean NOT NULL, "receiver_tissues" boolean NOT NULL, "user_id" uuid, "institution_id" uuid, CONSTRAINT "REL_44f55a0a2111b0e04e79c4fd13" UNIQUE ("user_id"), CONSTRAINT "PK_58db3b9ea40bf111b785247ea24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "organs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "organ_type" character varying(50) NOT NULL, "description" character varying(50) NOT NULL, "organ_id" uuid, "donor_id" uuid, "receiver_id" uuid, CONSTRAINT "PK_8f9d0c1b59261bac4f24bf6038b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "institutions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "institution_name" character varying(100) NOT NULL, "responsible_name" character varying(150) NOT NULL, "cnpj" character varying(20) NOT NULL, "telephone" character varying(15) NOT NULL, "email" character varying(40) NOT NULL, "password" character varying(25) NOT NULL, "isActive" boolean NOT NULL, "role_id" integer, "address_id" uuid, CONSTRAINT "REL_e7793a6b806da38011d61aea21" UNIQUE ("role_id"), CONSTRAINT "REL_f6debf818490ee14c2fbfa3001" UNIQUE ("address_id"), CONSTRAINT "PK_0be7539dcdba335470dc05e9690" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "donors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name_mother" character varying(45) NOT NULL, "blood_type" character varying(10) NOT NULL, "donor_organs" boolean NOT NULL, "donor_tissues" boolean NOT NULL, "user_id" uuid, "institution_id" uuid, CONSTRAINT "REL_7c0248272b81ee5648c5e93849" UNIQUE ("user_id"), CONSTRAINT "PK_7fafae759bcc8cc1dfa09c3fbcf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "administrators" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid, CONSTRAINT "REL_fc23800cd060320637aa05f21f" UNIQUE ("user_id"), CONSTRAINT "PK_aaa48522d99c3b6b33fdea7dc2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_1b05689f6b6456680d538c3d2ea" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "receivers" ADD CONSTRAINT "FK_44f55a0a2111b0e04e79c4fd138" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "receivers" ADD CONSTRAINT "FK_346cde73ccbc17debd6221f4dad" FOREIGN KEY ("institution_id") REFERENCES "institutions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "organs" ADD CONSTRAINT "FK_9a4ae133beb2340df3e9e04112f" FOREIGN KEY ("organ_id") REFERENCES "institutions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "organs" ADD CONSTRAINT "FK_f83ed84376cb35cd95ce21f77ba" FOREIGN KEY ("donor_id") REFERENCES "donors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "organs" ADD CONSTRAINT "FK_fff48a8cfb22886c0c861004415" FOREIGN KEY ("receiver_id") REFERENCES "receivers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "institutions" ADD CONSTRAINT "FK_e7793a6b806da38011d61aea212" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "institutions" ADD CONSTRAINT "FK_f6debf818490ee14c2fbfa30019" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "donors" ADD CONSTRAINT "FK_7c0248272b81ee5648c5e938495" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "donors" ADD CONSTRAINT "FK_8cd7b0c58421ea6012374fcfce6" FOREIGN KEY ("institution_id") REFERENCES "institutions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "administrators" ADD CONSTRAINT "FK_fc23800cd060320637aa05f21f6" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "administrators" DROP CONSTRAINT "FK_fc23800cd060320637aa05f21f6"`);
        await queryRunner.query(`ALTER TABLE "donors" DROP CONSTRAINT "FK_8cd7b0c58421ea6012374fcfce6"`);
        await queryRunner.query(`ALTER TABLE "donors" DROP CONSTRAINT "FK_7c0248272b81ee5648c5e938495"`);
        await queryRunner.query(`ALTER TABLE "institutions" DROP CONSTRAINT "FK_f6debf818490ee14c2fbfa30019"`);
        await queryRunner.query(`ALTER TABLE "institutions" DROP CONSTRAINT "FK_e7793a6b806da38011d61aea212"`);
        await queryRunner.query(`ALTER TABLE "organs" DROP CONSTRAINT "FK_fff48a8cfb22886c0c861004415"`);
        await queryRunner.query(`ALTER TABLE "organs" DROP CONSTRAINT "FK_f83ed84376cb35cd95ce21f77ba"`);
        await queryRunner.query(`ALTER TABLE "organs" DROP CONSTRAINT "FK_9a4ae133beb2340df3e9e04112f"`);
        await queryRunner.query(`ALTER TABLE "receivers" DROP CONSTRAINT "FK_346cde73ccbc17debd6221f4dad"`);
        await queryRunner.query(`ALTER TABLE "receivers" DROP CONSTRAINT "FK_44f55a0a2111b0e04e79c4fd138"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_1b05689f6b6456680d538c3d2ea"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1"`);
        await queryRunner.query(`DROP TABLE "administrators"`);
        await queryRunner.query(`DROP TABLE "donors"`);
        await queryRunner.query(`DROP TABLE "institutions"`);
        await queryRunner.query(`DROP TABLE "organs"`);
        await queryRunner.query(`DROP TABLE "receivers"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
