/*
  Warnings:

  - You are about to drop the `MenuItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `message` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_item_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_order_id_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "additional_note" TEXT,
ADD COLUMN     "food_items" TEXT,
ADD COLUMN     "phone_number" TEXT,
ADD COLUMN     "quantity" INTEGER,
ALTER COLUMN "message" SET NOT NULL;

-- DropTable
DROP TABLE "MenuItem";

-- DropTable
DROP TABLE "OrderItem";
