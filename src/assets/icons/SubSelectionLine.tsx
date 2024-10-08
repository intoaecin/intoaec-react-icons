import React from 'react'

const SubSelectionLine: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox='0 0 30 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <line x1='0.941406' y1='32.375' x2='0.94141' y2='0.585937' stroke='#3CA2FF' />
    <line x1='17.9492' y1='32.3594' x2='0.4375' y2='32.3594' stroke='#3CA2FF' />
    <circle cx='4' cy='4' r='4' transform='matrix(-1 0 0 1 27.1875 28.1562)' fill='#3CA2FF' />
    <path
      d='M17.1875 32.1562C17.1875 35.47 19.8738 38.1562 23.1875 38.1562C26.5012 38.1562 29.1875 35.47 29.1875 32.1562C29.1875 28.8425 26.5012 26.1562 23.1875 26.1562C19.8738 26.1562 17.1875 28.8425 17.1875 32.1562ZM28.3826 32.1562C28.3826 35.0254 26.0567 37.3514 23.1875 37.3514C20.3183 37.3514 17.9924 35.0254 17.9924 32.1562C17.9924 29.2871 20.3183 26.9611 23.1875 26.9611C26.0567 26.9611 28.3826 29.2871 28.3826 32.1562Z'
      fill='#3CA2FF'
    />
  </svg>
)

export default SubSelectionLine
