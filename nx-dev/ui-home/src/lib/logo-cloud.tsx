export function LogoCloud(): JSX.Element {
  return (
    // <div className="bg-white dark:bg-slate-900">
    <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-6 lg:mt-8">
        <div className="col-span-1 flex items-center justify-center">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-28 w-28 text-[#0071CE] dark:text-slate-600"
          >
            <title>Walmart</title>
            <path d="M21.41818 9.10219c-.22048 0-.39583.12308-.39583.27297l.13393 1.51627c.01478.09132.12669.16185.26197.16185.13555-.00017.24705-.07065.26214-.16185l.13424-1.51627c0-.1499-.17555-.27297-.39645-.27297zM-.00002 10.3184s.59713 2.44699.69242 2.84417c.11123.46362.3117.63419.88954.51913l.37291-1.51718c.0945-.37683.1579-.64553.21866-1.02883h.01065c.04269.3871.10354.65314.18131 1.03017 0 0 .15176.68869.22949 1.05042.07795.36163.29482.5895.86083.46542l.88851-3.3633h-.71735l-.30339 1.45411c-.08155.42325-.15544.75396-.21251 1.14117h-.01022c-.05189-.38347-.11777-.70096-.20072-1.11331l-.31586-1.48197h-.7474l-.3378 1.44462c-.09569.43899-.18528.79337-.2422 1.16745h-.01023c-.05832-.35224-.13599-.7977-.22006-1.22261 0 0-.20074-1.03328-.27115-1.38946zm6.83845 0v3.3633h.68299v-3.3633zm9.6188 0v2.48118c0 .34202.0644.5817.20213.72811.12033.12806.31854.21094.55604.21094.20193 0 .40062-.0383.49426-.07317l-.0088-.53367c-.06968.01711-.1498.03078-.25942.03078-.23265 0-.31068-.149-.31068-.45611v-.94921h.59479v-.64351h-.59481v-.79533zm2.77885 0c-.11446.0027-.24452.08936-.32723.23277-.11062.19096-.09105.40434.03838.47923l1.3799.64254c.0862.03205.20323-.02912.27103-.14597.06814-.11745.0629-.2496-.0088-.3082l-1.24635-.8741c-.03237-.01874-.06877-.02717-.10693-.02627zm4.36427 0c-.03815-.0009-.0745.0075-.1068.02628l-1.2464.8741c-.07112.05846-.07653.1901-.0092.30734.00006.00013.00015.00023.00025.00036.00009.00016.00015.00033.00024.00049.06804.11686.18472.17803.27091.14598l1.38004-.64254c.12997-.0749.14861-.28827.03874-.47923-.08309-.1434-.21333-.23006-.32777-.23277zM5.312 11.0981c-.42444 0-.76136.11916-.94501.22529l.13442.46019c.16808-.10595.43566-.19366.68907-.19366.41954-.0011.48817.23728.48817.39012v.03613c-.9142-.0014-1.49164.31493-1.49164.9598 0 .3937.29399.76266.80512.76266.31466 0 .57778-.12554.73548-.32662h.01545s.10445.4367.67982.26969c-.03022-.18174-.04002-.37546-.04002-.60884v-.89849c0-.57263-.24452-1.07627-1.07086-1.07627zm4.08552 0c-.42739 0-.61944.2166-.7359.40034h-.01016v-.34335h-.65173v2.5266h.68658V12.2c0-.06945.00799-.1429.03223-.2068.05689-.1492.19565-.3237.41725-.3237.27704 0 .40667.2342.40667.57222v1.44h.68585v-1.4996c0-.06636.0091-.14622.02859-.20486.05639-.16969.20602-.30776.41201-.30776.28086 0 .41567.23012.41567.62788v1.38434h.68633v-1.48805c0-.78478-.39845-1.09555-.8483-1.09555-.19922 0-.35646.04996-.49863.13722-.1195.07334-.22655.17753-.32006.3147h-.0101c-.10853-.27228-.36375-.45192-.6963-.45192zm3.7702 0c-.42435 0-.76113.11916-.94495.22529l.13454.46019c.16792-.10595.43572-.19366.689-.19366.41926-.0011.48806.23728.48806.39012v.03613c-.91407-.0014-1.49164.31494-1.49164.9598 0 .3937.29418.76266.8056.76266.31441 0 .57759-.12554.735-.32662h.01557s.10437.4367.67982.26969c-.03027-.18174-.03996-.37546-.03996-.60884v-.89849c0-.57263-.24458-1.07627-1.07104-1.07627zm2.85129 0c-.26292 0-.56205.1697-.68761.53354h-.0191v-.47655h-.6181v2.5266h.70453V12.388c0-.06985.0042-.1307.01527-.1865.0521-.27102.25945-.44425.55696-.44425.08167 0 .1401.0088.20333.018v-.66151c-.05302-.0107-.0893-.01563-.15528-.01563zm4.35946 1.22067c-.01785-.00025-.03513.0026-.05134.0087l-1.3799.6418c-.12943.07519-.149.28868-.03838.47984.11028.1906.30469.28118.43415.20644l1.24634-.87349c.0717-.05929.07696-.19127.0088-.30862l.0006.00025c-.05507-.09558-.14292-.15388-.22027-.15492zm2.07955 0c-.07727.001-.1649.05934-.22012.15491l.00049-.00025c-.06781.11735-.06254.24934.0088.30862l1.2464.87349c.12921.07474.3238-.01584.43458-.20644.10986-.19116.09122-.40466-.03875-.47983l-1.38012-.64181c-.0162-.0061-.03344-.0089-.05128-.0087zm-16.75741.14518v.31519c0 .0466-.00406.09467-.01697.13673-.05286.17506-.23415.32303-.46086.32303-.18901 0-.33916-.1073-.33916-.33422 0-.34707.38204-.443.81699-.44073zm7.85577 0v.31519c0 .0466-.0041.09467-.0169.13673-.05287.17506-.23421.32303-.46093.32303-.18905 0-.3392-.1073-.3392-.33422 0-.34707.38209-.443.81703-.44073zm7.86138.48324c-.13506.00016-.24672.07024-.26148.16137l-.13393 1.5162c0 .15015.17535.27304.39583.27304.2209 0 .39645-.12289.39645-.27303l-.13424-1.51621c-.01509-.09113-.12659-.1612-.26214-.16137z" />
          </svg>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-24 w-24 text-[#4D148C] dark:text-slate-600"
          >
            <title>FedEx</title>
            <path d="M22.498 14.298c-.016-.414.345-.751.75-.755a.745.745 0 0 1 .752.755.755.755 0 0 1-.751.745c-.395.002-.759-.346-.751-.745zm.759-.083c.067-.02.164-.042.162-.13.007-.09-.086-.133-.162-.134h-.163v.263c0 .001.165-.002.163.001zm-.163.107v.418h-.14v-.91h.327c.156-.021.294.092.286.253a.218.218 0 0 1-.156.19c.162.083.108.322.173.467h-.156a2.355 2.355 0 0 1-.04-.205c-.018-.093-.047-.229-.17-.213h-.124zm.76-.024a.603.603 0 0 0-.605-.632c-.338-.012-.62.302-.605.632a.619.619 0 0 0 .605.622.61.61 0 0 0 .605-.622zm-5.052-.579l-.878 1.008h-1.306l1.559-1.745-1.56-1.75h1.355l.902.997.878-.998h1.306l-1.543 1.743 1.559 1.753h-1.371l-.901-1.008zm-4.703-.352v-.827h1.904v-1.506l1.724 1.948-1.724 1.941v-1.556h-1.904zm1.56 1.36h-3.2V9.044h3.224v1.024H13.77v1.163h1.888v.958h-1.904v1.522h1.904v1.016zm-5.705-.655c-.54.017-.878-.552-.877-1.04-.01-.507.307-1.123.878-1.105.579-.025.871.6.845 1.103.023.501-.29 1.062-.846 1.042zM4.743 12.41c.076-.358.403-.67.78-.663a.788.788 0 0 1 .803.663H4.743zm15.182.564l1.815-2.047h-2.125l-.74.844-.763-.844h-4.037v-.548h1.912V8.741H10.84v2.58c-.362-.448-.981-.559-1.526-.492-.782.123-1.427.762-1.634 1.514-.254-.958-1.179-1.588-2.157-1.554-.781.009-1.6.365-1.987 1.071v-.818h-1.87v-.9h2.043v-1.4H0v6.287h1.666v-2.644h1.666a7.59 7.59 0 0 0-.082.622c-.013 1.232 1.042 2.27 2.274 2.236a2.204 2.204 0 0 0 2.157-1.432H6.254c-.14.268-.441.38-.73.36-.457.009-.83-.417-.829-.86h2.914c.083 1.027.988 1.966 2.043 1.947a1.53 1.53 0 0 0 1.19-.639v.41h7.215l.754-.86.754.86h2.192l-1.832-2.055z" />
          </svg>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-28 w-28 text-[#607078] dark:text-slate-600"
          >
            <title>VMware</title>
            <path d="M.5 10.1a.505.505 0 00-.197.048.497.497 0 00-.25.68l1.138 2.475c.179.38.38.592.721.592.342 0 .542-.22.72-.592l1.003-2.186a.144.144 0 01.144-.092.16.16 0 01.157.16v2.118a.535.535 0 101.066 0v-1.73a.531.531 0 01.566-.552.52.52 0 01.541.551v1.73a.531.531 0 00.53.593.539.539 0 00.535-.592v-1.73a.531.531 0 01.564-.552.52.52 0 01.543.551v1.73a.531.531 0 00.528.593.535.535 0 00.535-.592v-1.969a1.234 1.234 0 00-1.283-1.23 1.647 1.647 0 00-1.14.486 1.26 1.26 0 00-1.095-.483 1.807 1.807 0 00-1.074.483 1.287 1.287 0 00-.961-.483 1.177 1.177 0 00-1.158.786l-.729 1.716-.933-2.203.011-.004A.505.505 0 00.5 10.1zm18.43.06a.27.27 0 00-.266.274h.002v3.142a.27.27 0 10.535 0v-1.222c0-1.037.571-1.56 1.27-1.643a.266.266 0 00.238-.274.258.258 0 00-.266-.269 1.465 1.465 0 00-1.242.88v-.614a.266.266 0 00-.271-.274zm-6.735.008a.273.273 0 00-.25.217l-.912 2.627-.902-2.62a.28.28 0 00-.274-.22.266.266 0 00-.27.258.493.493 0 00.034.144l1.09 3.037.02-.007a.319.319 0 00.298.242.3.3 0 00.293-.242l.903-2.583.896 2.583a.3.3 0 00.293.242h.018a.319.319 0 00.293-.242l1.097-3.038a.512.512 0 00.033-.144.258.258 0 00-.265-.25.262.262 0 00-.258.209l-.918 2.63-.904-2.626a.285.285 0 00-.278-.217h-.025a.273.273 0 00-.012 0zm10.168.008a1.75 1.75 0 00-1.691 1.851 1.765 1.765 0 001.76 1.858l-.008.013a1.784 1.784 0 001.33-.539.228.228 0 00.082-.17.228.228 0 00-.379-.168 1.435 1.435 0 01-1.018.415 1.237 1.237 0 01-1.24-1.207h2.555a.247.247 0 00.246-.247c0-.945-.593-1.806-1.637-1.806zm-5.744.002a1.571 1.571 0 00-.158.006 2.384 2.384 0 00-1.078.205.22.22 0 00-.143.222.24.24 0 00.235.229.266.266 0 00.095-.024 1.822 1.822 0 01.834-.162c.691 0 1.07.334 1.07.979v.125a3.796 3.796 0 00-1.103-.15c-.892 0-1.52.4-1.52 1.16l-.003-.004c0 .736.671 1.117 1.34 1.117a1.575 1.575 0 001.298-.62v.343a.247.247 0 00.254.25.254.254 0 00.258-.262v-1.983a1.416 1.416 0 00-.379-1.046 1.571 1.571 0 00-1-.385zm5.719.43c.714 0 1.085.565 1.139 1.214h-2.278a1.222 1.222 0 011.139-1.215zm-5.885 1.382a3.75 3.75 0 011.057.153V12.49c0 .57-.539.973-1.2.973-.485 0-.904-.261-.904-.713 0-.467.375-.76 1.047-.76Z" />
          </svg>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-12 w-12 text-[#7AB55C] dark:text-slate-600"
          >
            <title>Shopify</title>
            <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" />
          </svg>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-12 w-12 text-[#E20074] dark:text-slate-600"
          >
            <title>T-Mobile</title>
            <path d="M6.722 15.84h-4.8v-4.8h4.791v4.8zM1.922 0v8.16H3.36v-.236c0-3.844 2.159-6.24 6.239-6.24h.237v17.279c0 2.396-.957 3.36-3.36 3.36h-.72V24h12.478v-1.676h-.72c-2.395 0-3.36-.957-3.36-3.361V1.676h.237c4.08 0 6.239 2.396 6.239 6.24v.236h1.439V0Zm15.356 15.84h4.8v-4.8h-4.791v4.8z" />
          </svg>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-12 w-12 text-[#FF4785] dark:text-slate-600"
          >
            <title>Storybook</title>
            <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z" />
          </svg>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-14 w-14 text-[#FF9900] dark:text-slate-600"
          >
            <title>AWS Amplify</title>
            <path d="M5.223 17.905h6.76l1.731 3.047H0l4.815-8.344 2.018-3.494 1.733 3.002zm2.52-10.371L9.408 4.65l9.415 16.301h-3.334zm2.59-4.486h3.33L24 20.952h-3.334z" />
          </svg>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-14 w-14 text-[#FF4154] dark:text-slate-600"
          >
            <title>React Query</title>
            <path d="M6.9297 13.6875c.164-.0938.375-.0352.4687.1328l.0625.1055c.4805.8515.9805 1.6601 1.5 2.4258.6133.9023 1.3047 1.8164 2.0743 2.7421a.3455.3455 0 0 1-.0391.4844l-.0742.0664c-2.543 2.2227-4.1914 2.664-4.9532 1.332-.746-1.3046-.4765-3.6718.8086-7.1093a.3437.3437 0 0 1 .1524-.1797ZM17.75 16.3008c.1836-.0313.3594.086.3945.2695l.0196.1016c.6289 3.2851.1875 4.9297-1.3243 4.9297-1.4804 0-3.3593-1.4024-5.6484-4.2032a.3271.3271 0 0 1-.0742-.2226c0-.1875.1562-.3399.3437-.3399h.1211a32.9838 32.9838 0 0 0 2.8086-.0976c1.0703-.086 2.1914-.2305 3.3594-.4375zm.871-6.9766a.3528.3528 0 0 1 .4454-.211l.1016.0352c3.2617 1.1094 4.5039 2.332 3.7187 3.6641-.7656 1.3047-2.9922 2.254-6.6836 2.8477-.082.0117-.168-.004-.2383-.047-.168-.0976-.2265-.3085-.125-.4765l.0625-.1054c.504-.8438.957-1.6836 1.3672-2.5235.4766-.9883.9297-2.0508 1.3516-3.1836zM7.797 8.3398c.082-.0117.168.004.2383.047.168.0976.2265.3085.125.4765l-.0625.1054a34.0882 34.0882 0 0 0-1.3672 2.5235c-.4766.9883-.9297 2.0508-1.3516 3.1836a.3528.3528 0 0 1-.4453.211l-.1016-.0352c-3.2617-1.1094-4.5039-2.332-3.7187-3.6641.7656-1.3047 2.9922-2.254 6.6836-2.8477Zm5.2812-3.9843c2.543-2.2227 4.1914-2.664 4.9532-1.332.746 1.3046.4765 3.6718-.8086 7.1093a.3436.3436 0 0 1-.1524.1797c-.164.0938-.375.0352-.4687-.1328l-.0625-.1055c-.4805-.8515-.9805-1.6601-1.5-2.4258-.6133-.9023-1.3047-1.8164-2.0743-2.7421a.3455.3455 0 0 1 .0391-.4844Zm-5.793-2.082c1.4805 0 3.3633 1.4023 5.6485 4.203a.3488.3488 0 0 1 .0781.2188c-.0039.1914-.1562.3438-.3476.3438l-.1172-.004a34.5835 34.5835 0 0 0-2.8086.1016c-1.0742.086-2.1953.2305-3.3633.4375a.343.343 0 0 1-.3945-.2734l-.0196-.0977c-.629-3.2851-.1876-4.9297 1.3242-4.9297Zm2.8711 5.8124h3.6875a.638.638 0 0 1 .5508.3164l1.8477 3.2188a.6437.6437 0 0 1 0 .6289l-1.8477 3.2227a.638.638 0 0 1-.5507.3164h-3.6875c-.2266 0-.4375-.1211-.547-.3164L7.7579 12.25a.6437.6437 0 0 1 0-.629l1.8516-3.2187c.1093-.1953.3203-.3164.5468-.3164Zm3.2305.793a.638.638 0 0 1 .5508.3164l1.3906 2.4258a.6437.6437 0 0 1 0 .6289l-1.3906 2.4297a.638.638 0 0 1-.5508.3164h-2.7734c-.2266 0-.4375-.1211-.5469-.3164L8.672 12.25a.6437.6437 0 0 1 0-.629l1.3945-2.4257c.1094-.1953.3203-.3164.5469-.3164Zm-.4922.8672h-1.789c-.2266 0-.4336.1172-.547.3164l-.8983 1.5586a.6437.6437 0 0 0 0 .6289l.8984 1.5625a.6317.6317 0 0 0 .5469.3164h1.789a.6317.6317 0 0 0 .547-.3164l.8983-1.5625a.6437.6437 0 0 0 0-.629l-.8984-1.5585c-.1133-.1992-.3203-.3164-.5469-.3164Zm-.4765.8281c.2265 0 .4375.1211.5468.3164l.422.7305c.1132.1953.1132.4375 0 .6289l-.422.7344c-.1093.1953-.3203.3164-.5468.3164h-.836a.6317.6317 0 0 1-.5468-.3164l-.422-.7344c-.1132-.1914-.1132-.4336 0-.629l.422-.7304a.6317.6317 0 0 1 .5468-.3164zm-.418.8164a.548.548 0 0 0-.4727.2735c-.0976.168-.0976.375 0 .5468a.5444.5444 0 0 0 .4727.2696.5444.5444 0 0 0 .4727-.2696c.0976-.1718.0976-.3789 0-.5468A.548.548 0 0 0 12 11.3906Zm-4.4219.5469h.9805M18.9805 7.75c.3906-1.8945.4765-3.3438.2226-4.3984-.1484-.629-.4218-1.1368-.8398-1.5078-.4414-.3907-1-.582-1.625-.582-1.0352 0-2.1211.4726-3.2813 1.3671-.4726.3633-.9648.8047-1.4726 1.3164-.043-.0508-.086-.1015-.1367-.1445-1.4454-1.2852-2.6602-2.082-3.6993-2.3906-.6171-.1836-1.1953-.1993-1.7226-.0235-.5586.1875-1.004.5742-1.3164 1.1172-.5156.8945-.6524 2.0742-.461 3.5274.0782.5898.2149 1.2343.4024 1.9335a1.1187 1.1187 0 0 0-.2149.047C3.008 8.621 1.711 9.2694.9258 10.0155c-.4649.4414-.7695.9375-.8828 1.4805-.1133.5781 0 1.1562.3125 1.6992.5156.8945 1.4648 1.5977 2.8164 2.1563.543.2226 1.1562.4257 1.8437.6093a1.0227 1.0227 0 0 0-.0703.2266c-.3906 1.8906-.4765 3.3438-.2226 4.3945.1484.629.4257 1.1407.8398 1.5078.4414.3907 1 .582 1.625.582 1.0352 0 2.121-.4726 3.2813-1.3632.4765-.3711.9726-.8164 1.4882-1.336a1.2 1.2 0 0 0 .1953.2266c1.4454 1.2852 2.6602 2.082 3.6993 2.3906.6172.1836 1.1953.1993 1.7226.0235.5586-.1875 1.004-.5742 1.3164-1.1172.5157-.8945.6524-2.0742.461-3.5273-.082-.6133-.2227-1.2813-.4258-2.0118a1.2248 1.2248 0 0 0 .2383-.0468c1.828-.6094 3.125-1.2578 3.9101-2.004.4649-.4413.7696-.9374.8828-1.4804.1133-.5781 0-1.1563-.3125-1.6992-.5156-.8946-1.4648-1.5977-2.8164-2.1563-.5586-.2304-1.1953-.4414-1.9062-.625a.8647.8647 0 0 0 .0586-.1953z" />
          </svg>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-16 w-16 text-[#1BA0D7] dark:text-slate-600"
          >
            <title>Cisco</title>
            <path d="M16.331 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.186 1.186 0 01-.806-.237 1.038 1.038 0 01-.352-.498 1.21 1.21 0 01-.023-.667c.052-.225.178-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.34 2.34 0 00-.903.206c-.287.132-.54.327-.739.571a2.221 2.221 0 00-.04 2.705c.295.378.709.645 1.175.756.491.12 1.006.102 1.487-.052l.082-.023M5.336 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.183 1.183 0 01-.806-.237 1.03 1.03 0 01-.351-.498 1.202 1.202 0 01-.024-.667c.052-.225.177-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.344 2.344 0 00-.903.206 2.08 2.08 0 00-.74.571 2.224 2.224 0 00-.041 2.705 2.11 2.11 0 001.176.756c.491.12 1.005.102 1.487-.052l.083-.023M9.26 17.249l-.004.957.07.012c.22.041.441.069.664.085.195.019.391.022.587.012.187-.014.372-.049.551-.104.21-.06.405-.163.571-.305a1.16 1.16 0 00.333-.478 1.31 1.31 0 00-.007-.96 1.068 1.068 0 00-.298-.414 1.261 1.261 0 00-.438-.255l-.722-.268a.388.388 0 01-.197-.188.245.245 0 01.008-.219.382.382 0 01.154-.142.798.798 0 01.257-.074c.153-.022.308-.021.46.005.18.02.358.051.533.096l.038.008v-.883l-.069-.015a4.749 4.749 0 00-.543-.097 2.844 2.844 0 00-.714-.003c-.3.027-.585.143-.821.33-.16.126-.281.293-.351.484-.104.29-.105.608 0 .899.054.145.14.274.252.381.097.093.207.173.327.236.157.084.324.149.497.195.057.017.114.035.17.054l.085.031.024.01c.084.03.162.078.226.14.045.042.08.094.101.151a.325.325 0 01.001.161.339.339 0 01-.166.198.856.856 0 01-.275.086 2.032 2.032 0 01-.427.021 5.208 5.208 0 01-.557-.074 9.195 9.195 0 01-.287-.067l-.033-.006zm-2.475.995h1.05v-4.167h-1.05v4.167zm12.162-2.936a1.095 1.095 0 011.541.158 1.094 1.094 0 01-.157 1.541l-.017.014a1.096 1.096 0 01-1.367-1.713m-1.525.854a2.193 2.193 0 002.666 2.107 2.139 2.139 0 00.701-3.937 2.207 2.207 0 00-3.367 1.83M22.961 10.728a.52.52 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M20.117 10.728a.522.522 0 001.041 0V8.139a.521.521 0 00-1.04 0v2.589M17.231 11.771a.521.521 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M14.393 10.728a.521.521 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M11.494 10.728a.522.522 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M8.624 10.728a.52.52 0 001.039 0V8.139a.52.52 0 00-1.039 0v2.589M5.737 11.771a.52.52 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M2.876 10.728a.522.522 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M0 10.728a.521.521 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155" />
          </svg>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-12 w-12"
          >
            <title>Microsoft</title>
            <path
              d="M0 0v11.408h11.408V0zm12.594"
              className="text-[#F65314] dark:text-slate-600"
            />
            <path
              d="M12.594 0v11.408H24V0zM0"
              className="text-[#7CBB00] dark:text-slate-600"
            />
            <path
              d="M0 12.594V24h11.408V12.594zm12.594"
              className="text-[#00A1F1] dark:text-slate-600"
            />
            <path
              d="M12.594 12.594V24H24V12.594z"
              className="text-[#FFBB00] dark:text-slate-600"
            />
          </svg>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-12 w-12 text-[#BF4722] dark:text-slate-600"
          >
            <title>RedwoodJS</title>
            <path d="M6.989 3.47l4.66 3.181c.105.07.228.108.354.111a.634.634 0 0 0 .354-.111l4.664-3.192a.637.637 0 0 0-.089-1.087L12.272.065a.64.64 0 0 0-.56 0L7.067 2.372a.636.636 0 0 0-.078 1.098zm6.597 4.179c0 .211.104.408.276.528l3.736 2.553a.628.628 0 0 0 .776-.05l3.134-2.803a.637.637 0 0 0-.028-.973l-2.992-2.393a.635.635 0 0 0-.751-.029l-3.874 2.65a.644.644 0 0 0-.277.517zm-9.291 3.474a.64.64 0 0 1 .209.538.625.625 0 0 1-.315.485l-2.231 1.337a.63.63 0 0 1-.718-.049.64.64 0 0 1-.21-.693l.825-2.596a.63.63 0 0 1 1.023-.281l1.417 1.259zm12.1.271l-4.033-2.76a.634.634 0 0 0-.708 0l-4.033 2.76a.646.646 0 0 0-.276.485.664.664 0 0 0 .212.521l4.03 3.605a.635.635 0 0 0 .842 0l4.03-3.605a.647.647 0 0 0-.064-1.006zm-10.758-.713l-3.13-2.803a.648.648 0 0 1-.213-.503.626.626 0 0 1 .237-.481l2.992-2.407a.641.641 0 0 1 .754-.029l3.87 2.65a.639.639 0 0 1 0 1.07l-3.732 2.553a.633.633 0 0 1-.778-.05zm16.073 4.026l-3.187-1.908a.627.627 0 0 0-.744.071l-3.895 3.477a.644.644 0 0 0-.204.587.636.636 0 0 0 .388.483l5.404 2.19a.634.634 0 0 0 .815-.332l1.675-3.752a.64.64 0 0 0-.252-.816zm.442-4.561l.825 2.596h-.007a.635.635 0 0 1-.927.742l-2.234-1.337a.623.623 0 0 1-.305-.485.631.631 0 0 1 .209-.538l1.416-1.262a.63.63 0 0 1 1.023.284zm-11.82 6.786a.637.637 0 0 0-.202-.585L6.235 12.87a.627.627 0 0 0-.744-.071l-3.187 1.908a.648.648 0 0 0-.255.813l1.678 3.752a.632.632 0 0 0 .814.332l5.4-2.19a.637.637 0 0 0 .391-.482zm1.912 1.07l4.334 1.755c.212.091.358.29.382.521a.635.635 0 0 1-.269.596l-4.338 3.013A.625.625 0 0 1 12 24a.64.64 0 0 1-.354-.114l-4.334-3.013a.635.635 0 0 1 .124-1.117l4.334-1.755a.642.642 0 0 1 .474.001z" />
          </svg>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-12 w-12 text-[#0078D2] dark:text-slate-600"
          >
            <title>American Airlines</title>
            <path d="M0 .244h3.264c1.377 0 1.942.563 2.499 1.116.637.58 2.57 3.196 6.657 8.303H7.997c-1.809 0-2.38-.308-3.08-1.375zm10.424 17.072l-2.427-4.013c-.292-.455-.372-.854-.372-1.318 0-.51.217-.79 1.053-1.233.973-.466 2.933-.67 4.954-.67 3.283 0 4.07 1.055 4.405 2.192 0 0-.464-.185-1.554-.185-3.459 0-6.223 1.68-6.223 4.221 0 .534.164 1.006.164 1.006zm4.936-3.417c-2.547.089-5.032 1.869-4.936 3.416l2.7 4.486c.836 1.344 2.215 1.955 3.932 1.955H24l-8.13-9.852a5.55 5.55 0 0 0-.51-.005Z" />
          </svg>
        </div>
      </div>
    </div>
    // </div>
  );
}