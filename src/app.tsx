import { Component, PropsWithChildren } from "react";
import "taro-ui/dist/style/index.scss"; // 全局引入一次即可
import StoreContext, { store } from "./store";
import "./app.scss";

class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 就是要渲染的页面
  render() {
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export default App;
