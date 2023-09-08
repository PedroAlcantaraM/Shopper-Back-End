/*
  Warnings:

  - You are about to alter the column `cost_price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(9,2)` to `Double`.
  - You are about to alter the column `sales_price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(9,2)` to `Double`.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `cost_price` DOUBLE NOT NULL,
    MODIFY `sales_price` DOUBLE NOT NULL;
