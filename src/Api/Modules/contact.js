import { api } from "@/Api/index";
import notification from "@/ApiConstance/toast";

export default {
  async Add(payload) {
    return await api.post("/addcontact", payload).then((res) => {
      notification.toast("Successfully Send Your Response.", "success");
      setTimeout(() => {
        window.location.href = "/contact";
      }, 1000);
    });
  },

  async index(created_at = "", per_page = "", current_page = "") {
    return await api.get(
      `/AllContacts?filter[created_at]=${created_at}&per_page=${per_page}&page=${current_page}`
    );
  },
};
