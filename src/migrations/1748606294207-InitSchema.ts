import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1748606294207 implements MigrationInterface {
    name = 'InitSchema1748606294207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "listing" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text NOT NULL, "price" integer NOT NULL, "userId" integer, CONSTRAINT "PK_381d45ebb8692362c156d6b87d7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "listing" ADD CONSTRAINT "FK_33bd8a3b7eeccb95ae45038d956" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listing" DROP CONSTRAINT "FK_33bd8a3b7eeccb95ae45038d956"`);
        await queryRunner.query(`DROP TABLE "listing"`);
    }

}
