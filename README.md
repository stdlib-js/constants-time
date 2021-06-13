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

# Constants

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Time constants.

<section class="installation">

## Installation

```bash
npm install @stdlib/constants-time
```

</section>

<section class="usage">

## Usage

```javascript
var constants = require( '@stdlib/constants-time' );
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

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var constants = require( '@stdlib/constants-time' );

console.log( objectKeys( constants ) );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/constants-time.svg
[npm-url]: https://npmjs.org/package/@stdlib/constants-time

[test-image]: https://github.com/stdlib-js/constants-time/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/constants-time/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/constants-time/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/constants-time?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/constants-time
[dependencies-url]: https://david-dm.org/stdlib-js/constants-time/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/constants-time/main/LICENSE

<!-- <toc-links> -->

[@stdlib/constants/time/hours-in-day]: https://github.com/stdlib-js/constants-time-hours-in-day

[@stdlib/constants/time/hours-in-week]: https://github.com/stdlib-js/constants-time-hours-in-week

[@stdlib/constants/time/milliseconds-in-day]: https://github.com/stdlib-js/constants-time-milliseconds-in-day

[@stdlib/constants/time/milliseconds-in-hour]: https://github.com/stdlib-js/constants-time-milliseconds-in-hour

[@stdlib/constants/time/milliseconds-in-minute]: https://github.com/stdlib-js/constants-time-milliseconds-in-minute

[@stdlib/constants/time/milliseconds-in-second]: https://github.com/stdlib-js/constants-time-milliseconds-in-second

[@stdlib/constants/time/milliseconds-in-week]: https://github.com/stdlib-js/constants-time-milliseconds-in-week

[@stdlib/constants/time/minutes-in-day]: https://github.com/stdlib-js/constants-time-minutes-in-day

[@stdlib/constants/time/minutes-in-hour]: https://github.com/stdlib-js/constants-time-minutes-in-hour

[@stdlib/constants/time/minutes-in-week]: https://github.com/stdlib-js/constants-time-minutes-in-week

[@stdlib/constants/time/months-in-year]: https://github.com/stdlib-js/constants-time-months-in-year

[@stdlib/constants/time/seconds-in-day]: https://github.com/stdlib-js/constants-time-seconds-in-day

[@stdlib/constants/time/seconds-in-hour]: https://github.com/stdlib-js/constants-time-seconds-in-hour

[@stdlib/constants/time/seconds-in-minute]: https://github.com/stdlib-js/constants-time-seconds-in-minute

[@stdlib/constants/time/seconds-in-week]: https://github.com/stdlib-js/constants-time-seconds-in-week

<!-- </toc-links> -->

</section>

<!-- /.links -->
