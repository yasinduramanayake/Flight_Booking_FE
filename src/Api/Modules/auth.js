import { api } from "@/Api/index";
import { setToken, clearToken } from "@/Api/index";
import notification from "@/ApiConstance/toast";

export default {
  async login(payload) {
    return await api.post("/login", payload).then((res) => {
      const token = res.data.token;
      const name = res.data.data.name;
      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      notification.toast("Successfully logged in", "success");

      window.location.href = "/admin";
    });
  },

  async profile() {
    return await api.get("/profile");
  },

  async logout() {
    return await api.get("/logout");
  },
};
