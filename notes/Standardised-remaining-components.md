# Standardised Props — Charts, KpiCard & List Family

---

## 1. Chart Base Props (shared by all chart components)

All six chart components (BarChart, LineChart, AreaChart, PieChart, ComposedChart, RadialChart) should share a common base prop interface.

| Prop | Type | Default | Notes |
|---|---|---|---|
| `data` | `Array<Record>` | `[]` | Chart data array |
| `height` | `number` | `300` | Chart height in px |
| `title` | `string` | `""` | Chart title |
| `subtitle` | `string` | `""` | Chart subtitle |
| `colors` | `string[]` | `SERIES_COLORS` | Color palette for series |
| `showLegend` | `boolean` | `true` | Show/hide legend |
| `showTooltip` | `boolean` | `true` | Show/hide tooltip on hover |
| `className` | `string` | `""` | Additional CSS classes |

> **Convention:** All chart data lives in `data`. All axis/series key props remain component-specific since they vary by chart type.

---

## 2. Cartesian Chart Props (BarChart, LineChart, AreaChart, ComposedChart)

These four charts plot on x/y axes and share additional props beyond the base.

| Prop | Type | Default | Notes |
|---|---|---|---|
| `xAxisKey` | `string` | — | Data key for the x-axis category |
| `dataKeys` | `string[]` | — | Data key(s) for the plotted series |
| `showGrid` | `boolean` | `true` | Show/hide grid lines |

---

## 3. Per-Chart Specific Props

### BarChart

| Current | Standardised | Change |
|---|---|---|
| `variant` | `variant` | Unchanged — `"vertical" \| "horizontal" \| "grouped" \| ...` |
| `barRadius` | `barRadius` | Unchanged |

### LineChart

| Current | Standardised | Change |
|---|---|---|
| `variant` | `variant` | Unchanged — `"single" \| "multi" \| "stepped" \| "dashed-target" \| ...` |
| `showDots` | `showDots` | Unchanged |
| `strokeWidth` | `strokeWidth` | Unchanged |
| `thresholdValue` | `thresholdValue` | Unchanged |
| `thresholdLabel` | `thresholdLabel` | Unchanged |
| `targetKey` | `targetKey` | Unchanged |

### AreaChart

| Current | Standardised | Change |
|---|---|---|
| `variant` | `variant` | Unchanged — `"single" \| "stacked" \| "stacked-percent" \| "gradient" \| "range" \| ...` |
| `strokeWidth` | `strokeWidth` | Unchanged |
| `rangeKeys` | `rangeKeys` | Unchanged |

### PieChart

| Current | Standardised | Change |
|---|---|---|
| `variant` | `variant` | Unchanged — `"standard" \| "donut" \| "semi" \| "nested"` |
| `outerData` | `outerData` | Unchanged |
| `showLabels` | `showLabels` | Unchanged |
| `centerLabel` | `centerLabel` | Unchanged |
| `centerValue` | `centerValue` | Unchanged |

> **Note:** PieChart does not use `xAxisKey`, `dataKeys`, or `showGrid` since it is not a Cartesian chart.

### ComposedChart

| Current | Standardised | Change |
|---|---|---|
| `variant` | `variant` | Unchanged — `"bar-line" \| "bar-area" \| "multi-axis"` |
| `barKeys` | `barKeys` | Unchanged |
| `lineKeys` | `lineKeys` | Unchanged |
| `areaKeys` | `areaKeys` | Unchanged |
| `barRadius` | `barRadius` | Unchanged |
| `yAxisLabel` | `yAxisLabel` | Unchanged |
| `yAxisRightLabel` | `yAxisRightLabel` | Unchanged |

> **Note:** ComposedChart uses `barKeys`/`lineKeys`/`areaKeys` instead of `dataKeys` because it plots multiple series types simultaneously. This is the one justified deviation from the shared Cartesian interface.

### RadialChart

| Current | Standardised | Change |
|---|---|---|
| `variant` | `variant` | Unchanged — `"gauge" \| "progress" \| "multi-ring" \| "radar"` |
| `value` | `value` | Unchanged |
| `maxValue` | `maxValue` | Unchanged |
| `dataKeys` | `dataKeys` | Unchanged (radar variant) |
| `label` | `centerLabel` | **Renamed** — aligns with PieChart's `centerLabel` (both render text at the centre of a radial layout) |

---

## 4. KpiCard

| Current | Standardised | Change |
|---|---|---|
| `label` | `title` | **Renamed** — aligns with chart `title` and notification `title`; all display components use `title` for their heading |
| `value` | `value` | Unchanged |
| `variant` | `variant` | Unchanged — `"simple" \| "with-trend" \| "with-delta" \| "with-progress" \| "with-icon"` |
| `trendData` | `trendData` | Unchanged |
| `trendColor` | `trendColor` | Unchanged (single-value, not an array — justified because KpiCard renders one sparkline, not multiple series) |
| `delta` | `delta` | Unchanged |
| `deltaFormat` | `deltaFormat` | Unchanged — `"percentage" \| "absolute"` |
| `deltaLabel` | `deltaLabel` | Unchanged |
| `progress` | `progress` | Unchanged |
| `target` | `target` | Unchanged |
| `progressType` | `progressType` | Unchanged — `"bar" \| "ring"` |
| `progressColor` | `progressColor` | Unchanged |
| `icon` | `icon` | Unchanged |
| `iconColor` | `iconColor` | Unchanged |
| `className` | `className` | Unchanged |

