/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconXiugai = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M36.571429 1015.442286v-109.714286h950.857142v109.714286H36.571429z m219.428571-182.857143H36.571429v-219.428572l466.285714-479.085714 205.531428 205.494857 51.931429-51.748571-206.262857-206.153143L604.891429 29.220571a73.142857 73.142857 0 0 1 103.497142 0l103.497143 103.460572a73.142857 73.142857 0 0 1 0 103.424z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconXiugai.defaultProps = {
  size: 18,
};

export default IconXiugai;
