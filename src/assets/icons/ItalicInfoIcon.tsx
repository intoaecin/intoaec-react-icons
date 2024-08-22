import React from 'react'

const ItalicInfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <mask
      id='mask0_546_17391'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='20'
      height='20'
    >
      <rect x='0.375' width='19.1682' height='20' fill='url(#pattern0)' />
    </mask>
    <g mask='url(#mask0_546_17391)'>
      <rect x='0.375' width='19.1682' height='20' fill='#323C47' />
    </g>
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
        <use xlinkHref='#image0_546_17391' transform='matrix(0.0081515 0 0 0.0078125 -0.0216963 0)' />
      </pattern>
      <image
        id='image0_546_17391'
        width='128'
        height='128'
        xlinkHref='data:image/png;base64,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'
      />
    </defs>
  </svg>
)

export default ItalicInfoIcon
