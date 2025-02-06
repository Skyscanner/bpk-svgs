const corePlugins = [
  'removeTitle',
  'preset-default',
  'removeStyleElement',
  'removeEmptyContainers',
  'sortAttrs',
  'removeUselessDefs',
  'removeEmptyText',
  'removeEditorsNSData',
  'removeEmptyAttrs',
  'removeHiddenElems',
];

const iconsPlugins = [
  ...corePlugins,
  {
    name: 'removeAttrs',
    params: {
      attrs: "(id|class|data-name|fill|width|height|viewBox|fill-rule)"
    }
  },
  {
    name: 'addAttributesToSVGElement',
    params: {
      attributes: [
        `viewBox="0 0 24 24"`,
        {
          'aria-hidden': true,
        }
      ],
    }
  }
];

const spinnersPlugins = [
  ...corePlugins,
  {
    name: 'removeAttrs',
    params: {
      attrs: "(id|class|data-name|fill|width|height|fill-rule)"
    }
  },
  {
    name: 'addAttributesToSVGElement',
    params: {
      attributes: [
        {
          'aria-hidden': true,
        },
      ],
    },
  }
];


export { iconsPlugins, spinnersPlugins };