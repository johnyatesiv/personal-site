import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
    PxGitCommit,
    PxBookmark,
    PxHeadphone,
    HiDocumentDownload,
    FaRegularHandshake, 
    FaCreativeCommons
} from "oh-vue-icons/icons";

addIcons(
    PxGitCommit,
    PxBookmark,
    PxHeadphone,
    HiDocumentDownload,
    FaRegularHandshake,
    FaCreativeCommons
);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount('#app')
