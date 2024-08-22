import React from 'react'

const ProposalLeadClicks: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox='0 0 16 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.80482 21.7731C6.50703 21.651 6.18004 21.5733 5.91771 21.3981C5.37846 21.0377 5.14691 20.4886 5.13961 19.8461C5.13387 19.3115 5.14691 18.7769 5.13126 18.2434C5.12813 18.1376 5.06138 17.9968 4.97741 17.9378C4.7516 17.7793 4.50492 17.6489 4.25928 17.5217C3.81547 17.2922 3.43789 16.9907 3.11819 16.6027C2.28898 15.5957 1.44099 14.6043 0.610727 13.5983C0.101202 12.9808 -0.0104038 12.2845 0.334321 11.5581C0.659749 10.8728 1.23551 10.5182 1.9938 10.4968C2.53357 10.4817 2.99199 10.696 3.37426 11.0741C3.53176 11.23 3.68613 11.3891 3.889 11.5935C3.889 11.4689 3.889 11.399 3.889 11.3291C3.889 9.60811 3.88639 7.88709 3.89057 6.16608C3.89265 5.3791 4.22486 4.77935 4.93152 4.40438C6.02358 3.82393 7.47654 4.56397 7.59544 5.79319C7.65959 6.46074 7.62674 7.13715 7.63717 7.80991C7.63821 7.89231 7.63717 7.97523 7.63717 8.07328C7.6961 8.06754 7.74251 8.06962 7.78528 8.05867C8.36677 7.91108 8.89924 8.01695 9.37852 8.37419C9.46874 8.44147 9.5282 8.45607 9.62989 8.3841C10.711 7.61747 12.044 8.02217 12.5254 9.25712C12.5379 9.28894 12.5541 9.31866 12.5572 9.3244C12.8581 9.30041 13.1491 9.23314 13.4297 9.26286C14.431 9.36977 15.1158 10.1098 15.1262 11.1174C15.1439 12.7899 15.1319 14.4624 15.1298 16.1349C15.1293 16.6314 14.903 17.0445 14.6177 17.4278C13.7129 18.6414 13.9022 18.1746 13.8855 19.7C13.8798 20.2143 13.7843 20.6894 13.4422 21.0935C13.1434 21.4461 12.77 21.6636 12.3142 21.7407C12.2813 21.7465 12.25 21.7627 12.2182 21.7736C10.4137 21.7731 8.60928 21.7731 6.80482 21.7731ZM5.13856 9.55335C5.13856 10.0462 5.13856 10.5385 5.13856 11.0313C5.13856 11.6973 5.14169 12.3638 5.13752 13.0298C5.13491 13.4235 4.90127 13.6874 4.5529 13.7104C4.32551 13.7255 4.15498 13.6196 4.00217 13.4658C3.50777 12.9688 3.01285 12.4728 2.51532 11.9789C2.21805 11.6843 1.85612 11.6592 1.58962 11.908C1.33251 12.1479 1.33095 12.5145 1.58858 12.8228C2.44752 13.8502 3.30333 14.8802 4.17114 15.8997C4.31143 16.0645 4.49605 16.2006 4.68067 16.3169C4.99097 16.5125 5.32631 16.6684 5.63609 16.864C6.14979 17.1889 6.40899 17.6552 6.39073 18.2763C6.37561 18.7962 6.38552 19.3172 6.38812 19.8372C6.39021 20.2701 6.64106 20.522 7.07549 20.5225C8.69898 20.5246 10.323 20.5246 11.9465 20.5225C12.3793 20.522 12.6297 20.269 12.6328 19.8362C12.6354 19.4476 12.6359 19.0591 12.6328 18.6706C12.6297 18.2773 12.7314 17.9138 12.953 17.591C13.1846 17.2541 13.4474 16.9375 13.6644 16.5918C13.7739 16.4181 13.8714 16.2001 13.8735 16.0014C13.8902 14.392 13.8839 12.7821 13.8818 11.1721C13.8813 10.7768 13.631 10.5004 13.2753 10.49C12.929 10.4801 12.6677 10.7351 12.6333 11.1163C12.5994 11.4939 12.3314 11.7495 11.9846 11.7354C11.6362 11.7213 11.389 11.4491 11.3853 11.0678C11.3817 10.6793 11.3879 10.2908 11.3832 9.90225C11.3791 9.51528 11.1131 9.23887 10.7564 9.24096C10.3991 9.24304 10.1399 9.51945 10.1363 9.90902C10.1326 10.2908 10.1379 10.6725 10.1347 11.0538C10.1316 11.4579 9.87188 11.738 9.50734 11.7359C9.14279 11.7338 8.88933 11.4548 8.88673 11.047C8.88412 10.6652 8.88933 10.2835 8.88516 9.90225C8.88099 9.51528 8.61501 9.23835 8.2583 9.24044C7.90105 9.24252 7.64186 9.51841 7.63821 9.9085C7.63456 10.283 7.63873 10.6579 7.63717 11.0324C7.63508 11.4543 7.38058 11.7375 7.00978 11.7354C6.63845 11.7333 6.38969 11.4517 6.38865 11.0261C6.38708 10.235 6.38812 9.44383 6.38812 8.65321C6.38812 7.81356 6.38656 6.97391 6.38917 6.13426C6.39021 5.84117 6.27339 5.62005 6.00377 5.50166C5.58238 5.31652 5.14221 5.62995 5.14065 6.1181C5.13648 7.26388 5.13908 8.40861 5.13856 9.55335Z'
      fill='#3CA2FF'
    />
    <path
      d='M4.33111 2.70562C4.3186 3.00915 4.21586 3.19794 4.00151 3.31111C3.78143 3.42793 3.53893 3.43732 3.35587 3.27095C2.99237 2.94031 2.64191 2.59298 2.3144 2.22739C2.11987 2.01044 2.17359 1.65633 2.3775 1.44824C2.58872 1.23337 2.94909 1.17757 3.1723 1.37836C3.53788 1.70639 3.87896 2.06259 4.21482 2.4214C4.29304 2.5038 4.30817 2.64565 4.33111 2.70562Z'
      fill='#3CA2FF'
    />
    <path
      d='M7.8845 3.39553C7.56481 3.37675 7.37289 3.26827 7.26337 3.04194C7.1549 2.81716 7.16011 2.58091 7.32856 2.39786C7.64773 2.05157 7.9789 1.71414 8.3278 1.39863C8.56822 1.18115 8.93745 1.22705 9.15597 1.45756C9.36823 1.68129 9.39587 2.0401 9.18257 2.27269C8.8733 2.60907 8.54683 2.93137 8.2115 3.24168C8.11189 3.33294 7.95647 3.36319 7.8845 3.39553Z'
      fill='#3CA2FF'
    />
    <path
      d='M5.1398 1.6954C5.1398 1.48732 5.13355 1.27871 5.14085 1.07114C5.15336 0.715468 5.42664 0.450536 5.76824 0.453144C6.10097 0.456273 6.37581 0.71599 6.38363 1.06071C6.39406 1.49045 6.3951 1.92122 6.38259 2.35148C6.37268 2.69359 6.08949 2.95175 5.75728 2.94862C5.42351 2.94549 5.15493 2.68577 5.14085 2.34105C5.13302 2.12566 5.14033 1.91027 5.1398 1.6954Z'
      fill='#3CA2FF'
    />
    <path
      d='M1.99943 5.44742C1.79812 5.44742 1.59681 5.45263 1.39551 5.44637C1.03566 5.4349 0.770205 5.16997 0.767597 4.82837C0.76499 4.48678 1.02888 4.21037 1.38612 4.20203C1.80229 4.19264 2.21899 4.19368 2.63516 4.20151C2.99553 4.20829 3.26046 4.47739 3.26307 4.81899C3.26568 5.1684 2.99553 5.43699 2.62369 5.4469C2.4156 5.45211 2.20751 5.44742 1.99943 5.44742Z'
      fill='#3CA2FF'
    />
    <path
      d='M9.53253 4.20136C9.73384 4.20136 9.93514 4.19562 10.1365 4.20293C10.4947 4.21544 10.7597 4.48455 10.7591 4.82614C10.7586 5.16774 10.4937 5.43997 10.1349 5.44727C9.71871 5.45562 9.30202 5.45614 8.88585 5.44727C8.52756 5.43997 8.26315 5.16617 8.26367 4.82458C8.26419 4.48298 8.5286 4.21492 8.88741 4.20293C9.10228 4.19562 9.31714 4.20136 9.53253 4.20136Z'
      fill='#3CA2FF'
    />
  </svg>
)

export default ProposalLeadClicks
