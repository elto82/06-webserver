import { createServer } from "http";

const server = createServer((req, res) => {
  console.log(req);
  // res.writeHead(200, { "Content-Type": "application/json" });
  res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
  res.writeHead(200, { "Content-Type": "application/csv" });

  // const persona = {
  //   id: 1,
  //   nombre: "Juan",
  //   apellido: "Perez",
  // };
  // res.write(JSON.stringify(persona));
  res.write("id, nombre\n");
  res.write("1, Juan\n");
  res.write("2, Pedro\n");
  res.write("3, Maria\n");
  res.end();
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
