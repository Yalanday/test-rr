import {i18n} from "@/app/localization/i18n";
import {pinia} from "@/app/pinia";
import {createApp} from "vue";
import App from "@/app/App.vue";

const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.mount("#app")