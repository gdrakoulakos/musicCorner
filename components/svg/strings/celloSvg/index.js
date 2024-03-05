import styles from './CelloSvg.module.css'

const playString4 = () => {
   const audio = new Audio('/audio/instruments/cello/c_cello.mp3');
   audio.play();
 };
 
 const playString3 = () => {
   const audio = new Audio('/audio/instruments/cello/g_cello.mp3');
   audio.play();
 };
 
 const playString2 = () => {
   const audio = new Audio('/audio/instruments/cello/d_cello.mp3');
   audio.play();
 };
 
 const playString1 = () => {
   const audio = new Audio('/audio/instruments/cello/a_cello.mp3');
   audio.play();
 };

const CelloSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={683.622 * 0.90}
      height={819.932 * 0.90}  
      viewBox="0 0 683.622 819.932" 
      transform="rotate(-30 0 10)"
    {...props}
  >
    <defs>
      <radialGradient
        xlinkHref="#a"
        id="e"
        cx={418.041}
        cy={458.69}
        r={139.236}
        fx={418.041}
        fy={458.69}
        gradientTransform="matrix(-.7489 1.97437 -1.55245 -.58886 1443.205 -157.929)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#b"
        id="h"
        cx={360.813}
        cy={340.255}
        r={20.944}
        fx={360.813}
        fy={340.255}
        gradientTransform="matrix(2.21777 -7.15119 8.3067 2.57613 -3264.837 2129.084)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#c"
        id="f"
        cx={363.3}
        cy={73.423}
        r={8.518}
        fx={363.3}
        fy={73.423}
        gradientTransform="matrix(1.8885 1.41638 -1.21725 1.623 -233.418 -562.684)"
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#d"
        id="g"
        cx={363.3}
        cy={121.288}
        r={9.023}
        fx={363.3}
        fy={121.288}
        gradientTransform="matrix(1.86511 2.4532 -2.58537 1.9656 -.722 -1013.017)"
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient id="d">
        <stop
          offset={0}
          style={{
            stopColor: "#343534",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#803300",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient id="c">
        <stop
          offset={0}
          style={{
            stopColor: "#7d2d0e",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#7d2d0e",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient id="b">
        <stop
          offset={0}
          style={{
            stopColor: "#1c1a1a",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#b3b3b3",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient id="a">
        <stop
          offset={0}
          style={{
            stopColor: "#b77032",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#b77032",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
    </defs>
    <path
      d="M353.482 320.915c-35.29 3.272-66.768 12.916-88.045 50.428-15.333 27.032-12.274 59.573-6.033 77.084 5.731 16.08 4.233 31.45-3.555 38.91 2.251 5.046.416.755 2.445 5.842 31.561-8.354 30.932 23.781 30.759 36.59-.53 39.179-18.724 56.636-44.436 54.965l-3.311 5.125c17.83 14.545-8.286 50.602-12.065 76.414-5.32 36.333 7.562 68.816 30.163 89.149 27.648 24.874 66.323 27.274 109.258 26.812 48.803-.526 72.855-5.791 95.182-21.45 35.485-24.886 46.912-68.799 39.547-96.522-12.118-45.614-25.883-65.69-11.395-79.095l-2.681-5.362c-38.717 12.274-45.205-33.432-45.58-52.954-.356-18.557 4.729-38.038 30.163-37.536l2.681-5.362c-11.328-10.342-5.544-22.824-3.351-34.856 5.733-24.855 11.63-54.41-9.384-85.127-14.763-21.579-40.228-39.699-81.106-42.899l-29.256-.156z"
      style={{
        fill: "#7d2d0e",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="M353.482 320.915c-35.29 3.272-66.768 12.916-88.045 50.428-15.333 27.032-12.274 59.573-6.033 77.084 5.731 16.08 4.233 31.45-3.555 38.91 2.251 5.046.416.755 2.445 5.842 31.561-8.354 30.932 23.781 30.759 36.59-.53 39.179-18.724 56.636-44.436 54.965l-3.311 5.125c17.83 14.545-8.286 50.602-12.065 76.414-5.32 36.333 7.562 68.816 30.163 89.149 27.648 24.874 66.323 27.274 109.258 26.812 48.803-.526 72.855-5.791 95.182-21.45 35.485-24.886 46.912-68.799 39.547-96.522-12.118-45.614-25.883-65.69-11.395-79.095l-2.681-5.362c-38.717 12.274-45.205-33.432-45.58-52.954-.356-18.557 4.729-38.038 30.163-37.536l2.681-5.362c-11.328-10.342-5.544-22.824-3.351-34.856 5.733-24.855 11.63-54.41-9.384-85.127-14.763-21.579-40.228-39.699-81.106-42.899l-29.256-.156z"
      style={{
        fill: "url(#e)",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="M354.078 324.871c-33.71 3.22-63.78 12.712-84.104 49.631-14.646 26.604-11.724 58.631-5.762 75.865 5.474 15.827 4.043 30.284-3.396 37.626 24.339-4.479 32.108 9.37 31.717 41.761-.294 24.28-4.336 55.993-45.609 59.81 17.031 14.316-7.915 49.802-11.525 75.206-5.081 35.76 7.224 67.728 28.813 87.74 26.41 24.481 63.353 26.843 104.366 26.388 46.618-.518 69.593-5.7 90.92-21.11 33.896-24.494 44.812-67.712 37.777-94.997-11.576-44.893-22.044-63.645-10.885-77.845-21.397 10.96-47.444-17.329-46.1-57.394 1.367-40.768 17.457-39.743 31.373-42.22-10.82-10.179-5.296-22.463-3.201-34.305 5.476-24.462 11.11-53.55-8.964-83.782-14.102-21.238-38.427-39.07-77.474-42.22l-27.946-.154z"
      style={{
        fill: "none",
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: ".96960217px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="M355.256 161.876c-4.754-.996-4.652-4.42-4.463-7.888l4.921-61.177c-3.1-2.272-3.058-5.171-3.08-8.058-7.594-1.824-5.951-6.77-5.096-11.612 3.659-.37 2.857-.308 6-.428-.465-2.016 1.075-7.292 4.428-7.748-1.262-7.054 2.93-6.021 7.228-6.28 8.195-.494 5.174 3.36 5.806 6.872 2.832.877 4.473 3.669 4.147 7.702l6.162.593c.956 10.76-3.95 10.507-7.11 10.783-.369 3.449.453 7.73-4.029 8.886.765 4.24 1.923 8.874 3.318 13.746 6.675 18.168 6.515 38.233 4.503 54.506l-22.735.103z"
      style={{
        fill: "#b0682e",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="m357.966 65.557-2.015 21.684c-.244 3.404.544 5.776 4.384 5.096l6.518.118c5.844.536 4.125-2.932 5.095-4.977l-1.54-22.276c.557-3.914.19-7.123-5.807-6.043-3.142.116-7.098-1.53-6.635 6.398z"
      style={{
        fill: "url(#f)",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="m359.032 109.755-1.54 30.571c-.205 3.292 1.02 3.725 2.37 3.91l11.967-.118c3.407-.217 2.68-2.09 2.489-5.095l-4.03-29.387c-.46-1.369-.34-3.029-3.198-3.199h-5.688c-1.666.406-2.28 1.652-2.37 3.318z"
      style={{
        fill: "#964a1d",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="m359.032 109.755-1.54 30.571c-.205 3.292 1.02 3.725 2.37 3.91l11.967-.118c3.407-.217 2.68-2.09 2.489-5.095l-4.03-29.387c-.46-1.369-.34-3.029-3.198-3.199h-5.688c-1.666.406-2.28 1.652-2.37 3.318z"
      style={{
        fill: "url(#g)",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="m354.055 113.547-15.404-.119c-.668-2.615-5.393-3.123-8.887-3.2-4.77-.103-9.079 2.88-7.583 7.11 1.65 4.665 9.396 3.943 16.352 2.015l15.048-.119.474-5.687zM352.041 139.852l-15.404-.118c-.668-2.616-5.512-2.176-9.005-2.252-4.771-.103-10.378 2.75-7.465 6.162 3.071 3.597 9.396 3.942 16.351 2.014l15.049-.118.474-5.688zM375.502 113.073l9.954.118c.36 4.369 3.218 8.26 8.413 7.702 3.523-.378 8.031-4.763 8.294-10.901.236-5.5-4.969-10.202-9.835-10.19-3.8.009-6.698 2.832-6.99 7.583l-11.968-.474 2.132 6.162zM379.176 135.23l11.02.12c.36 4.368 3.217 8.26 8.413 7.701 3.523-.378 8.03-4.763 8.294-10.901.236-5.5-4.969-10.202-9.835-10.19-3.8.009-6.699 2.832-6.99 7.583H378.82l.356 5.688z"
      style={{
        fill: "#1c1a1a",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="M359.278 782.234c-1.553 1.552-.218 9.941 7.373 9.719 7.27-.213 8.684-8.25 7.038-9.384l-14.411-.335z"
      style={{
        fill: "#8a8051",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="m363.635 791.618.67 94.846 2.01 94.177h5.698l-1.005-119.313-.335-71.05c-1.836 1.467-4.313 1.65-7.038 1.34z"
      style={{
        fill: "#89938b",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="M346.207 782.569s.168 3.938 3.352 5.027c3.183 1.09 9.384-.67 9.384-.67l.335-4.692-13.071.335z"
      style={{
        fill: "#1c1a1a",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="M359.278 567.74c-6.703-3.655-13.406-2.681-20.109-3.017v10.39c8.572-.552 17.628-.725 20.109-3.017h21.114c.851 4.746 13.463 1.926 19.103 2.681l-.67-9.384c-7.82-1.117-13.853-.447-18.098 2.011l-21.45.335z"
      style={{
        opacity: 1,
        fill: "#947958",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="M360.618 778.547h16.758c.932-8.974.517-27.335-.335-37.201-.252-23.167-2.085-36.16 4.356-62.673 5.184-13.111 6.606-28.479 7.374-44.24-11.035 3.032-22.948 4.528-37.537 1.341 1.59 14.4 1.623 28.176 7.374 44.24 6.878 21.592 5.587 39.1 3.686 56.304-2.295 14.077-2 28.153-1.676 42.229z"
      style={{
        opacity: 0.98000004,
        fill: "#1a1a1a",
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="m355.845 147.939-7.373 362.629c14.658-5.146 28.007-3.744 40.888 0l-14.076-363.3-19.439.67z"
      style={{
        fill: "#1c1a1a",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="m355.966 147.072-7.373 362.63c14.658-5.147 28.007-3.744 40.887 0l-14.076-363.3-19.438.67z"
      style={{
        fill: "url(#h)",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="m360.217 655.176-2.844-83.42v-5.687l2.844-420.885v-5.687.947M367.8 655.176v-89.107l-5.687-422.78.948-15.168v-1.896M375.858 654.702l2.37-81.997v-7.584l-8.532-419.937-1.896-14.219M383.915 655.176l5.688-81.523v-9.48L374.436 142.34"
      style={{
        opacity: 1,
        fill: "none",
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="M328.11 533.554c-11.328-5.003-13.469 17.416-12.736 40.553-.592 33.608-10.294 35.978-18.434 35.86-4.484-.063-12.103-3.786-9.719-11.73.75-2.496 5.027-5.237 8.044-2.01 1.32 1.412 2.187 4.468-2.011 6.703 8.447 9.383 14.251-3.068 15.752-9.05 2.677-13.555 1.531-28.203 2.346-42.563.588-10.373 4.366-20.618 14.411-21.45 3.549-.293 7.289 1.734 9.05 6.369-.625 3.428-1.748 6.025-5.028 5.027-3.173-1.736-3.86-4.188-1.676-7.709z"
      style={{
        opacity: 0.98000004,
        fill: "#000",
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
    <path
      d="M409.098 534.56c11.328-5.004 13.468 17.415 12.736 40.553.591 33.607 10.293 35.977 18.433 35.86 4.484-.064 12.104-3.786 9.72-11.73-.75-2.496-5.027-5.238-8.044-2.01-1.32 1.411-2.188 4.468 2.01 6.702-8.446 9.383-14.25-3.068-15.751-9.049-2.677-13.556-1.532-28.203-2.346-42.563-.589-10.374-4.367-20.619-14.412-21.45-3.548-.293-7.288 1.733-9.049 6.368.624 3.429 1.747 6.026 5.028 5.027 3.173-1.735 3.86-4.187 1.675-7.708z"
      style={{
        opacity: 1,
        fill: "#000",
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      transform="translate(-227.547 -58.142)"
    />
      <line id={styles.fourthString} onClick={playString4} x1="130" y1="90" x2="130" y2="510"></line> 
      <line id={styles.thirdString} onClick={playString3} x1="135" y1="90" x2="140" y2="510"></line>
      <line id={styles.secondString} onClick={playString2} x1="140" y1="90" x2="150" y2="510"></line>
      <line id={styles.firstString} onClick={playString1} x1="145" y1="90" x2="160" y2="510"></line>
  </svg>
)
export default CelloSvg
