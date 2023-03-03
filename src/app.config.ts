import { useGlobalIconFont } from "./components/iconfont/helper";

export default defineAppConfig({
  pages: ["pages/login/index", "pages/index/index", "pages/retrieve/index"],
  usingComponents: Object.assign(useGlobalIconFont()),
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
