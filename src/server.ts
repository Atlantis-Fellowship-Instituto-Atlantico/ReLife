import express from "express";

const app = express();

app.get("/teste", (request, response) => {
  return response.json([{ id: 1, name: "teste" }]);
});

app.listen(3333, () => console.log("Server is running"));

//feature dfsdfdfs blac k uysauhsu huhsau hshahus
