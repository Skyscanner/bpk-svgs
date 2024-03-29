/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2021 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from 'fs';
import punycode from 'punycode';

import gulp from 'gulp';
import chmod from 'gulp-chmod';
import clone from 'gulp-clone';
import iconfont from 'gulp-iconfont';
import rename from 'gulp-rename';
import svgmin from 'gulp-svgmin';
import merge from 'merge-stream';
import { rimraf } from 'rimraf';

import tokens from '@skyscanner/bpk-foundations-web/tokens/base.raw.json';

import getIconFontMetadataProvider from './tasks/getIconFontMetadataProvider';
import metadata from './tasks/metadata';
import svg2react from './tasks/svg2react';

const remToPx = (value) => {
  let parsed = null;

  if (/rem$/.test(value)) {
    parsed = parseFloat(value.replace(/rem/, '')) * 16;
  }

  return parsed || null;
};

const smallIconSize = tokens.props.ICON_SIZE_SM.value;
const largeIconSize = tokens.props.ICON_SIZE_LG.value;
const largeIconPxSize = remToPx(largeIconSize);

const svgoCommonPlugins = [
  { name: 'removeTitle' },
  { name: 'preset-default' },
  { name: 'removeStyleElement' },
  { name: 'removeEmptyContainers' },
  { name: 'sortAttrs' },
  { name: 'removeUselessDefs' },
  { name: 'removeEmptyText' },
  { name: 'removeEditorsNSData' },
  { name: 'removeEmptyAttrs' },
  { name: 'removeHiddenElems' },
];

gulp.task('clean', () => rimraf(['dist']));

const spinnerReactComponents = (size) => {
  const svgs = gulp.src(`src/spinners/**/${size}.svg`).pipe(chmod(0o644));

  const sizeMapping = {
    sm: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  };
  const styleAttribute = `style="width:${sizeMapping[size]};height:${sizeMapping[size]}"`;

  return svgs
    .pipe(clone())
    .pipe(
      svgmin({
        full: true,
        plugins: [
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [
                {
                  'aria-hidden': true,
                },
                styleAttribute,
              ],
            },
          },
        ],
      }),
    )
    .pipe(svg2react())
    .pipe(rename({ extname: '.js' }))
    .pipe(gulp.dest('dist/js/spinners'));
};

gulp.task('spinners', () =>
  merge(
    spinnerReactComponents('sm'),
    spinnerReactComponents('lg'),
    spinnerReactComponents('xl'),
  ),
);

/*
  ICONS
*/
const optimiseSvgs = (size) =>
  gulp
    .src(`src/icons/${size}/**/*.svg`)
    .pipe(chmod(0o644))
    .pipe(
      svgmin({
        full: true,
        plugins: [
          ...svgoCommonPlugins,
          {
            name: 'removeAttrs',
            params: {
              attrs: [
                'id',
                'class',
                'data-name',
                'fill',
                'width',
                'height',
                'viewBox',
                'fill-rule',
              ],
            },
          },
          {
            name: 'addAttributesToSVGElement',
            params: {
              attribute: `viewBox="0 0 ${largeIconPxSize} ${largeIconPxSize}"`,
            },
          },
        ],
      }),
    )
    .pipe(gulp.dest(`src/icons/${size}`));

gulp.task('icons-common', () => merge(optimiseSvgs('sm'), optimiseSvgs('lg')));

const iconReactComponents = (size) => {
  const iconSize = size === 'sm' ? smallIconSize : largeIconSize;

  const svgs = gulp.src(`src/icons/${size}/**/*.svg`).pipe(chmod(0o644));

  const styleAttribute = `style="width:${iconSize};height:${iconSize}"`;

  const react = svgs
    .pipe(clone())
    .pipe(
      svgmin({
        full: true,
        plugins: [
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [
                {
                  'aria-hidden': true,
                },
                styleAttribute,
              ],
            },
          },
        ],
      }),
    )
    .pipe(svg2react())
    .pipe(rename({ extname: '.js' }))
    .pipe(gulp.dest(`dist/js/icons/${size}`));

  return merge(react);
};
gulp.task('icons', () =>
  merge(iconReactComponents('sm'), iconReactComponents('lg')),
);

