# Destination App
Pada repository ini, dibuat REST API yang akan digunakan untuk memenuhi kebutuhan __[front-end](https://github.com/whoisgalih/destination-app)__. Projek __Destination App__ ditujukan untuk tugas Probation PROCLUB Telkom University.

__Anggota kelompok:__
1. Alfian Ananda Putra ([craftalpian](https://github.com/craftalpian))
1. Alifio Y. A. S ([Xenosians](https://github.com/Xenosians))
1. Galih Akbar Nugraha ([whoisgalih](https://github.com/whoisgalih))

__Cara mendapatkan API KEY imgbb.com:__
1. Lakukan [pendaftaran akun](https://imgbb.com) di __imgbb.com__
1. Pergi ke halaman [https://api.imgbb.com/](https://api.imgbb.com/)
1. Salin API-KEY yang muncul di halaman tersebut
---

## Usage ✌
* __Menggunakan _repository_ ini:__
```sh
git clone https://github.com/craftalpian/Destination-App.git
```
Lalu dilanjutkan dengan
```sh
npm i
```
Gunakan `db-migrate` dengan perintah
```sh
npm i -g db-migrate
npm i --save db-migrate-mysql
```
Buat file `.env` dengan code berikut
```
IMGBB_API=<YOUR-IMGBB-API-KEY>
```
Lakukan konfigurasi database pada file `database.json` dan `./src/models/index.js`
Dan yang terakhir adalah lakukan `migrate` dengan perintah berikut
```
db-migrate up
```


* __Menjalankan saat _development_:__
```sh
npm run start-dev
```

* __Menjalankan saat _production_:__
```sh
npm run start-prod
```

## Tech 💻
1. [HapiJs](https://hapi.dev/)
1. MYSQL
1. Sequelize
1. [imgbb-uploader](https://www.npmjs.com/package/imgbb-uploader)
1. dotenv

## Documentation 📖
* __[POST] Insert Data__ (/destinations)

Untuk menambahkan destinasi wisata terbaru ke database.

_Request data:_
```
{
    "name": "Kota Depok",
    "image": "iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVR42mNcLVNbzwAEjDAGACcSA4kB6ARiAAAAAElFTkSuQmCC",
    "location": "Depok, Jawa Barat, Indonesia",
    "website_url": "https://depok.go.id/",
    "instagram_url": "https://www.instagram.com/",
    "description": "Merupakan kota penyanggah Ibu Kota"
}
```
*image yang dikirim berupa base64 (gunakan [base64-image.de](https://www.base64-image.de/)) atau Anda bisa langsung menggunakan url

_Response data:_
```
{
    "status": "success",
    "code": 200,
    "message": "destinasi berhasil ditambahkan",
    "data": {
        "id": 20
    }
}
```
* __[PUT] Update Data__ (/destinations/{id})

Untuk mengubah data destinasi wisata.

_Request data:_
```
{
    "name": "Kota Jakarta",
    "image": "iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVR42mNcLVNbzwAEjDAGACcSA4kB6ARiAAAAAElFTkSuQmCC",
    "location": "Jakarta, Indonesia",
    "website_url": "https://jakarta.go.id/",
    "instagram_url": "https://www.instagram.com/",
    "description": "Kota Besar"
}
```
*image yang dikirim berupa base64 (gunakan [base64-image.de](https://www.base64-image.de/)) atau Anda bisa langsung menggunakan url

_Response data:_
```
{
    "status": "success",
    "code": 200,
    "message": "destinasi berhasil diupdate",
    "data": []
}
```
* __[GET] Get All Destination__ (/destinations)

Untuk mendapatkan semua destinasi dari database.

_Response data:_
```
{
    "status": "success",
    "code": 200,
    "message": "mengambil semua data",
    "data": [
        {
            "id": 1,
            "name": "Kota Depok",
            "image": "https://i.ibb.co/GWrRNrB/085074f6df93.png",
            "location": "Depok, Jawa Barat, Indonesia.",
            "website_url": "https://depok.go.id/",
            "instagram_url": "https://www.instagram.com/",
            "description": "Merupakan penyanggah Ibu Kota"
        },
        {
            "id": 2,
            "name": "Kota Jakarta",
            "image": "https://i.ibb.co/GWrRNrB/085074f6df93.png",
            "location": "Jakarta, Indonesia.",
            "website_url": "https://jakarta.go.id/",
            "instagram_url": "https://www.instagram.com/",
            "description": ""
        },
    ]
}
```
* __[GET] Get Specific Destination__ (/destinations/{id})

Untuk mendapatkan data destinasi berdasarkan `id`.

_Response data:_
```
{
    "status": "success",
    "code": 200,
    "message": "mengambil data",
    "data": {
        "id": 1,
        "name": "Kota Depok",
        "image": "https://i.ibb.co/GWrRNrB/085074f6df93.png",
        "location": "Depok, Jawa Barat, Indonesia.",
        "website_url": "https://depok.go.id/",
        "instagram_url": "https://www.instagram.com/",
        "description": "Merupakan penyanggah Ibu Kota"
    }
}
```
* __[DELETE] Remove Specific Destination__ (/destinations/{id})

Untuk menghapus data destinasi berdasarkan `id`.

_Response data:_
```
{
    "status": "success",
    "code": 200,
    "message": "destinasi berhasil dihapus",
    "data": []
}
```

## Requirements ✅
1. [SQL file](https://github.com/craftalpian/Destination-App/blob/main/destination_app.sql) (_optionals_)
1. [POSTMAN file](https://github.com/craftalpian/Destination-App/blob/main/Destination%20App.postman_collection.json) to test API
