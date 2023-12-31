import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M20.412 9.517l-5.048-4.71A3 3 0 0013.318 4H4a2 2 0 00-2 2v10a1 1 0 001 1h12.125A1.876 1.876 0 0117 18.875 1.125 1.125 0 0018.125 20H20c1.657 0 2-1.343 2-3v-3.827a5 5 0 00-1.588-3.656zM9 10a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1zm7.586 1H12a1 1 0 01-1-1V7a1 1 0 011-1h1.586a1 1 0 01.707.293l3 3A1 1 0 0116.586 11zM16 19a1 1 0 01-1 1H3a1 1 0 010-2h12a1 1 0 011 1z" /></svg>);