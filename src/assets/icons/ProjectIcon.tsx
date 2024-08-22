import React from 'react'

const ProjectIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' {...props} viewBox='0 0 13 13'>
    <g>
      <path d='M2.66604 2.92757C2.66604 2.88922 2.66604 2.8512 2.66604 2.81286C2.66604 2.25701 2.66507 1.70116 2.66636 1.14531C2.66765 0.530488 3.04672 0.14961 3.66076 0.149288C5.57059 0.147999 7.48009 0.148321 9.38992 0.149288C10.0117 0.14961 10.3888 0.529521 10.3898 1.1524C10.3904 1.85744 10.3901 2.56216 10.3901 3.2672C10.3901 3.31521 10.3901 3.36323 10.3901 3.43057C10.4446 3.43057 10.4913 3.43057 10.5384 3.43057C11.1267 3.43057 11.7149 3.43025 12.3032 3.4309C12.5143 3.4309 12.5662 3.4831 12.5662 3.69545C12.5662 6.07996 12.5668 8.4648 12.5659 10.8493C12.5656 11.6162 12.0353 12.1473 11.2669 12.1476C8.73268 12.1489 6.19849 12.1486 3.66431 12.1476C3.0451 12.1473 2.66701 11.7654 2.66669 11.1422C2.66604 9.42634 2.66733 7.71013 2.66378 5.99425C2.66378 5.91852 2.64154 5.8341 2.60415 5.76836C1.95787 4.63604 1.3074 3.50598 0.658869 2.37494C0.514141 2.12231 0.537672 1.95314 0.741064 1.74595C0.906421 1.57742 1.10788 1.47366 1.33609 1.4192C1.59009 1.35862 1.76286 1.43338 1.89502 1.65991C2.12194 2.04917 2.34886 2.43874 2.57579 2.828C2.59706 2.86409 2.61898 2.89986 2.64058 2.93563C2.64863 2.93305 2.65734 2.93015 2.66604 2.92757ZM10.3601 11.7761C10.0198 11.4355 9.99462 11.0378 9.99526 10.6212C10.0004 7.47104 9.99816 4.3209 9.99816 1.17108C9.99816 0.743805 9.77704 0.520176 9.35317 0.519854C7.4556 0.519532 5.55802 0.519532 3.66012 0.519854C3.23657 0.519854 3.019 0.736716 3.01867 1.15948C3.01803 1.94895 3.01738 2.73842 3.02061 3.52821C3.02093 3.59266 3.03995 3.66451 3.07186 3.72058C3.64368 4.71918 4.21937 5.71616 4.7928 6.71379C4.81633 6.75472 4.83857 6.80112 4.84308 6.84687C4.87983 7.23162 4.91206 7.61669 4.94591 8.00175C4.95461 8.09874 4.94591 8.1938 4.8534 8.24633C4.75831 8.30014 4.67579 8.24665 4.59811 8.19122C4.28963 7.97178 3.97987 7.7546 3.67333 7.53258C3.62305 7.49617 3.57728 7.44655 3.54569 7.39338C3.39484 7.14139 3.24979 6.88586 3.10216 6.63195C3.0883 6.6081 3.06831 6.58748 3.03737 6.54784C3.03737 6.73087 3.03737 6.88812 3.03737 7.04505C3.03737 8.41453 3.03801 9.78434 3.03672 11.1538C3.0364 11.3491 3.08733 11.5196 3.24205 11.6481C3.37066 11.7545 3.52313 11.777 3.68397 11.7767C5.85553 11.7757 8.02709 11.7761 10.1987 11.7761C10.2389 11.7761 10.2786 11.7761 10.3601 11.7761ZM1.70613 2.07881C1.65907 1.996 1.62297 1.91415 1.56978 1.84552C1.54303 1.81136 1.48308 1.78042 1.44149 1.78429C1.26228 1.80008 1.1082 1.87903 0.995385 2.02017C0.966053 2.05722 0.948002 2.1294 0.963797 2.17065C0.997964 2.26216 1.05695 2.34433 1.1082 2.43488C1.31417 2.31211 1.50725 2.19739 1.70613 2.07881ZM4.09011 7.38597C4.25321 7.49617 4.39762 7.59413 4.55878 7.70304C4.53848 7.50713 4.52075 7.33667 4.50076 7.14462C4.35958 7.22775 4.23355 7.30187 4.09011 7.38597Z' />
      <path d='M7.41094 4.88963C7.50377 4.88963 7.58371 4.88673 7.66332 4.89027C7.77872 4.89543 7.85576 4.96664 7.85704 5.06396C7.85866 5.1719 7.78613 5.24537 7.66042 5.24602C6.92743 5.24827 6.19413 5.24827 5.46114 5.24634C5.33188 5.24602 5.2542 5.16772 5.25678 5.05719C5.25936 4.95085 5.34317 4.87513 5.46791 4.8703C5.53979 4.8674 5.61167 4.86965 5.71385 4.86965C5.67968 4.73238 5.67162 4.59898 5.61457 4.49135C5.514 4.30123 5.40441 4.10886 5.26258 3.94936C4.79069 3.41832 4.63854 2.81413 4.86482 2.14615C5.09529 1.46527 5.59201 1.05475 6.30179 0.933267C7.27362 0.766996 8.2374 1.51941 8.3341 2.49835C8.39212 3.089 8.21709 3.59361 7.79806 4.01348C7.56147 4.25097 7.42093 4.53066 7.41094 4.88963ZM7.0496 4.88512C7.06765 4.44753 7.23269 4.09049 7.54213 3.79372C7.92409 3.42734 8.07688 2.97589 7.98275 2.4542C7.87413 1.85421 7.40255 1.41468 6.78593 1.31866C6.21637 1.22972 5.63713 1.51908 5.34252 2.03949C5.04662 2.56215 5.10206 3.19082 5.5053 3.6471C5.82054 4.00381 6.05165 4.39275 6.07938 4.88093C6.18091 4.88093 6.27535 4.88093 6.37689 4.88093C6.37689 4.63539 6.37689 4.39823 6.37689 4.16106C6.37689 4.1253 6.37689 4.08921 6.37689 4.05215C6.3366 4.03733 6.30275 4.0254 6.26955 4.01219C5.9556 3.88684 5.75704 3.55527 5.80185 3.23142C5.85245 2.86311 6.13353 2.58599 6.49422 2.54829C6.8346 2.51285 7.17047 2.72713 7.28942 3.05613C7.409 3.38674 7.30714 3.77406 6.99093 3.92519C6.75466 4.03797 6.7408 4.18845 6.75402 4.395C6.76433 4.55741 6.75595 4.7211 6.75595 4.88512C6.86232 4.88512 6.95 4.88512 7.0496 4.88512Z' />
      <path d='M7.29402 5.95711C7.89001 5.95711 8.48569 5.95679 9.08168 5.95743C9.22512 5.95743 9.29281 6.0106 9.30216 6.12499C9.31151 6.24164 9.25091 6.31769 9.1339 6.33316C9.11005 6.33638 9.08555 6.33541 9.0617 6.33541C7.8739 6.33541 6.68642 6.33573 5.49862 6.33541C5.34164 6.33541 5.27138 6.28611 5.25945 6.17268C5.24559 6.03896 5.32005 5.96001 5.47058 5.9584C5.73231 5.95582 5.99405 5.95776 6.25578 5.95776C6.60165 5.95711 6.94783 5.95711 7.29402 5.95711Z' />
      <path d='M7.3748 7.81649C7.9463 7.81649 8.51811 7.81616 9.08961 7.81681C9.23563 7.81713 9.30719 7.88706 9.29977 8.01756C9.29462 8.11004 9.24788 8.16869 9.15601 8.18415C9.11282 8.19156 9.06802 8.19156 9.02386 8.19156C7.92502 8.19189 6.82586 8.19189 5.72703 8.19189C5.51945 8.19189 5.43951 8.13807 5.44144 8.00113C5.44337 7.86579 5.52106 7.81649 5.73251 7.81649C6.27983 7.81649 6.82715 7.81649 7.3748 7.81649Z' />
      <path d='M7.40022 7.27105C6.84452 7.27105 6.28849 7.2717 5.73279 7.27041C5.57323 7.27009 5.50296 7.21273 5.50006 7.08867C5.49781 6.98266 5.55615 6.91176 5.66059 6.89759C5.69217 6.8934 5.72505 6.89501 5.75696 6.89501C6.85644 6.89501 7.95592 6.89501 9.05573 6.89501C9.09602 6.89501 9.13792 6.89179 9.17563 6.9021C9.27233 6.92852 9.32649 6.99426 9.32101 7.09673C9.31585 7.19372 9.2617 7.25301 9.16403 7.26557C9.12019 7.27137 9.07571 7.27073 9.03155 7.27073C8.48777 7.27137 7.944 7.27138 7.40022 7.27105Z' />
      <path d='M7.3826 10.9818C6.81916 10.9818 6.25572 10.9824 5.69228 10.9815C5.55142 10.9811 5.47374 10.9138 5.47664 10.7955C5.47922 10.6947 5.52789 10.6273 5.63329 10.6145C5.67713 10.609 5.72161 10.6096 5.76577 10.6096C6.85236 10.6093 7.93927 10.6093 9.02586 10.6096C9.06615 10.6096 9.10676 10.608 9.14641 10.6135C9.24279 10.6273 9.29855 10.6815 9.29952 10.7827C9.30081 10.889 9.25536 10.9612 9.14512 10.9789C9.10966 10.9847 9.07292 10.9818 9.03649 10.9818C8.48563 10.9818 7.93411 10.9818 7.3826 10.9818Z' />
      <path d='M5.36887 9.6761C5.85172 9.6761 6.33458 9.67546 6.81743 9.67643C6.96281 9.67675 7.03211 9.73862 7.03179 9.86139C7.03179 9.96933 6.97377 10.0338 6.86514 10.0444C6.83323 10.0476 6.80067 10.0463 6.76876 10.0463C5.83947 10.0463 4.90986 10.0467 3.98058 10.046C3.92868 10.046 3.87227 10.0496 3.82586 10.0315C3.73528 9.99672 3.70208 9.91778 3.71916 9.8253C3.73657 9.73088 3.79781 9.67739 3.89645 9.67675C4.08147 9.67546 4.26649 9.6761 4.45183 9.67578C4.7574 9.67578 5.06297 9.67578 5.36887 9.6761Z' />
      <path d='M7.68522 9.12967C7.23428 9.12967 6.78366 9.12967 6.33271 9.12967C6.29242 9.12967 6.25181 9.13128 6.21216 9.12548C6.1132 9.11066 6.06517 9.04524 6.0626 8.95018C6.06002 8.84933 6.10933 8.78166 6.21216 8.762C6.23956 8.75685 6.26825 8.75813 6.29661 8.75813C7.22654 8.75781 8.15615 8.75749 9.08609 8.75846C9.25789 8.75846 9.32816 8.83354 9.30044 8.98273C9.2782 9.10163 9.19342 9.13063 9.08609 9.13031C8.61902 9.12902 8.15196 9.12967 7.68522 9.12967Z' />
      <path d='M4.65615 8.75816C4.88565 8.75816 5.11515 8.75719 5.34498 8.75848C5.49518 8.75945 5.57383 8.82615 5.57222 8.94667C5.57061 9.06331 5.49486 9.12873 5.35175 9.12905C4.88049 9.13034 4.40924 9.13034 3.93799 9.12905C3.80003 9.12873 3.71816 9.05848 3.71494 8.9457C3.71171 8.82712 3.79294 8.75913 3.94283 8.75848C4.18071 8.75719 4.41859 8.75816 4.65615 8.75816Z' />
      <path d='M8.42499 9.67676C8.65417 9.67676 8.88302 9.67418 9.1122 9.6774C9.26789 9.67966 9.37136 9.82434 9.2969 9.94485C9.26692 9.99319 9.19117 10.0409 9.13573 10.0418C8.66577 10.0496 8.19548 10.0476 7.72552 10.0451C7.60626 10.0444 7.53535 9.9658 7.53921 9.85527C7.54308 9.74862 7.61142 9.67901 7.72617 9.67772C7.95889 9.67482 8.19194 9.67708 8.42499 9.67676Z' />
      <path d='M4.34211 10.9822C4.19771 10.9822 4.05298 10.9845 3.90858 10.9813C3.78802 10.9787 3.71582 10.9072 3.71485 10.7979C3.71389 10.6884 3.78383 10.6139 3.906 10.6123C4.18675 10.6085 4.46782 10.6084 4.74858 10.612C4.87203 10.6136 4.95068 10.6958 4.94939 10.8053C4.9481 10.9194 4.87719 10.9803 4.73923 10.9822C4.60675 10.9835 4.47459 10.9822 4.34211 10.9822Z' />
    </g>
  </svg>
)

export default ProjectIcon
