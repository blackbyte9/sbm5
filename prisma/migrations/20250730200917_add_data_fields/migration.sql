-- CreateEnum
CREATE TYPE "Status" AS ENUM ('REMOVED', 'NEW', 'USED', 'DAMAGED');

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "course" TEXT,
    "idOld" INTEGER,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Borrow" (
    "id" SERIAL NOT NULL,
    "itemId" TEXT NOT NULL,
    "studentId" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "leased" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returned" TIMESTAMP(3),

    CONSTRAINT "Borrow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_id_key" ON "Item"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Student_id_key" ON "Student"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Borrow_id_key" ON "Borrow"("id");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_isbn_fkey" FOREIGN KEY ("isbn") REFERENCES "Book"("isbn") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrow" ADD CONSTRAINT "Borrow_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrow" ADD CONSTRAINT "Borrow_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
