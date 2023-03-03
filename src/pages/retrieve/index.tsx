import { View } from "@tarojs/components";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useUser } from "src/store";
import LoginHead from "../../components/widget/LoginHead";

const Retrieve: FC = () => {
  const userStore = useUser();

  return (
    <View>
      <LoginHead title={userStore.rootTitle} />
    </View>
  );
};

export default observer(Retrieve);
