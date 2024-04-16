import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M23.499 7.504a5.25 5.25 0 00-2.821-2.639l-.715-1.928A4.5 4.5 0 0015.743 0h-.828a1.5 1.5 0 000 3h.828a1.5 1.5 0 011.407.979l.193.521H6.653l.193-.521A1.5 1.5 0 018.253 3h.828a1.5 1.5 0 000-3h-.828a4.5 4.5 0 00-4.22 2.937l-.715 1.929a5.252 5.252 0 00-.32 9.629V15a9 9 0 0018 0v-.505a5.25 5.25 0 002.5-6.99zM18.748 12h-2.054a1.888 1.888 0 01-1.513-.757 3.98 3.98 0 00-6.366 0A1.888 1.888 0 017.302 12H5.248a2.25 2.25 0 110-4.5h13.5a2.25 2.25 0 010 4.5z" /></svg>);