<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Constants

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Time constants.



<section class="usage">

## Usage

To use in Observable,

```javascript
constants = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-time@v0.2.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var constants = require( 'path/to/vendor/umd/constants-time/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-time@v0.2.0-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.constants;
})();
</script>
```

#### constants

Time constants.

```javascript
var c = constants;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`HOURS_IN_DAY`][@stdlib/constants/time/hours-in-day]</span><span class="delimiter">: </span><span class="description">number of hours in a day.</span>
-   <span class="signature">[`HOURS_IN_WEEK`][@stdlib/constants/time/hours-in-week]</span><span class="delimiter">: </span><span class="description">number of hours in a week.</span>
-   <span class="signature">[`MILLISECONDS_IN_DAY`][@stdlib/constants/time/milliseconds-in-day]</span><span class="delimiter">: </span><span class="description">number of milliseconds in a day.</span>
-   <span class="signature">[`MILLISECONDS_IN_HOUR`][@stdlib/constants/time/milliseconds-in-hour]</span><span class="delimiter">: </span><span class="description">number of milliseconds in an hour.</span>
-   <span class="signature">[`MILLISECONDS_IN_MINUTE`][@stdlib/constants/time/milliseconds-in-minute]</span><span class="delimiter">: </span><span class="description">number of milliseconds in a minute.</span>
-   <span class="signature">[`MILLISECONDS_IN_SECOND`][@stdlib/constants/time/milliseconds-in-second]</span><span class="delimiter">: </span><span class="description">number of milliseconds in a second.</span>
-   <span class="signature">[`MILLISECONDS_IN_WEEK`][@stdlib/constants/time/milliseconds-in-week]</span><span class="delimiter">: </span><span class="description">number of milliseconds in a week.</span>
-   <span class="signature">[`MINUTES_IN_DAY`][@stdlib/constants/time/minutes-in-day]</span><span class="delimiter">: </span><span class="description">number of minutes in a day.</span>
-   <span class="signature">[`MINUTES_IN_HOUR`][@stdlib/constants/time/minutes-in-hour]</span><span class="delimiter">: </span><span class="description">number of minutes in an hour.</span>
-   <span class="signature">[`MINUTES_IN_WEEK`][@stdlib/constants/time/minutes-in-week]</span><span class="delimiter">: </span><span class="description">number of minutes in a week.</span>
-   <span class="signature">[`MONTHS_IN_YEAR`][@stdlib/constants/time/months-in-year]</span><span class="delimiter">: </span><span class="description">number of months in a year.</span>
-   <span class="signature">[`SECONDS_IN_DAY`][@stdlib/constants/time/seconds-in-day]</span><span class="delimiter">: </span><span class="description">number of seconds in a day.</span>
-   <span class="signature">[`SECONDS_IN_HOUR`][@stdlib/constants/time/seconds-in-hour]</span><span class="delimiter">: </span><span class="description">number of seconds in an hour.</span>
-   <span class="signature">[`SECONDS_IN_MINUTE`][@stdlib/constants/time/seconds-in-minute]</span><span class="delimiter">: </span><span class="description">number of seconds in a minute.</span>
-   <span class="signature">[`SECONDS_IN_WEEK`][@stdlib/constants/time/seconds-in-week]</span><span class="delimiter">: </span><span class="description">number of seconds in a week.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-time@v0.2.0-umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( constants ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/constants-time.svg
[npm-url]: https://npmjs.org/package/@stdlib/constants-time

[test-image]: https://github.com/stdlib-js/constants-time/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/constants-time/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/constants-time/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/constants-time?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/constants-time.svg
[dependencies-url]: https://david-dm.org/stdlib-js/constants-time/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/constants-time/tree/deno
[umd-url]: https://github.com/stdlib-js/constants-time/tree/umd
[esm-url]: https://github.com/stdlib-js/constants-time/tree/esm
[branches-url]: https://github.com/stdlib-js/constants-time/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/constants-time/main/LICENSE

<!-- <toc-links> -->

[@stdlib/constants/time/hours-in-day]: https://github.com/stdlib-js/constants-time-hours-in-day/tree/umd

[@stdlib/constants/time/hours-in-week]: https://github.com/stdlib-js/constants-time-hours-in-week/tree/umd

[@stdlib/constants/time/milliseconds-in-day]: https://github.com/stdlib-js/constants-time-milliseconds-in-day/tree/umd

[@stdlib/constants/time/milliseconds-in-hour]: https://github.com/stdlib-js/constants-time-milliseconds-in-hour/tree/umd

[@stdlib/constants/time/milliseconds-in-minute]: https://github.com/stdlib-js/constants-time-milliseconds-in-minute/tree/umd

[@stdlib/constants/time/milliseconds-in-second]: https://github.com/stdlib-js/constants-time-milliseconds-in-second/tree/umd

[@stdlib/constants/time/milliseconds-in-week]: https://github.com/stdlib-js/constants-time-milliseconds-in-week/tree/umd

[@stdlib/constants/time/minutes-in-day]: https://github.com/stdlib-js/constants-time-minutes-in-day/tree/umd

[@stdlib/constants/time/minutes-in-hour]: https://github.com/stdlib-js/constants-time-minutes-in-hour/tree/umd

[@stdlib/constants/time/minutes-in-week]: https://github.com/stdlib-js/constants-time-minutes-in-week/tree/umd

[@stdlib/constants/time/months-in-year]: https://github.com/stdlib-js/constants-time-months-in-year/tree/umd

[@stdlib/constants/time/seconds-in-day]: https://github.com/stdlib-js/constants-time-seconds-in-day/tree/umd

[@stdlib/constants/time/seconds-in-hour]: https://github.com/stdlib-js/constants-time-seconds-in-hour/tree/umd

[@stdlib/constants/time/seconds-in-minute]: https://github.com/stdlib-js/constants-time-seconds-in-minute/tree/umd

[@stdlib/constants/time/seconds-in-week]: https://github.com/stdlib-js/constants-time-seconds-in-week/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
