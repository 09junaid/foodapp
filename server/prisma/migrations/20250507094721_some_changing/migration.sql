/*
  Warnings:

  - You are about to drop the column `booking_end_time` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `booking_start_time` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `table_id` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `table_number` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the `Table` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `booking_time` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seating_capacity` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_table_id_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "booking_end_time",
DROP COLUMN "booking_start_time",
DROP COLUMN "table_id",
DROP COLUMN "table_number",
ADD COLUMN     "booking_time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "seating_capacity" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Table";
