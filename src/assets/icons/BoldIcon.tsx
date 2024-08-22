import React from 'react'

export const BoldIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='13'
      height='13'
      viewBox='0 0 13 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
    >
      <rect x='0.527344' y='0.279297' width='12' height='12' fill='url(#pattern0)' />
      <defs>
        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_9774_7402' transform='scale(0.0078125)' />
        </pattern>
        <image
          id='image0_9774_7402'
          width='128'
          height='128'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  )
}
