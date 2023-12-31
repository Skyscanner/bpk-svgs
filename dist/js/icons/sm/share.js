import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M11.25 16.5a.736.736 0 01.763.703v3.092c0 .605.772.927 1.434.53l10.291-8.296a.667.667 0 000-1.058L13.45 3.175c-.494-.397-1.435-.075-1.435.53v3.092a.736.736 0 01-.764.703h-3.65C4.5 7.5 0 9 .001 17.713a.659.659 0 001.07.487 8.427 8.427 0 015.004-1.7z" /></svg>);