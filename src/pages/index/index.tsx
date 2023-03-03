import { FC } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer } from "mobx-react-lite";
import IconFont from "../../components/iconfont";
import { useUser } from "../../store";

import "./index.scss";

const Index: FC = () => {
  const storeUser = useUser();

  return (
    <View className='index'>
      <Button onClick={() => storeUser.handleAddNum()}>+</Button>
      <Button onClick={() => storeUser.handleReduce()}>-</Button>
      {/* <Button onClick={this.incrementAsync}>Add Async</Button> */}
      {/* <AtButton type='primary'>按钮文案</AtButton> */}
      <Text>{storeUser.num}</Text>
      <IconFont name='jia' size={36} />
    </View>
  );
};

export default observer(Index);
