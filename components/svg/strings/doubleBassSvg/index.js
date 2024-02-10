import styles from './DoubleBassSvg.module.css'

const DoubleBassSvg = (props) => (
    <svg
      id={styles.doubleBass}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={683.622 * 0.75}
      height={819.932 * 0.75}  
      viewBox="0 0 683.622 819.932"  
      {...props}
    >
      <defs>
        <linearGradient id="d">
          <stop
            offset={0}
            style={{
              stopColor: "gray",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#9e9c9d",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient id="c">
          <stop
            offset={0}
            style={{
              stopColor: "#510f0f",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.5}
            style={{
              stopColor: "#a75020",
              stopOpacity: 0.49803922,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#dc7d2d",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient id="b">
          <stop
            offset={0}
            style={{
              stopColor: "#dc7d2d",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#dc7d2d",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient id="a">
          <stop
            offset={0}
            style={{
              stopColor: "#e3ab34",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#dc7f2f",
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <radialGradient
          xlinkHref="#c"
          id="e"
          cx={166.692}
          cy={100.686}
          r={192.126}
          fx={166.692}
          fy={100.686}
          gradientTransform="matrix(-3.48675 -.61923 .42325 -2.3832 1056.346 1238.467)"
          gradientUnits="userSpaceOnUse"
        />
        <radialGradient
          xlinkHref="#b"
          id="f"
          cx={397.187}
          cy={578.413}
          r={192.126}
          fx={397.187}
          fy={578.413}
          gradientTransform="matrix(-.57068 -.01293 .01815 -.80147 613.036 982.203)"
          gradientUnits="userSpaceOnUse"
        />
        <radialGradient
          xlinkHref="#d"
          id="g"
          cx={489.315}
          cy={416.995}
          r={63.189}
          fx={489.315}
          fy={416.995}
          gradientTransform="matrix(1.50863 -1.8577 2.89226 2.34878 -1469.64 373.52)"
          gradientUnits="userSpaceOnUse"
        />
      </defs>
      
      <path
        d="m431.913 95.202-12.256 21.571c-5.415-.14-5.884 4.276-5.429 7.684 1.343 7.177 5.542 8.21 9.071 3.134 1.57-2.945 2.373-6.008-1.235-8.97 4.984-8.918 8.904-13.948 12.774-21.455l-2.925-1.964z"
        style={{
          opacity: 1,
          fill: "#333",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="m440.793 137.112-15.332 5.602c-1.817-7.118-5.536-4.111-5.878 1.204-1.138 7.403-.921 13.42 2.94 12.581 2.053-.842 2.955-6.017 2.983-10.729 6.305-2.378 10.298-2.893 15.478-5.137l-.19-3.52z"
        style={{
          opacity: 1,
          fill: "#333",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: ".7947312px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M430.59 383.001c-8.148 31.318-35.852 37.401-66.526 60.59-57.542 46.653-66.652 94.485-56.1 153.287 32.908 4.096 36.33 27.757 30.338 67.063-9.23 38.992-25.647 56.592-48.613 54.79-11.26 58.138-48.068 113.277.972 194.449 5.43 7.388 12.004 14.24 20.337 20.22l-.241-.326C261.717 851.9 306 793.535 317.26 735.397c22.966 1.803 39.383-15.797 48.612-54.79 5.993-39.305 2.268-69.811-30.641-73.907-10.552-58.802-16.355-116.734 41.187-163.387 30.674-23.189 70.134-43.21 78.282-74.527l-24.111 14.215z"
        style={{
          fill: "#663519",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M454.704 368.775c-8.148 31.317-47.606 51.336-78.28 74.524-57.542 46.654-51.734 104.61-41.183 163.41 32.91 4.097 36.638 34.603 30.645 73.91-9.229 38.991-25.661 56.59-48.627 54.788-11.261 58.138-55.545 116.493-6.506 197.665 22.243 30.261 44.716 60.406 150.056 48.616 112.91-19.185 126.28-55.748 145.965-91.208 28.582-56.047 8.228-112.255-5.622-168.442-39.033 20.25-42.469-23.639-49.545-60.965.883-55.926 17.956-60.266 35.647-62.635 14.17-50.816 14.376-102.251-34.276-155.856-26.825-22.043-63.82-35.426-74.221-71.452l-24.053-2.355z"
        style={{
          fill: "#953d1d",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M455.364 365.85c-8.148 31.318-47.606 51.337-78.28 74.525-57.542 46.654-51.734 104.609-41.183 163.41 32.91 4.097 36.638 34.603 30.645 73.91-9.229 38.99-25.661 56.59-48.627 54.788-11.261 58.138-55.546 116.492-6.506 197.665 22.243 30.261 44.716 60.406 150.056 48.616 112.91-19.185 126.28-55.748 145.965-91.208 28.582-56.047 8.228-112.255-5.622-168.442-39.033 20.249-42.469-23.639-49.545-60.965.883-55.926 17.956-60.266 35.647-62.635 14.17-50.816 14.376-102.251-34.276-155.856-26.825-22.043-63.82-35.426-74.221-71.452l-24.053-2.355z"
        style={{
          fill: "url(#e)",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M454.383 367.473c-8.148 31.318-47.606 51.336-78.28 74.525-57.541 46.653-51.734 104.608-41.182 163.41 32.909 4.096 36.637 34.603 30.644 73.909-9.229 38.991-25.661 56.59-48.627 54.788-11.26 58.138-55.545 116.493-6.505 197.665 22.242 30.262 44.716 60.406 150.055 48.617 112.911-19.186 126.28-55.748 145.965-91.208 28.582-56.047 8.228-112.256-5.622-168.443-39.033 20.25-42.468-23.638-49.545-60.965.883-55.925 17.956-60.265 35.647-62.635 14.17-50.815 14.376-102.25-34.275-155.856-26.826-22.042-63.82-35.425-74.222-71.451l-24.053-2.356z"
        style={{
          fill: "url(#f)",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M450.636 173.026c-11.14 7.13-13.318-2.746-14.584-14.355-7.017-4.253-4.074-10.962-4.822-16.76 2.346-29.804-17.836-59.577-7.98-93.993-3.146-7.566-3.714-13.941 3.469-16.733 5.689-6.793 9.426-21.507 17.778-17.5l7.649-2.575 7.631 2.951c5.927 10.045 6.947 17.123 6.426 23.27 5.607 6.978 3.238 11.501-1.026 15.44-2.648 11.664-8.673 9.626-14.657 7.755l.953 6.669c15.244 17.474 24.013 40.965 25.777 70.966l-.43 31.862-26.184 3.003z"
        style={{
          opacity: 1,
          fill: "#ad5422",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M451.066 141.163c-5.722 1.831-8.42-1.34-8.914-8.158 1.16-22.58-6.472-47.146-12.77-71.41l9.556 10.76c11.945 23.57 10.921 46.1 12.128 68.808zM477.24 140.925c-5.721 1.83-9.249 3.696-9.743-3.121 1.16-22.582-4.216-40.8-16.354-69.147l17.32 22.654c7.39 24.693 7.571 26.905 8.778 49.614z"
        style={{
          opacity: 1,
          fill: "#e08135",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M444.987 12.875c-2.995 15.28-1.656 34.765-15.899 39.127l7.943 7.017c4.657 1.458 9.645 2.369 15.601 1.677 8.568 3.474 9.034-4.349 12.545-7.925l1.837-14.95c-1.21-14.546-2.162-29.354-22.027-24.946z"
        style={{
          fill: "#9c431e",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M439.226 34.315z"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M436.526 14.96c8.072-.375 5.598 10.773 5.464 19.364-.174 16.033-8.613 11.587-13.062 17.027-9.867-2.86-6.075-9.088-8.245-13.846 2.409-4.869 5.783-7.682 12.044-4.35l.624 8.131"
        style={{
          opacity: 1,
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M431.642 706.522c11.404 8.84 2.802 9.232 33.778 11.003 14.98 1.512 29.204 2.512 59.018-1.43 4.191-4.893-2.799-11.388-16.518-19.4l-17.884.265c1.262 6.26-2.913 8.094-8.158 8.915-19.044 3.192-22.253-.838-25.657-8.864l-23.571-.403-1.008 9.914z"
        style={{
          opacity: 1,
          fill: "#e08135",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M420.902 660.153c-5.028 5.612-2.446 11.155 3.048 12.366 3.14.692 8.245-4.154 6.536-9.895-4.62-15.523-21.791-10.199-26.317-5.94-17.719 16.674-14.152 37.402-13.68 56.53.968 39.206-5.03 49.796-14.567 54.332-3.338 1.587-9.205-.832-12.414-6.95 13.105-8.984 5.251-15.876.706-16.743-7.716-1.473-12.67 8.896-8.667 15.253 10.494 16.664 27.51 19.441 39.343-.033 10.743-17.68 5.382-45.374 6.575-71.347.712-15.476 1.951-36.556 19.437-27.573z"
        style={{
          fill: "#000",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M513.834 659.151c3.97 4.942 2.137 10.732-2.02 12.59-2.375 1.062-6.384-3.113-5.223-8.994 3.142-15.9 16.357-12.705 19.91-9.04 13.91 14.348 11.7 35.266 11.81 54.23.221 38.871 5.051 48.617 12.43 51.952 2.583 1.167 6.995-1.93 9.29-8.365-10.206-7.302-4.39-15.06-.948-16.464 5.844-2.385 9.873 7.268 6.978 14.033-7.588 17.735-20.488 22.53-29.981 4.705-8.62-16.183-5.213-44.203-6.759-69.732-.92-15.212-2.382-35.9-15.487-24.915z"
        style={{
          fill: "#000",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: ".86960715px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M462.05 605.828c16.62-7.26 34.09-11.067 54.953-1.12L475.6 145.472c-.709-6.906-15.77-4.746-25.015-6.26l11.465 466.617z"
        style={{
          fill: "#2b2b2d",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M462.05 605.828c16.62-7.26 34.09-11.067 54.953-1.12L475.6 145.472c-.709-6.906-15.77-4.746-25.015-6.26l11.465 466.617z"
        style={{
          fill: "url(#g)",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="m463.321 854.448 17.87-137.358-23.777-578.182-6.096-24.73"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="m469.616 855.657 26.855-138.192-33.85-579.84-12.89-35.483"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M479.914 855.225c32.016-144.583 31.196-139.987 31.196-139.987l-42-573.69-18.397-41.029"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="m486.916 853.025 36.23-139.373-50.452-574.368-11.944-26.05"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
      <path
        d="M443.764 974.154c-.166 9.02 6.505 12.88 17.187 13.713 9.212-1.529 13.491-7.092 15.816-14.255-4.665-26.764-6.541-53.116 1.067-76.892 13.902-43.445 19.269-52.018 23.31-67.878-16.321 3.824-32.396 10.113-49.916 1.949 1.778 27.268 10.801 58.774 7.696 81.636-4.763 21.752-8.82 46.369-15.16 61.727z"
        style={{
          opacity: 1,
          fill: "#333",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 3,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="rotate(37.401 569.629 342.712)"
      />
        <line id={styles.forthString} x1="600" y1="115" x2="275" y2="580"></line>  
        <line id={styles.thirdString} x1="605" y1="120" x2="290" y2="590"></line>
        <line id={styles.secondString} x1="610" y1="125" x2="300" y2="600"></line>
        <line id={styles.firstString} x1="615" y1="130" x2="310" y2="605"></line> 
    </svg>
  )
  export default DoubleBassSvg;
  