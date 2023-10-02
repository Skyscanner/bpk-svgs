import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M13.662 2.784a.565.565 0 01.286-.534A2.89 2.89 0 0115.162 2a2.815 2.815 0 011.196.249.59.59 0 01.304.551v2.011c0 .789-.75 1.189-1.5 1.189s-1.5-.4-1.5-1.189zM8.944 12.823a.22.22 0 00.218.177 4.5 4.5 0 01.513 8.971.015.015 0 00-.013.014.015.015 0 01-.014.015q-.125 0-.25-.006a4.502 4.502 0 01-4.456-2.93 3.898 3.898 0 01-.28-1.564 4.488 4.488 0 011.74-3.553 1.168 1.168 0 00.471-1.122L6.14 9.093a.7.7 0 01.317-.716c.192-.132.41-.298.65-.48 1.105-.844 2.683-2.048 4.431-1.881a2.059 2.059 0 011.686 2.725l-.843 2.489a1.107 1.107 0 01-1.284.686 7.258 7.258 0 00-1.686-.14.582.582 0 00-.532.705zM16.342 22a1.34 1.34 0 01-1.058-1.851 7.262 7.262 0 00-.002-5.301A1.338 1.338 0 0116.34 13a3 3 0 013 3v5a1 1 0 01-1 1h-1.997z" /></svg>);