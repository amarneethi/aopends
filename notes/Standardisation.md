# Standardised Prop Naming Conventions

## 1. Visibility / Open State

| Current | Standardised | Affected Components |
|---|---|---|
| `open` (Modal) | `open` | Modal |
| `visible` (Toast) | `open` | Toast |

---

## 2. Dismiss / Close Callback

| Current                                 | Standardised | Affected Components       |
| --------------------------------------- | ------------ | ------------------------- |
| `onClose` (Modal, Toast)                | `onClose`    | Modal, Toast              |
| `onDismiss` (Notification, Banner, Tag) | `onClose`    | Notification, Banner, Tag |

---

## 3. Close Button Visibility

| Current | Standardised | Affected Components |
|---|---|---|
| `showCloseButton` (Modal) | `closable` | Modal |
| `dismissible` (Notification, Banner, Tag) | `closable` | Notification, Banner, Tag |

---

## 4. Severity / Visual Intent

| Current | Standardised | Affected Components |
|---|---|---|
| `type` (Notification, Toast, Banner) | `intent` | Notification, Toast, Banner |
| `variant` (Button) | `variant` | Button (unchanged — `variant` here means visual style, not severity) |
| `color` (Tag) | `intent` | Tag |

> `variant` = structural/style variation (primary, secondary, ghost, outline, underline, pill).
> `intent` = semantic severity (success, warning, error, info, default, brand, danger).

---

## 5. `onChange` Callback Signature

All selection/value-change callbacks should pass `(value, meta?)` — never a raw DOM event.

| Current | Standardised Signature | Affected Components |
|---|---|---|
| `onChange(event)` (Select) | `onChange(value)` | Select |
| `onChange(value)` (Dropdown) | `onChange(value)` | Dropdown (unchanged) |
| `onChange(dateStr)` (DatePicker) | `onChange(value)` | DatePicker |
| `onChange(tabId)` (Tabs) | `onChange(value)` | Tabs |
| `onChange(fn)` (Checkbox) | `onChange(checked: boolean)` | Checkbox |
| `onChange(fn)` (Toggle) | `onChange(checked: boolean)` | Toggle |
| `onChange(val)` (Search) | `onChange(value)` | Search (unchanged) |
| `onRangeChange(start, end)` (DatePicker) | `onChange({ start, end })` | DatePicker (range mode) — single callback, value shape changes with `mode` |

---

## 6. Controlled Value Prop

| Current | Standardised | Affected Components |
|---|---|---|
| `value` (Select, Dropdown, DatePicker, Search) | `value` | Select, Dropdown, DatePicker, Search (unchanged) |
| `activeTab` (Tabs) | `value` | Tabs |
| `checked` (Checkbox, Toggle) | `checked` | Checkbox, Toggle (unchanged — boolean controls are a different pattern) |
| `currentPage` (Pagination) | `value` | Pagination |

---

## 7. Default / Uncontrolled Initial Value

| Current | Standardised | Affected Components |
|---|---|---|
| `defaultActiveTab` (Tabs) | `defaultValue` | Tabs |
| `defaultSortColumn` + `defaultSortDirection` (DataTable) | `defaultSort: { column, direction }` | DataTable |
| `defaultPageSize` (DataTable, Pagination) | `defaultPageSize` | DataTable, Pagination (unchanged) |
| _(missing)_ Checkbox, Toggle | `defaultChecked` | Checkbox, Toggle (add) |

---

## 8. List Data Prop Naming

| Current | Standardised | Affected Components |
|---|---|---|
| `options` (Select, Dropdown) | `options` | Select, Dropdown (unchanged) |
| `suggestions` (Search) | `options` | Search |
| `items` (SideNav, OverflowMenu, Breadcrumb) | `items` | SideNav, OverflowMenu, Breadcrumb (unchanged) |
| `navItems` (Header) | `items` | Header |
| `tabs` (Tabs) | `items` | Tabs |
| `columns` (DataTable) | `columns` | DataTable (unchanged) |
| `data` (DataTable) | `data` | DataTable (unchanged) |
| `pageSizeOptions` (DataTable, Pagination) | `pageSizeOptions` | DataTable, Pagination (unchanged) |

