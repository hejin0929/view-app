/* eslint-disable */

import React from 'react';
import IconXiabiao from './IconXiabiao';
import IconGeren from './IconGeren';
import IconXiugai from './IconXiugai';
import IconSousuo from './IconSousuo';
import Icon31Fanhui1 from './Icon31Fanhui1';
import IconJia from './IconJia';
export { default as IconXiabiao } from './IconXiabiao';
export { default as IconGeren } from './IconGeren';
export { default as IconXiugai } from './IconXiugai';
export { default as IconSousuo } from './IconSousuo';
export { default as Icon31Fanhui1 } from './Icon31Fanhui1';
export { default as IconJia } from './IconJia';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'xiabiao':
      return <IconXiabiao {...rest} />;
    case 'geren':
      return <IconGeren {...rest} />;
    case 'xiugai':
      return <IconXiugai {...rest} />;
    case 'sousuo':
      return <IconSousuo {...rest} />;
    case '31fanhui1':
      return <Icon31Fanhui1 {...rest} />;
    case 'jia':
      return <IconJia {...rest} />;

  }

  return null;
};

export default IconFont;
