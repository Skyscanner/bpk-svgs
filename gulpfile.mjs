// /*
//  * Backpack - Skyscanner's Design System
//  *
//  * Copyright 2016-2021 Skyscanner Ltd
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  *   http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  */

import { deleteAsync } from 'del';
import gulp from 'gulp';
import chmod from 'gulp-chmod';
import clone from 'gulp-clone';
import rename from 'gulp-rename';
import ts from 'gulp-typescript';
import ordered from 'ordered-read-streams';
import { optimize } from 'svgo';
import through2 from 'through2';

import createIconMapping from './tasks/metadata/iconMapping.mjs';
import metadata from './tasks/metadata/index.mjs';
import { iconsPlugins, spinnersPlugins } from './tasks/plugins.mjs';
import svgr from './tasks/svgr.mjs';

// Function to optimize SVGs using SVGO
const optimizeSvg = (size) => gulp.src(`src/icons/${size}/**/*.svg`)
  .pipe(chmod(0o644))
  .pipe(through2.obj(function (file, enc, cb) {
    if (file.isBuffer()) {
      const svgContent = file.contents.toString();
      const optimizedSvg = optimize(svgContent, {
        path: file.path, plugins: [...iconsPlugins, {
          name: 'addAttributesToSVGElement',
          params: {
            attributes: [
              `viewBox="0 0 24 24"`,
            ],
          }
        }]
      });

      if (optimizedSvg.data) {
        // eslint-disable-next-line no-param-reassign
        file.contents = Buffer.from(optimizedSvg.data);
      }
    }

    this.push(file);
    cb();
  }))
  .pipe(gulp.dest(`src/icons/${size}`));

gulp.task('clean', () => deleteAsync(['dist']));

const iconReactComponents = (type, size) => {
  let src;
  let dest;
  let plugins;
  if (type === 'icons') {
    src = `src/${type}/${size}/*.svg`;
    dest = `dist/js/${type}/${size}`;
    plugins = [
      ...iconsPlugins,
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
  }
  if (type === 'spinners') {
    src = `src/${type}/**/${size}.svg`;
    dest = `dist/js/${type}`;
    plugins = spinnersPlugins;
  }

  if (src === undefined || dest === undefined) {
    throw new Error(`Unrecognised type: ${type}`);
  }

  const svgs = gulp.src(src).pipe(chmod(0o644));

  const tsResult = svgs
    .pipe(clone())
    .pipe(svgr({ size, plugins }))
    .pipe(rename({ extname: '.tsx' }))
    .pipe(
      ts({
        noImplicitAny: true,
        jsx: 'preserve',
        target: 'es2020',
        module: 'es2020',
        declaration: true,
        skipLibCheck: true,
        allowSyntheticDefaultImports: true,
      }),
    );

  return ordered([
    tsResult.dts.pipe(gulp.dest(dest)),
    tsResult.js.pipe(gulp.dest(dest)),
  ]);
};

gulp.task('spinners', () =>
  ordered([
    iconReactComponents('spinners', 'sm'),
    iconReactComponents('spinners', 'lg'),
    iconReactComponents('spinners', 'xl'),
  ]),
);

// /*
//   ICONS
// */
gulp.task('optimise-small-icons', () =>
  optimizeSvg('sm')
);

gulp.task('optimise-large-icons', () =>
  optimizeSvg('lg')
);

gulp.task('icons', () =>
  ordered([
    iconReactComponents('icons', 'sm'),
    iconReactComponents('icons', 'lg'),
    iconReactComponents('icons', 'xl'),
  ]),
);

gulp.task('copy-svgs', () =>
  ordered([
    gulp
      .src(['src/**/*.svg'])
      .pipe(gulp.dest('dist/svgs')),
    gulp.src(['src/icons/icons.js']).pipe(gulp.dest('dist/svgs')),
  ]),
);

gulp.task('create-metadata', () =>
  gulp.src('src/icons/lg/*.svg').pipe(metadata()).pipe(gulp.dest('dist')),
);

gulp.task('create-iconmapping', createIconMapping);

const allIcons = gulp.series(
  gulp.parallel('optimise-small-icons', 'optimise-large-icons'),
  gulp.parallel('icons', 'copy-svgs')
);

const allSpinners = gulp.task('spinners');

gulp.task('default', gulp.series(gulp.parallel(allSpinners, allIcons, 'create-metadata'), 'create-iconmapping'));