> Convention: `options` for value-selection lists. `items` for navigation/action/structural lists.

---

## 9. Option Object Shape

### Selection options (`options`)

| Current | Standardised Shape |
|---|---|
| `{ value, label }` (Select) | `{ value, label, disabled? }` |
| `{ value, label, disabled? }` (Dropdown) | `{ value, label, disabled? }` |
| `{ label, description }` (Search suggestions) | `{ value, label, description?, disabled? }` |

### Action/nav items (`items`)

| Current | Standardised Shape |
|---|---|
| `{ label, href?, icon?, onClick?, active?, badge?, children?, defaultExpanded?, divider?, }` (SideNav) | `{ label, href?, icon?, onClick?, active?, badge?, children?, expanded?, divider?, dividerLabel? }` |
| `{ label, href?, icon?, onClick?, active? }` (Header) | Same base shape as SideNav |
| `{ label, href?, icon? }` (Breadcrumb) | Same base shape |
| `{ label, icon?, onClick?, shortcut?, divider?, danger?, disabled? }` (OverflowMenu) | `{ label, icon?, onClick?, shortcut?, disabled?, danger?, divider? }` |
| `{ id, label, content?, icon?, badge?, disabled? }` (Tabs → now `items`) | `{ value, label, content?, icon?, badge?, disabled? }` — use `value` instead of `id` |

---

## 10. Divider Pattern in Item Lists

| Current | Standardised | Affected Components |
|---|---|---|
| `{ divider: true, label: 'Section' }` (SideNav) | `{ divider: true, dividerLabel?: 'Section' }` | SideNav |
| `{ divider: true }` (OverflowMenu) | `{ divider: true, dividerLabel?: string }` | OverflowMenu (add optional label support) |

---

## 11. `size` Values

| Current | Standardised | Affected Components |
|---|---|---|
| `"sm" \| "md" \| "lg"` (most components) | `"sm" \| "md" \| "lg"` | Button, TextInput, Select, Dropdown, Checkbox, Toggle, Search, DatePicker, Tag, OverflowMenu, Tabs (unchanged) |
| `"sm" \| "md" \| "lg" \| "xl" \| "full"` (Modal) | `"sm" \| "md" \| "lg" \| "xl" \| "full"` | Modal (unchanged — layout component, extended scale is justified) |
| `"sm" \| "md" \| "lg" \| "xl"` (Spinner) | `"sm" \| "md" \| "lg" \| "xl"` | Spinner (unchanged) |
| `compact` boolean (DataTable) | `size="sm" \| "md"` | DataTable — replace `compact` with `size`; `"sm"` = compact, `"md"` = default |

---

## 12. `icon` and `iconPosition`

| Current | Standardised | Affected Components |
|---|---|---|
| `icon` + `iconPosition="left" \| "right"` (Button) | `icon` + `iconPosition` | Button (unchanged) |
| `icon` always left (TextInput) | `icon` + `iconPosition` (add) | TextInput |
| `icon` (Tag, Tabs items, Breadcrumb items, SideNav items, Header items, OverflowMenu items) | `icon` | All (unchanged — position is fixed by component layout) |
| _(missing)_ (Search) | `icon` (add) | Search |

---

## 13. `wrapperClassName`

| Current | Standardised | Affected Components |
|---|---|---|
| `wrapperClassName` (TextInput, Select, Dropdown, DatePicker, Search) | `wrapperClassName` | All (unchanged) |
| _(missing)_ (Checkbox, Toggle) | `wrapperClassName` (add) | Checkbox, Toggle |

---

## 14. Pagination Callbacks

| Current | Standardised | Affected Components |
|---|---|---|
| `onPageChange(page)` (Pagination) | `onChange(page)` | Pagination |
| `onPageSizeChange(size)` (Pagination) | `onPageSizeChange(size)` | Pagination (unchanged) |

---

## 15. Search Callbacks

| Current | Standardised | Affected Components |
|---|---|---|
| `onChange(val)` (Search) | `onChange(value)` | Search (unchanged) |
| `onSearch(val)` (Search) | `onSubmit(value)` | Search — aligns with form submission semantics |
| `onClear` (Search) | `onClear` | Search (unchanged) |
| `onSuggestionSelect(suggestion)` (Search) | `onOptionSelect(option)` | Search — aligns with `options` rename |

