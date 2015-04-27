# SopUI

[![Build Status](https://travis-ci.org/SomeoddpilotInc/SopUI.svg?branch=master)](https://travis-ci.org/SomeoddpilotInc/SopUI)

Someoddpilot UI Framework

## High priority

* Expandable
* Accordians
* Icons - unicode
* Icons - social

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

##  Grid

Provides a convenient method to build grid items using inline-block

```stylus
.foo
  sop-grid-item(2)
```

```css
.foo {
  display: inline-block;
  width: 50%;
}
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
