import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm4.887-6.87a4.971 4.971 0 01-3.603 3.766 4.867 4.867 0 01-4.164-1.088.417.417 0 010-.586l2.845-2.973a1 1 0 00.278-.692v-4.2c0-.252.16-.419.4-.335a5.022 5.022 0 014.244 6.108z" /></svg>);