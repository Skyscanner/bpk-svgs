import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M10.382.312A.695.695 0 0010 .98v2.534C10 4.5 11 5 12 5s2-.5 2-1.486V1a.73.73 0 00-.405-.689A3.961 3.961 0 0012 .001a4.077 4.077 0 00-1.618.311zM16 7.302v2.396a.51.51 0 01-.57.502 31.92 31.92 0 00-3.377-.2 29.344 29.344 0 00-3.476.25A.509.509 0 018 9.747v-2.37a.85.85 0 01.547-.827A11.779 11.779 0 0111 6.061c.386-.04.744 1.94 1.035 1.94.277 0 .608-1.988.965-1.959a11.214 11.214 0 012.452.436.84.84 0 01.548.823zM17 16a1 1 0 001-1v-2.698a.917.917 0 00-.822-.824A27.805 27.805 0 0012.053 11a27.868 27.868 0 00-5.232.55.927.927 0 00-.821.83V15a1 1 0 001 1h1a1 1 0 011 1v6a1 1 0 001 1h4a1 1 0 001-1v-6a1 1 0 011-1z" /></svg>);