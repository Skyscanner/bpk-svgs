import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M1.5 15.729a.727.727 0 01.885-.66 4.447 4.447 0 00.865.081 3.754 3.754 0 001.873-.447 4.061 4.061 0 001.118-.958q.188-.221.367-.45a3.77 3.77 0 01.294-.332.592.592 0 01.431-.213.842.842 0 01.579.24 3.998 3.998 0 01.34.334l.114.124c.094.103.199.217.305.326a4.436 4.436 0 001.256.943A4.645 4.645 0 0012 15.15a4.645 4.645 0 002.073-.433 4.45 4.45 0 001.256-.943c.106-.11.212-.224.306-.327l.114-.123a3.885 3.885 0 01.34-.335.841.841 0 01.578-.239.588.588 0 01.43.213 3.572 3.572 0 01.294.331c.032.038.065.08.1.124.082.103.175.217.268.327a4.061 4.061 0 001.118.958 3.768 3.768 0 001.873.447 4.454 4.454 0 00.865-.081.727.727 0 01.885.66v1.221a4.735 4.735 0 01-4.667 4.8H6.167a4.735 4.735 0 01-4.667-4.8zM12 5.25a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5.75a2.25 2.25 0 11-2.25-2.25A2.25 2.25 0 0119.5 6z" /><path d="M12 12.75a3 3 0 10-3-3 3 3 0 003 3z" /></svg>);