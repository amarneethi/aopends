# aopends

A UI component library for fun.

## Install

```bash
npm install aopends
```

## Usage

```js
// layout.js
import 'aopends/base.css'
import 'aopends/themes/glass'
import { ThemeProvider } from 'aopends'

export default function Layout({ children }) {
  return (
    <ThemeProvider defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}
```

```js
// Any page — no theme imports, no useTheme, nothing
import { Button, DataTable, Modal } from 'aopends'

function MyPage() {
  return <Button>Sign up</Button>
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
