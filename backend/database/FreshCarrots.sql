CREATE DATABASE FCDB;

-- -----------------------------------------------------
-- Table `FCDB`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FCDB`.`User` (
  `cpf` BIGINT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phoneNumber` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cpf`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FCDB`.`Book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FCDB`.`Book` (
  `isbn` BIGINT NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `edition` INT NOT NULL,
  `year` DATE NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `thumbnail` BLOB,
  `grade` INT NOT NULL,
  PRIMARY KEY (`isbn`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FCDB`.`Loan`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FCDB`.`Loan` (
  `idLoan` INT NOT NULL,
  `time` INT NOT NULL,
  `start` DATE NOT NULL,
  `end` DATE NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `lender_User_cpf` BIGINT NOT NULL,
  `borrower_User_cpf1` BIGINT NOT NULL,
  `Book_isbn` BIGINT NOT NULL,
  PRIMARY KEY (`idLoan`),
  INDEX `fk_Loan_User_idx` (`lender_User_cpf` ASC) VISIBLE,
  INDEX `fk_Loan_Book1_idx` (`Book_isbn` ASC) VISIBLE,
  INDEX `fk_Loan_User1_idx` (`borrower_User_cpf1` ASC) VISIBLE,
  CONSTRAINT `fk_Loan_User`
    FOREIGN KEY (`lender_User_cpf`)
    REFERENCES `FCDB`.`User` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Loan_Book1`
    FOREIGN KEY (`Book_isbn`)
    REFERENCES `FCDB`.`Book` (`isbn`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Loan_User1`
    FOREIGN KEY (`borrower_User_cpf1`)
    REFERENCES `FCDB`.`User` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `FCDB`.`Review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FCDB`.`Review` (
  `grade` INT NOT NULL,
  `comment` MEDIUMTEXT NOT NULL,
  `Book_isbn` BIGINT NOT NULL,
  `User_cpf` BIGINT NOT NULL,
  INDEX `fk_Review_Book1_idx` (`Book_isbn` ASC) VISIBLE,
  INDEX `fk_Review_User1_idx` (`User_cpf` ASC) VISIBLE,
  CONSTRAINT `fk_Review_Book1`
    FOREIGN KEY (`Book_isbn`)
    REFERENCES `FCDB`.`Book` (`isbn`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Review_User1`
    FOREIGN KEY (`User_cpf`)
    REFERENCES `FCDB`.`User` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
  PRIMARY KEY (`Book_isbn`, `User_cpf`))
ENGINE = InnoDB;
