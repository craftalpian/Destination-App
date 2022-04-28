-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2022 at 07:26 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `destination_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `destinations`
--

CREATE TABLE `destinations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `image` text COLLATE utf8_swedish_ci DEFAULT NULL,
  `location` text COLLATE utf8_swedish_ci DEFAULT NULL,
  `website_url` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `instagram_url` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `description` text COLLATE utf8_swedish_ci DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `destinations`
--

INSERT INTO `destinations` (`id`, `name`, `image`, `location`, `website_url`, `instagram_url`, `description`, `status`, `created_at`, `updated_at`) VALUES
(2, 'Kota Jakarta', 'https://i.ibb.co/GWrRNrB/085074f6df93.png', 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', 'Merupakan Ibu Kota', 1, '2022-04-27 02:05:14', '2022-04-27 04:51:17'),
(3, 'Kota Depok', 'https://berita.depok.go.id/upload/media/entries/2021-11/04/9106-0-695e2dd4b1fb0700c3af7ecc16d81a78.jpg', 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', 'Merupakan kota penyanggah Ibu Kota', 1, '2022-04-27 02:05:57', '2022-04-27 02:05:57'),
(4, 'Kota Depok', 'https://berita.depok.go.id/upload/media/entries/2021-11/04/9106-0-695e2dd4b1fb0700c3af7ecc16d81a78.jpg', 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', NULL, 1, '2022-04-27 02:06:04', '2022-04-27 02:06:04'),
(5, 'Kota Depok', 'https://berita.depok.go.id/upload/media/entries/2021-11/04/9106-0-695e2dd4b1fb0700c3af7ecc16d81a78.jpg', 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', 'Merupakan kota penyanggah Ibu Kota', 1, '2022-04-27 02:08:31', '2022-04-27 02:08:31'),
(6, 'Kota Depok', 'https://berita.depok.go.id/upload/media/entries/2021-11/04/9106-0-695e2dd4b1fb0700c3af7ecc16d81a78.jpg', 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', NULL, 1, '2022-04-27 02:08:38', '2022-04-27 02:08:38'),
(7, 'Kota Depok', 'https://berita.depok.go.id/upload/media/entries/2021-11/04/9106-0-695e2dd4b1fb0700c3af7ecc16d81a78.jpg', 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', NULL, 1, '2022-04-27 02:09:58', '2022-04-27 02:09:58'),
(8, 'Kota Depok', 'https://berita.depok.go.id/upload/media/entries/2021-11/04/9106-0-695e2dd4b1fb0700c3af7ecc16d81a78.jpg', 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', 'Merupakan kota penyanggah Ibu Kota', 1, '2022-04-27 02:10:05', '2022-04-27 02:10:05'),
(9, 'Kota Depok', 'https://berita.depok.go.id/upload/media/entries/2021-11/04/9106-0-695e2dd4b1fb0700c3af7ecc16d81a78.jpg', 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', 'Merupakan kota penyanggah Ibu Kota', 1, '2022-04-27 02:12:24', '2022-04-27 02:12:24'),
(10, 'Kota Depok', 'https://berita.depok.go.id/upload/media/entries/2021-11/04/9106-0-695e2dd4b1fb0700c3af7ecc16d81a78.jpg', 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', 'Merupakan kota penyanggah Ibu Kota', 1, '2022-04-27 02:12:37', '2022-04-27 02:12:37'),
(11, 'Kota Depok 2', NULL, 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', 'Merupakan kota penyanggah Ibu Kota', 1, '2022-04-27 04:45:58', '2022-04-27 04:45:58'),
(12, 'Kota Depok 2', NULL, 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', 'Merupakan kota penyanggah Ibu Kota', 1, '2022-04-27 04:46:57', '2022-04-27 04:46:57'),
(13, 'Kota Depok 2', 'https://i.ibb.co/5rdxd8P/cfe44cec4ed2.png', 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', 'Merupakan kota penyanggah Ibu Kota', 1, '2022-04-27 04:47:14', '2022-04-27 04:47:14'),
(14, 'Kota Depok 2', 'https://i.ibb.co/GWrRNrB/085074f6df93.png', 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', 'Merupakan kota penyanggah Ibu Kota', 1, '2022-04-27 04:47:35', '2022-04-27 04:47:35'),
(15, 'Kota Depok 2', 'https://i.ibb.co/YtPZVtx/57e155ae70b0.png', 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', 'Merupakan kota penyanggah Ibu Kota', 1, '2022-04-27 04:57:10', '2022-04-27 04:57:10'),
(16, 'Kota Depok 2', 'https://i.ibb.co/GWrRNrB/085074f6df93.png', 'https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/', 'https://depok.go.id/', 'https://www.instagram.com/', 'Merupakan kota penyanggah Ibu Kota', 1, '2022-04-27 04:58:47', '2022-04-27 04:58:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `destinations`
--
ALTER TABLE `destinations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `destinations`
--
ALTER TABLE `destinations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
