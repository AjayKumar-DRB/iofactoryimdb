import axios from 'axios';

const BASE_URL = "https://io-factory-mern-backend.vercel.app";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});