import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000",
  timeout: 100000,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});
