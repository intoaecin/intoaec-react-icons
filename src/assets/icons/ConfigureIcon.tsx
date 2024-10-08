import React from 'react'

const ConfigureIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <mask
      id='mask0_687_16671'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='12'
      height='12'
    >
      <rect width='12' height='12' fill='url(#pattern0)' />
    </mask>
    <g mask='url(#mask0_687_16671)'>
      <rect width='12' height='12' fill='white' />
    </g>
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
        <use xlinkHref='#image0_687_16671' transform='scale(0.0078125)' />
      </pattern>
      <image
        id='image0_687_16671'
        width='128'
        height='128'
        xlinkHref='data:image/png;base64,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'
      />
    </defs>
  </svg>
)

export default ConfigureIcon
