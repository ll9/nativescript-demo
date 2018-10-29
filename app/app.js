import Vue from "nativescript-vue";

import Home from "./components/Home";
import Data from "./components/Data";

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home,
        Data
    }
}).$start();
