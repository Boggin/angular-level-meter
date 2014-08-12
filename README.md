angular-level-meter
===================

A level meter AngularJS Directive.

It's reminiscent of an 80's tape deck's power level meters and is useful for simple dashboards.

![Level Meter examples](https://raw.githubusercontent.com/Boggin/angular-level-meter/gh-pages/images/level-meter.png "Level Meters")

### Usage

`<level-meter level="3"></level-meter>`

The images are driven by the _level_ attribute in the *level-meter* element. The _level_ attribute is not currently watched. This version has three visible results for integer values 1, 3, and 5. In other words, it groups (1, 2) and (3, 4). If the _level_ is zero or unrecognised then the bars are all empty.

