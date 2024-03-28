import { FC } from "react";
import { Link } from "react-router-dom";
import { SVGComponent } from "../../../../interfaces/SVGComponent";

export const Cross: FC<SVGComponent> = ({style, to}) => {

  return ( 
    <Link to={to as string ?? '/'} style={{width: '3vw', ...style}}>
      <svg id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.71 53.93">
  <g id="remove_x">
    <g id="sym_x" data-name="sym x">
      <polygon points="15.14 13.28 15.14 10.68 7.42 2.96 4.81 2.96 10.4 8.55 10.4 9.83 19.57 19.01 19.57 17.71 15.14 13.28" fill="#161616"/>
      <polygon points="56.75 46.64 56.74 48.52 59.2 50.97 61.3 50.96 56.75 46.64" fill="#161616"/>
      <polygon points="49.13 47.38 46.5 47.38 48.95 49.81 49.72 49.81 51.84 51.93 51.84 52.71 52.48 53.34 55.14 53.35 49.13 47.38" fill="#161616"/>
      <polygon points="38.18 38.38 40.14 40.28 40.14 38.34 33.01 31.28 32.66 31.28 38.18 36.8 38.18 38.38" fill="#161616"/>
      <path d="M989,564.45h-2l-2.39-2.39v-1.77l-13-13v2.77l-.9-.89v-2.81l-3.88-3.82h-1.76l-5.31-5.31v-.69h-.67l-5.34-5.37v-2.33l-1.5-1.45-12.1-12.1L939,514.12H936.1l-.58.58h-3l-.57-.58-.58-.58h-3l-.58.58,2.42,2.42,7.47,7.48v-1.75L932,516.61h3.18l7.66,7.65v2.61l4.43,4.44v2.13l5.52,5.52h2.13l1,1v1.16l.57-.57,3,3.29v1h1.29l7.1,7.1v3.51l2.5,2.51h1.53l2,2v.58l.41.42h2.6l5.94,5.93h4.48l.57.57h3l.58-.57ZM948.4,526.69l-9.27-9.27v-2l11.24,11.27Zm11.25,15.48a1.67,1.67,0,1,1,1.67-1.67A1.67,1.67,0,0,1,959.65,542.17Zm10,13.84-.81-.86v-2.61l.86.86Zm12.13,4-9.27-9.27v-2L983.7,560Zm4.69,6.6L987,566h3l.58.59Z" transform="translate(-927.79 -513.54)" fill="#1c1c1c"/>
    </g>
    <g id="sym_x-2" data-name="sym x">
      <polygon points="44.14 17.71 44.14 19.01 53.31 9.83 53.31 8.55 58.9 2.96 56.29 2.96 48.57 10.68 48.57 13.28 44.14 17.71" fill="#161616"/>
      <polygon points="2.4 50.97 4.56 50.97 6.91 48.59 6.89 46.71 2.4 50.97" fill="#161616"/>
      <polygon points="8.57 53.35 11.23 53.34 11.87 52.71 11.87 51.93 13.99 49.81 14.76 49.81 17.22 47.37 14.54 47.37 8.57 53.35" fill="#161616"/>
      <polygon points="25.53 36.8 31.05 31.28 30.7 31.28 23.57 38.34 23.57 40.28 25.53 38.38 25.53 36.8" fill="#161616"/>
      <path d="M990.92,513.54h-3l-.58.58-.57.58h-3l-.58-.58h-2.92l-1.17,1.17L967,527.39l-1.5,1.45v2.33l-5.34,5.37h-.67v.69l-5.31,5.31h-1.76l-3.88,3.82v2.81l-.9.89v-2.77l-13,13v1.77l-2.39,2.39h-2l-2.46,2.44.58.57h3l.57-.57h4.48l5.94-5.93H945l.41-.42V560l2-2h1.53l2.5-2.51v-3.51l7.1-7.1h1.29v-1l3-3.29.57.57V540l1-1h2.13l5.52-5.52v-2.13l4.43-4.44v-2.61l7.66-7.65h3.18l-5.68,5.66V524l7.47-7.48,2.42-2.42Zm-62.21,53.07.58-.59h3l.58.59Zm18.12-15.87L937.56,560l-2,0,11.24-11.29Zm3.67,4.41-.81.86-.05-2.61.86-.86Zm9.15-13a1.67,1.67,0,1,1,1.67-1.67A1.67,1.67,0,0,1,959.65,542.17Zm20.51-24.75-9.27,9.27h-2l11.24-11.27Z" transform="translate(-927.79 -513.54)" fill="#1c1c1c"/>
    </g>
  </g>
</svg>
    </Link>
   );
}