---

## 16. DataTable Callbacks

| Current | Standardised | Affected Components |
|---|---|---|
| `onSort(column, direction)` | `onSort({ column, direction })` | DataTable — single object arg |
| `onSelectionChange(indices)` | `onSelectionChange(indices)` | DataTable (unchanged) |
| `onCellEdit(rowIndex, columnKey, newValue)` | `onCellEdit({ rowIndex, column, value })` | DataTable — single object arg |

---

## Full Standardised Prop Reference (per component)

| Component | `size` | Value prop | Default value prop | List data prop | Callback | Close/dismiss | Severity | Wrapper |
|---|---|---|---|---|---|---|---|---|
| **Button** | sm \| md \| lg | — | — | — | `onClick` | — | — (uses `variant`) | — |
| **TextInput** | sm \| md \| lg | `value` | `defaultValue` | — | `onChange(value)` | — | `errorText` / `successText` | `wrapperClassName` |
| **Select** | sm \| md \| lg | `value` | `defaultValue` | `options: { value, label, disabled? }[]` | `onChange(value)` | — | `errorText` | `wrapperClassName` |
| **Dropdown** | sm \| md \| lg | `value` | `defaultValue` | `options: { value, label, disabled? }[]` | `onChange(value)` | — | `errorText` | `wrapperClassName` |
| **Checkbox** | sm \| md \| lg | `checked` | `defaultChecked` | — | `onChange(checked)` | — | — | `wrapperClassName` |
| **Toggle** | sm \| md \| lg | `checked` | `defaultChecked` | — | `onChange(checked)` | — | — | `wrapperClassName` |
| **Search** | sm \| md \| lg | `value` | `defaultValue` | `options: { value, label, description? }[]` | `onChange(value)`, `onSubmit(value)`, `onOptionSelect(option)`, `onClear` | — | — | `wrapperClassName` |
| **DatePicker** | sm \| md \| lg | `value` | `defaultValue` | — | `onChange(value)` (single: string, range: `{ start, end }`) | — | `errorText` | `wrapperClassName` |
| **Tag** | sm \| md \| lg | — | — | — | — | `closable`, `onClose` | `intent` | — |
| **Modal** | sm–full | `open` | — | — | `onClose` | `closable`, `closeOnOverlay`, `closeOnEsc` | — | — |
| **Toast** | — | `open` | — | — | `onClose` | — | `intent` | — |
| **Notification** | — | — | — | — | `onClose` | `closable` | `intent` | — |
| **Banner** | — | — | — | — | `onClose` | `closable` | `intent` | — |
| **DataTable** | sm \| md | — | `defaultSort`, `defaultPageSize` | `columns`, `data` | `onSort({ column, direction })`, `onSelectionChange(indices)`, `onCellEdit({ rowIndex, column, value })` | — | — | — |
| **Pagination** | — | `value` | `defaultValue` | `pageSizeOptions` | `onChange(page)`, `onPageSizeChange(size)` | — | — | — |
| **Tabs** | sm \| md \| lg | `value` | `defaultValue` | `items: { value, label, content?, icon?, badge?, disabled? }[]` | `onChange(value)` | — | — | — |
| **Header** | — | — | — | `items: { label, href?, icon?, onClick?, active? }[]` | — | — | — | — |
| **SideNav** | — | `collapsed` | — | `items: { label, href?, icon?, active?, badge?, children?, expanded?, divider?, dividerLabel? }[]` | — | — | — | — |
| **Breadcrumb** | — | — | — | `items: { label, href?, icon? }[]` | — | — | — | — |
| **OverflowMenu** | sm \| md \| lg | — | — | `items: { label, icon?, onClick?, shortcut?, disabled?, danger?, divider?, dividerLabel? }[]` | — | — | — | — |
| **Spinner** | sm–xl | — | — | — | — | — | — | — |
| **Skeleton** | — | — | — | — | — | — | — | — |
| **SkeletonText** | — | — | — | — | — | — | — | — |
| **TableSkeleton** | — | — | — | — | — | — | — | — |