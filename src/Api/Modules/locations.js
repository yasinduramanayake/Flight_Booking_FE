import { api } from "@/Api/index";

export default {
  async index() {
    return await api.get("/Alllocations");
  },
};
