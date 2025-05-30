import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1748605003845 implements MigrationInterface {
    name = 'InitSchema1748605003845'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isActive"`);
    }

}
