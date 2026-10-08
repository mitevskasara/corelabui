# Corelab UI

[![npm version](https://img.shields.io/npm/v/corelabui.svg)](https://www.npmjs.com/package/corelabui)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Corelab UI is a collection of ready-to-use React components that aims to speed up the development process of user interfaces.
With Corelab UI, you can quickly integrate minimal, simple components into your React projects. The components are customisable, and you can pick from six built-in themes. Many components ship with accessible markup — proper ARIA roles and states, keyboard navigation and labelled interactive elements.

- **Styles ship with the code** — no CSS files to import, each component injects its own stylesheet.
- **6 built-in themes** — switch the whole look of your app with a single prop, or override individual design tokens.
- **Tree-shakeable entry points** — import only the components you use.

## Live demo

The [`demo/`](demo) folder contains an interactive demo of every component with a live theme switcher.

Run it locally:

```bash
npm install
npm run build       # build the library (required once, and after every src/ change)
npm run demo        # serve the demo at http://localhost:3000
```

## Installation

Corelab UI is available as an npm package. Make sure you have Node.js installed, then run:

```bash
npm install corelabui
```

React 18 or newer is required as a peer dependency.

## Usage

Every component has its own entry point, so you only pull in what you use:

```javascript
import Button from 'corelabui/Button';

function App() {
    return (
        <Button onClick={() => console.log('Hello Corelab UI')}>
            Click me!
        </Button>
    );
}
```

You can also import everything from the package root:

```javascript
import { Button, Input, Table, ThemeProvider } from 'corelabui';
```

No CSS imports are needed — each component injects its styles into the document when it is imported.

### Common components

```javascript
import Input from 'corelabui/Input';
import Select from 'corelabui/Select';
import Table from 'corelabui/Table';

<Input
    label="Email"
    type="email"
    helperText="We never share your email."
    error={!valid}
/>

<Select
    label="City"
    value={city}
    options={options}
    onChange={(option) => setCity(option.value)}  // receives the whole option
/>

<Table headers={['Invoice', 'Customer', 'Total']} striped data={rows} />
```

## Theming

Corelab UI ships six themes: **default**, **winter**, **spring**, **summer**, **fall** and **dark**.
Wrap your app in `ThemeProvider` and pass a theme object to apply it:

```javascript
import ThemeProvider from 'corelabui/ThemeProvider';
import { darkTheme } from 'corelabui/Theme';

function Root() {
    return (
        <ThemeProvider theme={darkTheme}>
            <App />
        </ThemeProvider>
    );
}
```

| Theme   | Primary   | Background  |
| ------- | --------- | ----------- |
| default | `#393053` | `#ffffff`   |
| winter  | `#023E8A` | `#ffffff`   |
| spring  | `#77BFA3` | `#ffffff`   |
| summer  | `#FFD400` | `#ffffff`   |
| fall    | `#F1580C` | `#ffffff`   |
| dark    | `#75a2ce` | `#171b20`   |

### Custom themes

Themes are plain objects of design tokens. Override as few or as many as you like:

```javascript
import { createTheme } from 'corelabui/Theme';

createTheme({
    primary: '#e11d48',
    primaryHover: '#be123c',
    borderRadius: '8px',
    fontFamily: "'Inter', sans-serif"
});
```

Every token is published as a CSS custom property on `:root`, so you can use
`var(--primary)`, `var(--border-radius)`, `var(--text)` etc. in your own CSS as well.
See [`src/Theme/themes.js`](src/Theme/themes.js) for the full list of tokens.

## Components

| Component | Import path | Description |
| --- | --- | --- |
| Breadcrumb | `corelabui/Breadcrumb` | Trail of links with a custom separator |
| Button | `corelabui/Button` | `primary` / `secondary` / `text` variants, sizes, loading state |
| Card | `corelabui/Card` | Surface with title, description, image, tags, click state |
| Checkbox | `corelabui/Checkbox` | Custom checkbox with label, sizes and rounded variant |
| Divider | `corelabui/Divider` | Horizontal rule, optionally with centered text |
| Dropdown | `corelabui/Dropdown` | Popover menu triggered by a button (hover or click) |
| Flex / FlexItem | `corelabui/Flex` | Flexbox container with gap, alignment and responsive direction |
| Grid / GridItem | `corelabui/Grid` | 12-column grid with responsive column spans |
| Header | `corelabui/Header` | Responsive site header with logo, links, actions and mobile menu |
| Highlight | `corelabui/Highlight` | Inline color, background or gradient text |
| Input | `corelabui/Input` | Text field with label, helper text and error state |
| Layout + regions | `corelabui/Layout` | Page shells (`dashboard`, `website`, `custom`) built from grid regions |
| Link | `corelabui/Link` | Styled anchor with animated underline |
| Navigation / NavigationItem | `corelabui/Navigation` | Sidebar navigation with sub-items, badges and dividers |
| Popup / PopupActions | `corelabui/Popup` | Modal dialog with backdrop, Escape handling and action footer |
| Quote | `corelabui/Quote` | Blockquote with optional citation |
| RadioButton | `corelabui/RadioButton` | Custom radio with label, sizes and rounded variant |
| Scrollable | `corelabui/Scrollable` | Scroll area that reveals its scrollbars on hover |
| Select | `corelabui/Select` | Custom dropdown select with label, helper text and error state |
| Table | `corelabui/Table` | Declarative headers and data, striped and bordered modes |
| TableOfContents | `corelabui/TableOfContents` | Anchor list with active state, ideal as page sidebar |
| Tabs / Tab / TabContent | `corelabui/Tabs` | Accessible tab list with arrow-key navigation |
| Tag | `corelabui/Tag` | Small label in `outlined` or `contained` style |
| Textarea | `corelabui/Textarea` | Multi-line field with label and error state |
| Theme | `corelabui/Theme` | Built-in themes plus `createTheme`, `injectTheme`, `generateStyle` |
| ThemeProvider | `corelabui/ThemeProvider` | Applies a theme object to the document |
| Typography | `corelabui/Typography` | `heading1–6`, `subtitle1/2`, `body1/2` and `caption` variants |

## Server-side rendering

Every component also exports its stylesheet, so you can render it on the server instead of injecting it on the client:

```javascript
import Button, { stylesheet } from 'corelabui/Button';

// stylesheet === { id: 'CoreLabUI-Button', style: '.CoreLabUI__btn-root{…}' }
res.send(`
    <head><style id="${stylesheet.id}">${stylesheet.style}</style></head>
    <body>…</body>
`);
```

## TypeScript

Corelab UI is written in JavaScript and does not ship type definitions yet.
In a TypeScript project, add `allowJs: true` or write module declarations for the components you use.

## Development

```bash
npm install
npm run build        # bundle src/ into the per-component folders at the repo root
npm run build:demo   # bundle the demo into demo/dist (requires npm run build first)
npm run demo         # watch and serve the demo at http://localhost:3000
```

| Path | Purpose |
| --- | --- |
| `src/` | Component source (JSX + co-located CSS) |
| `plugins/injectCss.js` | esbuild plugin that inlines component CSS into the bundles |
| `esbuild.js` | Library build (CommonJS, minified, one folder per component) |
| `demo/` | Vercel-hosted demo app (excluded from the npm package) |
| root folders such as `Button/`, `Table/` | Build output — what gets published to npm |

## License

[MIT](https://choosealicense.com/licenses/mit/)
