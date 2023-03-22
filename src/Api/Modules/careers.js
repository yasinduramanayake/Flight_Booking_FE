import { api } from "@/Api/index";
import notification from "@/ApiConstance/toast";

export default {
  async Add(payload) {
    return await api.post("/addcareer", payload).then((res) => {
      notification.toast("Successfully Applied Position.", "success");
      setTimeout(() => {
        window.location.href = "/careers";
      }, 1000);
    });
  },

  async index(position = "", per_page = "", current_page = "") {
    return await api.get(
      `/AllCareers?filter[position]=${position}&per_page=${per_page}&page=${current_page}`
    );
  },
};
