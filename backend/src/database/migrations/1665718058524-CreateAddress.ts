import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddress1665718058524 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "addresses",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "country_name",
            type: "varchar",
          },
          {
            name: "uf",
            type: "varchar",
          },
          {
            name: "city_name",
            type: "varchar",
          },
          {
            name: "zip_code",
            type: "varchar",
          },
          {
            name: "district",
            type: "varchar",
          },
          {
            name: "street",
            type: "varchar",
          },
          {
            name: "number",
            type: "varchar",
          },
          {
            name: "complement",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("addresses");
  }
}
