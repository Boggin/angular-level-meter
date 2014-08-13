angular-level-meter
===================

A level meter AngularJS Directive.

![Level Meter examples](https://raw.githubusercontent.com/Boggin/angular-level-meter/gh-pages/images/level-meter.png "Level Meters")

### Features

It's reminiscent of an 80's tape deck's power level meters and is useful for simple dashboards.

### Installation

This module can be installed using bower:

```shell
bower install boggin\angular-level-meter --save
```

Otherwise, simply add the `angular-level-meter.min.js` file to your project. 

### Usage

Include the script in your application and include the `angular-level-meter` module as a dependency in your application module.

```javascript
angular.module('myApp', ['angular-level-meter']);
```

Add a `level-meter` element to your application as required.

```html
<level-meter level="{integer}"></level-meter>
```

#### Attributes

The images are driven by the _level_ attribute in the *level-meter* element. The _level_ attribute is not currently watched.

This version has three visible results for integer values 1, 3, and 5. In other words, it groups (1, 2) and (3, 4).

If the _level_ is zero or unrecognised then the bars are all empty.

### Styling

TODO: currently there's a stylesheet, src/angular-level-meter.css, which needs integrating with the directive.


### License

angular-level-meter is licensed under the MIT license. See LICENSE for details.

