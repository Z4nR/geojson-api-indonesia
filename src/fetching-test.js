fetch("http://localhost:5000/get-province-map")
  .then((res) => res.json())
  .then((data) => console.log(data));
