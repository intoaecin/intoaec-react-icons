import React from 'react'

const PreferenceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width='18'
    height='19'
    viewBox='0 0 18 19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <mask
      id='mask0_6077_305681'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='18'
      height='19'
    >
      <rect y='0.5' width='18' height='18' fill='url(#pattern0)' />
    </mask>
    <g mask='url(#mask0_6077_305681)'>
      <rect y='0.5' width='18' height='18' fill='#3CA2FF' />
    </g>
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
        <use xlinkHref='#image0_6077_305681' transform='scale(0.0078125)' />
      </pattern>
      <image
        id='image0_6077_305681'
        width='128'
        height='128'
        xlinkHref='data:image/png;base64,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'
      />
    </defs>
  </svg>
)

export default PreferenceIcon
