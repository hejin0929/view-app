/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconSousuo = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M774.8 751.4l-95.2-95.2c-12.1-12.1-27.9-18.1-43.7-18.2l-18.4-18.4c36.1-48.2 56-106.3 56-167.6 0-74.9-29.2-145.2-82.1-198.2-52.9-52.9-123.3-82.1-198.2-82.1S248 201 195 254C85.8 363.2 85.8 541 195 650.3c54.6 54.6 126.4 82 198.2 82 59.1 0 118-18.8 167.6-55.9l13.9 13.9c-3 18.9 2.6 39 17.2 53.6l95.2 95.2c24.2 24.2 63.5 24.2 87.7 0 24.2-24.2 24.2-63.5 0-87.7zM238.9 606.5c-85.1-85.1-85.1-223.6 0-308.7 41.2-41.2 96-63.9 154.3-63.9s113.1 22.7 154.3 63.9c41.2 41.2 63.9 96 63.9 154.3 0 58.3-22.7 113.1-63.9 154.3-85.1 85.2-223.5 85.2-308.6 0.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconSousuo.defaultProps = {
  size: 18,
};

export default IconSousuo;
