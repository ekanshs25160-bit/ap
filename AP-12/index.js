import pg, { Client } from "pg";
import express from "express";

const client = new Client({
  host: "localhost",
  user: "ekanshshrotriya",
  database: "postgres",
  port: "5432",
});

async function connection() {
  try {
    await client.connect();
    client.query('select * from menu')
    console.log('connected sucessfully')
  } catch (err) {
    console.error(err);
  }
}

connection();

