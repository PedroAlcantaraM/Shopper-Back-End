/*
  Warnings:

  - You are about to drop the `Packs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Packs` DROP FOREIGN KEY `Packs_pack_id_fkey`;

-- DropForeignKey
ALTER TABLE `Packs` DROP FOREIGN KEY `Packs_product_id_fkey`;

-- DropTable
DROP TABLE `Packs`;

-- DropTable
DROP TABLE `Products`;

-- CreateTable
CREATE TABLE `products` (
    `code` BIGINT NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `cost_price` DECIMAL(9, 2) NOT NULL,
    `sales_price` DECIMAL(9, 2) NOT NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `packs` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `pack_id` BIGINT NOT NULL,
    `product_id` BIGINT NOT NULL,
    `qty` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `packs` ADD CONSTRAINT `packs_pack_id_fkey` FOREIGN KEY (`pack_id`) REFERENCES `products`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `packs` ADD CONSTRAINT `packs_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;
