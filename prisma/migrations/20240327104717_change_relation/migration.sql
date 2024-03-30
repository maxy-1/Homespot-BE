/*
  Warnings:

  - You are about to drop the column `asuransiId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `kprId` on the `User` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Asuransi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `KPR` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_asuransiId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_kprId_fkey";

-- AlterTable
ALTER TABLE "Asuransi" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "KPR" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "asuransiId",
DROP COLUMN "kprId";

-- AddForeignKey
ALTER TABLE "Asuransi" ADD CONSTRAINT "Asuransi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KPR" ADD CONSTRAINT "KPR_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
