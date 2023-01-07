CREATE DATABASE  IF NOT EXISTS `bookslib` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bookslib`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bookslib
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id_admin` int NOT NULL,
  `id` int NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FKgodqjbbtwk30kf3s0xuxklkr3` FOREIGN KEY (`id`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,1);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `annonce`
--

DROP TABLE IF EXISTS `annonce`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `annonce` (
  `id` int NOT NULL,
  `ajouter_favorie` int NOT NULL,
  `auteur` varchar(255) DEFAULT NULL,
  `condition_annonce` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `description_annonce` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `prix` double NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `url_photo_livre` varchar(255) DEFAULT NULL,
  `admin_id` int NOT NULL,
  `categorie_id` int NOT NULL,
  `membre_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKmcx32rfg3me5rsk1x3ij0lkdi` (`admin_id`),
  KEY `FKfcq0oexnlp09c5tc8k0xe9drl` (`categorie_id`),
  KEY `FKqawp934bgjvxuf9l9ymrgdt2` (`membre_id`),
  CONSTRAINT `FKfcq0oexnlp09c5tc8k0xe9drl` FOREIGN KEY (`categorie_id`) REFERENCES `categorie_annonce` (`id`),
  CONSTRAINT `FKmcx32rfg3me5rsk1x3ij0lkdi` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`),
  CONSTRAINT `FKqawp934bgjvxuf9l9ymrgdt2` FOREIGN KEY (`membre_id`) REFERENCES `membre` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `annonce`
--

