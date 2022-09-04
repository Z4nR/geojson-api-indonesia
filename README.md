
# API Map Indonesia
Berikut ini merupakan API berdasarkan kebutuhan penggunaan map geografis wilayah NKRI untuk proses pengembangan produk yang sedang dikembangkan oleh developer di Indonesia


## Data Map (on up date)

 - Map Provinsi
 - Deskripsi per Provinsi (belum diperbarui)
 - Map Kota (154, masih terus diperbarui)


## API Reference

#### Base API
Base API berikut ini merupakan API dasar yang digunakan untuk mengakses data pada penyimpanan yang ada. Base API tidak dapat berdiri sendiri dan membutuhkan route berdasarkan keperluan. ada beberapa route yang dapat digunakan. diantaranya:

- [Get Province Map](#get-province-map)
- [Get Province Detail](#get-province-detail)
- [Get Province Map on Some Island](#get-province-map-on-some-island)
- [Get City Map in Province](#get-city-map-in-province)
- [Get City Map on Some Island](#get-city-map-on-some-island)
- [Get City Map](#get-city-map)

```http
  https://geo-api-indonesia.herokuapp.com/geoapi/
```

#### Get Province Map

Route ini digunakan untuk mendapatkan data GeoJSON dari seluruh provinsi yang ada di Indonesia

```http
  GET /get-province-all
```


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
Thanks to [Ibrahimsyah](https://github.com/Ibrahimsyah) for helping me to build this API.

And other contributions are always welcome!


## License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

