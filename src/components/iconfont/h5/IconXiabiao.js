/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconXiabiao = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M173.6 384l311.2 311.2c14.6 14.6 38.3 14.6 52.9 0L848 385c23.5-23.5 6.9-63.8-26.4-63.8l-621.5-0.9c-33.4-0.1-50.1 40.2-26.5 63.7z"
        fill={getIconColor(color, 0, '#666666')}
      />
    </svg>
  );
};

IconXiabiao.defaultProps = {
  size: 18,
};

export default IconXiabiao;
