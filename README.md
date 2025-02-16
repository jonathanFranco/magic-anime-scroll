## Magic Anime Scroll

Magic Anime Scroll is an animation library for Vue that allows you to add animated effects to elements as they enter the screen while scrolling the page.

## Installation

Install magic-anime-scroll com npm/yarn/bun

```bash
  bun install magic-anime-scroll
  yarn add magic-anime-scroll
  npm install magic-anime-scroll
```

## Usage/Examples

Import it in the "main.ts" of your project:

```javascript
import { MagicAnimeScroll } from "magic-anime-scroll";
import "magic-anime-scroll/dist/style.css";

...
app.component("MagicAnimeScroll", MagicAnimeScroll);
```

Use it in the template like this:

```html
<MagicAnimeScroll type="zoom-out"> 
  <.../> 
  </MagicAnimeScroll>
```

## Global attributes

| Params         | Type      | Default   |
| :------------- | :-------- | :-------- |
| `type`         | `string`  | `zoom-in` |
| `triggerAways` | `boolean` | `true`    |

## Animations (type)

- zoom-in
- fade-rotate
- slide-fade
- shake-enter
- zoom-out
- rotate
- slide-right
- slide-left
- slide-up
- slide-down

## Author

- [@pingmaster](https://github.com/jonathanFranco)
