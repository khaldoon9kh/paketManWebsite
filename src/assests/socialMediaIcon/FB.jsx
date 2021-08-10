import React from "react";

export default function FB(props) {
  // const fbStyle = {
    
  // }

  const hoverHandle = (e)=>{
    e.target.style.stroke = 'blue'
    e.target.style.fill = "red"
  }
  
  return (
    <a href="https://www.facebook.com/Paketmanapp/" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="19"
        viewBox="0 0 18 19"
        {...props}
        onMouseOver={hoverHandle}
      >
        <g>
          <g>
            <path d="M12.22 18.314H8.724v-5.828H6.39V8.988h2.332V7.531a3.826 3.826 0 0 1 3.468-3.789h3.236V7.24h-2.915c-.175 0-.291.117-.291.292v1.457h2.914v3.498H12.22zm-2.914-.582h2.332v-5.829h2.914V9.571h-2.914v-2.04c0-.495.378-.874.874-.874h2.332V4.325H12.22c-1.633.145-2.915 1.545-2.915 3.206v2.04H6.974v2.332h2.332z" />
          </g>
          <g>
            <path d="M2.02 18.314c-.817 0-1.459-.64-1.459-1.457V2.285c0-.816.642-1.457 1.458-1.457h14.572c.817 0 1.458.641 1.458 1.457v14.572c0 .817-.64 1.457-1.458 1.457zm0-16.903a.858.858 0 0 0-.876.874v14.572a.86.86 0 0 0 .875.875h14.572a.86.86 0 0 0 .875-.875V2.285a.858.858 0 0 0-.875-.874z" />
          </g>
        </g>
      </svg>
    </a>
  );
}
