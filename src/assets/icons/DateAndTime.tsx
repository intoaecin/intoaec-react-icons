import React from 'react'
const DateAndTime: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='-1 0 20 15' {...props}>
    <path d='M0.857557 6.46094C5.90114 6.46094 10.9314 6.46094 15.9714 6.46094C15.9714 7.41943 15.9714 8.36768 15.9714 9.33202C14.9981 9.09703 14.0436 9.13993 13.1147 9.45537C13.1147 9.11556 13.1178 8.77964 13.1142 8.44373C13.1091 7.94255 12.776 7.62712 12.2476 7.62029C12.0049 7.61737 11.7622 7.6159 11.5195 7.62078C11.0081 7.63053 10.6719 7.9523 10.6627 8.44081C10.6581 8.67824 10.6571 8.91615 10.6627 9.15407C10.6739 9.63673 11.0066 9.95119 11.5093 9.95996C11.6657 9.96289 11.822 9.96045 12.0397 9.96045C11.0265 10.6454 10.3587 11.502 10.0357 12.5907C9.71232 13.6813 9.80786 14.7456 10.2846 15.7957C10.2212 15.803 10.1793 15.8118 10.1374 15.8118C7.73494 15.8123 5.33297 15.8167 2.93048 15.8104C1.91062 15.8079 1.11405 15.1975 0.899966 14.2707C0.863177 14.1113 0.850404 13.9446 0.849893 13.7808C0.846827 11.4035 0.847849 9.02682 0.84836 6.64961C0.847338 6.59013 0.853469 6.53065 0.857557 6.46094ZM4.52413 9.95996C4.658 9.95996 4.79238 9.9624 4.92625 9.95947C5.41165 9.94826 5.74173 9.6377 5.75246 9.17747C5.75808 8.922 5.75808 8.66605 5.75246 8.41009C5.74275 7.95961 5.42136 7.64174 4.94771 7.62273C4.6672 7.61152 4.38566 7.61103 4.10515 7.62322C3.6499 7.6432 3.32698 7.94743 3.3045 8.38035C3.29019 8.65386 3.2907 8.92883 3.3045 9.20234C3.32749 9.64599 3.65909 9.94631 4.1215 9.95899C4.25588 9.96337 4.38975 9.95996 4.52413 9.95996ZM9.43231 8.7972C9.43283 8.7972 9.43334 8.7972 9.43385 8.7972C9.43385 8.66946 9.4364 8.54124 9.43334 8.41351C9.4221 7.96156 9.10428 7.6432 8.63166 7.62322C8.35114 7.61152 8.06961 7.61152 7.7891 7.62322C7.33384 7.64223 7.00888 7.94499 6.98538 8.37743C6.97056 8.65679 6.96903 8.93809 6.9864 9.21745C7.01348 9.65184 7.34457 9.94826 7.7983 9.9585C8.07881 9.96484 8.36034 9.96532 8.64085 9.95752C9.08334 9.94485 9.41137 9.63478 9.43078 9.21745C9.43742 9.07753 9.43231 8.93712 9.43231 8.7972ZM5.75143 12.7018C5.75194 12.7018 5.75297 12.7018 5.75348 12.7018C5.75348 12.5741 5.75603 12.4459 5.75297 12.3182C5.74121 11.8487 5.40552 11.5298 4.91603 11.5245C4.66056 11.5215 4.40508 11.522 4.15012 11.5245C3.66931 11.5293 3.32442 11.837 3.30398 12.2938C3.29172 12.5614 3.29121 12.8301 3.30398 13.0977C3.32596 13.5536 3.67085 13.8602 4.15318 13.8646C4.42143 13.8671 4.68968 13.87 4.95742 13.8632C5.39377 13.8519 5.72997 13.536 5.75041 13.1221C5.75757 12.9822 5.75143 12.8418 5.75143 12.7018ZM9.43129 12.6931C9.4318 12.6931 9.43283 12.6931 9.43334 12.6931C9.43334 12.5653 9.4364 12.4371 9.43283 12.3094C9.42005 11.8516 9.08283 11.5308 8.60662 11.5245C8.34501 11.521 8.0829 11.5215 7.82129 11.5245C7.35122 11.5298 7.00837 11.8355 6.98487 12.284C6.97056 12.5575 6.97107 12.8325 6.98487 13.106C7.00684 13.5316 7.33538 13.8475 7.7656 13.8617C8.06553 13.8714 8.36596 13.8724 8.66538 13.8612C9.08078 13.8451 9.4083 13.5272 9.42925 13.1319C9.43794 12.9856 9.43129 12.8393 9.43129 12.6931Z' />
    <path d='M18.8425 13.7516C18.9325 15.8743 17.1436 17.6709 14.8541 17.7576C12.6462 17.8415 10.7547 16.1356 10.6663 13.9802C10.5784 11.837 12.3632 10.0351 14.6533 9.95564C16.8754 9.87861 18.7506 11.5777 18.8425 13.7516ZM14.3416 12.6805C14.3416 13.0461 14.3441 13.4118 14.3406 13.7774C14.339 13.9393 14.3947 14.0709 14.5168 14.1855C14.8949 14.5404 15.2664 14.9012 15.643 15.2571C15.854 15.4565 16.0921 15.4701 16.2689 15.3C16.4446 15.1308 16.4283 14.9061 16.2183 14.7028C15.9133 14.4078 15.6077 14.1128 15.2955 13.8247C15.2005 13.7374 15.1617 13.6482 15.1627 13.5219C15.1693 12.9125 15.1657 12.3031 15.1657 11.6932C15.1657 11.6445 15.1678 11.5957 15.1647 11.547C15.1504 11.2959 14.9844 11.1267 14.7539 11.1267C14.5225 11.1267 14.3487 11.2954 14.3441 11.5465C14.337 11.9243 14.3421 12.3021 14.3416 12.6805Z' />
    <path d='M0.846929 5.65909C0.846929 5.35243 0.843863 5.05503 0.847951 4.75813C0.854082 4.31983 0.835178 3.87862 0.880652 3.44374C0.977222 2.51157 1.9235 1.73688 2.89839 1.78564C2.89839 1.8534 2.89635 1.92312 2.8989 1.99284C2.91219 2.3697 2.88 2.75437 2.95102 3.12099C3.11555 3.9693 3.93869 4.5441 4.84971 4.4973C5.7311 4.45196 6.46482 3.79281 6.55526 2.94402C6.58694 2.64808 6.57263 2.34776 6.57825 2.04939C6.57978 1.96456 6.57825 1.88022 6.57825 1.78125C7.803 1.78125 9.01293 1.78125 10.2586 1.78125C10.2586 1.84804 10.2566 1.91776 10.2591 1.98748C10.2724 2.36434 10.2392 2.749 10.3097 3.11612C10.4732 3.96637 11.2918 4.54166 12.2038 4.49778C13.0847 4.45537 13.8251 3.79574 13.9145 2.94938C13.9482 2.62956 13.9324 2.30437 13.9385 1.98211C13.9395 1.91727 13.9385 1.85194 13.9385 1.78905C14.7872 1.72762 15.666 2.36239 15.9005 3.19022C15.9337 3.30723 15.9685 3.42862 15.97 3.54807C15.9792 4.15115 15.9777 4.75423 15.9797 5.3573C15.9802 5.45384 15.9797 5.55037 15.9797 5.65909C10.9387 5.65909 5.90891 5.65909 0.846929 5.65909Z' />
    <path d='M5.7514 2.15483C5.7514 2.36789 5.75906 2.58094 5.74987 2.7935C5.72687 3.31321 5.27928 3.71835 4.73614 3.71835C4.1976 3.71835 3.73417 3.30882 3.71731 2.79594C3.70351 2.37032 3.70402 1.94373 3.71731 1.51812C3.73366 1.00474 4.19454 0.595217 4.73359 0.593754C5.27571 0.592291 5.72585 0.996943 5.74936 1.51568C5.75958 1.72873 5.7514 1.94227 5.7514 2.15483Z' />
    <path d='M13.1117 2.15824C13.1117 2.3713 13.1199 2.58435 13.1102 2.79691C13.0867 3.31565 12.635 3.72079 12.0934 3.71835C11.5538 3.71591 11.0934 3.30541 11.0776 2.79253C11.0643 2.36691 11.0638 1.94032 11.0781 1.5147C11.095 1.00182 11.5594 0.592777 12.098 0.593752C12.6416 0.594727 13.0877 0.999379 13.1107 1.51909C13.1194 1.73214 13.1117 1.94568 13.1117 2.15824Z' />
  </svg>
)

export default DateAndTime
