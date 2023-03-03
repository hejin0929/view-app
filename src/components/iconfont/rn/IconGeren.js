/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconGeren = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M870.314 877.39C777.938 967.975 651.552 1024 512 1024 229.24 1024 0.018 794.742 0.018 511.981 0.018 229.221 229.24 0 512 0s511.982 229.222 511.982 511.982c0 143.21-58.914 272.485-153.668 365.41zM512 950.86c103.932 0 199.307-36.314 274.496-96.728C746.45 740.398 639.447 658.262 512 658.262c-127.447 0-234.451 82.136-274.496 195.87C312.693 914.546 408.068 950.86 512 950.86z m0-877.684c-242.35 0-438.842 196.492-438.842 438.842 0 109.528 40.374 209.4 106.712 286.308C237.724 672.597 364.513 585.158 512 585.158c147.45 0 274.276 87.44 332.13 213.168 66.338-76.87 106.712-176.78 106.712-286.308 0-242.35-196.492-438.842-438.842-438.842z m0 475.412c-101.007 0-182.85-81.88-182.85-182.85 0-101.007 81.843-182.851 182.85-182.851 100.97 0 182.85 81.844 182.85 182.85 0 100.97-81.88 182.851-182.85 182.851z m0-292.561c-60.597 0-109.71 49.114-109.71 109.674 0 60.596 49.113 109.71 109.71 109.71 60.597 0 109.71-49.114 109.71-109.71 0-60.56-49.113-109.674-109.71-109.674z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconGeren.defaultProps = {
  size: 18,
};

IconGeren = React.memo ? React.memo(IconGeren) : IconGeren;

export default IconGeren;
