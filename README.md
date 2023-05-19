## Temporary Online

# API Map Indonesia [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Berikut ini merupakan API berdasarkan kebutuhan penggunaan map geografis wilayah NKRI untuk proses pengembangan produk yang sedang dikembangkan oleh developer di Indonesia


## Data Map (on up date)

 - Map Provinsi
 - Deskripsi per Provinsi (belum diperbarui)
 - Map Kota


## API Reference

#### Base API
Base API berikut ini merupakan API dasar yang digunakan untuk mengakses data pada penyimpanan yang ada. Base API tidak dapat berdiri sendiri dan membutuhkan route berdasarkan keperluan. ada beberapa route yang dapat digunakan. diantaranya:

- [Get Province Map](#get-province-all)
- [Get Province Detail](#get-province-detail)
- [Get Province Map on Some Island](#get-prov-onIsland)
- [Get City Map in Province](#get-city-prov)
- [Get City Map](#get-city-map)

```bash
    https://brainy-rose-rugby-shirt.cyclic.app/v1/
```

#### Get Province Map

Route ini digunakan untuk mendapatkan data GeoJSON dari seluruh provinsi yang ada di Indonesia

```http
  GET /get-province-all?page={$page}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `number` | **Required**. Page Number to Load Province Geo Map |


#### Get Province Detail

Route ini digunakan untuk mendapatkan informasi detail mengenai suatu provinsi tertentu.

```http
  GET /get-prov-detail?prov_id={$prov_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `prov_id`      | `number` | **Required**. Id of province to fetch |

#### Get Province Map on Some Island

Route ini digunakan untuk mendapatkan data dari kumpulan beberapa provinsi pada satu wilayah pulau ataupun kepulauan yang sama. Parameter yang digunakan pada route ini berupa nama, sebagai berikut:

- Sumatera (Pulau Sumatera dan pulau disekitarnya)
- Jawa (Pulau Jawa dan pulau disekitarnya)
- Kalimantan (Kalimantan dna pulau disekitarnya)
- BalNusra (Bali, NTT, NTB dan pulau disekitarnya)
- Maluku (Maluku Utara, Maluku dan pulau disekitarnya)
- Sulawesi (Pulau Sulawesi dan pulau disekitarnya)
- Papua (Pulau Papua dan pulau disekitarnya)

```http
  GET /get-prov-onIsland?island={$island}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `island`      | `string` | **Required**. island query of province to fetch |


#### Get City Map in Province

Route ini digunakan untuk mendapatkan data GeoJSON dari seluruh kota yang ada di Indonesia

```http
  GET /get-cities-prov?prov_id={$prov_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `prov_id`      | `number` | **Required**. Id of province to fetch |


#### Get City Map on Some Island

Route ini digunakan untuk mendapatkan data dari kumpulan kota atau kabupaten pada satu wilayah pulau ataupun kepulauan yang sama. Parameter yang digunakan pada route ini berupa nama, sebagai berikut:

- Sumatera (Pulau Sumatera dan pulau disekitarnya)
- Jawa (Pulau Jawa dan pulau disekitarnya)
- Kalimantan (Kalimantan dna pulau disekitarnya)
- BalNusra (Bali, NTT, NTB dan pulau disekitarnya)
- Maluku (Maluku Utara, Maluku dan pulau disekitarnya)
- Sulawesi (Pulau Sulawesi dan pulau disekitarnya)
- Papua (Pulau Papua dan pulau disekitarnya)

```http
  GET /get-city-onIsland?island={$island}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `island`      | `string` | **Required**. island query of city to fetch |

#### Get City Map

Route ini digunakan untuk mendapatkan data GeoJSON dari seluruh kota yang ada di Indonesia

```http
  GET /get-cities-all
```


## Authors

- [Z4nR](https://github.com/Z4nR)


## Contributing
Thanks to [Ibrahimsyah](https://github.com/Ibrahimsyah) for helping me to build this API and [ArrayIterator](https://github.com/ArrayIterator) for creating useful geoAPI structure.

And other contributions are always welcome!

