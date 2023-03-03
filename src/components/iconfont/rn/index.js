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

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'xiabiao':
      return <IconXiabiao key="1" {...rest} />;
    case 'geren':
      return <IconGeren key="2" {...rest} />;
    case 'xiugai':
      return <IconXiugai key="3" {...rest} />;
    case 'sousuo':
      return <IconSousuo key="4" {...rest} />;
    case '31fanhui1':
      return <Icon31Fanhui1 key="5" {...rest} />;
    case 'jia':
      return <IconJia key="6" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
