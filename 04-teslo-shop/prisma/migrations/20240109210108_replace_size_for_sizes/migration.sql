/*
  Warnings:

  - You are about to drop the column `size` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sizes]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sizes` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Product_size_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "size",
ADD COLUMN     "sizes" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_sizes_key" ON "Product"("sizes");
