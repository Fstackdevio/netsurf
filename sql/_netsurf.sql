-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2017 at 05:32 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `_netsurf`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student`
--

CREATE TABLE `tbl_student` (
  `_id` int(255) NOT NULL,
  `_foreignKey` int(255) NOT NULL,
  `_firstname` varchar(25) NOT NULL,
  `_lastname` varchar(25) NOT NULL,
  `_username` varchar(55) NOT NULL,
  `_regNumber` int(11) NOT NULL,
  `_matNum` varchar(8) NOT NULL,
  `_email` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `_radcheck`
--

CREATE TABLE `_radcheck` (
  `_id` int(255) NOT NULL,
  `_foreignKey2` int(255) NOT NULL,
  `_Password` varchar(255) NOT NULL,
  `_pin` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_student`
--
ALTER TABLE `tbl_student`
  ADD PRIMARY KEY (`_id`),
  ADD UNIQUE KEY `_foreignKey` (`_foreignKey`),
  ADD UNIQUE KEY `_email` (`_email`),
  ADD UNIQUE KEY `_matNum` (`_matNum`),
  ADD UNIQUE KEY `_regNumber` (`_regNumber`),
  ADD UNIQUE KEY `_username` (`_username`);

--
-- Indexes for table `_radcheck`
--
ALTER TABLE `_radcheck`
  ADD PRIMARY KEY (`_id`),
  ADD UNIQUE KEY `_foreignKey2` (`_foreignKey2`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_student`
--
ALTER TABLE `tbl_student`
  MODIFY `_id` int(255) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `_radcheck`
--
ALTER TABLE `_radcheck`
  MODIFY `_id` int(255) NOT NULL AUTO_INCREMENT;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
