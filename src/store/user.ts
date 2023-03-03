import { makeAutoObservable } from "mobx";

class User {
  account: string = "";

  num = 0;

  rootTitle = "欢迎登陆优购商城";

  constructor() {
    makeAutoObservable(this);
  }

  handleAddNum() {
    this.num++;
  }

  handleReduce() {
    this.num--;
  }
}

export default User;
