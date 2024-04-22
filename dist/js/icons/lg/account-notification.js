import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><circle cx="20" cy="18" r="4" /><path d="M2.5 12a9.5 9.5 0 1118.998.189c.342.088.673.205.988.349A9.61 9.61 0 0022.5 12c0-5.799-4.701-10.5-10.5-10.5S1.5 6.201 1.5 12 6.201 22.5 12 22.5c1.21 0 2.374-.205 3.456-.582a6.02 6.02 0 01-.614-.85A9.497 9.497 0 0112 21.5 9.5 9.5 0 012.5 12zm13.821 1.26A12.59 12.59 0 0012 12.5a12.56 12.56 0 00-5.508 1.263c-.923.45-1.31 1.609-.693 2.498A7.537 7.537 0 0012 19.5a7.57 7.57 0 002.12-.3 6.025 6.025 0 01-.117-1.01A6.565 6.565 0 0112 18.5a6.537 6.537 0 01-5.38-2.81c-.235-.338-.115-.821.308-1.027A11.56 11.56 0 0112 13.5c1.22 0 2.394.188 3.497.535.25-.283.526-.543.825-.775zM10 6.38c0-.45.408-.881.995-.881h2.01c.587 0 .995.43.995.881v2.31c0 .962-.858 1.809-2 1.809s-2-.847-2-1.81V6.382zm.995-1.881C9.932 4.5 9 5.305 9 6.381v2.31c0 1.587 1.382 2.809 3 2.809s3-1.222 3-2.81V6.382c0-1.076-.932-1.881-1.995-1.881h-2.01z" clipRule="evenodd" /></svg>);