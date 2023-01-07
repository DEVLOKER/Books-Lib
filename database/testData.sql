-- CREATE SCHEMA IF NOT EXISTS `bookslib` ;

INSERT INTO `bookslib`.`categorie_annonce` VALUES (1, "SPRING BOOT"), (2, "Reactjs");

INSERT INTO `bookslib`.`utilisateur` VALUES (1,'admin@mail.com','admin'),(2,'user01@mail.com','1111'),(3,'user02@mail.com','2222');

INSERT INTO `bookslib`.`admin` VALUES (1,1);

INSERT INTO `bookslib`.`membre` VALUES ('addr 01','01111','ACTIVE','firstname 01','010101010','Canada','lastname 01','british columbia','','vancouver',2,1),
									   ('addr 02','02222','ACTIVE','firstname 02','020202020','U.S.A','lastname 02','Illinois','','chicago',3,1);

-- INSERT INTO `bookslib`.`message` VALUES (1,'HELLO!','2022-02-12',2,3),(2,'HOW ARE YOU?','2022-02-12',3,2),(3,'FINE THANKS, WHAT ABOUT YOU?','2022-02-12',2,3), (4,'GREAT!','2022-02-12',3,2);
