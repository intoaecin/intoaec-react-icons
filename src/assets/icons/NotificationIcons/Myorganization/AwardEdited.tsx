import React from 'react'

const AwardEdited: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    // width="36"
    // height="48"
    {...props}
    viewBox='0 0 36 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M17.3852 0.412109H18.0848V0.452087L18.2647 0.492064L18.7245 0.711938L19.1043 0.97179L19.3841 1.19166L19.604 1.37156L19.9238 1.63141L20.2636 1.91125L20.5434 2.13113L20.8433 2.33101L21.1431 2.49092L21.4829 2.61085L21.8027 2.65083H22.1825L22.6023 2.59086L24.3413 2.19109L24.761 2.13113H25.3807L25.6605 2.19109L25.8804 2.29104L26.1003 2.43096L26.3401 2.67082L26.52 2.93067L26.6999 3.25049L26.8998 3.71022L27.2396 4.64969L27.4795 5.26933L27.6794 5.66911L27.8792 5.94895L28.0791 6.16882L28.4189 6.40868L28.8587 6.60857L29.5783 6.84843L30.6177 7.18824L31.1174 7.40811L31.4172 7.58801L31.6771 7.78789L31.857 7.98778L32.0169 8.26762L32.0968 8.50748L32.1368 8.76733L32.1568 9.18709L32.0769 9.80674L31.877 10.7862L31.737 11.5058L31.6971 11.8856V12.1054L31.737 12.4252L31.817 12.7051L31.9569 13.0249L32.0769 13.2448L32.2567 13.5246L32.5366 13.9044L32.8164 14.2642L33.2362 14.8239L33.4561 15.1237L33.6959 15.5035L33.8958 15.8833L34.0157 16.1831L34.0757 16.4629V16.7228L34.0157 17.0226L33.8958 17.3224L33.7359 17.6223L33.556 17.8821L33.3761 18.122L33.0963 18.4618L32.8764 18.7216L32.6965 18.9415L32.4566 19.2214L32.2567 19.4812L32.0369 19.821L31.877 20.1808L31.797 20.4607L31.777 20.6206V21.1403L31.837 21.56L32.1368 22.9992L32.2168 23.5789V24.0186L32.1568 24.4184L32.0769 24.6183L31.9569 24.8382L31.7171 25.118L31.4172 25.3379L31.0774 25.5178L30.5577 25.7176L29.7182 25.9975L29.8381 26.2174L30.118 26.7171L30.2779 26.9769L30.5377 27.4367L30.7376 27.7765L31.0175 28.2562L31.3173 28.7759L31.6371 29.3156L31.9369 29.8353L32.3767 30.5949L33.2162 32.034L33.4361 32.4138L33.7559 32.9535L34.0157 33.4132L34.2156 33.7531L34.4955 34.2328L34.7153 34.6126L34.9952 35.0923L35.1551 35.4121L35.1951 35.552V35.8718L35.1151 36.0517L34.9752 36.2117L34.7953 36.3316L34.5954 36.3915L34.2556 36.4315L31.1774 36.5714L30.5777 36.6114L30.2179 36.6914L29.8581 36.8313L29.5183 37.0112L29.2585 37.2111L29.0786 37.351L28.8787 37.5509L28.6788 37.8307L28.0791 38.7902L27.8393 39.17L27.3396 39.9695L27.1996 40.1894L26.9598 40.5692L26.7799 40.849L26.62 41.0489L26.4601 41.1888L26.3002 41.2688L26.0603 41.3087L25.8604 41.2688L25.7005 41.1888L25.5206 41.0289L25.3207 40.7491L25.0808 40.3293L24.761 39.7896L24.5212 39.3698L23.9615 38.4104L23.6617 37.8907L23.3219 37.311L23.022 36.7913L22.7022 36.2516L22.3824 35.6919L21.5429 34.2528L21.323 33.873L21.0232 33.3533L20.7633 32.9135L20.4635 32.3938L20.1836 31.9141L19.9838 31.5743L19.9038 31.4744V31.4344L19.7639 31.4943L19.544 31.6543L19.3241 31.8342L19.0443 32.034L18.7844 32.1939L18.4047 32.3738L18.0649 32.4738L17.9049 32.4938H17.6851L17.3453 32.4338L17.0654 32.3339L16.7056 32.174L16.3858 31.9941L16.006 31.7342L15.8061 31.5743L15.6263 31.4744H15.5263L15.4064 31.6343L15.2465 31.8941L15.1265 32.114L14.5269 33.1534L14.307 33.5332L14.0272 34.0129L13.7273 34.5326L13.4875 34.9524L13.2276 35.3921L12.628 36.4315L12.3481 36.9113L11.7485 37.9507L11.4686 38.4304L10.869 39.4698L10.5891 39.9495L10.2893 40.4692L10.0894 40.809L9.88953 41.0889L9.70963 41.2488L9.52973 41.3487H9.10997L9.05001 41.2887L8.87011 41.1688L8.67023 40.9489L8.35041 40.4492L8.05058 39.9695L7.77074 39.5298L7.53088 39.15L7.23105 38.6702L6.99118 38.2905L6.69136 37.8107L6.53145 37.6109L6.39153 37.4509L6.05172 37.1911L5.77188 37.0112L5.35212 36.8113L5.05229 36.7114L4.65252 36.6514L1.87411 36.5315L1.0146 36.4915L0.694783 36.4315L0.45492 36.3116L0.295011 36.1317L0.215057 35.9518L0.195068 35.7519L0.255034 35.4921L0.354977 35.2522L0.654806 34.7325L0.854691 34.3927L1.15452 33.873L1.39438 33.4532L1.59427 33.1134L1.87411 32.6337L2.19393 32.074L2.75361 31.1146L3.07342 30.5549L3.6331 29.5954L3.93293 29.0757L4.15281 28.6959L4.43265 28.2162L4.75246 27.6565L5.07228 27.1168L5.3921 26.5572L5.59198 26.1974L5.61197 26.1574V26.0375L5.53202 25.9575L5.23219 25.8376L4.63253 25.6377L4.21277 25.4578L3.79301 25.1979L3.53316 24.9581L3.35326 24.6982L3.23333 24.4184L3.17337 24.0986L3.15338 23.6988L3.23333 23.0592L3.55315 21.5001L3.61312 21.0003V20.7405L3.55315 20.3407L3.41323 19.9609L3.27331 19.7011L3.07342 19.4013L2.89353 19.1814L2.65366 18.9015L2.47377 18.6817L2.2339 18.4018L2.05401 18.182L1.79415 17.8421L1.57428 17.5023L1.37439 17.0826L1.31443 16.8627L1.29444 16.5429L1.33442 16.2431L1.43436 15.9232L1.63425 15.4835L1.99404 14.9438L2.25389 14.624L2.45378 14.3641L2.61369 14.1643L2.87354 13.8444L3.1134 13.5446L3.39324 13.1049L3.53316 12.805L3.61312 12.5652L3.67308 12.0455L3.61312 11.4858L3.41323 10.5063L3.27331 9.82673L3.21334 9.36699V8.94723L3.25332 8.60743L3.33328 8.34757L3.4732 8.08772L3.59313 7.92781H3.6331V7.88784H3.67308L3.69307 7.82787L3.97291 7.62799L4.23276 7.46808L4.73248 7.2482L5.63196 6.94837L6.33156 6.7285L6.75132 6.5486L7.01117 6.40868L7.35098 6.14883L7.61083 5.82901L7.89067 5.28932L8.1905 4.46979L8.47034 3.71022L8.63025 3.35043L8.79016 3.03061L9.07 2.65083L9.22991 2.49092L9.50975 2.31102L9.70963 2.23107L9.86954 2.19109L10.0694 2.1711H10.5092L11.0689 2.25106L12.2082 2.51091L12.7279 2.63084L13.1477 2.69081H13.5474L13.8473 2.65083L14.0871 2.51091L14.4269 2.25106L14.7068 2.03118L15.4264 1.4715L15.8061 1.21165L16.106 1.01177L16.5857 0.731927L17.1454 0.492064L17.3852 0.412109ZM17.5252 4.46979L16.7056 4.50977L16.026 4.58972L15.5063 4.66968L14.5469 4.88955L13.7873 5.12941L13.2476 5.3293L12.4281 5.68909L11.9883 5.92896L11.4486 6.22879L10.9689 6.5486L10.5691 6.82844L10.3293 7.00834L10.0494 7.2482L9.78959 7.46808L9.56971 7.64797L9.01003 8.20765L8.87011 8.36756L8.69021 8.54746L8.47034 8.8273L8.21049 9.14712L7.95064 9.48692L7.63082 9.98664L7.37097 10.3864L7.23105 10.6263L7.07114 10.9461L6.7913 11.4858L6.55144 12.0854L6.35155 12.6051L6.11169 13.4247L5.99176 13.9244L5.85184 14.684L5.79187 15.1437L5.7319 15.9232V16.9627L5.79187 17.7222L5.87182 18.3619L6.05172 19.2613L6.21163 19.841L6.39153 20.4207L6.63139 21.0403L6.85126 21.56L7.21106 22.2596L7.39096 22.5794L7.57085 22.8593L7.85069 23.299L8.13053 23.6788L8.3704 23.9786L8.57028 24.2385L8.85012 24.5383L9.08999 24.7982L9.56971 25.2779L9.78959 25.4578L10.0494 25.6977L10.2693 25.8776L10.6491 26.1574L10.9889 26.3973L11.1888 26.5372L11.5886 26.777L12.0483 27.0369L12.608 27.3167L13.3276 27.6166L13.8872 27.8165L14.4069 27.9764L15.0466 28.1363L15.8061 28.2762L16.5657 28.3761L17.0454 28.4161H18.2647L19.1442 28.3362L19.8039 28.2362L20.5434 28.0763L21.1231 27.9164L21.7827 27.6965L22.3424 27.4766L22.9021 27.2168L23.6017 26.857L23.9815 26.6171L24.4412 26.3173L24.761 26.0974L25.0609 25.8576L25.3407 25.6377L25.6006 25.4178L25.8004 25.2379L26.58 24.4584L26.7599 24.2385L26.9798 23.9786L27.1597 23.7588L27.3396 23.5189L27.6594 23.0392L27.7993 22.8393L27.9592 22.5794L28.239 22.0597L28.4589 21.66L28.6988 21.1003L28.9187 20.5606L29.1985 19.6811L29.3584 19.0415L29.4983 18.3419L29.5983 17.5223L29.6183 17.3025L29.6382 16.7828V15.8833L29.5583 14.9038L29.3984 13.9644L29.2785 13.4647L29.0386 12.6251L28.7587 11.8856L28.5389 11.3659L28.1791 10.6663L27.9192 10.2065L27.6794 9.82673L27.5195 9.58687L27.2596 9.22707L27.0597 8.96722L26.8199 8.68738L26.64 8.46751L26.4601 8.26762L26.3201 8.1277L26.3002 8.08772H26.2602L26.2202 8.00777L25.9803 7.76791H25.9404V7.72793L25.7804 7.58801L25.5406 7.36813L25.3207 7.18824L25.0009 6.92839L24.6411 6.66853L24.2413 6.38869L23.5417 5.96893L22.7422 5.56916L22.2425 5.34929L21.363 5.02947L20.8633 4.88955L20.1437 4.70965L19.2842 4.56973L18.9643 4.52976L18.0049 4.46979H17.5252Z'
      fill='#3CA2FF'
    />
    <path
      d='M17.4852 6.30859H17.865L18.5446 6.34857L19.2042 6.42853L19.8438 6.54846L20.4035 6.68838L21.1231 6.92824L21.6428 7.12813L22.1625 7.36799L22.7622 7.68781L23.4418 8.12755L23.7016 8.30745L23.9815 8.52733L24.3213 8.80717L24.5012 8.94709L25.1808 9.6267L25.3607 9.84657L25.6005 10.1264L25.8204 10.4063L25.9603 10.6061L26.2802 11.0859L26.4401 11.3457L26.7199 11.8654L26.8798 12.1852L27.1597 12.8449L27.3995 13.5644L27.5194 13.9842L27.6794 14.7238L27.7593 15.2835L27.8193 15.9831V17.0025L27.7593 17.7021L27.6394 18.4217L27.5394 18.9014L27.3396 19.601L27.1397 20.1407L26.9398 20.6204L26.7799 20.9602L26.58 21.34L26.4001 21.6598L26.1402 22.0596L25.9004 22.4194L25.6805 22.6992L25.4206 23.019L25.2407 23.2389L24.4812 23.9985L24.2813 24.1584L24.0214 24.3783L23.6816 24.6381L23.022 25.0779L22.6023 25.3177L22.0626 25.5976L21.5029 25.8374L21.0831 25.9973L20.3835 26.2172L19.7039 26.3771L19.0843 26.4771L18.5646 26.537L18.3047 26.557L17.7051 26.577H17.4052L16.5657 26.517L16.026 26.4371L15.4064 26.3172L14.5469 26.0773L13.7673 25.7775L13.4075 25.6176L12.6679 25.2378L12.2482 24.9779L11.9084 24.7381L11.5486 24.4782L11.3087 24.2983L10.9089 23.9385L10.749 23.7986L10.5491 23.6187L10.2693 23.3389L10.0894 23.119L9.86953 22.8791L9.68964 22.6593L9.48975 22.3994L8.95006 21.5799L8.75017 21.2201L8.45034 20.6404L8.23047 20.1007L8.03058 19.561L7.8307 18.8414L7.75074 18.4816L7.63081 17.782L7.57085 17.2024L7.55086 16.9225V15.8631L7.61082 15.2635L7.69078 14.7038L7.85069 13.9442L8.01059 13.4045L8.21048 12.8049L8.45034 12.2452L8.69021 11.7455L8.95006 11.2857L9.08998 11.0459L9.30985 10.7261L9.60968 10.2863L9.76959 10.1064L9.9295 9.90654L10.1694 9.6267L10.1893 9.58672H10.2293L10.2693 9.50677L10.6691 9.10699H10.7091V9.06702H10.749V9.02704H10.789V8.98706L10.9489 8.84714L11.2088 8.62727L11.4686 8.42738L11.7485 8.20751L12.2082 7.90768L12.548 7.68781L13.0277 7.42795L13.3475 7.26805L13.7873 7.06816L14.367 6.84829L15.0266 6.6484L15.7262 6.48849L16.3658 6.38855L17.0055 6.32858L17.4852 6.30859ZM17.6251 10.1864L17.4252 10.3063L17.2853 10.4662L17.1454 10.7061L16.9655 11.0859L16.3458 12.3252L16.1659 12.7049L15.966 13.0447L15.7862 13.2446V13.2846L15.7062 13.3246L15.4264 13.5844L15.2265 13.7244L14.7667 13.9842L14.4669 14.0842L13.9472 14.1841L12.0283 14.4639L11.6685 14.5439L11.4886 14.6238L11.3887 14.6838V14.7238H11.3487L11.2487 14.9237V15.1435L11.3287 15.3434L11.4686 15.5233L11.6685 15.7432H11.7085L11.7285 15.8032L11.8884 15.9431L12.3081 16.3628H12.3481L12.3681 16.4228L12.528 16.5627L13.3276 17.3623L13.5274 17.6421L13.6874 17.9619L13.8073 18.2418L13.9072 18.6415L13.9672 19.0213V19.2812L13.8872 19.8409L13.6074 21.4799L13.5474 21.8397V22.2195L13.6274 22.4194L13.7273 22.5393L13.9072 22.6193H14.1071L14.387 22.5393L14.7068 22.3794L15.2465 22.0996L15.6262 21.8997L16.4658 21.4599L16.8056 21.3L17.0854 21.2201L17.5451 21.1601H17.9649L18.4246 21.2201L18.7045 21.3L19.0243 21.4399L19.4641 21.6798L19.8039 21.8597L20.1237 22.0196L20.8033 22.3794L21.1831 22.5593L21.383 22.6193H21.6028L21.8027 22.5193L21.9226 22.3794L21.9626 22.2595L21.9826 21.9796L21.9426 21.6598L21.5828 19.541L21.5629 19.4011V18.9014L21.6828 18.3417L21.8427 17.9419L22.0026 17.6221L22.1825 17.3823L22.4024 17.1424L22.8221 16.7226L22.8621 16.7027V16.6627H22.9021V16.6227L22.982 16.5827L23.5017 16.063L23.6617 15.9231L24.0414 15.5433L24.2013 15.3234L24.2813 15.1036V14.9636L24.2013 14.7638L24.0414 14.6238L23.7816 14.5239L23.5017 14.4639L21.5429 14.1841L21.1031 14.1041L20.8033 14.0042L20.5634 13.8843L20.2036 13.6644L20.0037 13.4845L19.7839 13.3046L19.7039 13.2047H19.6639L19.624 13.1247L19.484 12.9248L19.2242 12.4451L18.9843 11.9454L18.3447 10.6661L18.1848 10.4063L18.0848 10.3063L17.9449 10.2064L17.885 10.1864H17.6251Z'
      fill='#3CA2FF'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22.6851 42.5347C22.6851 45.2803 20.4465 47.506 17.6851 47.506C14.9236 47.506 12.6851 45.2803 12.6851 42.5347C12.6851 39.7892 14.9236 37.5635 17.6851 37.5635C20.4465 37.5635 22.6851 39.7892 22.6851 42.5347ZM18.6285 40.5982C18.5229 40.6247 18.4376 40.6897 18.2141 40.9152L18.0008 41.1285L18.5493 41.677L19.0978 42.2255L19.3274 41.9959C19.4574 41.87 19.5752 41.7318 19.5976 41.6872C19.6443 41.5876 19.6464 41.4373 19.6057 41.3357C19.5671 41.2443 19.0288 40.6958 18.9211 40.6409C18.8317 40.5942 18.7139 40.5759 18.6285 40.5982ZM15.7356 43.4181L16.7067 42.4369C17.239 41.8985 17.6859 41.4557 17.6961 41.4557C17.7083 41.4536 17.9581 41.6954 18.2547 41.992L18.7931 42.5303L17.818 43.5055L16.8428 44.4806H16.2902H15.7356V43.9504V43.4181Z'
      fill='#3CA2FF'
    />
  </svg>
)

export default AwardEdited
