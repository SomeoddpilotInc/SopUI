# SopUI

[![Build Status](https://travis-ci.org/SomeoddpilotInc/SopUI.svg?branch=master)](https://travis-ci.org/SomeoddpilotInc/SopUI)
[![Dependency Status](https://david-dm.org/SomeoddpilotInc/SopUI.svg)](https://david-dm.org/SomeoddpilotInc/SopUI)
[![devDependency Status](https://david-dm.org/SomeoddpilotInc/SopUI/dev-status.svg)](https://david-dm.org/SomeoddpilotInc/SopUI#info=devDependencies)

Someoddpilot UI Framework

## High priority

* Accordians

##  Buttons

Provides a convenient method for basic styles for CTAs complete with hover and focus states. The hover state is customizable, but the focus state is programatically made with normal state values.

*Default button colors are white text on black.*

```stylus
.foo
  sop-button(2s, 2px)

.bar
  sop-button-colors(#036, #024)

.foo-bar
  sop-button(0)
  sop-button-colors(#036, #024, #DDD, #AAA)
```

```css
.foo {
  display: inline-block;

  line-height: 1.2em;

  text-decoration: none;

  cursor: pointer;
  vertical-align: middle;

  transition: all 2s ease;
  backface-visibility: hidden;

  border-radius: 2px;
  border: 0;
}

.foo:hover {
  text-decoration: none;
}

.bar {
  background: #036;
  color: #024;
}

.bar:hover,
.bar:active {
  background: #003d7a;
  color: #024;
}

.bar:focus {
  outline: none;
  background: #003061;
  color: #024;
}

.foo-bar {
  display: inline-block;

  line-height: 1.2em;

  text-decoration: none;

  cursor: pointer;
  vertical-align: middle;

  backface-visibility: hidden;

  border-radius: 0;
  border: 0;

  background: #036;
  color: #024;
}

.foo-bar:hover {
  text-decoration: none;
}

.foo-bar:hover,
.foo-bar:active {
  background: #ddd;
  color: #aaa;
}

.foo-bar:focus {
  outline: none;
  background: #003061;
  color: #aaa;
}
```
##  Expandable

This style of expandable area is activated by toggling classes on click, using jQuery in this example.

```html
<button sop-expandable-button>
  Title
  <div sop-expandable-caret></div>
</button>
<div sop-expandable>
  Lorem Ipsum
</div>
```

```css
[sop-expandable-caret] {
  transition: all 0.2s;
}
[sop-expandable] {
  height: 0;
  overflow: hidden;
  transition: all 0.2s;
}
.sop-expandable--open {
  height: auto;
}
.sop-expandable-caret--rotate {
  transform: rotate(-180deg);
}

```

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

## Icons

### Social

Shortcut for commonly used social icons. This mixin includes the `fontello-icon()` mixin from `sop-styl`. Supports default, fill, and alt styles. Any missing requested icons/styles will result in a warning.

```stylus
.i-want-a-facebook-icon:after
  sop-social-icon(facebook)

.i-want-a-filled-vimeo-icon:after
  sop-social-icon(vimeo, fill)

.i-want-the-alt-filled-pinterest-icon:after
  sop-social-icon(pinterest, fill, alt)
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
* Icons - Common SOP custom icons(?)
