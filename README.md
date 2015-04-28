# SopUI

[![Build Status](https://travis-ci.org/SomeoddpilotInc/SopUI.svg?branch=master)](https://travis-ci.org/SomeoddpilotInc/SopUI)
[![Dependency Status](https://david-dm.org/SomeoddpilotInc/SopUI.svg)](https://david-dm.org/SomeoddpilotInc/SopUI)
[![devDependency Status](https://david-dm.org/SomeoddpilotInc/SopUI/dev-status.svg)](https://david-dm.org/SomeoddpilotInc/SopUI#info=devDependencies)

Someoddpilot UI Framework

## High priority

* Accordians
* Icons - unicode
* Icons - social

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
