# aopends

A UI component library for fun.

## Install

```bash
npm install aopends
```

## Usage

```js
// layout.js
import 'aopends/styles.css'
import 'aopends/themes/light'
import { ThemeProvider } from 'aopends'

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
```

```js
// Any page — no theme imports, no useTheme, nothing
import { Button, DataTable, Modal } from 'aopends'

function MyPage() {
  return <Button variant="primary">Sign up</Button>
}
```

## Available Themes

- `aopends/themes/light`
- `aopends/themes/dark`
- `aopends/themes/high-contrast`

## Development

```bash
npm install
npm run build     # one-time build
npm run dev       # watch mode
```
