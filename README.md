
# Indonesian Map API

This API is use for every one, who need more data about Indonesian Map in their application.


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

