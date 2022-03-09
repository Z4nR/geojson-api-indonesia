
# API Map Indonesia
Berikut ini merupakan API berdasarkan kebutuhan penggunaan map geografis wilayah NKRI untuk proses pengembangan produk yang sedang dikembangkan oleh developer di Indonesia


## Data Map (on up date)

 - Map Provinsi (done)
 - Deskripsi per Provinsi (not yet)
 - Map Kota (154, still update)


## API Reference

#### Base API

```http
  https://geo-api-indonesia.herokuapp.com/geoapi/
```

#### Get Province Map

```http
  GET /get-province-map
```


#### Get Province Detail

```http
  GET /get-prov-detail?prov_id={$prov_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `prov_id`      | `number` | **Required**. Id of province to fetch |

#### Get Province Map on Some Island

```http
  GET /get-prov-onIsland?island={$island}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `island`      | `string` | **Required**. island query of province to fetch |


#### Get City Map in Province

```http
  GET /get-cities-map?prov_id={$prov_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `prov_id`      | `number` | **Required**. Id of province to fetch |


#### Get City Map on Some Island

```http
  GET /get-city-onIsland?island={$island}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `island`      | `string` | **Required**. island query of city to fetch |

## Authors

- [Z4nR](https://github.com/Z4nR)


## Contributing
Thanks to [Ibrahimsyah](https://github.com/Ibrahimsyah) for helping me to build this API.

And other contributions are always welcome!


## License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

