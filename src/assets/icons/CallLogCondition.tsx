import React from 'react'

const CallLogCondition: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M1.42447 24.0574C1.34407 24.0507 1.25697 24.044 1.17657 24.0373C0.854973 24.0105 0.627177 23.7827 0.627177 23.4678C0.627177 21.9469 0.566877 20.4193 0.647276 18.9052C0.787974 16.2922 2.80465 14.041 5.38412 13.4916C5.50472 13.4648 5.63202 13.4447 5.75262 13.4179C5.75932 13.3777 5.73252 13.3576 5.69902 13.3442C4.67393 12.7948 3.93694 11.9774 3.48804 10.9121C3.47464 10.8853 3.45454 10.8518 3.44114 10.825C3.40095 10.691 3.35405 10.557 3.33395 10.4163C3.30715 10.2288 3.20665 10.1819 3.03915 10.2287C2.55675 10.1484 2.32226 9.82006 2.24186 9.37786C2.14136 8.86197 2.22176 8.38627 2.67735 8.05127C2.81135 7.95078 2.84485 7.85698 2.84485 7.70958C2.83815 6.59069 2.83815 5.46511 2.84485 4.34622C2.84485 3.66283 3.13965 3.14023 3.72924 2.79184C3.83644 2.73154 3.91014 2.64444 3.99054 2.56404C4.62703 1.87395 5.34392 1.31785 6.28861 1.13026C7.4142 0.909158 8.44599 1.20395 9.41748 1.74665C9.59837 1.84715 9.75247 1.86055 9.94007 1.80025C10.4426 1.63945 10.8982 1.41165 11.1997 0.942656C11.2935 0.795258 11.3872 0.801959 11.5078 0.895758C11.7624 1.08336 11.8964 1.34465 11.9768 1.63945C12.0036 2.00795 11.8897 2.32954 11.6285 2.61764C12.017 2.72484 12.3118 2.93253 12.5664 3.20053C12.6535 3.34793 12.7473 3.50203 12.8344 3.64943C12.9416 4.00452 12.9416 4.37302 12.9416 4.74151C12.9349 5.7465 12.9416 6.74479 12.9416 7.74978C12.9416 7.84358 12.9014 7.94408 13.0287 8.01107C13.3034 8.14507 13.4508 8.39297 13.5178 8.67437C13.558 8.84187 13.625 8.82847 13.7389 8.77487C14.4156 8.86867 14.8578 9.31086 15.2665 9.79325C15.3268 9.86695 15.3871 9.94735 15.4474 10.0278C15.8896 10.7982 15.7422 11.5285 15.3268 12.2588C15.0923 12.6675 14.8511 13.0628 14.5764 13.4447C14.5161 13.5251 14.4625 13.5787 14.5831 13.6859C15.5144 14.4832 15.6819 15.4212 15.1124 16.5066C15.0923 16.5468 14.9985 16.6138 15.099 16.6473C15.3 16.7143 15.2665 16.8751 15.2665 17.0225C15.2665 17.7193 15.2397 18.4094 15.1727 19.1061C15.0923 19.9771 15.1526 20.8615 15.1526 21.7392C15.1526 22.0005 15.1325 22.2551 15.0588 22.5097C14.7506 23.4812 13.9198 24.0641 12.821 24.0641C9.12938 24.0641 5.44442 24.0641 1.75276 24.0641C1.63886 24.044 1.53167 24.0507 1.42447 24.0574ZM11.4743 13.8266C11.548 13.8735 11.615 13.9271 11.6753 13.8065C11.7222 13.7127 11.8227 13.6457 11.8361 13.5318C11.9031 13.4849 11.9634 13.438 12.0304 13.3911C12.5865 13.17 12.8813 12.6943 13.1694 12.2119C13.2766 12.031 13.3168 11.8367 13.1359 11.6625C12.888 11.3342 12.5195 11.093 12.3989 10.5972C11.9299 11.8702 11.1327 12.7814 9.94007 13.3978C10.5163 13.4916 10.9987 13.6457 11.4743 13.8266ZM14.63 22.3757C14.7104 22.2618 14.7372 22.1412 14.7372 22.0005C14.7372 21.0156 14.7305 20.024 14.7372 19.0392C14.7372 18.865 14.6903 18.7913 14.496 18.7913C13.6451 18.8047 12.7875 18.798 11.9366 18.7913C11.7557 18.7913 11.7088 18.8516 11.7155 19.0257C11.7289 19.421 11.7155 19.8096 11.7222 20.2049C11.7222 20.3657 11.7222 20.5265 11.5012 20.5198C11.2935 20.5131 11.3203 20.3389 11.3203 20.1982C11.3203 19.1262 11.3203 18.0543 11.3203 16.989C11.3203 16.922 11.3404 16.8416 11.2935 16.7679C11.2064 16.8148 11.126 16.855 11.0456 16.9086C10.8781 17.0158 10.5967 17.0292 10.5364 17.19C10.4761 17.3642 10.6503 17.5786 10.7441 17.7595C10.8312 17.9404 10.8111 18.0811 10.7106 18.2486C10.322 18.8984 9.94677 19.5617 9.56487 20.2183C9.50457 20.3188 9.45767 20.4193 9.45767 20.5466C9.46437 21.5114 9.46437 22.4695 9.45767 23.4343C9.45767 23.5817 9.49118 23.642 9.65197 23.642C10.1478 23.6353 10.6369 23.6353 11.1327 23.642C11.3002 23.642 11.327 23.575 11.3203 23.4343C11.3136 23.1663 11.3203 22.8983 11.3136 22.6303C11.3136 22.4762 11.3471 22.3422 11.5212 22.3489C11.6954 22.3489 11.7222 22.4963 11.7222 22.637C11.7222 22.838 11.7289 23.039 11.7289 23.24C11.7289 23.2869 11.7289 23.3405 11.7155 23.3874C11.6753 23.5951 11.7624 23.6554 11.9701 23.6487C12.3185 23.6286 12.6736 23.6487 13.022 23.6353C13.6719 23.6085 14.161 23.2936 14.496 22.7442C14.5697 22.6303 14.6635 22.5231 14.63 22.3757ZM12.218 8.14507C12.218 7.68278 12.2984 7.20708 12.1979 6.77159C12.0371 6.0346 11.7222 5.34451 11.2064 4.77501C10.8513 4.37972 10.3756 4.28592 9.87977 4.40652C8.54648 4.74821 7.2199 4.74821 5.88662 4.40652C5.39082 4.27922 4.89503 4.35962 4.56003 4.77501C3.93024 5.5455 3.48804 6.40309 3.53494 7.44828C3.56844 8.23887 3.46794 9.04286 3.59524 9.82675C3.92354 11.8501 5.59852 13.3375 7.68219 13.4715C9.63187 13.5988 11.4811 12.2655 12.0505 10.3426C12.2716 9.61906 12.218 8.88206 12.218 8.14507ZM4.03074 20.7677C4.03074 19.8967 4.04414 19.0257 4.02404 18.1548C4.00394 17.0962 3.52824 16.2855 2.62375 15.7227C2.50315 15.649 2.42946 15.6423 2.32896 15.7629C1.53167 16.7411 1.05597 17.8466 1.02247 19.1128C0.988972 20.5198 1.01577 21.9268 1.00907 23.3338C1.00907 23.5683 1.10287 23.642 1.32397 23.642C2.14136 23.6353 2.96545 23.6353 3.78284 23.642C3.97044 23.642 4.02404 23.5951 4.02404 23.4008C4.02404 22.5231 4.03074 21.6454 4.03074 20.7677ZM4.43273 20.7409C4.43273 21.6387 4.43943 22.5298 4.43273 23.4276C4.43273 23.5884 4.47963 23.6487 4.64713 23.642C5.12283 23.6353 5.59852 23.6286 6.07421 23.642C6.26181 23.6487 6.31541 23.5884 6.30871 23.4008C6.30201 22.4628 6.30201 21.5248 6.30871 20.5868C6.30871 20.4595 6.27521 20.3456 6.21491 20.2317C5.81961 19.5617 5.43772 18.885 5.04243 18.2151C4.94863 18.061 4.94193 17.9337 5.02232 17.7729C5.12282 17.5786 5.18982 17.3709 5.28362 17.1766C5.33722 17.0627 5.32382 17.0024 5.20322 16.9488C4.89503 16.8014 4.59353 16.6339 4.27864 16.4932C4.05084 16.3927 3.99054 16.2587 4.07764 16.0175C4.27864 15.4547 4.45953 14.8785 4.64713 14.309C4.66723 14.2554 4.71413 14.1951 4.65383 14.1482C4.61363 14.1147 4.56003 14.1549 4.51313 14.175C3.91014 14.4229 3.37414 14.7646 2.88505 15.2001C2.77785 15.3006 2.77115 15.3475 2.90515 15.4346C3.96374 16.1113 4.43273 17.0962 4.42603 18.3357C4.43273 19.1329 4.43273 19.9369 4.43273 20.7409ZM13.2364 16.6272C13.5781 16.6272 13.9198 16.6138 14.2615 16.6339C14.4357 16.6406 14.5429 16.5736 14.6434 16.4463C15.3469 15.582 15.0588 14.2956 14.0538 13.8199C13.8193 13.7127 13.5781 13.6122 13.3302 13.5385C12.7607 13.3576 12.1711 13.6189 11.9366 14.1683C11.7959 14.4966 11.6619 14.8316 11.5547 15.1733C11.394 15.6557 11.5079 16.0912 11.8361 16.4798C11.9299 16.587 12.0304 16.6406 12.1845 16.6406C12.5329 16.6205 12.888 16.6272 13.2364 16.6272ZM13.089 13.0695C13.4039 13.1097 13.6786 13.2303 13.96 13.3375C14.0471 13.371 14.1074 13.3978 14.1744 13.2973C14.5898 12.701 14.9985 12.098 15.2531 11.4079C15.3469 11.1466 15.3469 10.8853 15.2665 10.624C15.1392 10.2086 14.8913 9.87365 14.563 9.60566C13.8729 9.04286 13.6719 8.96246 12.9885 9.73296C12.6602 10.1015 12.6669 10.5034 12.9818 10.8853C13.0957 11.026 13.2364 11.1533 13.357 11.2873C13.7188 11.6893 13.759 11.9975 13.4776 12.4665C13.357 12.6742 13.223 12.8685 13.089 13.0695ZM11.1863 14.9723C10.4292 15.3475 10.0205 15.2939 9.54477 14.778C9.00878 14.2018 8.67378 14.1951 8.11769 14.7579C8.09089 14.7847 8.05739 14.8182 8.03059 14.8517C7.6956 15.2336 7.68219 15.4614 7.97029 15.8768C8.67378 16.9019 10.1411 17.1364 11.1327 16.386C11.1997 16.3391 11.2466 16.2922 11.2064 16.2051C11.0456 15.8098 11.059 15.4078 11.1863 14.9723ZM6.9854 15.7227C6.8313 15.8902 6.69061 16.0845 6.50301 16.2185C6.33551 16.3391 6.34891 16.4597 6.36901 16.6205C6.53651 17.7528 6.7576 18.8717 6.7174 20.0307C6.6772 21.1563 6.71071 22.2886 6.70401 23.4209C6.70401 23.5884 6.7308 23.6554 6.9184 23.6554C7.1261 23.6621 7.0993 23.5415 7.0993 23.4142C7.173 21.6923 7.2534 19.9704 7.3271 18.2486C7.374 17.391 7.52809 16.52 6.9854 15.7227ZM13.2833 18.3826C13.7456 18.3826 14.2012 18.3759 14.6635 18.3826C14.8109 18.3826 14.8779 18.3491 14.8712 18.1883C14.8578 17.86 14.8645 17.5384 14.8712 17.2101C14.8779 17.0694 14.8243 17.0225 14.6836 17.0225C13.7523 17.0292 12.8277 17.0292 11.8964 17.0225C11.7423 17.0225 11.7155 17.0828 11.7222 17.2168C11.7289 17.5317 11.7356 17.8533 11.7222 18.1682C11.7155 18.329 11.7624 18.3826 11.9299 18.3826C12.3788 18.3759 12.8277 18.3826 13.2833 18.3826ZM8.37899 16.8215C8.37899 16.9086 8.37899 16.9488 8.37899 16.989C8.47279 19.1262 8.57328 21.2702 8.66038 23.4075C8.66708 23.5616 8.67378 23.6487 8.87478 23.6487C9.09588 23.6487 9.06238 23.5214 9.06238 23.3874C9.06238 22.4762 9.05568 21.565 9.06238 20.6538C9.07578 19.8029 8.99538 18.9454 9.16288 18.1012C9.21648 17.8466 9.24328 17.592 9.28348 17.3307C9.29688 17.2503 9.31697 17.1766 9.20978 17.1565C8.92168 17.0962 8.66708 16.9622 8.37899 16.8215ZM5.15632 14.0879C4.93523 14.7512 4.72083 15.3944 4.50643 16.0443C4.47293 16.1448 4.55333 16.1716 4.62033 16.2051C4.87493 16.3324 5.12952 16.4597 5.37742 16.587C5.87321 16.8416 5.90671 16.855 5.63872 17.3441C5.38412 17.7997 5.40422 18.1816 5.71912 18.5903C5.93352 18.8717 6.08091 19.1932 6.26181 19.4947C6.30201 19.1865 6.32881 18.8985 6.28191 18.6104C6.16801 17.8935 6.02731 17.1766 5.96031 16.4597C5.87321 15.6155 5.58512 14.845 5.15632 14.0879ZM6.39581 15.7629C6.771 15.3542 7.1261 14.979 7.4812 14.6038C7.5616 14.5167 7.55489 14.4765 7.4544 14.4229C7.2668 14.3157 7.0658 14.2152 6.9117 14.0678C6.54321 13.7462 6.14121 13.7328 5.69902 13.8333C5.55832 13.8601 5.53822 13.8936 5.59852 14.0276C5.85982 14.5837 6.11441 15.1532 6.39581 15.7629ZM9.47777 19.5617C9.70557 19.1731 9.87977 18.8047 10.1143 18.4898C10.3823 18.128 10.3756 17.7997 10.1612 17.4178C10.0674 17.257 9.96687 17.2503 9.81947 17.2503C9.65197 17.2503 9.68547 17.3843 9.65867 17.4781C9.64527 17.5451 9.63187 17.6121 9.62517 17.6724C9.55817 18.2821 9.39737 18.8851 9.47777 19.5617ZM2.59025 9.05626C2.61705 9.33096 2.65725 9.61236 2.93865 9.77986C2.99895 9.81336 3.06595 9.83346 3.13295 9.80665C3.21335 9.76646 3.17985 9.69276 3.17315 9.63246C3.11955 9.25726 3.14635 8.88207 3.13965 8.50687C3.13965 8.44657 3.17985 8.36617 3.09945 8.32597C3.02575 8.29247 2.95205 8.33267 2.89175 8.37957C2.67065 8.54037 2.61705 8.78827 2.59025 9.05626ZM9.91327 14.5837C9.97357 14.4497 10.0272 14.3492 10.0741 14.242C10.255 13.8534 10.255 13.84 9.82617 13.7931C9.56487 13.7596 9.28348 13.6926 9.08248 13.9673C9.41078 14.0812 9.65867 14.3023 9.91327 14.5837ZM12.6267 9.50516C12.7607 9.37786 12.8612 9.26396 12.9684 9.17016C13.223 8.94236 13.1292 8.45997 12.8009 8.33267C12.687 8.28577 12.6133 8.29917 12.62 8.45327C12.6334 8.78827 12.6267 9.12996 12.6267 9.50516ZM10.6101 14.0544C10.5297 14.2286 10.4627 14.3492 10.4091 14.4832C10.3689 14.577 10.255 14.6976 10.322 14.7713C10.3957 14.845 10.5431 14.7914 10.657 14.7646C10.791 14.7378 10.8379 14.6775 10.7776 14.5368C10.7173 14.4095 10.6771 14.2621 10.6101 14.0544ZM7.4142 13.8936C7.89659 14.2755 8.00379 14.2688 8.41919 13.8266C8.08419 13.8936 7.75589 13.8601 7.4142 13.8936ZM11.1997 14.4229C11.2734 14.376 11.3873 14.3358 11.3806 14.2621C11.3672 14.1683 11.2399 14.1683 11.1595 14.1415C11.0925 14.1147 11.0657 14.1683 11.0858 14.2219C11.1193 14.2956 11.0992 14.3961 11.1997 14.4229Z'
      fill='#3C2F62'
    />
    <path
      d='M1.42578 24.0575C1.53298 24.0508 1.64018 24.0441 1.75408 24.0441C5.44573 24.0441 9.13069 24.0441 12.8224 24.0441C13.9211 24.0441 14.7519 23.4613 15.0601 22.4898C15.1405 22.2419 15.1539 21.9806 15.1539 21.7193C15.1539 20.8416 15.0936 19.9572 15.174 19.0862C15.2343 18.3894 15.2678 17.6993 15.2678 17.0025C15.2678 16.8551 15.308 16.6943 15.1003 16.6273C15.0065 16.5938 15.0936 16.5335 15.1137 16.4866C15.6832 15.4012 15.5157 14.4633 14.5844 13.666C14.4638 13.5655 14.5174 13.5052 14.5777 13.4248C14.8524 13.0429 15.0936 12.6476 15.3281 12.2389C15.7435 11.5153 15.8909 10.7783 15.4487 10.0078C16.0115 10.3361 16.3398 10.8386 16.5006 11.4617C16.6681 12.1116 16.3398 12.6476 16.0584 13.1836C15.8641 13.5521 15.643 13.9072 15.3817 14.2288C15.2879 14.336 15.3281 14.403 15.4353 14.4901C15.9713 14.9457 16.2795 15.5151 16.2594 16.2387C16.246 16.6139 16.1388 16.9623 15.9378 17.2772C15.8909 17.3509 15.8239 17.4045 15.9646 17.4581C16.0852 17.505 16.1053 17.6323 16.1053 17.7529C16.1053 18.2487 16.1924 18.7579 16.0919 19.2269C15.8239 20.4463 16.0316 21.6657 15.9646 22.8851C15.9177 23.669 15.1807 24.5533 14.3432 24.7677C14.1891 24.8079 14.035 24.828 13.8742 24.828C9.99498 24.828 6.10903 24.828 2.22977 24.828C1.57318 24.8347 1.43918 24.7074 1.42578 24.0575Z'
      fill='#E2E3E5'
    />
    <path
      d='M14.49 7.44579C14.222 7.28499 13.9674 7.1041 13.7731 6.8495C13.5185 6.4743 13.418 6.05891 13.4247 5.60331C13.4381 5.06062 13.4247 4.52463 13.418 3.98193C13.418 3.57324 13.4247 3.16454 13.4247 2.75585C13.4314 1.63026 14.1885 0.866469 15.3073 0.866469C16.9689 0.866469 18.6305 0.879868 20.2921 0.859769C21.1497 0.846369 21.7728 1.17466 22.1748 1.92506C22.2954 2.23995 22.3222 2.56825 22.3222 2.90995C22.3155 3.82783 22.3222 4.75242 22.3222 5.67031C22.3222 6.8361 21.5584 7.59319 20.3859 7.59989C19.5819 7.59989 18.7779 7.59989 17.9739 7.59989C17.8667 7.59989 17.7662 7.59319 17.6657 7.67359C17.257 8.00858 16.8483 8.33018 16.4329 8.66518C16.2922 8.77238 16.1582 8.87958 16.0175 8.97338C15.8366 9.09397 15.6892 9.02028 15.6758 8.80588C15.6624 8.65848 15.6691 8.51108 15.6624 8.35698C15.6624 8.15598 15.6624 7.95499 15.6758 7.76069C15.6825 7.61999 15.6289 7.58649 15.5016 7.59989C15.1667 7.61999 14.825 7.55969 14.49 7.44579ZM16.0912 8.41058C16.5669 8.03538 17.0091 7.69369 17.4446 7.33859C17.5786 7.23139 17.7059 7.1845 17.8801 7.1912C18.731 7.1979 19.5886 7.1979 20.4395 7.1912C21.3306 7.1845 21.9202 6.5949 21.9269 5.71051C21.9269 4.69212 21.9336 3.66703 21.9269 2.64865C21.9202 1.87816 21.3172 1.27516 20.5534 1.26846C18.7712 1.26176 16.989 1.26176 15.2068 1.26846C14.4565 1.26846 13.8468 1.87816 13.8401 2.62855C13.8267 3.69384 13.8334 4.75242 13.8401 5.81771C13.8468 6.481 14.3292 7.0304 14.9791 7.1577C15.1466 7.1912 15.3141 7.1912 15.4815 7.1912C16.1314 7.1912 16.1046 7.1309 16.0979 7.82099C16.0912 8.00189 16.0912 8.18278 16.0912 8.41058Z'
      fill='#3C3063'
    />
    <path
      d='M16.4531 8.662C16.8618 8.3337 17.2772 8.00541 17.6859 7.67041C17.7797 7.59001 17.8869 7.59671 17.9941 7.59671C18.7981 7.59671 19.6021 7.59671 20.4061 7.59671C21.5786 7.59671 22.3357 6.83292 22.3424 5.66713C22.3424 4.74924 22.3357 3.82465 22.3424 2.90676C22.3424 2.57177 22.3156 2.24347 22.195 1.92188C22.6304 2.06257 22.8449 2.41767 23.019 2.79957C23.1061 2.99386 23.1463 3.20826 23.1396 3.42936C23.1329 4.48125 23.1195 5.53983 23.1396 6.59172C23.1597 7.52301 22.329 8.3873 21.3374 8.4007C20.5736 8.4074 19.8165 8.4208 19.0527 8.394C18.7177 8.3806 18.4564 8.4744 18.2085 8.6821C17.7797 9.03719 17.3375 9.37889 16.9087 9.73399C16.8149 9.81438 16.7144 9.82778 16.6072 9.80098C16.4732 9.76748 16.5067 9.64689 16.5 9.54639C16.4732 9.25829 16.5536 8.95679 16.4531 8.662Z'
      fill='#E4E5E6'
    />
    <path
      d='M13.4227 3.98112C13.4227 4.52382 13.4428 5.05981 13.4294 5.6025C13.416 6.0581 13.5165 6.47349 13.7778 6.84869C13.6974 7.00279 13.7443 7.17028 13.7443 7.33778C13.7376 7.80678 13.7443 8.28247 13.7443 8.75147C13.6304 8.80507 13.5634 8.81847 13.5232 8.65097C13.4562 8.36957 13.3088 8.12167 13.0341 7.98768C12.9068 7.92738 12.947 7.82018 12.947 7.72638C12.947 6.72139 12.9403 5.7231 12.947 4.71811C12.947 4.34962 12.947 3.98112 12.8398 3.62603C13.0073 3.61263 13.1078 3.73322 13.2217 3.82702C13.2753 3.88732 13.3155 3.98112 13.4227 3.98112Z'
      fill='#E2E3E5'
    />
    <path
      d='M12.5513 3.19717C12.2967 2.92917 11.9952 2.72148 11.6133 2.61428C11.8746 2.32618 11.9885 2.00458 11.9617 1.63609C12.1895 1.58919 12.3503 1.69639 12.4843 1.85719C12.7791 2.23238 12.9198 2.75498 12.5513 3.19717Z'
      fill='#E4E5E6'
    />
    <path
      d='M14.4883 7.44531C14.8233 7.55251 15.165 7.61951 15.5201 7.59271C15.6474 7.58601 15.701 7.61951 15.6943 7.75351C15.6809 7.95451 15.6876 8.1555 15.6809 8.3498C15.1516 8.2225 14.7161 7.97461 14.4883 7.44531Z'
      fill='#E2E3E5'
    />
    <path
      d='M3.03125 10.22C3.19875 10.1731 3.29255 10.22 3.32605 10.4076C3.34615 10.5483 3.39975 10.6823 3.43325 10.8163C3.15855 10.7158 3.11165 10.4545 3.03125 10.22Z'
      fill='#E2E3E5'
    />
    <path
      d='M12.2179 8.14429C12.2179 8.88129 12.2715 9.61828 12.0571 10.3352C11.4876 12.2647 9.63174 13.5913 7.68876 13.464C5.60508 13.33 3.9301 11.8427 3.60181 9.81928C3.47451 9.02868 3.57501 8.23139 3.54151 7.4408C3.49461 6.39562 3.9435 5.54473 4.5666 4.76753C4.90159 4.35214 5.39739 4.27174 5.89318 4.39904C7.22646 4.74073 8.55305 4.74073 9.88634 4.39904C10.3821 4.27174 10.8578 4.36554 11.2129 4.76753C11.7288 5.33703 12.0504 6.02712 12.2045 6.76411C12.2983 7.20631 12.2179 7.682 12.2179 8.14429ZM7.88306 11.903C8.31185 11.8963 8.68035 11.7422 8.98185 11.434C9.08235 11.3335 9.14264 11.2196 9.03545 11.1057C8.91485 10.9717 8.80765 11.0454 8.69375 11.1526C8.19795 11.6216 7.56146 11.6216 7.07907 11.1593C6.97187 11.0521 6.85797 10.9784 6.73737 11.1124C6.61677 11.2397 6.70387 11.3603 6.80437 11.4608C7.09917 11.7489 7.46096 11.8963 7.88306 11.903ZM8.60665 9.89297C8.60665 9.84608 8.60665 9.79248 8.60665 9.74558C8.60665 9.61158 8.55975 9.51108 8.41235 9.50438C8.25155 9.49768 8.20465 9.61158 8.20465 9.75228C8.20465 9.81928 8.20465 9.88627 8.20465 9.95327C8.19795 10.1543 8.10416 10.2883 7.89646 10.3084C7.71556 10.3285 7.58156 10.1744 7.56816 9.94658C7.56146 9.86618 7.56816 9.77908 7.56146 9.69868C7.55476 9.58478 7.49446 9.51108 7.37386 9.50438C7.25327 9.49768 7.17286 9.57138 7.16616 9.67858C7.13936 10.0002 7.13937 10.3218 7.42746 10.5496C7.65526 10.7305 7.90986 10.7774 8.17786 10.6501C8.49945 10.5027 8.61335 10.228 8.60665 9.89297ZM9.89303 8.0438C9.64514 8.0438 9.44414 8.2314 9.43744 8.47259C9.43074 8.72049 9.63844 8.94159 9.88634 8.94829C10.1342 8.94829 10.3486 8.73389 10.3419 8.48599C10.3352 8.23809 10.1409 8.0505 9.89303 8.0438ZM6.33538 8.49939C6.33538 8.25819 6.14108 8.0572 5.89318 8.0505C5.63188 8.0438 5.43089 8.23139 5.43089 8.49269C5.43089 8.74059 5.61848 8.94159 5.85968 8.95499C6.10758 8.96169 6.33538 8.74059 6.33538 8.49939ZM10.3888 7.7624C10.5228 7.7758 10.63 7.7423 10.6568 7.6016C10.6836 7.4609 10.5831 7.3872 10.4558 7.36041C10.1878 7.30681 9.91313 7.26661 9.64514 7.21971C9.51114 7.19291 9.40394 7.24651 9.37714 7.3805C9.35034 7.5145 9.43744 7.5949 9.57144 7.615C9.85284 7.6619 10.1208 7.7155 10.3888 7.7624ZM5.35049 7.7691C5.64528 7.7155 5.94008 7.6686 6.23488 7.6083C6.34878 7.5882 6.40908 7.4944 6.38898 7.3872C6.36888 7.26661 6.27507 7.19961 6.14778 7.21971C5.85968 7.26661 5.57158 7.31351 5.28349 7.36711C5.16289 7.38721 5.08249 7.4676 5.10259 7.5949C5.12939 7.7222 5.22319 7.7758 5.35049 7.7691Z'
      fill='#FDFDFD'
    />
    <path
      d='M11.7283 23.2377C11.7283 23.0368 11.7216 22.8358 11.7216 22.6348C11.7216 22.4874 11.6948 22.3467 11.5206 22.3467C11.3464 22.3467 11.3129 22.474 11.3129 22.6281C11.3196 22.8961 11.3062 23.1641 11.3196 23.432C11.3263 23.5727 11.2928 23.6464 11.132 23.6397C10.6362 23.633 10.1471 23.633 9.65133 23.6397C9.49053 23.6397 9.45703 23.5794 9.45703 23.432C9.46373 22.4673 9.46373 21.5092 9.45703 20.5444C9.45703 20.4171 9.50393 20.3166 9.56423 20.2161C9.94612 19.5595 10.3213 18.8962 10.7099 18.2463C10.8104 18.0788 10.8305 17.9381 10.7434 17.7572C10.6496 17.5696 10.4754 17.3619 10.5357 17.1877C10.5893 17.0202 10.8774 17.0135 11.0449 16.9063C11.1186 16.8594 11.199 16.8192 11.2928 16.7656C11.3464 16.8393 11.3196 16.9197 11.3196 16.9867C11.3196 18.0587 11.3196 19.1307 11.3196 20.196C11.3196 20.3367 11.2928 20.5109 11.5005 20.5176C11.7149 20.5243 11.7216 20.3568 11.7216 20.2027C11.7216 19.8074 11.7283 19.4188 11.7149 19.0235C11.7082 18.856 11.7551 18.789 11.936 18.789C12.7869 18.7957 13.6445 18.7957 14.4954 18.789C14.6897 18.789 14.7366 18.856 14.7366 19.0369C14.7299 20.0218 14.7366 21.0134 14.7366 21.9983C14.7366 22.1323 14.7098 22.2596 14.6294 22.3735C14.5959 22.407 14.549 22.4338 14.5222 22.474C14.1068 22.9832 13.5641 23.2377 12.9075 23.2377C12.5189 23.231 12.1236 23.2377 11.7283 23.2377ZM11.7149 21.4422C11.7149 21.3283 11.7283 21.2077 11.7149 21.0938C11.7015 20.9732 11.6278 20.8861 11.5005 20.8995C11.3933 20.9062 11.3196 20.9799 11.3196 21.1005C11.3196 21.335 11.3196 21.5695 11.3196 21.804C11.3196 21.9246 11.4 21.9916 11.5072 21.9983C11.6211 22.005 11.7015 21.9313 11.7149 21.8174C11.7283 21.6968 11.7149 21.5695 11.7149 21.4422Z'
      fill='#0088EE'
    />
    <path
      d='M4.03166 20.7713C4.03166 21.649 4.02496 22.5267 4.03836 23.4111C4.03836 23.5987 3.98476 23.6523 3.79716 23.6523C2.97977 23.6456 2.15568 23.6456 1.33829 23.6523C1.11719 23.6523 1.02339 23.5786 1.02339 23.3441C1.03009 21.9371 1.00329 20.5301 1.03679 19.1232C1.07029 17.8636 1.54599 16.7514 2.34328 15.7732C2.44378 15.6526 2.51748 15.6593 2.63808 15.733C3.54256 16.2958 4.01156 17.1065 4.03836 18.1651C4.04506 19.0294 4.03166 19.9003 4.03166 20.7713Z'
      fill='#0088ED'
    />
    <path
      d='M4.43395 20.7373C4.43395 19.9333 4.43395 19.1293 4.43395 18.3253C4.44065 17.0925 3.97166 16.1009 2.91307 15.4243C2.77907 15.3372 2.78577 15.2903 2.89297 15.1898C3.37536 14.7543 3.91806 14.4126 4.52105 14.1647C4.56795 14.1446 4.62155 14.1044 4.66175 14.1379C4.72205 14.1848 4.66845 14.2451 4.65505 14.2987C4.46745 14.8682 4.28655 15.4444 4.08555 16.0071C3.99846 16.2483 4.05876 16.3823 4.28655 16.4828C4.60145 16.6235 4.89625 16.791 5.21114 16.9384C5.33174 16.992 5.34514 17.0523 5.29154 17.1662C5.19774 17.3605 5.12404 17.5682 5.03024 17.7625C4.94985 17.9233 4.95655 18.0506 5.05035 18.2047C5.44564 18.8747 5.82754 19.5514 6.22283 20.2214C6.28983 20.3353 6.31663 20.4492 6.31663 20.5765C6.30993 21.5145 6.30993 22.4525 6.31663 23.3905C6.31663 23.5781 6.26973 23.6384 6.08213 23.6317C5.60644 23.6183 5.13074 23.6183 4.65505 23.6317C4.48755 23.6384 4.44065 23.5781 4.44065 23.4173C4.44065 22.5262 4.43395 21.6284 4.43395 20.7373Z'
      fill='#0088ED'
    />
    <path
      d='M13.2382 16.627C12.8898 16.627 12.5347 16.6203 12.1864 16.627C12.039 16.6337 11.9318 16.5801 11.838 16.4662C11.5097 16.0776 11.3958 15.6421 11.5566 15.1597C11.6705 14.818 11.7978 14.483 11.9385 14.1547C12.173 13.612 12.7625 13.344 13.332 13.5249C13.5799 13.6053 13.8211 13.6991 14.0556 13.8063C15.0673 14.282 15.3487 15.5684 14.6452 16.4327C14.5447 16.56 14.4375 16.627 14.2633 16.6203C13.9283 16.6203 13.5799 16.627 13.2382 16.627Z'
      fill='#FCFCFC'
    />
    <path
      d='M13.0872 13.0709C13.2212 12.8632 13.3619 12.6756 13.4758 12.4746C13.7505 12.0056 13.717 11.6907 13.3552 11.2954C13.2279 11.1614 13.0939 11.0341 12.98 10.8934C12.6651 10.5115 12.6584 10.1028 12.9867 9.74101C13.6701 8.97722 13.8711 9.05092 14.5612 9.61371C14.8895 9.88171 15.1374 10.2167 15.2647 10.6321C15.3451 10.8934 15.3518 11.1547 15.2513 11.416C14.9967 12.1061 14.588 12.7024 14.1726 13.3054C14.1056 13.3992 14.0453 13.3791 13.9582 13.3456C13.6768 13.2317 13.4021 13.1111 13.0872 13.0709Z'
      fill='#D2F8FC'
    />
    <path
      d='M11.187 14.9753C11.0597 15.4108 11.053 15.8128 11.2138 16.2081C11.254 16.3019 11.2071 16.3421 11.1401 16.389C10.1485 17.1394 8.67456 16.9049 7.97777 15.8798C7.68967 15.4644 7.70307 15.2299 8.03806 14.8547C8.06486 14.8212 8.09836 14.7944 8.12516 14.7609C8.68126 14.1981 9.01625 14.2048 9.55225 14.781C10.0145 15.2902 10.4299 15.3438 11.187 14.9753Z'
      fill='#D2F8FC'
    />
    <path
      d='M6.98361 15.7266C7.5196 16.5306 7.3722 17.3948 7.332 18.2524C7.2583 19.9743 7.17791 21.6962 7.10421 23.4181C7.09751 23.5454 7.12431 23.6593 6.92331 23.6593C6.73571 23.6526 6.70891 23.5856 6.70891 23.4248C6.71561 22.2925 6.68211 21.1669 6.72231 20.0346C6.76251 18.8755 6.54811 17.7566 6.37392 16.6244C6.34712 16.4636 6.34042 16.343 6.50791 16.2224C6.68881 16.0884 6.82951 15.8874 6.98361 15.7266Z'
      fill='#F8F8F9'
    />
    <path
      d='M13.2844 18.3846C12.8355 18.3846 12.3799 18.3779 11.931 18.3913C11.7635 18.398 11.7166 18.3377 11.7233 18.1769C11.7367 17.862 11.73 17.5404 11.7233 17.2255C11.7233 17.0915 11.7434 17.0312 11.8975 17.0312C12.8288 17.0379 13.7533 17.0379 14.6846 17.0312C14.8253 17.0312 14.8789 17.0714 14.8722 17.2188C14.8655 17.5471 14.8588 17.8687 14.8722 18.197C14.8789 18.3578 14.8119 18.3913 14.6645 18.3913C14.2022 18.3846 13.7399 18.3846 13.2844 18.3846ZM14.1687 18.0563C14.363 18.0496 14.5104 17.8955 14.5037 17.7012C14.497 17.5069 14.3429 17.3528 14.1486 17.3595C13.9543 17.3662 13.8069 17.5203 13.8136 17.7213C13.8203 17.9089 13.9744 18.063 14.1687 18.0563Z'
      fill='#D0F5FA'
    />
    <path
      d='M8.38058 16.8203C8.66868 16.961 8.92998 17.095 9.21807 17.1553C9.32527 17.1754 9.30517 17.2558 9.29177 17.3295C9.25157 17.5841 9.22477 17.8454 9.17117 18.1C8.99697 18.9442 9.07737 19.8018 9.07067 20.6527C9.05727 21.5639 9.07067 22.475 9.07067 23.3862C9.07067 23.5135 9.10417 23.6475 8.88308 23.6475C8.68878 23.6475 8.67538 23.5604 8.66868 23.4063C8.57488 21.2691 8.48108 19.1251 8.38728 16.9878C8.37388 16.9476 8.38058 16.9074 8.38058 16.8203Z'
      fill='#F8F8F9'
    />
    <path
      d='M12.0318 13.3965C11.9648 13.4434 11.9045 13.4903 11.8375 13.5372C11.6767 13.5841 11.5427 13.6645 11.4757 13.8253C11 13.6444 10.5176 13.4903 9.94141 13.4099C11.1407 12.7935 11.938 11.8824 12.4003 10.6094C12.5209 11.1052 12.8894 11.3464 13.1373 11.6747C12.8894 12.0566 12.7219 12.4854 12.4271 12.8404C12.2864 13.0146 12.0653 13.1419 12.0318 13.3965Z'
      fill='#E2E3E5'
    />
    <path
      d='M5.15775 14.0859C5.59324 14.843 5.87464 15.6135 5.96174 16.4644C6.03544 17.188 6.16943 17.8982 6.28333 18.6151C6.33023 18.9032 6.30343 19.1913 6.26323 19.4995C6.08234 19.198 5.93494 18.8697 5.72054 18.595C5.40564 18.1796 5.38554 17.8044 5.64014 17.3488C5.90814 16.8664 5.87464 16.8463 5.37884 16.5917C5.12425 16.4644 4.86965 16.3371 4.62175 16.2098C4.55475 16.1763 4.47436 16.1495 4.50785 16.049C4.71555 15.3924 4.92995 14.7492 5.15775 14.0859Z'
      fill='#6CC5F3'
    />
    <path
      d='M6.39701 15.7632C6.11562 15.1535 5.86102 14.5907 5.59302 14.0279C5.53272 13.9006 5.55952 13.8671 5.69352 13.8336C6.13572 13.7398 6.54441 13.7465 6.90621 14.0681C7.06701 14.2088 7.268 14.3093 7.4489 14.4232C7.5494 14.4835 7.5561 14.5237 7.4757 14.6041C7.12061 14.9726 6.77221 15.3545 6.39701 15.7632Z'
      fill='#FCFCFC'
    />
    <path
      d='M9.47899 19.5626C9.39859 18.8859 9.55939 18.2829 9.63309 17.6799C9.63979 17.6129 9.65319 17.5459 9.66659 17.4856C9.68669 17.3918 9.65319 17.2578 9.82739 17.2578C9.96809 17.2578 10.0753 17.2645 10.1691 17.4253C10.3835 17.8072 10.3902 18.1288 10.1222 18.4973C9.88099 18.8055 9.70679 19.174 9.47899 19.5626Z'
      fill='#6CC5F3'
    />
    <path
      d='M11.7272 23.2393C12.1225 23.2393 12.5111 23.2393 12.9064 23.2393C13.5697 23.2393 14.1057 22.9847 14.5211 22.4755C14.5546 22.4353 14.5948 22.4085 14.6283 22.375C14.6618 22.5224 14.568 22.6296 14.501 22.7435C14.166 23.2996 13.6769 23.6078 13.027 23.6346C12.6786 23.648 12.3235 23.6279 11.9751 23.648C11.7674 23.6614 11.6803 23.6011 11.7205 23.3867C11.7272 23.3398 11.7272 23.2862 11.7272 23.2393Z'
      fill='#F8F8F9'
    />
    <path
      d='M2.58984 9.05404C2.61664 8.78604 2.66354 8.53815 2.88464 8.37065C2.94494 8.32375 3.01864 8.28355 3.09234 8.31705C3.17274 8.35055 3.13254 8.43765 3.13254 8.49795C3.14594 8.87314 3.11244 9.24834 3.16604 9.62353C3.17274 9.68383 3.20624 9.76423 3.12584 9.79773C3.05884 9.82453 2.99184 9.81113 2.93154 9.77093C2.65684 9.61014 2.62334 9.32874 2.58984 9.05404Z'
      fill='#F8F8F9'
    />
    <path
      d='M12.0312 13.3938C12.0647 13.1392 12.2858 13.0119 12.4265 12.8377C12.7213 12.4826 12.8821 12.0471 13.1367 11.6719C13.3176 11.8461 13.2774 12.0404 13.1702 12.2213C12.8821 12.697 12.5873 13.1727 12.0312 13.3938Z'
      fill='#F8F8F9'
    />
    <path
      d='M9.91171 14.5856C9.65711 14.2975 9.40921 14.0764 9.07422 13.9692C9.28192 13.6945 9.55662 13.7682 9.81791 13.795C10.2467 13.8486 10.2467 13.8553 10.0658 14.2439C10.0256 14.3511 9.97871 14.4583 9.91171 14.5856Z'
      fill='#F8F8F9'
    />
    <path
      d='M12.6254 9.50885C12.6254 9.13366 12.6321 8.79196 12.6254 8.45696C12.6187 8.30286 12.6924 8.28947 12.8063 8.33637C13.1279 8.46366 13.2217 8.94606 12.9738 9.17386C12.8599 9.26765 12.7594 9.37485 12.6254 9.50885Z'
      fill='#F8F8F9'
    />
    <path
      d='M10.6095 14.0547C10.6765 14.2624 10.7167 14.4031 10.777 14.5438C10.8373 14.6845 10.7904 14.7448 10.6564 14.7716C10.5425 14.7917 10.3951 14.852 10.3214 14.7783C10.2544 14.7046 10.3683 14.5907 10.4085 14.4902C10.4621 14.3562 10.5224 14.2289 10.6095 14.0547Z'
      fill='#6CC5F3'
    />
    <path
      d='M7.41406 13.8951C7.76246 13.8616 8.08405 13.8951 8.41905 13.8281C8.00366 14.2703 7.89646 14.277 7.41406 13.8951Z'
      fill='#F8F8F9'
    />
    <path
      d='M11.2013 14.4213C11.1008 14.3945 11.1209 14.2873 11.0874 14.2203C11.0606 14.1667 11.0941 14.1131 11.1611 14.1399C11.2415 14.1667 11.3688 14.1667 11.3822 14.2605C11.3889 14.3342 11.275 14.3811 11.2013 14.4213Z'
      fill='#0088ED'
    />
    <path
      d='M11.4727 13.8272C11.5397 13.6664 11.6737 13.586 11.8345 13.5391C11.8211 13.653 11.7206 13.72 11.6737 13.8138C11.6134 13.9277 11.5464 13.8741 11.4727 13.8272Z'
      fill='#F8F8F9'
    />
    <path
      d='M7.88401 11.9028C7.46191 11.8961 7.10012 11.7488 6.80532 11.454C6.70482 11.3535 6.61772 11.2396 6.73832 11.1056C6.85892 10.9716 6.97282 11.052 7.08002 11.1525C7.56911 11.6148 8.1989 11.6148 8.6947 11.1458C8.8086 11.0453 8.9158 10.9716 9.0364 11.0989C9.14359 11.2128 9.0833 11.3267 8.9828 11.4272C8.6813 11.742 8.3128 11.8961 7.88401 11.9028Z'
      fill='#413466'
    />
    <path
      d='M8.60699 9.89683C8.61369 10.2318 8.49979 10.5065 8.1782 10.6539C7.9102 10.7745 7.6556 10.7343 7.42781 10.5534C7.14641 10.3256 7.13971 10.004 7.16651 9.68243C7.17321 9.57523 7.25361 9.50153 7.37421 9.50823C7.49481 9.51493 7.5551 9.58863 7.5618 9.70253C7.5685 9.78293 7.5618 9.87003 7.5685 9.95043C7.5819 10.1782 7.7092 10.3323 7.8968 10.3122C8.1045 10.2921 8.19829 10.1581 8.20499 9.95713C8.20499 9.89013 8.20499 9.82313 8.20499 9.75613C8.20499 9.61543 8.2519 9.50153 8.41269 9.50823C8.56009 9.51493 8.60699 9.61543 8.60699 9.74943C8.60699 9.79633 8.60699 9.84993 8.60699 9.89683Z'
      fill='#413466'
    />
    <path
      d='M9.89325 8.04688C10.1411 8.04688 10.3354 8.24117 10.3421 8.48907C10.3488 8.73697 10.1345 8.95806 9.88655 8.95136C9.63866 8.95136 9.43096 8.72357 9.43766 8.47567C9.44436 8.23447 9.64535 8.04688 9.89325 8.04688Z'
      fill='#3C3063'
    />
    <path
      d='M6.33546 8.50264C6.33546 8.75054 6.10766 8.96494 5.86646 8.95154C5.62527 8.94484 5.43097 8.73714 5.43767 8.48924C5.43767 8.22795 5.63867 8.04035 5.89996 8.04705C6.14116 8.05375 6.34216 8.26145 6.33546 8.50264Z'
      fill='#3C3063'
    />
    <path
      d='M10.3887 7.76033C10.1207 7.71343 9.84604 7.65983 9.57805 7.61293C9.44405 7.59283 9.35695 7.51243 9.38375 7.37844C9.41055 7.24444 9.51105 7.19084 9.65175 7.21764C9.91974 7.26454 10.1944 7.31144 10.4624 7.35834C10.5897 7.38514 10.6835 7.45214 10.6634 7.59953C10.6366 7.74023 10.5227 7.78043 10.3887 7.76033Z'
      fill='#413466'
    />
    <path
      d='M5.34974 7.77168C5.22245 7.77838 5.12865 7.72478 5.10855 7.59748C5.08845 7.47018 5.16885 7.38978 5.28944 7.36968C5.57754 7.31608 5.86564 7.26248 6.15374 7.22228C6.28103 7.20218 6.37483 7.26918 6.39493 7.38978C6.41503 7.50368 6.35473 7.59078 6.24083 7.61088C5.93934 7.67118 5.64454 7.71808 5.34974 7.77168Z'
      fill='#413466'
    />
    <path
      d='M11.7156 21.4425C11.7156 21.5698 11.729 21.6971 11.7156 21.8177C11.7022 21.9249 11.6285 22.0053 11.5079 21.9986C11.4007 21.9919 11.3203 21.9249 11.3203 21.8043C11.3203 21.5698 11.3203 21.3353 11.3203 21.1008C11.3203 20.9802 11.394 20.9065 11.5012 20.8998C11.6285 20.8864 11.7022 20.9735 11.7156 21.0941C11.729 21.208 11.7223 21.3286 11.7156 21.4425Z'
      fill='#3C2F62'
    />
    <path
      d='M14.1678 18.0553C13.9735 18.062 13.8194 17.9146 13.8127 17.7136C13.806 17.5193 13.9534 17.3585 14.1477 17.3518C14.342 17.3451 14.4961 17.4992 14.5028 17.6935C14.5095 17.8945 14.3621 18.0486 14.1678 18.0553Z'
      fill='#413466'
    />
    <path
      d='M17.8791 4.55414C17.6781 4.55414 17.5508 4.42684 17.5508 4.22584C17.5508 4.03154 17.6781 3.89084 17.8724 3.89084C18.0734 3.88414 18.2208 4.03154 18.2141 4.23254C18.2074 4.42684 18.0734 4.55414 17.8791 4.55414Z'
      fill='#6EC8F6'
    />
    <path
      d='M19.9442 4.46288C19.9241 4.44948 19.904 4.43609 19.8906 4.41599C19.9241 4.38249 19.9509 4.40259 19.971 4.42938C19.9643 4.44278 19.9576 4.45618 19.9442 4.46288Z'
      fill='#6EC8F6'
    />
    <path
      d='M17.6663 2.125C17.6931 2.1451 17.7132 2.1786 17.6864 2.1987C17.6529 2.2255 17.6462 2.1719 17.6328 2.1518C17.6395 2.1451 17.6529 2.1317 17.6663 2.125Z'
      fill='#6EC8F6'
    />
    <path
      d='M18.1288 2.1518C18.1154 2.1719 18.1087 2.2255 18.0752 2.1987C18.0484 2.1786 18.0685 2.1451 18.0953 2.125C18.1087 2.1384 18.1154 2.1451 18.1288 2.1518Z'
      fill='#6EC8F6'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.091 7.82317V8.41277C16.5734 8.03757 17.0089 7.69587 17.4377 7.34078C17.5717 7.24028 17.7057 7.19338 17.8732 7.19338C18.7241 7.20008 19.5817 7.20008 20.4326 7.19338C21.3237 7.18668 21.92 6.59709 21.92 5.7127C21.9267 4.69431 21.9267 3.66922 21.92 2.65083C21.9133 1.88034 21.3103 1.27065 20.5465 1.27065C18.7643 1.26395 16.9821 1.26395 15.1999 1.27065C14.4495 1.27735 13.8398 1.88034 13.8331 2.63073C13.8265 3.69602 13.8265 4.75461 13.8331 5.8199C13.8398 6.48319 14.3222 7.03258 14.9721 7.15988C15.1396 7.18668 15.3071 7.19338 15.4746 7.19338C15.7989 7.19338 15.9547 7.17837 16.0286 7.24903C16.1028 7.31999 16.0944 7.47737 16.091 7.82317Z'
      fill='#6EC8F6'
    />
  </svg>
)
export default CallLogCondition
