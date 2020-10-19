<script>
import { defineComponent } from "vue";
import { serverIP } from "./server-select";
import axios from "axios";

export default defineComponent({
  name: "piCommunication",
  serverIP() {
    return "http://" + serverIP + ":5000/";
  },
  test() {
    return axios.get(this.serverIP());
  },
  async getPiEndpoint(endpoint) {
    return await axios.get(this.serverIP() + endpoint);
  },
  async postPiEndpoint(endpoint, data) {
    return await axios.post(this.serverIP() + endpoint, data);
  },
});
</script>