---

## 5. List Family

### 5a. Naming Convention

| Current | Standardised | Change |
|---|---|---|
| `List` (delegator) | `List` | Unchanged |
| `ActivityFeed` | `ActivityFeed` | Unchanged |
| `NotificationList` | `NotificationList` | Unchanged |
| `RankedList` | `RankedList` | Unchanged |
| `AvatarList` | `AvatarList` | Unchanged |
| `TableList` | `TableList` | Unchanged |

### 5b. Shared List Props

All list sub-components should accept these common props:

| Prop | Type | Default | Notes |
|---|---|---|---|
| `items` | `Array<Record>` | `[]` | **All list components use `items`** — not `data` |
| `maxHeight` | `string` | `undefined` | Scrollable max height; available on all list components, not just two |
| `onItemClick` | `(item) => void` | `undefined` | Click handler; available on all list components, not just two |
| `className` | `string` | `""` | Additional CSS classes |
| `emptyMessage` | `string` | `"No items"` | **Add** — shown when `items` is empty; aligns with DataTable's `emptyMessage` |

### 5c. TableList — align with DataTable conventions

| Current | Standardised | Change |
|---|---|---|
| `data` (for rows) | `items` | **Renamed** — all List family components use `items` |
| `columns` | `columns` | Unchanged |
| `sortable` | `sortable` | Unchanged |
| `defaultSortColumn` + `defaultSortDirection` | `defaultSort: { column, direction }` | **Merged** — aligns with DataTable's standardised `defaultSort` |
| `actions` | `toolbarActions` | **Renamed** — distinguishes from DataTable's `batchActions` (which are selection-dependent); `toolbarActions` are always visible |

### 5d. Per-Component Item Shapes

#### ActivityFeed

| Current item shape | Standardised item shape | Change |
|---|---|---|
| `{ content, timestamp?, color?, id? }` | `{ content, timestamp?, intent?, id? }` | **`color` → `intent`** — aligns with the system-wide severity convention (default/brand/success/warning/danger/info) instead of raw color strings |

#### NotificationList

| Current item shape | Standardised item shape | Change |
|---|---|---|
| `{ title, description?, timestamp?, severity?, unread?, id? }` | `{ title, description?, timestamp?, intent?, unread?, id? }` | **`severity` → `intent`** — same reasoning as above |

#### RankedList

| Current item shape | Standardised item shape | Change |
|---|---|---|
| `{ label, sublabel?, value?, id? }` | `{ label, sublabel?, value?, id? }` | Unchanged |

#### AvatarList

| Current item shape | Standardised item shape | Change |
|---|---|---|
| `{ name, description?, avatar?, meta?, id? }` | `{ name, description?, avatar?, meta?, id? }` | Unchanged |

---

## 6. List `variant` Delegation

| Current | Standardised | Change |
|---|---|---|
| `variant="activity-feed"` | `variant="activity-feed"` | Unchanged |
| `variant="notification"` | `variant="notification"` | Unchanged |
| `variant="ranked"` | `variant="ranked"` | Unchanged |
| `variant="with-avatar"` | `variant="avatar"` | **Simplified** — drop the `with-` prefix for consistency with the other variant names |
| `variant="with-table"` | `variant="table"` | **Simplified** — same reasoning |

---

## 7. Full Standardised Reference — Remaining Components

| Component | `data`/`items` prop | Heading prop | Severity/intent prop | Callback(s) | Key renames |
|---|---|---|---|---|---|
| **BarChart** | `data` | `title`, `subtitle` | — | — | None |
| **LineChart** | `data` | `title`, `subtitle` | — | — | None |
| **AreaChart** | `data` | `title`, `subtitle` | — | — | None |
| **PieChart** | `data` | `title`, `subtitle` | — | — | None |
| **ComposedChart** | `data` | `title`, `subtitle` | — | — | None |
| **RadialChart** | `data` | `title`, `subtitle` | — | — | `label` → `centerLabel` |
| **KpiCard** | — | `title` (was `label`) | — | — | `label` → `title` |
| **List** | — | — | — | — | `with-avatar` → `avatar`, `with-table` → `table` |
| **ActivityFeed** | `items` | — | `intent` (was `color`) | `onItemClick` (add) | `color` → `intent` |
| **NotificationList** | `items` | — | `intent` (was `severity`) | `onItemClick` | `severity` → `intent` |
| **RankedList** | `items` | — | — | `onItemClick` (add) | None |
| **AvatarList** | `items` | — | — | `onItemClick` | None |
| **TableList** | `items` (was `data`) | — | — | `onItemClick` (add) | `data` → `items`, `actions` → `toolbarActions`, `defaultSortColumn`+`defaultSortDirection` → `defaultSort` |