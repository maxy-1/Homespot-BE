-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "asuransiId" TEXT,
    "kprId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asuransi" (
    "id" TEXT NOT NULL,
    "nomor_polis" TEXT NOT NULL,
    "jenis_asuransi" TEXT NOT NULL,
    "premi" DECIMAL(65,30) NOT NULL,
    "masa_pertanggungan" TIMESTAMP(3),
    "manfaat_asuransi" TEXT,
    "tanggal_efektif" TIMESTAMP(3),
    "nomor_klaim" TEXT,

    CONSTRAINT "Asuransi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KPR" (
    "id" TEXT NOT NULL,
    "nomor_kpr" TEXT NOT NULL,
    "jumlah_pinjaman" DECIMAL(65,30) NOT NULL,
    "suku_bunga" DECIMAL(65,30) NOT NULL,
    "jangka_waktu" INTEGER NOT NULL,
    "angsuran" DECIMAL(65,30) NOT NULL,
    "nilai_jaminan" DECIMAL(65,30) NOT NULL,
    "tanggal_penyelesaian" TIMESTAMP(3),

    CONSTRAINT "KPR_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_asuransiId_fkey" FOREIGN KEY ("asuransiId") REFERENCES "Asuransi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_kprId_fkey" FOREIGN KEY ("kprId") REFERENCES "KPR"("id") ON DELETE SET NULL ON UPDATE CASCADE;
