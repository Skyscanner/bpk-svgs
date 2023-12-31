import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M16.558 12.104V4a1 1 0 00-1-1H9.522A5 5 0 004.84 6.244l-2.27 6.054A2 2 0 004.444 15h4.833a1 1 0 01.97 1.242L9.95 17.43A2.873 2.873 0 0012.737 21a.479.479 0 00.443-.297l3.227-7.837a2 2 0 00.15-.762zm2-.604a1.5 1.5 0 003 0v-7a1.5 1.5 0 00-3 0z" /></svg>);