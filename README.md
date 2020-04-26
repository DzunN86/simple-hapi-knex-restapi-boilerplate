# simple-hapi-knex-restapi-boilerplate

Sebuah boilerplate atau stater kit sederhana untuk memulai pengembangan REST-API di Node.js menggunakan framework [hapi](https://hapi.dev) & [knex](http://knexjs.org). Tujuan dari ini adalah untuk pengenalan dan pembelajaran awal, sehingga tentunya **banyak kekurangan** untuk kebutuhan production.

## Requirements

- Node.js 12+
- MySQL / MariaDB atau database enggine lain yg disupport oleh Knex.

## Stuktur File & Direktori

```
├── knex
│   ├── migrations          // Berisi file migrasi database (pembuatan table-table yang diperlukan dalam db).
│   └── seeds               // Berisi file seed (data awal yg perlu diinsert ke db).
├── src
│   ├── routes              // Berisi file pendefinisian route.
│   ├── handlers            // Berisi file handler (untuk mengisi opsi "handler" pada pendefinisikan route).
│   ├── validations         // Berisi file validasi (untuk mengisi opsi "validate" pada pendefinisikan route).
│   ├── helpers             // Berisi library file pendukung, seperti fungsi-fungsi yang sering dipakai.
│   ├── config.js           // File konfigurasi umum
│   ├── database.js         // File inisialisasi knex dengan konfigurasi & env sehingga nantinya me-require knex yang siap pakai.
│   └── server.js           // File initiliasi Hapi & konfigurasi utama dari aplikasi.
├── index.js
└── knexfile.js             // Konfigurasi khusus knex
```

## Instalasi & Penggunaan

- Meng-clone repository ini.
- Hapus direktori `.git`.
- Rename nama project atau ubah beberapa nilai yang diperlukan pada file `package.json`.

Install knex SQL builder secara global, agar nantinya bisa menjalankan perintah knex pada mode CLI, seperti untuk menjalankan perintah migrasi database.

    $ npm install -g knex

Install semua paket yang dibutuhkan

    $ npm install

### Migrasi Database

Migrasi database disini adalah melakukan create table yang dibutuhkan aplikasi.

Untuk menjalankan migrasi, gunakan perintah knex cli berikut.

    $ knex migrate:latest --env [development / production]

Perintah ini mengeksekusi file-file di `./knex/migrations`

### Memasukkan Data Awal

Untuk memasukkan data awal, gunakan pula perintah knex cli berikut.

    $ knex seed:run --env [development / production]

Perintah ini mengeksekusi file-file di `./knex/seeds`

### Menjalankan Aplikasi

Selanjutnya adalah menjalankan aplikasi. Perintah yang digunakan

    $ npm run dev

atau

    $ npm run prod

Selanjutnya aplikasi bisa diakses melalui http://localhost:3003.

Pada boilerplate ini terdapat contoh API users yang bisa diakses di http://localhost:3003/api/users

## Membuat API Baru

- Buat file route pada direktori `./src/routes`.
- Pendefinisian handler bisa diletakkan pada direktori `./src/handlers`.
- Pendefinisian validasi bisa diletakkan pada direktori `./src/validations`.
- Selanjutnya tinggal menjalankan. Dah gitu ajah...

## Dokumentasi

Disini tidak akan menjelaskan bagaimana Hapi & bagimana knex secara detail.
Silahkan langsung merujuk pada dokumentasi resmi berikut.

- [Hapi](https://hapi.dev/api/)
- [Knex](http://knexjs.org/)
