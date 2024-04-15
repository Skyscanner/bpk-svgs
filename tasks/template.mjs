const template = ({ componentName, exports, jsx }, { tpl }) => tpl`
  import React from 'react';
  type Props = { fill?: string, className?: string }
  export const ${`${componentName}`} = (props: Props) => {
    return (${jsx});
  }
  ${exports}
  `
  
export default template;