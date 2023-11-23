-- CreateTable
CREATE TABLE "User" (
    "cpf" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "college" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Book" (
    "isbn" BIGINT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "edition" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "category" TEXT NOT NULL DEFAULT '',
    "grade" INTEGER NOT NULL DEFAULT 0,
    "pages" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserBook" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "condition" TEXT NOT NULL,
    "forBorrow" BOOLEAN NOT NULL,
    "forLending" BOOLEAN NOT NULL,
    "avaliable" BOOLEAN NOT NULL,
    "solicitations" INTEGER NOT NULL,
    "cpf" BIGINT NOT NULL,
    "isbn" BIGINT NOT NULL,
    CONSTRAINT "UserBook_cpf_fkey" FOREIGN KEY ("cpf") REFERENCES "User" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserBook_isbn_fkey" FOREIGN KEY ("isbn") REFERENCES "Book" ("isbn") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Loan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" INTEGER NOT NULL,
    "start" TEXT NOT NULL,
    "end" TEXT NOT NULL,
    "lenderCpf" BIGINT,
    "borrowerBookId" BIGINT NOT NULL,
    CONSTRAINT "Loan_borrowerBookId_fkey" FOREIGN KEY ("borrowerBookId") REFERENCES "UserBook" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Loan_lenderCpf_fkey" FOREIGN KEY ("lenderCpf") REFERENCES "User" ("cpf") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Review" (
    "idReview" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "grade" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "bookIsbn" BIGINT NOT NULL,
    "userCpf" BIGINT NOT NULL,
    CONSTRAINT "Review_userCpf_fkey" FOREIGN KEY ("userCpf") REFERENCES "User" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Review_bookIsbn_fkey" FOREIGN KEY ("bookIsbn") REFERENCES "Book" ("isbn") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");
