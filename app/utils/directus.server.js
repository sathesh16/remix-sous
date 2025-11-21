import { authentication, createDirectus, rest } from "@directus/sdk";
import { API_BASE_URL } from "./constants";


export const client = createDirectus(API_BASE_URL)
  .with(rest())
  .with(authentication());