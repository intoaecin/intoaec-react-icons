import React from 'react'
interface ESignIconProps {
  fill: string
}

const ESignIcon: React.FC<ESignIconProps> = ({ fill, ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 12 12' {...props}>
    <path
      d='M6.71333 11.9478C4.79444 11.9478 2.87554 11.9478 0.956653 11.9478C0.928549 11.9393 0.900446 11.9296 0.87204 11.9221C0.469526 11.8151 0.213573 11.5607 0.104181 11.1587C0.0936049 11.1195 0.0833305 11.0805 0.0727539 11.0412C0.0727539 7.77757 0.0727539 4.51394 0.0727539 1.25031C0.0803086 1.22584 0.0902807 1.20196 0.0951157 1.17688C0.154344 0.884968 0.303625 0.65047 0.561996 0.501492C0.683475 0.431384 0.824295 0.395122 0.956351 0.34375C2.87524 0.34375 4.79413 0.34375 6.71302 0.34375C6.72209 0.349794 6.73055 0.358859 6.74052 0.361277C7.27932 0.490915 7.57668 0.864117 7.57728 1.41682C7.57819 2.32308 7.57879 3.22964 7.57456 4.1359C7.57426 4.19181 7.54525 4.2604 7.50627 4.3009C7.25152 4.5641 6.99074 4.82157 6.73116 5.07994C6.23043 5.57885 5.80314 6.13397 5.47315 6.75949C5.37252 6.95048 5.28398 7.15597 5.23714 7.36508C5.2036 7.51436 5.24862 7.68117 5.2589 7.84586C5.09723 7.84586 4.92347 7.851 4.75032 7.84284C4.69743 7.84042 4.63458 7.81353 4.5962 7.77696C4.42335 7.61348 4.25926 7.44093 4.08883 7.27533C3.93773 7.12847 3.74705 7.12998 3.59324 7.27231C3.56786 7.29588 3.54096 7.31824 3.49805 7.35632C3.49805 7.17319 3.49593 7.01545 3.49865 6.85771C3.50137 6.69785 3.43822 6.57697 3.28984 6.51412C3.14026 6.45066 3.01062 6.49478 2.89851 6.60719C2.45852 7.04839 2.01673 7.48777 1.57735 7.92956C1.42565 8.08217 1.42081 8.28494 1.55921 8.42455C1.69671 8.56325 1.90371 8.56023 2.0545 8.41155C2.27782 8.19186 2.49841 7.96885 2.72022 7.74735C2.7456 7.72196 2.7728 7.69809 2.81813 7.65609C2.81813 7.82924 2.82055 7.97822 2.81752 8.1275C2.8142 8.2931 2.8689 8.42485 3.02573 8.49677C3.16776 8.56204 3.30284 8.52367 3.44245 8.38406C3.57269 8.25381 3.70203 8.12266 3.84134 7.98215C3.98548 8.1284 4.12086 8.26409 4.25473 8.40158C4.33843 8.48771 4.43785 8.52699 4.55873 8.52669C5.10267 8.52457 5.6466 8.53575 6.18994 8.52004C6.36581 8.5149 6.55196 8.46867 6.71182 8.39463C6.96747 8.27648 7.20529 8.11964 7.45036 7.97852C7.48783 7.95706 7.52379 7.93289 7.56942 7.90448C7.57365 7.93531 7.57758 7.94921 7.57758 7.96341C7.57728 8.96788 7.58212 9.97266 7.57335 10.9771C7.57033 11.3304 7.39567 11.6066 7.09559 11.79C6.97895 11.8604 6.84115 11.8961 6.71333 11.9478ZM3.15325 4.44595C3.602 4.44595 4.05105 4.44716 4.4998 4.44534C4.71073 4.44444 4.8582 4.3012 4.85729 4.10387C4.85638 3.91168 4.71073 3.76693 4.50736 3.76663C3.60956 3.76512 2.71176 3.76451 1.81426 3.76874C1.74355 3.76905 1.66468 3.79655 1.60424 3.83432C1.47944 3.91228 1.43441 4.06338 1.47672 4.20178C1.52174 4.34894 1.64534 4.44413 1.80701 4.44474C2.25546 4.44715 2.70451 4.44564 3.15325 4.44595ZM3.15839 5.12587C2.71327 5.12587 2.26815 5.12526 1.82302 5.12617C1.65682 5.12647 1.5296 5.2129 1.48004 5.35342C1.39875 5.58459 1.56798 5.80488 1.83149 5.80519C2.71025 5.8064 3.58931 5.80579 4.46807 5.80549C4.70771 5.80549 4.8591 5.67071 4.85729 5.4613C4.85517 5.25762 4.70438 5.12617 4.47109 5.12587C4.03353 5.12557 3.59596 5.12587 3.15839 5.12587ZM3.84134 2.38352C4.05619 2.38352 4.27105 2.38442 4.4859 2.38321C4.70741 2.382 4.85669 2.24511 4.85759 2.04476C4.8582 1.84381 4.70892 1.7045 4.48862 1.7039C4.05528 1.70299 3.62165 1.70269 3.18831 1.7039C2.97345 1.7045 2.81601 1.85318 2.81934 2.04779C2.82266 2.23968 2.97617 2.3817 3.18559 2.38321C3.40407 2.38472 3.62255 2.38352 3.84134 2.38352ZM3.83469 10.5879C4.04954 10.5879 4.2644 10.5885 4.47925 10.5876C4.70861 10.5867 4.8591 10.4498 4.85759 10.2443C4.85608 10.0446 4.7065 9.90859 4.48409 9.90799C4.05438 9.90708 3.62467 9.90708 3.19496 9.90799C2.97708 9.90859 2.82085 10.05 2.81934 10.2452C2.81752 10.4401 2.97466 10.5861 3.19042 10.5873C3.40498 10.5888 3.61983 10.5879 3.83469 10.5879Z'
      fill={fill}
    />
    <path
      d='M11.6767 2.83693C11.626 3.05995 11.4821 3.2192 11.3253 3.37513C10.2142 4.47962 9.10966 5.59107 7.9955 6.69224C7.53315 7.14915 6.99465 7.50392 6.41203 7.7916C6.2555 7.86896 6.1032 7.84781 5.99471 7.73811C5.88442 7.6263 5.86628 7.48005 5.94515 7.32019C6.26336 6.67502 6.67645 6.09784 7.18533 5.58896C8.2856 4.4896 9.38465 3.38903 10.4852 2.28997C10.8194 1.95636 11.3459 2.00713 11.5731 2.39574C11.6196 2.47521 11.6426 2.56859 11.6767 2.65532C11.6767 2.71606 11.6767 2.7765 11.6767 2.83693Z'
      fill={fill}
    />
  </svg>
)

export default ESignIcon
