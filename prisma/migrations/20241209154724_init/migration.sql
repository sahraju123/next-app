-- CreateTable
CREATE TABLE `University` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `domain` VARCHAR(191) NOT NULL,
    `detail` VARCHAR(191) NULL,
    `state` VARCHAR(191) NOT NULL,
    `acceptanceRate` DOUBLE NULL,
    `graduationRate` DOUBLE NULL,
    `tuitionFee` DOUBLE NULL,
    `agent` VARCHAR(191) NULL,
    `smallNote` VARCHAR(191) NULL,
    `costOfAttendance` DOUBLE NULL,
    `scholarships` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `applicationFee` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
