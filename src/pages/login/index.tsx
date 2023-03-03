import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { AtButton, AtForm, AtInput } from "taro-ui";
import LoginHead from "../../components/widget/LoginHead";
import { useUser } from "../../store/index";
import styles from "./index.module.scss";

const Login: FC = () => {
  const [account, setAccount] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  const storeUser = useUser();

  return (
    <View className={styles.loginPage}>
      <LoginHead title={storeUser.rootTitle} />
      <AtForm className={styles.formData} onSubmit={handleSubmit}>
        <AtInput
          name='account'
          title='账号'
          type='text'
          placeholder='请输入账号'
          value={account}
          onChange={(value: string) => {
            console.log(value);

            setAccount(value);
          }}
          className={styles.account}
        />

        <AtInput
          className={styles.password}
          type='password'
          title='密码'
          name='password'
          placeholder='请输入密码'
          value={password}
          onChange={(v: string) => setPassword(v)}
        />
        <Text
          className={styles.retrieve}
          onClick={() => Taro.navigateTo({ url: "/pages/retrieve/index" })}
        >
          找回密码
        </Text>
        <AtButton type='primary' className={styles.subBtu} formType='submit'>
          登陆
        </AtButton>
        <View className={styles.notAccount}>
          <Text>还没账号？</Text>
          <Text className={styles.register}>注册</Text>
        </View>
      </AtForm>
    </View>
  );
};

export default observer(Login);
