-- CreateTable
CREATE TABLE "Worker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "engine" TEXT NOT NULL,
    "vin" TEXT NOT NULL,
    "owner_name" TEXT NOT NULL,
    "owner_surname" TEXT NOT NULL,
    "owner_phone_number" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "workerName" TEXT NOT NULL,
    "jobsId" INTEGER NOT NULL DEFAULT -1,
    CONSTRAINT "Service_workerName_fkey" FOREIGN KEY ("workerName") REFERENCES "Worker" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Service_jobsId_fkey" FOREIGN KEY ("jobsId") REFERENCES "Jobs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Jobs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 10000
);

-- CreateIndex
CREATE UNIQUE INDEX "Worker_id_key" ON "Worker"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Worker_name_key" ON "Worker"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Service_id_key" ON "Service"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Jobs_id_key" ON "Jobs"("id");
