import { MigrationInterface, QueryRunner } from "typeorm";

export class RelifeDBOrganChange1669427724415 implements MigrationInterface {
    name = 'RelifeDBOrganChange1669427724415'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organs" DROP CONSTRAINT "UQ_966edce44af6823a28fa7637f54"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organs" ADD CONSTRAINT "UQ_966edce44af6823a28fa7637f54" UNIQUE ("description")`);
    }

}
