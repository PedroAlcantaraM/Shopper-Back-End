/*
  Warnings:

  - The primary key for the `packs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `packs` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `pack_id` on the `packs` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `product_id` on the `packs` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `qty` on the `packs` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `code` on the `products` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `packs` DROP FOREIGN KEY `packs_pack_id_fkey`;

-- DropForeignKey
ALTER TABLE `packs` DROP FOREIGN KEY `packs_product_id_fkey`;

-- AlterTable
ALTER TABLE `packs` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `pack_id` INTEGER NOT NULL,
    MODIFY `product_id` INTEGER NOT NULL,
    MODIFY `qty` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `products` DROP PRIMARY KEY,
    MODIFY `code` INTEGER NOT NULL,
    ADD PRIMARY KEY (`code`);

-- AddForeignKey
ALTER TABLE `packs` ADD CONSTRAINT `packs_pack_id_fkey` FOREIGN KEY (`pack_id`) REFERENCES `products`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `packs` ADD CONSTRAINT `packs_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;