gulp.task('prepare-for-icons-font', () =>
  // This temporarily copies the SVGs to include in the font to `dist/font`.
  // The font is built from the content of that directory
  merge(
    gulp
      .src('src/icons/sm/*.svg')
      .pipe(
        rename((path) => {
          // eslint-disable-next-line no-param-reassign
          path.basename += '-sm';
        }),
      )
      .pipe(gulp.dest('dist/font')),
    gulp.src('src/icons/lg/*.svg').pipe(gulp.dest('dist/font')),
    gulp
      .src('src/icons/xl/*.svg')
      .pipe(
        rename((path) => {
          // eslint-disable-next-line no-param-reassign
          path.basename += '-xl';
        }),
      )
      .pipe(gulp.dest('dist/font')),
  ),
);

gulp.task('icons-font', () => {
  /* We generate two copies of the exact same font here because when we
   * integrate both the React Native Icon and iOS Icon in the same iOS
   * app the underlying names in the font have to be different to
   * prevent UIKit from refusing to load either font. Setting a
   * different name for the `fontName` parameter of `iconFont`
   * ensures this happens. Simply having a different name on
   * disk is not enough as UIKit uses the name at index 1 in
   * the name table of the font for uniqueness.
   */

  const generateFont = (name = 'BpkIcon') =>
    gulp
      .src('dist/font/**/*.svg')
      .pipe(chmod(0o644))
      .pipe(
        iconfont({
          metadataProvider: getIconFontMetadataProvider(
            'tasks/codepoints.json',
          ),
          fontName: name,
          formats: ['ttf', 'eot', 'woff'],
          /**
           * Normalize and fontHeight(>1000) are needed in order to have all the glyphs rendered
           * correctly, for more info go to the npm package docs
           * https://www.npmjs.com/package/gulp-iconfont
           */
          normalize: true,
          fontHeight: 1001,
          timestamp: 1436442578, // A static timestamp to prevent changes showing up in git, backpack's first commit!
        }),
      );

  const fontStream = generateFont();
  const saveFonts = [
    fontStream.pipe(clone()).pipe(gulp.dest('dist/font')),
    generateFont('BpkIconIOS').pipe(clone()).pipe(gulp.dest('dist/font')),
  ];

  const saveMapping = fontStream.on('glyphs', (glyphs) => {
    const baseDir = 'dist/font';
    const mapping = glyphs.reduce((acc, glyph) => {
      // use punycode to get the text representation of the unicode
      acc[glyph.name] = punycode.ucs2
        .decode(glyph.unicode[0])
        .map((point) => `${point.toString(16).toUpperCase()}`)
        .join('');
      return acc;
    }, {});

    if (!fs.existsSync(baseDir)) {
      fs.mkdirSync(baseDir);
    }

    const mappingStream = fs.createWriteStream(`${baseDir}/iconMapping.json`, {
      flags: 'w',
    });

    mappingStream.write(JSON.stringify(mapping, null, 4));
    mappingStream.end();
  });

  return merge(...saveFonts, saveMapping);
});

gulp.task('clean-up-font-svgs', () => rimraf('dist/font/*.svg', {glob: true}));

// copy-svgs ignores those in `xl` as we don't want to make them available to web consumers.
gulp.task('copy-svgs', () =>
  gulp
    .src(['src/**/*.svg', '!src/icons/xl/*.svg', 'src/icons/*.js'])
    .pipe(clone())
    .pipe(gulp.dest('dist/svgs')),
);

gulp.task('create-metadata', () =>
  gulp.src('src/icons/lg/*.svg').pipe(metadata()).pipe(gulp.dest('dist')),
);

const iconFonts = gulp.series(
  'prepare-for-icons-font',
  'icons-font',
  'clean-up-font-svgs',
);

const allIcons = gulp.series(
  'icons-common',
  gulp.parallel('icons', iconFonts, 'copy-svgs'),
);

const allSpinners = gulp.task('spinners');

gulp.task('default', gulp.parallel(allSpinners, allIcons, 'create-metadata'));
