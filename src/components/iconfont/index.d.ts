/* eslint-disable */
import React, { FunctionComponent } from 'react';

interface Props {
  name: 'xiabiao' | 'geren' | 'xiugai' | 'sousuo' | '31fanhui1' | 'jia';
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
