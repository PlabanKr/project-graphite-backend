const cors = require("cors");
const express = require("express");
const gradientRoutes = require("./routes/gradient.route");
const userRoutes = require("./routes/user.route");

const server = express();
const frontendOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:3000";
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(cors({ origin: frontendOrigin, credentials: true }));

server.get("/", (req, res) => {
  res.send("Project Graphite Backend is up and running :)");
});

server.use("/gradient", gradientRoutes);
server.use("/user", userRoutes);

server.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
