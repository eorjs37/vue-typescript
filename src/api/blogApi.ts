import type { AxiosResponse } from "axios";
import { instance } from "./axios";

const getBlogList = (): Promise<AxiosResponse<any, any>> => {
  return instance.get("/api/bloglist");
};

export { getBlogList };
