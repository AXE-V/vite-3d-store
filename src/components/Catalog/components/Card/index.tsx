import { FC } from "react";
import { SVGComponent } from "../../../interfaces/SVGComponent";

const Card: FC<SVGComponent> = ({style}) => {
  return ( 
    <div style={{...style}}>
      
      <svg xmlns="http://www.w3.org/2000/svg" height={'100%'} width={'100%'}
    viewBox="0 0 400 235.65">
    <defs>
      <clipPath id="clip-path" transform="translate(-912.14 268.34)">
        <polygon
          points="960.52 -261.15 1272.73 -261.15 1295.82 -237.68 1296.1 -146.8 1286.68 -135.07 1286.33 -90.94 1098.12 -90.94 1088.88 -97.22 960.54 -97.22 960.52 -261.15"
          fill="none" />
      </clipPath>
      <clipPath id="clip-path-2" transform="translate(-912.14 268.34)">
        <polygon
          points="958.87 -261.99 1274.15 -261.99 1297.47 -238.28 1297.76 -146.51 1288.24 -134.66 1287.89 -90.11 1097.48 -90.34 1088.49 -96.44 958.9 -96.44 958.87 -261.99"
          fill="none" />
      </clipPath>
      <clipPath id="clip-path-3" transform="translate(-912.14 268.34)">
        <polygon points="916.76 -252.06 917.21 -81.12 950.83 -81.12 950.83 -252.06 916.76 -252.06" fill="none" />
      </clipPath>
      <clipPath id="clip-path-4" transform="translate(-912.14 268.34)">
        <rect x="962.85" y="-91.96" width="163.32" height="24.06" fill="none" />
      </clipPath>
    </defs>
    <g id="card">
      <g id="mask_img">
        <g clip-path="url(#clip-path)">
          <rect x="48.39" y="7.19" width="335.49" height="170.21" fill="#222" />
        </g>
      </g>
      <g>
        <g opacity="0">
          <g clip-path="url(#clip-path-2)">
            <polygon
              points="46.73 6.35 362.01 6.35 385.33 30.06 385.62 121.83 376.1 133.68 375.75 178.23 185.34 178 176.36 171.9 46.76 171.9 46.73 6.35"
              fill="#0a0a0a" opacity="0.9" />
          </g>
          <g id="ok_cheked" opacity="0.75">
            <g>
              <g id="bg" opacity="0.75">
                <polygon
                  points="355.38 22.83 364.66 32.11 364.66 72.84 323.54 72.84 323.54 60.44 314.64 51.54 314.64 22.83 355.38 22.83"
                  fill="#0f0f0f" />
                <polygon
                  points="355.38 22.83 364.66 32.11 364.66 72.84 323.54 72.84 323.54 60.44 314.64 51.54 314.64 22.83 355.38 22.83"
                  fill="none" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.75" />
              </g>
              <polygon id="ok" points="358.92 37.23 337.7 58.45 327.09 47.84 337.32 52.24 358.92 37.23" fill="#c6b63f"
                opacity="0.75" />
            </g>
          </g>
          <g id="edit" opacity="0.75">
            <g>
              <g id="bg-2" data-name="bg" opacity="0.75">
                <polygon
                  points="274.97 29.27 281.41 22.83 309.67 22.83 309.67 51.36 301.06 51.36 294.89 57.53 274.97 57.53 274.97 29.27"
                  fill="#0f0f0f" />
              </g>
              <path id="pen"
                d="M1209.36-237.63h0l-12.94,12.89-1.8,6.42,6.43-1.8,12.88-12.94h0a1.34,1.34,0,0,0,.27-.4,1.36,1.36,0,0,0,.09-.48,1.27,1.27,0,0,0-.09-.47,1.23,1.23,0,0,0-.27-.4h0l-2.8-2.81h0a1.09,1.09,0,0,0-.4-.27,1.15,1.15,0,0,0-.48-.1,1.12,1.12,0,0,0-.48.1Zm0,0h0m0,0h0m0,0a1.09,1.09,0,0,1,.4-.27Z"
                transform="translate(-912.14 268.34)" fill="none" stroke="#c6b63f" strokeMiterlimit="10"
                strokeWidth="0.75" opacity="0.75" />
            </g>
          </g>
          <g id="g_like">
            <text id="text" transform="translate(86.14 111.17)" font-size="13.51" fill="#efefef"
              font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">2.3k</text>
            <path id="like_clicked"
              d="M979.38-153.94l-6.89-6.32c-3.74-3.8,1.76-11.08,6.89-5.19,5.13-5.89,10.61,1.42,6.89,5.19Z"
              transform="translate(-912.14 268.34)" fill="#c6b63f" />
          </g>
          <g id="g_message">
            <text id="text-2" data-name="text" transform="translate(84.93 135.91)" font-size="13.51" fill="#efefef"
              font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">27.5k</text>
            <path id="message"
              d="M982.33-142a6.89,6.89,0,0,0-4.31-.55,6.85,6.85,0,0,0-3.78,2.13,6.91,6.91,0,0,0-1.75,4,6.83,6.83,0,0,0,1,4.23l-1,2.62a.46.46,0,0,0,0,.26.41.41,0,0,0,.11.23.41.41,0,0,0,.21.15.43.43,0,0,0,.25,0l3.43-.62a6.86,6.86,0,0,0,5.26.25,6.89,6.89,0,0,0,3.9-3.54,6.86,6.86,0,0,0,.25-5.26A6.91,6.91,0,0,0,982.33-142Z"
              transform="translate(-912.14 268.34)" fill-rule="evenodd" opacity="0.75" />
          </g>
          <g id="g_view">
            <text id="text-3" data-name="text" transform="translate(84.44 158.64)" font-size="13.51" fill="#efefef"
              font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">792.8k</text>
            <path id="view"
              d="M973.32-117.84a8.93,8.93,0,0,1,5.24-2,9,9,0,0,1,5.24,2,18.46,18.46,0,0,1,3.3,3.22h0a2.28,2.28,0,0,1,.47,1.41,2.3,2.3,0,0,1-.47,1.41h0a18.81,18.81,0,0,1-3.3,3.22,9,9,0,0,1-5.24,2,9,9,0,0,1-5.24-2,18.82,18.82,0,0,1-3.3-3.23h0a2.31,2.31,0,0,1-.48-1.41,2.23,2.23,0,0,1,.48-1.41h0A18.81,18.81,0,0,1,973.32-117.84Zm5.24,7.61a2.84,2.84,0,0,0,2.05-.87,3,3,0,0,0,.85-2.1,3,3,0,0,0-.85-2.11,2.84,2.84,0,0,0-2.05-.87,2.84,2.84,0,0,0-2,.87,3,3,0,0,0-.85,2.11,3,3,0,0,0,.85,2.1A2.84,2.84,0,0,0,978.56-110.23Z"
              transform="translate(-912.14 268.34)" fill-rule="evenodd" opacity="0.75" />
          </g>
        </g>
        <g id="model_name_group">
          <polygon
            points="48.03 176.21 47.58 1.26 0 1.26 0 11.59 4.62 16.28 5.07 187.22 0.46 192.15 0.46 202.47 37.48 202.47 37.48 193.38 48.03 176.21"
            fill="#181818" />
          <rect x="41.76" y="72.83" width="1.99" height="10.1" fill="#c6b63f" opacity="0.5" />
          <rect x="41.76" y="59.77" width="1.99" height="10.1" fill="#242424" />
          <rect x="41.76" y="46.71" width="1.99" height="10.1" fill="#fff" opacity="0.5" />
          <rect x="936.78" y="-269.39" width="1.99" height="10.11" transform="translate(-238.7 -933.76) rotate(90)"
            fill="#242424" />
          <rect x="949.84" y="-269.39" width="1.99" height="10.11" transform="translate(-225.64 -946.82) rotate(90)"
            fill="#fff" opacity="0.5" />
          <circle cx="4.21" cy="199.16" r="1.35" fill="#4d4d4d" opacity="0.75" />
          <circle cx="4.21" cy="5" r="1.35" fill="#4d4d4d" opacity="0.75" />
          <g id="mask_model_name">
            <g clip-path="url(#clip-path-3)">
              <g id="model_name" opacity="0.5">
                <text transform="translate(19 17.85) rotate(90)" font-size="22" fill="#fff"
                  font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">future tank1234</text>
              </g>
            </g>
          </g>
        </g>
        <path
          d="M1312.14-111l-10.86-11.58v-.2l-.38-115.95-26.55-28.34H958.54l.45,175L948.44-75v9.09h157l3.87-3h7.5L1155.59-43H1293l8.51-8.71,0-9.58,10.66-11.36Zm-27.63-24.62-.34,43.52-186-.23-8.78-6H962.85l0-161.69h307.93l22.78,23.16.28,89.63Z"
          transform="translate(-912.14 268.34)" fill="#111" />
      </g>
      <polyline points="182.8 168 188.52 172.08 296.54 172.08" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
        strokeWidth="0.75" opacity="0.75" />
      <g opacity="0.5">
        <line x1="377.78" y1="181.11" x2="383.97" y2="187.29" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          strokeWidth="0.75" />
        <rect x="377.78" y="181.11" width="6.18" height="6.18" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
          strokeWidth="0.75" />
      </g>
      <polygon points="205.09 199 196.82 199 193.55 201.46 76.94 201.46 83.1 206.51 216.18 206.51 205.09 199"
        fill="#1c1c1c" />
      <g opacity="0.75">
        <text transform="translate(311.77 172.08)" font-size="12" fill="#242424"
          font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">rating</text>
      </g>
      <polyline points="368.19 172.08 368.19 130.78 377.78 119.45 377.78 111.34" fill="none" stroke="#c6b63f"
        strokeMiterlimit="10" strokeWidth="0.75" opacity="0.75" />
      <g id="mask_user_name">
        <g clip-path="url(#clip-path-4)">
          <g id="user_name" opacity="0.5">
            <text transform="translate(76.94 194.2)" font-size="20" fill="#fff"
              font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">designer1234567</text>
          </g>
        </g>
      </g>
      <g opacity="0.1">
        <polygon points="182.8 174.98 176.96 171.25 66.88 171.25 66.88 174.98 182.8 174.98 182.8 174.98" fill="#4d4d4d" />
      </g>
      <polyline points="288.64 11.22 356.07 11.22 377.85 32.99 377.85 50.53" fill="none" stroke="#4d4d4d"
        strokeMiterlimit="10" strokeWidth="0.75" opacity="0.5" />
      <rect x="974" y="-97.09" height="3.73" transform="translate(1035.86 77.89) rotate(180)" fill="none" stroke="#4d4d4d"
        strokeMiterlimit="10" opacity="0.25" />
      <rect x="55.79" y="171.25" width="1.61" height="3.73" fill="#c6b63f" />
      <rect x="52.97" y="171.25" width="1.61" height="3.73" fill="#c6b63f" />
      <rect x="63.01" y="171.25" width="2.91" height="3.73" fill="#4d4d4d" opacity="0.1" />
      <path d="M966-247.54" transform="translate(-912.14 268.34)" fill="none" stroke="#c6b63f" strokeMiterlimit="10"
        strokeWidth="0.75" opacity="0.5" />
      <line x1="53.87" y1="22.41" x2="53.87" y2="167.77" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
        strokeWidth="0.75" opacity="0.5" />
      <line x1="53.87" y1="10.21" x2="53.87" y2="17.85" fill="none" stroke="#c6b63f" strokeMiterlimit="10"
        strokeWidth="0.75" opacity="0.75" />
      <polyline points="381.67 126.78 376.19 133.66 376.19 174.7" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
        opacity="0.1" />
      <polygon points="389.03 151.03 383.51 156.98 394.55 156.98 389.03 151.03" fill="#4d4d4d" opacity="0.75" />
      <rect x="383.51" y="158.14" width="11.04" height="1.59" fill="#4d4d4d" opacity="0.5" />
      <line x1="283.7" y1="11.22" x2="252.16" y2="11.22" fill="none" stroke="#4d4d4d" strokeMiterlimit="10"
        strokeWidth="0.75" opacity="0.5" />
      <circle cx="40.28" cy="199.16" r="1.35" fill="#4d4d4d" opacity="0.25" />
      <circle cx="44.78" cy="199.16" r="1.35" fill="#4d4d4d" opacity="0.1" />
      <polygon points="286.39 5.18 282.73 0.23 290.06 0.23 286.39 5.18" fill="#c6b63f" />
      <polygon
        points="373.35 215.62 370.27 218.4 246.27 218.15 223.91 203.47 223.64 192.48 290.06 192.48 313.09 206.99 358.75 206.72 373.35 206.72 373.35 215.62"
        fill="#161616" />
      <g id="bar">
        <rect id="total" x="223.73" y="181.11" width="148.08" height="6.18" fill="#0a0a0a" />
        <rect id="current" x="306.76" y="181.11" width="65.05" height="6.18" fill="#c6b63f" opacity="0.75" />
      </g>
      <g id="rating_num" opacity="0.75">
        <text transform="translate(314.76 202.48)" font-size="14" fill="#c6b63f"
          font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">47/100</text>
      </g>
      <circle cx="124.39" cy="5" r="1.35" fill="#4d4d4d" opacity="0.25" />
      <circle cx="128.89" cy="5" r="1.35" fill="#4d4d4d" opacity="0.1" />
      <g id="price">
        <text transform="translate(59.66 17.85)" font-size="16" fill="#c6b63f"
          font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">15.79 USD</text>
      </g>
      <g id="btn_add">
        <polygon id="bg-3" data-name="bg"
          points="284.85 194.83 302.83 206.16 302.83 215.06 250.7 214.86 233.25 203.41 233.04 194.83 284.85 194.83"
          fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="0.75" opacity="0.5" />
        <g opacity="0.5">
          <text transform="translate(253.67 208.39)" font-size="14" fill="#fff"
            font-family="ISL_FADETOBLAK, ISL_FADE TO BLAK">add</text>
        </g>
      </g>
    </g>
  </svg>
    </div>
   );
}
 
export default Card;