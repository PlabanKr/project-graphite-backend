const { Pool } = require("pg");

const pool = new Pool({
  database: "project_graphite",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// database query functions
export const getAllUsers = () => {};
export const getUserByID = () => {};
export const getUserByEmail = () => {};
export const createUser = () => {};

export const getAllGradients = () => {};
export const getAllGradientsByUserID = () => {};
export const getGradientByUserID = () => {};
