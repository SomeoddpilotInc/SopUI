# SopUI

[![Build Status](https://travis-ci.org/SomeoddpilotInc/SopUI.svg?branch=master)](https://travis-ci.org/SomeoddpilotInc/SopUI)
[![Dependency Status](https://david-dm.org/SomeoddpilotInc/SopUI.svg)](https://david-dm.org/SomeoddpilotInc/SopUI)
[![devDependency Status](https://david-dm.org/SomeoddpilotInc/SopUI/dev-status.svg)](https://david-dm.org/SomeoddpilotInc/SopUI#info=devDependencies)

Someoddpilot UI Framework

## High priority

* Expandable
* Accordians
* Buttons
* Icons - unicode
* Icons - social

##  Grid

Provides a convenient method to build grid items using inline-block

```stylus
.foo
  sop-grid-item(2)

.bar
  sop-grid-offset-left(4, 1)
```

```css
.foo {
  display: inline-block;
  width: 50%;
}

.bar {
  margin-left: 25%;
}
```

##  Expandable

This style of expandable area is activated by toggling classes on click, using jQuery in this example.

```html
<button class="button">
  Read More
  <div class="caret"></div>
</button>
<div class="wrapper">
  Lorem Ipsum
</div>
```

```js
$('.button').on('click', function() {
  $(this).next('.wrapper').toggleClass("wrapper--open");
  $(this).find('.caret').toggleClass('caret--rotate');
});
```

```stylus
.wrapper
  height 0
  overflow hidden

  transition all .2s

.wrapper--open
  height auto

.caret
  transition all .2s

.caret--rotate
  transform rotate(-180deg)
```


## Low priority

* Modal
* Scrollspy
* Video
* Slider
* Feed
* Dropdown
* Push menu
* Baseline content
* Tooltip
* Forms
