import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1022.5 12 10.5 10.5 0 0012 1.5zm7.331 14.606a.977.977 0 01-.944.478l-2.503-.21a1.05 1.05 0 00-1.101.771l-.658 2.424a.977.977 0 01-.774.723h-.001a8.457 8.457 0 01-2.7 0 .977.977 0 01-.774-.723l-.658-2.424a1.05 1.05 0 00-1.101-.771l-2.503.21a.977.977 0 01-.944-.478 8.344 8.344 0 01-.924-2.54.977.977 0 01.415-.973l2.053-1.447a1.05 1.05 0 00.348-1.3L5.509 7.569a.978.978 0 01.127-1.051A8.43 8.43 0 018.35 4.433a.977.977 0 011.049.148l1.93 1.609a1.05 1.05 0 001.344 0l1.93-1.609a.977.977 0 011.049-.148 8.435 8.435 0 012.986 2.417.98.98 0 01.098 1.014l-1.037 2.243a1.05 1.05 0 00.348 1.298l1.78 1.256a.974.974 0 01.414.98 8.344 8.344 0 01-.91 2.465zm-4.362-4.538l-.672 2.648a1.045 1.045 0 01-1.018.784h-2.558a1.047 1.047 0 01-1.018-.784l-.672-2.648a1.028 1.028 0 01.436-1.112h.001l1.95-1.282a1.062 1.062 0 011.165 0l1.95 1.282a1.028 1.028 0 01.436 1.112z" /></svg>);