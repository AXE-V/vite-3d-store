import { FC, useState } from "react";
import { SVGComponent } from "../../../interfaces/SVGComponent";

export const Search: FC<SVGComponent> = ({style}) => {
  const [valueInput, setValueInput] = useState('')
  return ( 
    <label style={{...style, position: 'relative'}}>
      <input type="text" value={valueInput} onChange={e => setValueInput(e.target.value)} 
        style={{position: 'absolute', zIndex: 1, left: '2.9vw', top: '1vw', width: '93%'}}/>
      <svg viewBox="0 0 1186 53.35" width={'63vw'}>
    <polyline
      points="105.54 48.91 104.48 47.81 91.11 47.81 90.02 48.91 378.74 48.91 823.4 48.91 1161.07 48.91 1159.97 47.81 1146.61 47.81 1145.55 48.91"
      fill="#242424" stroke="#242424" strokeMiterlimit="10" />
    <polygon data-name="bg"
      points="130.85 13.68 122.02 4.79 0 4.79 0 27.18 10.12 37.01 10.12 45.42 10.12 50.16 84.96 50.16 89.67 45.42 1161.08 45.42 1165.56 49.92 1186 49.92 1186 45.42 1186 45.42 1186 13.68 130.85 13.68"
      fill="#1c1c1c" />
    <rect x="1551.4" y="524.03" width="0.55" height="1.98" transform="translate(1709.5 -1540.16) rotate(90)"
      fill="#bfa613" stroke="#bfa613" strokeMiterlimit="10" />
    <polyline points="125.03 0.35 134.56 9.95 157.15 9.95" fill="none" stroke="#c6b63f" strokeMiterlimit="10" />
    <rect x="379.95" y="562.8" width="1.42" height="6.71" transform="translate(579.63 -328.02) rotate(90)"
      fill="#0a0a0a" />
    <g id="lupa" opacity="0.2">
      <polygon
        points="30.24 21.63 26.62 21.63 23.14 25.14 23.14 28.78 26.62 32.29 30.24 32.29 33.73 28.78 33.73 25.14 30.24 21.63"
        fill="none" stroke="#fff" strokeMiterlimit="10" />
      <line x1="32.16" y1="30.35" x2="38.76" y2="36.99" fill="none" stroke="#fff" strokeMiterlimit="10" />
    </g>
  </svg>
    </label>
   );
}