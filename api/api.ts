import { ENV } from "@app/constants/env";
import axios from "axios";

export const api = axios.create({
  baseURL: ENV.API,
});
