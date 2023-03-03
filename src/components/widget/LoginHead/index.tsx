import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { AtAvatar } from "taro-ui";
import Logo from "../../../assets/image/logo.png";
import styles from "./index.module.scss";

const LoginHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <View className={styles.logoHeader}>
      <AtAvatar className={styles.img} image={Logo} />
      <Text className={styles.title}>{title}</Text>
    </View>
  );
};

export default observer(LoginHeader);
