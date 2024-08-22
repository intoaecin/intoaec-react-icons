import React from 'react'

const AgendaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <mask
      id='mask0_843_46767'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='24'
      height='24'
    >
      <rect width='24' height='24' fill='url(#pattern0)' />
    </mask>
    <g mask='url(#mask0_843_46767)'>
      <rect width='24' height='24' fill='#192A3E' />
    </g>
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
        <use xlinkHref='#image0_843_46767' transform='scale(0.0078125)' />
      </pattern>
      <image
        id='image0_843_46767'
        width='128'
        height='128'
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACxQAAAsUBidZ/7wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAVSSURBVHic7d1diBZVHMfxb7uiu5u5vRCaUQTWjRRBCeHSSnRVUJEYQRBBUEEgSDcRRhRBeFFQURQURAViRF1I1kUXJhS9kF2Y9nIhZRQaJbZZrpqmXRyL3c1nnnOeOWfOnPn/PnAu9Jk5c56ZP8+8nB+zENcE8ClwFDipFr3tB3YBrwNrgFG/w9KMVcBx8u8kS+0n4B5g2OP4JLeD/DvEansPGO9/iP7vjEFWOo1RYDpSXzKYXcAkMBWy0lCkjc+P1I8M7nJgE4Gng1gFIO1wA+6awFusU8A4gT89kszPwKXAIZ+F56Udy3+2Ap83tK0uWwSsBpZULLMEuBl4o5ERnTJO9VXqA00OpuPOAbZQvb83+Xama4Dy/AbcCeytWGaFb2cqgDJNAW9WfL7UtyMVQLn2VXw2hudjYhVAd3nd4akAjBv0NnAMWDDj34v6LD+Ku3qd6S8871WlPVYBXxJvEmM3cIvntodwt5PfR9x+znYQ2Ags9vz+cz3Yp/+xAfvtaYJ0072rPbb/bKJt527fAWd5fP+5Gi+Az/pssE77geqLluXAiYTbz90er/juvUQpgJCLwCsDBxjiYuC8is9XEG/eoo2uybXhkAL4Ndko4DDunNjLgorPuiDb9wspgOeTjQJewt0VSMNCCuAp4GXc+SWmt4H1kfsUTyHPAf4G7gNeBFYy+8p1BHisYt0twEdz/m8a+AL4OGAMvbwA/BGhn5TuwF3rdFLq6eB7+/R/Yc3+m7CV3uPfNkB/jd8FSAepAIxTARinAjBOBWCcCsA4FYBxKgDjlAgyLvQX4N9E0CHgwIy2p896T8xZ/gDwJ2GJIEkgpAAmcI8zr4i4/WXAZvwSQZJASAE8Tbo3UTxDtwMfrVVKIkgSKSURJIkoEWScEkHGdSURtJ72J4KW5R5ASrkTQaW3bQPsEyWCpD4VgHGlFMCR3ANI7HCuDZdSAJ/gLkK76sNcGy6lAHYDG3IPIpGvcY/Zs2jqPYExPIIrhHXAJXmHEsVB4B3gYTKeAkoqAIDXTjWJpJRTgCSiRJAEyfmOIJnN3DuCZLbGHwUrEdRBSgQZp0SQcUoEibdh3IGK/b6+t0hwxWpAlIvAriSCJDP9yZjmKREk9ZU2GQSuaNcAV1Hus4OvcH/V61jugZRWAAtxU6jXZR5HDOuAG0l7e91XaaeADXTj4ANcDTyXexClFcBduQcQ2W3AmTkHUFIBDJF5ZyUwjArA2wlcOLRLvgV+yTmAkgoAYC0Z83ORHQfuzz2I0hJBO3AXT0/i/orI/MD12+AYsBN4CNieeSzBlAhqDyWCjFMiSOpTIsg4JYKMUyJIvCkR1C5mE0GaDm6hphJBC4EP+myrlLYdOL/GvjCZCNJ0cGSlFYCmgyMrqQA0HZxASQWg6eAESioA0HRwdKWFQjUdHFlpBQDwDXBT7kF0RWmnAImstESQZKZEUHsoEWScEkFSnxJBxikRZJwSQeJNiaB2MZsIkhbSO4KaZzIRJJGpAIxTARinAjBOBWCcCsA4FYBxKgDjlAiSIEoEtYcSQcYpEST1KRFknBJBxikRJN6UCGoXJYKkPZQIap4SQVKfCsA4FUB3nfRZSAVQrqUVn03j+SodFUCZzgZur/h8r29HKoDynAtsBC6oWMb73UNNvSPoesp8oVObzAMuAm4FFvdZdrNvp7Fm4MaBqUh9ST37gMvwDNvoFNA9jxKQtFIBdMv7wCshK8Q6BYzQnTd4lmonMAn8HrJSrF+AI7isoOTxLnAtgQc/tknSZQbVTt9+BO6mRafylbjp3aPk3zldbPtxP/Wv4oK0I15HpcI/mU3N+vB37soAAAAASUVORK5CYII='
      />
    </defs>
  </svg>
)

export default AgendaIcon