LOCK TABLES `annonce` WRITE;
/*!40000 ALTER TABLE `annonce` DISABLE KEYS */;
/*!40000 ALTER TABLE `annonce` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `annonce_seq`
--

DROP TABLE IF EXISTS `annonce_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `annonce_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `annonce_seq`
--

LOCK TABLES `annonce_seq` WRITE;
/*!40000 ALTER TABLE `annonce_seq` DISABLE KEYS */;
INSERT INTO `annonce_seq` VALUES (1);
/*!40000 ALTER TABLE `annonce_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorie_annonce`
--

DROP TABLE IF EXISTS `categorie_annonce`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie_annonce` (
  `id` int NOT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie_annonce`
--

LOCK TABLES `categorie_annonce` WRITE;
/*!40000 ALTER TABLE `categorie_annonce` DISABLE KEYS */;
INSERT INTO `categorie_annonce` VALUES (1, "java");
/*!40000 ALTER TABLE `categorie_annonce` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorie_annonce_seq`
--

DROP TABLE IF EXISTS `categorie_annonce_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie_annonce_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie_annonce_seq`
--

LOCK TABLES `categorie_annonce_seq` WRITE;
/*!40000 ALTER TABLE `categorie_annonce_seq` DISABLE KEYS */;
INSERT INTO `categorie_annonce_seq` VALUES (1);
/*!40000 ALTER TABLE `categorie_annonce_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluation_annonce`
--

DROP TABLE IF EXISTS `evaluation_annonce`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evaluation_annonce` (
  `id` int NOT NULL,
  `commentaire` varchar(255) DEFAULT NULL,
  `date_evaluation` date DEFAULT NULL,
  `note` smallint DEFAULT NULL,
  `annonceid_id` int DEFAULT NULL,
  `membre_id_utilisateur_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKbrhl2kj8es2iv5o7qkqvltsj4` (`annonceid_id`),
  KEY `FKim8f49f9e1ahhciamrvnp35c7` (`membre_id_utilisateur_id`),
  CONSTRAINT `FKbrhl2kj8es2iv5o7qkqvltsj4` FOREIGN KEY (`annonceid_id`) REFERENCES `annonce` (`id`),
  CONSTRAINT `FKim8f49f9e1ahhciamrvnp35c7` FOREIGN KEY (`membre_id_utilisateur_id`) REFERENCES `membre` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluation_annonce`
--

LOCK TABLES `evaluation_annonce` WRITE;
/*!40000 ALTER TABLE `evaluation_annonce` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaluation_annonce` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluation_annonce_seq`
--

DROP TABLE IF EXISTS `evaluation_annonce_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evaluation_annonce_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluation_annonce_seq`
--

LOCK TABLES `evaluation_annonce_seq` WRITE;
/*!40000 ALTER TABLE `evaluation_annonce_seq` DISABLE KEYS */;
INSERT INTO `evaluation_annonce_seq` VALUES (1);
/*!40000 ALTER TABLE `evaluation_annonce_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorisation`
--

DROP TABLE IF EXISTS `favorisation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorisation` (
  `id` int NOT NULL,
  `date_favorisation` date DEFAULT NULL,
  `annonceid_id` int DEFAULT NULL,
  `membreid_utilisateur_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK79ss0s50f02qxfjscm8bkkxj8` (`annonceid_id`),
  KEY `FKgpyqsn11xrffdek0lyjljrnwg` (`membreid_utilisateur_id`),
  CONSTRAINT `FK79ss0s50f02qxfjscm8bkkxj8` FOREIGN KEY (`annonceid_id`) REFERENCES `annonce` (`id`),
  CONSTRAINT `FKgpyqsn11xrffdek0lyjljrnwg` FOREIGN KEY (`membreid_utilisateur_id`) REFERENCES `membre` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorisation`
--

LOCK TABLES `favorisation` WRITE;
/*!40000 ALTER TABLE `favorisation` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorisation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorisation_seq`
--

DROP TABLE IF EXISTS `favorisation_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorisation_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorisation_seq`
--

LOCK TABLES `favorisation_seq` WRITE;
/*!40000 ALTER TABLE `favorisation_seq` DISABLE KEYS */;
INSERT INTO `favorisation_seq` VALUES (1);
/*!40000 ALTER TABLE `favorisation_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membre`
--

DROP TABLE IF EXISTS `membre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `membre` (
  `adresse` varchar(255) DEFAULT NULL,
  `code_postal` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `numero_telephone` varchar(255) DEFAULT NULL,
  `pays` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `url_photo_profile` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `id` int NOT NULL,
  `admin_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKss98whsq5tyuxlbu1w348lx3b` (`admin_id`),
  CONSTRAINT `FKov1yqfmpayfk8muodybhuls7q` FOREIGN KEY (`id`) REFERENCES `utilisateur` (`id`),
  CONSTRAINT `FKss98whsq5tyuxlbu1w348lx3b` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membre`
--

LOCK TABLES `membre` WRITE;
/*!40000 ALTER TABLE `membre` DISABLE KEYS */;
INSERT INTO `membre` VALUES ('addr 01','01111','ACTIVE','nom 01','010101010','Canada','prenom 01','province 01','','ville 01',2,1),('addr 01','01111','ACTIVE','nom 02','010101010','Canada','prenom 02','province 01','','ville 01',3,1),('addr 01','01111','ACTIVE','nom 03','010101010','Canada','prenom 03','province 01','','ville 01',4,1);
/*!40000 ALTER TABLE `membre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `id` int NOT NULL,
  `contenu` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `expediteur_id` int NOT NULL,
  `receveur_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKaywy2mbd2m00kgvqgws9kfgjf` (`expediteur_id`),
  KEY `FKhgs6g05l5as3umk6r706gqj1w` (`receveur_id`),
  CONSTRAINT `FKaywy2mbd2m00kgvqgws9kfgjf` FOREIGN KEY (`expediteur_id`) REFERENCES `membre` (`id`),
  CONSTRAINT `FKhgs6g05l5as3umk6r706gqj1w` FOREIGN KEY (`receveur_id`) REFERENCES `membre` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
-- INSERT INTO `message` VALUES (1,'HELLO!','2022-02-12',2,3),(2,'HOW ARE YOU?','2022-02-12',3,2),(3,'FINE WHAT ABOUT YOU?','2022-02-12',2,3),(4,'HI','2022-02-12',2,4);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message_seq`
--

DROP TABLE IF EXISTS `message_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message_seq`
--

LOCK TABLES `message_seq` WRITE;
/*!40000 ALTER TABLE `message_seq` DISABLE KEYS */;
INSERT INTO `message_seq` VALUES (1);
/*!40000 ALTER TABLE `message_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `signalisation`
--

DROP TABLE IF EXISTS `signalisation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `signalisation` (
  `id` int NOT NULL,
  `commentaire` varchar(255) DEFAULT NULL,
  `date_signaler` date DEFAULT NULL,
  `annonceid_id` int DEFAULT NULL,
  `membreid_utilisateur_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKprt2chmbpl4cqjtqamnoa9anq` (`annonceid_id`),
  KEY `FKg34sfu6dgqd7ofdqvejwvhtsr` (`membreid_utilisateur_id`),
  CONSTRAINT `FKg34sfu6dgqd7ofdqvejwvhtsr` FOREIGN KEY (`membreid_utilisateur_id`) REFERENCES `membre` (`id`),
  CONSTRAINT `FKprt2chmbpl4cqjtqamnoa9anq` FOREIGN KEY (`annonceid_id`) REFERENCES `membre` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `signalisation`
--

LOCK TABLES `signalisation` WRITE;
/*!40000 ALTER TABLE `signalisation` DISABLE KEYS */;
/*!40000 ALTER TABLE `signalisation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `signalisation_seq`
--

DROP TABLE IF EXISTS `signalisation_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `signalisation_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `signalisation_seq`
--

LOCK TABLES `signalisation_seq` WRITE;
/*!40000 ALTER TABLE `signalisation_seq` DISABLE KEYS */;
INSERT INTO `signalisation_seq` VALUES (1);
/*!40000 ALTER TABLE `signalisation_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilisateur` (
  `id` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mot_de_passe` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` VALUES (1,'admin@mail.com','admin'),(2,'test01@mail.com','1111'),(3,'test02@mail.com','2222'),(4,'test03@mail.com','3333');
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateur_seq`
--

DROP TABLE IF EXISTS `utilisateur_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilisateur_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur_seq`
--

LOCK TABLES `utilisateur_seq` WRITE;
/*!40000 ALTER TABLE `utilisateur_seq` DISABLE KEYS */;
INSERT INTO `utilisateur_seq` VALUES (1);
/*!40000 ALTER TABLE `utilisateur_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bookslib'
--

--
-- Dumping routines for database 'bookslib'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-11 14:34:35
