"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }'use client';

// src/components/Button/Button.js
var _react = require('react');
var _lucidereact = require('lucide-react');
var variants = {
  primary: "bg-[var(--ds-bg-brand)] text-[color:var(--ds-text-on-brand)] hover:bg-[var(--ds-bg-brand-hover)] active:brightness-90",
  secondary: "bg-transparent text-[color:var(--ds-text-brand)] border border-[var(--ds-border-brand)] hover:bg-[var(--ds-bg-selected)] active:bg-[var(--ds-bg-active)]",
  tertiary: "bg-transparent text-[color:var(--ds-text-primary)] border border-[var(--ds-border-primary)] hover:bg-[var(--ds-bg-hover)] active:bg-[var(--ds-bg-active)]",
  danger: "bg-[var(--ds-bg-danger)] text-[color:var(--ds-text-on-brand)] hover:bg-[var(--ds-bg-danger-hover)] active:brightness-90",
  ghost: "bg-transparent text-[color:var(--ds-text-brand)] hover:bg-[var(--ds-bg-hover)] active:bg-[var(--ds-bg-active)]"
};
var sizes = {
  sm: "h-[var(--ds-size-sm)] px-3 text-[length:var(--ds-text-xs)] gap-1.5",
  md: "h-[var(--ds-size-md)] px-4 text-[length:var(--ds-text-sm)] gap-2",
  lg: "h-[var(--ds-size-lg)] px-6 text-[length:var(--ds-text-md)] gap-2.5"
};
var Button = _react.forwardRef.call(void 0, function Button2({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}, ref) {
  const isDisabled = disabled || loading;
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      ref,
      type,
      disabled: isDisabled,
      className: [
        "ds-focus-ring inline-flex items-center justify-center font-medium rounded-[var(--ds-radius-md)] transition-all",
        `duration-[var(--ds-duration-normal)]`,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        isDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer",
        className
      ].filter(Boolean).join(" "),
      ...props
    },
    loading && /* @__PURE__ */ React.createElement(_lucidereact.Loader2, { className: "animate-spin", size: size === "sm" ? 14 : size === "lg" ? 20 : 16 }),
    !loading && icon && iconPosition === "left" && /* @__PURE__ */ React.createElement("span", { className: "shrink-0" }, icon),
    children && /* @__PURE__ */ React.createElement(React.Fragment, null, children),
    !loading && icon && iconPosition === "right" && /* @__PURE__ */ React.createElement("span", { className: "shrink-0" }, icon)
  );
});
Button.displayName = "Button";
var Button_default = Button;

// src/components/TextInput/TextInput.js


var sizeStyles = {
  sm: "h-[var(--ds-size-sm)] text-[length:var(--ds-text-xs)] px-2.5",
  md: "h-[var(--ds-size-md)] text-[length:var(--ds-text-sm)] px-3",
  lg: "h-[var(--ds-size-lg)] text-[length:var(--ds-text-md)] px-4"
};
var TextInput = _react.forwardRef.call(void 0, function TextInput2({
  label,
  helperText,
  errorText,
  successText,
  size = "md",
  disabled = false,
  required = false,
  id: idProp,
  className = "",
  wrapperClassName = "",
  icon,
  ...props
}, ref) {
  const autoId = _react.useId.call(void 0, );
  const id = idProp || autoId;
  const hasError = !!errorText;
  const hasSuccess = !!successText;
  const stateMessage = errorText || successText || helperText;
  const stateColor = hasError ? "var(--ds-text-danger)" : hasSuccess ? "var(--ds-text-success)" : "var(--ds-text-secondary)";
  const borderColor = hasError ? "var(--ds-border-error)" : hasSuccess ? "var(--ds-border-success)" : "var(--ds-input-border)";
  return /* @__PURE__ */ React.createElement("div", { className: ["flex flex-col gap-1.5", wrapperClassName].filter(Boolean).join(" ") }, label && /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: id,
      className: "text-[length:var(--ds-text-sm)] font-medium text-[var(--ds-text-primary)]"
    },
    label,
    required && /* @__PURE__ */ React.createElement("span", { className: "text-[var(--ds-text-danger)] ml-0.5" }, "*")
  ), /* @__PURE__ */ React.createElement("div", { className: "relative" }, icon && /* @__PURE__ */ React.createElement("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ds-icon-secondary)] pointer-events-none" }, icon), /* @__PURE__ */ React.createElement(
    "input",
    {
      ref,
      id,
      disabled,
      required,
      "aria-invalid": hasError,
      "aria-describedby": stateMessage ? `${id}-message` : void 0,
      className: [
        "ds-focus-ring w-full rounded-[var(--ds-radius-md)] bg-[var(--ds-input-bg)] text-[var(--ds-text-primary)]",
        "placeholder:text-[var(--ds-text-placeholder)]",
        "transition-colors duration-[var(--ds-duration-normal)]",
        `border border-[${borderColor}]`,
        `hover:border-[var(--ds-input-border-hover)]`,
        sizeStyles[size],
        icon ? "pl-10" : "",
        disabled ? "opacity-50 cursor-not-allowed bg-[var(--ds-bg-disabled)]" : "",
        className
      ].filter(Boolean).join(" "),
      style: { borderColor },
      ...props
    }
  ), hasError && /* @__PURE__ */ React.createElement(
    _lucidereact.AlertCircle,
    {
      size: 16,
      className: "absolute right-3 top-1/2 -translate-y-1/2",
      style: { color: "var(--ds-icon-danger)" }
    }
  ), hasSuccess && !hasError && /* @__PURE__ */ React.createElement(
    _lucidereact.CheckCircle2,
    {
      size: 16,
      className: "absolute right-3 top-1/2 -translate-y-1/2",
      style: { color: "var(--ds-icon-success)" }
    }
  )), stateMessage && /* @__PURE__ */ React.createElement("p", { id: `${id}-message`, className: "text-[length:var(--ds-text-xs)]", style: { color: stateColor } }, stateMessage));
});
TextInput.displayName = "TextInput";
var TextInput_default = TextInput;

// src/components/Checkbox/Checkbox.js


var Checkbox = _react.forwardRef.call(void 0, function Checkbox2({
  label,
  checked = false,
  indeterminate = false,
  disabled = false,
  size = "md",
  onChange,
  id: idProp,
  className = "",
  ...props
}, ref) {
  const autoId = _react.useId.call(void 0, );
  const id = idProp || autoId;
  const boxSize = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5";
  const iconSize = size === "sm" ? 12 : size === "lg" ? 18 : 14;
  const isChecked = indeterminate || checked;
  return /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: id,
      className: [
        "inline-flex items-center gap-2 cursor-pointer select-none",
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className
      ].filter(Boolean).join(" ")
    },
    /* @__PURE__ */ React.createElement("span", { className: "relative inline-flex items-center justify-center" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        ref,
        type: "checkbox",
        id,
        checked,
        disabled,
        onChange,
        className: "ds-sr-only peer",
        "aria-checked": indeterminate ? "mixed" : checked,
        ...props
      }
    ), /* @__PURE__ */ React.createElement(
      "span",
      {
        className: [
          boxSize,
          "rounded-[var(--ds-radius-sm)] border-2 transition-all duration-[var(--ds-duration-normal)]",
          "flex items-center justify-center",
          isChecked ? "bg-[var(--ds-bg-brand)] border-[var(--ds-bg-brand)] text-[var(--ds-text-on-brand)]" : "bg-[var(--ds-input-bg)] border-[var(--ds-input-border)]",
          "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-[var(--ds-focus-ring-color)] peer-focus-visible:outline-offset-2"
        ].join(" ")
      },
      indeterminate ? /* @__PURE__ */ React.createElement(_lucidereact.Minus, { size: iconSize, strokeWidth: 3 }) : checked ? /* @__PURE__ */ React.createElement(_lucidereact.Check, { size: iconSize, strokeWidth: 3 }) : null
    )),
    label && /* @__PURE__ */ React.createElement("span", { className: "text-[length:var(--ds-text-sm)] text-[var(--ds-text-primary)]" }, label)
  );
});
Checkbox.displayName = "Checkbox";
var Checkbox_default = Checkbox;

// src/components/Toggle/Toggle.js

var sizes2 = {
  sm: { track: "w-8 h-4", thumb: "w-3 h-3", translate: "translate-x-4" },
  md: { track: "w-11 h-6", thumb: "w-5 h-5", translate: "translate-x-5" },
  lg: { track: "w-14 h-7", thumb: "w-6 h-6", translate: "translate-x-7" }
};
var Toggle = _react.forwardRef.call(void 0, function Toggle2({
  label,
  checked = false,
  disabled = false,
  size = "md",
  onChange,
  id: idProp,
  className = "",
  ...props
}, ref) {
  const autoId = _react.useId.call(void 0, );
  const id = idProp || autoId;
  const s = sizes2[size];
  return /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: id,
      className: [
        "inline-flex items-center gap-3 cursor-pointer select-none",
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className
      ].filter(Boolean).join(" ")
    },
    /* @__PURE__ */ React.createElement("span", { className: "relative inline-flex items-center" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        ref,
        type: "checkbox",
        role: "switch",
        id,
        checked,
        disabled,
        onChange,
        className: "ds-sr-only peer",
        ...props
      }
    ), /* @__PURE__ */ React.createElement(
      "span",
      {
        className: [
          s.track,
          "rounded-full transition-colors duration-[var(--ds-duration-normal)]",
          "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-[var(--ds-focus-ring-color)] peer-focus-visible:outline-offset-2",
          checked ? "bg-[var(--ds-bg-brand)]" : "bg-[var(--ds-border-secondary)]"
        ].join(" ")
      }
    ), /* @__PURE__ */ React.createElement(
      "span",
      {
        className: [
          s.thumb,
          "absolute left-0.5 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-sm",
          "transition-transform duration-[var(--ds-duration-normal)]",
          checked ? s.translate : "translate-x-0"
        ].join(" ")
      }
    )),
    label && /* @__PURE__ */ React.createElement("span", { className: "text-[length:var(--ds-text-sm)] text-[var(--ds-text-primary)]" }, label)
  );
});
Toggle.displayName = "Toggle";
var Toggle_default = Toggle;

// src/components/Select/Select.js


var sizeStyles2 = {
  sm: "h-[var(--ds-size-sm)] text-[length:var(--ds-text-xs)] pl-2.5 pr-8",
  md: "h-[var(--ds-size-md)] text-[length:var(--ds-text-sm)] pl-3 pr-10",
  lg: "h-[var(--ds-size-lg)] text-[length:var(--ds-text-md)] pl-4 pr-12"
};
var Select = _react.forwardRef.call(void 0, function Select2({
  label,
  options = [],
  placeholder = "Select an option",
  helperText,
  errorText,
  size = "md",
  disabled = false,
  required = false,
  id: idProp,
  className = "",
  wrapperClassName = "",
  value,
  onChange,
  ...props
}, ref) {
  const autoId = _react.useId.call(void 0, );
  const id = idProp || autoId;
  const hasError = !!errorText;
  const borderColor = hasError ? "var(--ds-border-error)" : "var(--ds-input-border)";
  return /* @__PURE__ */ React.createElement("div", { className: ["flex flex-col gap-1.5", wrapperClassName].filter(Boolean).join(" ") }, label && /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: id,
      className: "text-[length:var(--ds-text-sm)] font-medium text-[var(--ds-text-primary)]"
    },
    label,
    required && /* @__PURE__ */ React.createElement("span", { className: "text-[var(--ds-text-danger)] ml-0.5" }, "*")
  ), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
    "select",
    {
      ref,
      id,
      disabled,
      required,
      value,
      onChange,
      "aria-invalid": hasError,
      className: [
        "ds-focus-ring w-full rounded-[var(--ds-radius-md)] bg-[var(--ds-input-bg)] text-[var(--ds-text-primary)]",
        "appearance-none cursor-pointer",
        "transition-colors duration-[var(--ds-duration-normal)]",
        sizeStyles2[size],
        disabled ? "opacity-50 cursor-not-allowed bg-[var(--ds-bg-disabled)]" : "",
        className
      ].filter(Boolean).join(" "),
      style: { borderColor, border: `1px solid ${borderColor}` },
      ...props
    },
    placeholder && /* @__PURE__ */ React.createElement("option", { value: "", disabled: true }, placeholder),
    options.map((opt) => {
      const val = typeof opt === "string" ? opt : opt.value;
      const lbl = typeof opt === "string" ? opt : opt.label;
      return /* @__PURE__ */ React.createElement("option", { key: val, value: val }, lbl);
    })
  ), /* @__PURE__ */ React.createElement(
    _lucidereact.ChevronDown,
    {
      size: 16,
      className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none",
      style: { color: "var(--ds-icon-secondary)" }
    }
  )), (errorText || helperText) && /* @__PURE__ */ React.createElement(
    "p",
    {
      className: "text-[length:var(--ds-text-xs)]",
      style: { color: hasError ? "var(--ds-text-danger)" : "var(--ds-text-secondary)" }
    },
    errorText || helperText
  ));
});
Select.displayName = "Select";
var Select_default = Select;

// src/components/Tag/Tag.js


var colorMap = {
  default: {
    bg: "var(--ds-bg-tertiary)",
    text: "var(--ds-text-primary)",
    border: "var(--ds-border-primary)"
  },
  brand: {
    bg: "var(--ds-bg-selected)",
    text: "var(--ds-text-brand)",
    border: "var(--ds-border-brand)"
  },
  success: {
    bg: "var(--ds-bg-success)",
    text: "var(--ds-text-success)",
    border: "var(--ds-border-success)"
  },
  warning: {
    bg: "var(--ds-bg-warning)",
    text: "var(--ds-text-warning)",
    border: "var(--ds-border-warning)"
  },
  danger: {
    bg: "var(--ds-bg-error)",
    text: "var(--ds-text-danger)",
    border: "var(--ds-border-error)"
  },
  info: {
    bg: "var(--ds-bg-info)",
    text: "var(--ds-text-info)",
    border: "var(--ds-border-info)"
  }
};
var sizes3 = {
  sm: "h-5 text-[length:var(--ds-text-xs)] px-1.5 gap-1",
  md: "h-6 text-[length:var(--ds-text-xs)] px-2 gap-1.5",
  lg: "h-7 text-[length:var(--ds-text-sm)] px-2.5 gap-1.5"
};
var Tag = _react.forwardRef.call(void 0, function Tag2({
  children,
  color = "default",
  size = "md",
  dismissible = false,
  onDismiss,
  icon,
  outline = false,
  className = "",
  ...props
}, ref) {
  const c = colorMap[color] || colorMap.default;
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      ref,
      className: [
        "inline-flex items-center rounded-full font-medium whitespace-nowrap",
        "transition-colors duration-[var(--ds-duration-normal)]",
        sizes3[size],
        className
      ].filter(Boolean).join(" "),
      style: {
        backgroundColor: outline ? "transparent" : c.bg,
        color: c.text,
        border: outline ? `1px solid ${c.border}` : "none"
      },
      ...props
    },
    icon && /* @__PURE__ */ React.createElement("span", { className: "shrink-0 flex items-center" }, icon),
    /* @__PURE__ */ React.createElement("span", null, children),
    dismissible && /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: onDismiss,
        className: "shrink-0 rounded-full p-0.5 hover:bg-black/10 transition-colors cursor-pointer",
        "aria-label": "Remove"
      },
      /* @__PURE__ */ React.createElement(_lucidereact.X, { size: size === "sm" ? 10 : 12 })
    )
  );
});
Tag.displayName = "Tag";
var Tag_default = Tag;

// src/components/Notification/Notification.js


var typeConfig = {
  success: {
    icon: _lucidereact.CheckCircle2,
    bg: "var(--ds-bg-success)",
    border: "var(--ds-border-success)",
    iconColor: "var(--ds-icon-success)",
    text: "var(--ds-text-success)"
  },
  warning: {
    icon: _lucidereact.AlertTriangle,
    bg: "var(--ds-bg-warning)",
    border: "var(--ds-border-warning)",
    iconColor: "var(--ds-icon-warning)",
    text: "var(--ds-text-warning)"
  },
  error: {
    icon: _lucidereact.AlertCircle,
    bg: "var(--ds-bg-error)",
    border: "var(--ds-border-error)",
    iconColor: "var(--ds-icon-danger)",
    text: "var(--ds-text-danger)"
  },
  info: {
    icon: _lucidereact.Info,
    bg: "var(--ds-bg-info)",
    border: "var(--ds-border-info)",
    iconColor: "var(--ds-icon-info)",
    text: "var(--ds-text-info)"
  }
};
var Notification = _react.forwardRef.call(void 0, function Notification2({
  type = "info",
  title,
  children,
  dismissible = true,
  onDismiss,
  className = "",
  ...props
}, ref) {
  const config = typeConfig[type];
  const Icon = config.icon;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      role: "alert",
      className: [
        "flex gap-3 p-4 rounded-[var(--ds-radius-lg)] border-l-4",
        className
      ].join(" "),
      style: {
        backgroundColor: config.bg,
        borderLeftColor: config.border,
        borderTop: `1px solid ${config.border}`,
        borderRight: `1px solid ${config.border}`,
        borderBottom: `1px solid ${config.border}`
      },
      ...props
    },
    /* @__PURE__ */ React.createElement(Icon, { size: 20, className: "shrink-0 mt-0.5", style: { color: config.iconColor } }),
    /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, title && /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[length:var(--ds-text-sm)]", style: { color: config.text } }, title), children && /* @__PURE__ */ React.createElement("div", { className: "text-[length:var(--ds-text-sm)] text-[var(--ds-text-secondary)] mt-1" }, children)),
    dismissible && /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: onDismiss,
        className: "shrink-0 p-1 rounded-[var(--ds-radius-sm)] hover:bg-black/10 transition-colors cursor-pointer",
        "aria-label": "Dismiss"
      },
      /* @__PURE__ */ React.createElement(_lucidereact.X, { size: 16, style: { color: config.iconColor } })
    )
  );
});
function Toast({ type = "info", title, children, duration = 5e3, onClose, visible = true }) {
  const [show, setShow] = _react.useState.call(void 0, visible);
  const config = typeConfig[type];
  const Icon = config.icon;
  _react.useEffect.call(void 0, () => {
    setShow(visible);
    if (visible && duration > 0) {
      const timer = setTimeout(() => {
        setShow(false);
        onClose == null ? void 0 : onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration, onClose]);
  if (!show) return null;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "alert",
      className: "fixed bottom-6 right-6 max-w-sm w-full animate-in slide-in-from-right",
      style: { zIndex: "var(--ds-z-toast)" }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "flex gap-3 p-4 rounded-[var(--ds-radius-lg)] shadow-[var(--ds-shadow-lg)] border",
        style: {
          backgroundColor: "var(--ds-bg-primary)",
          borderColor: "var(--ds-border-primary)"
        }
      },
      /* @__PURE__ */ React.createElement(Icon, { size: 20, className: "shrink-0 mt-0.5", style: { color: config.iconColor } }),
      /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, title && /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[length:var(--ds-text-sm)] text-[var(--ds-text-primary)]" }, title), children && /* @__PURE__ */ React.createElement("div", { className: "text-[length:var(--ds-text-sm)] text-[var(--ds-text-secondary)] mt-1" }, children)),
      /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          onClick: () => {
            setShow(false);
            onClose == null ? void 0 : onClose();
          },
          className: "shrink-0 p-1 rounded-[var(--ds-radius-sm)] hover:bg-[var(--ds-bg-hover)] transition-colors cursor-pointer",
          "aria-label": "Close"
        },
        /* @__PURE__ */ React.createElement(_lucidereact.X, { size: 16, style: { color: "var(--ds-icon-secondary)" } })
      )
    )
  );
}
function Banner({ type = "info", children, dismissible = true, onDismiss, className = "" }) {
  const config = typeConfig[type];
  const Icon = config.icon;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "alert",
      className: ["flex items-center gap-3 px-4 py-3", className].join(" "),
      style: {
        backgroundColor: config.bg,
        borderBottom: `1px solid ${config.border}`
      }
    },
    /* @__PURE__ */ React.createElement(Icon, { size: 18, className: "shrink-0", style: { color: config.iconColor } }),
    /* @__PURE__ */ React.createElement("div", { className: "flex-1 text-[length:var(--ds-text-sm)]", style: { color: config.text } }, children),
    dismissible && /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: onDismiss,
        className: "shrink-0 p-1 rounded-[var(--ds-radius-sm)] hover:bg-black/10 transition-colors cursor-pointer",
        "aria-label": "Dismiss"
      },
      /* @__PURE__ */ React.createElement(_lucidereact.X, { size: 16, style: { color: config.iconColor } })
    )
  );
}
Notification.displayName = "Notification";
Toast.displayName = "Toast";
Banner.displayName = "Banner";
var Notification_default = Notification;

// src/components/Loading/Loading.js


var Spinner = _react.forwardRef.call(void 0, function Spinner2({ size = "md", label = "Loading...", className = "", ...props }, ref) {
  const sizes4 = { sm: 16, md: 24, lg: 32, xl: 48 };
  const px = sizes4[size] || sizes4.md;
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      ref,
      role: "status",
      className: ["inline-flex items-center gap-2", className].join(" "),
      ...props
    },
    /* @__PURE__ */ React.createElement(
      _lucidereact.Loader2,
      {
        size: px,
        className: "animate-spin",
        style: { color: "var(--ds-icon-brand)" }
      }
    ),
    label && /* @__PURE__ */ React.createElement("span", { className: "ds-sr-only" }, label)
  );
});
var Skeleton = _react.forwardRef.call(void 0, function Skeleton2({ width, height, variant = "rectangular", className = "", style: styleProp = {}, ...props }, ref) {
  const radiusMap = {
    rectangular: "var(--ds-radius-md)",
    circular: "50%",
    text: "var(--ds-radius-sm)"
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      className: ["animate-pulse", className].join(" "),
      style: {
        width: width || "100%",
        height: height || (variant === "text" ? "1em" : "100%"),
        backgroundColor: "var(--ds-bg-tertiary)",
        borderRadius: radiusMap[variant],
        ...styleProp
      },
      ...props
    }
  );
});
function SkeletonText({ lines = 3, className = "" }) {
  return /* @__PURE__ */ React.createElement("div", { className: ["flex flex-col gap-2", className].join(" ") }, Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ React.createElement(
    Skeleton,
    {
      key: i,
      variant: "text",
      height: "0.875rem",
      width: i === lines - 1 ? "60%" : "100%"
    }
  )));
}
function TableSkeleton({ rows = 5, columns = 4, className = "" }) {
  return /* @__PURE__ */ React.createElement("div", { className: ["w-full", className].join(" ") }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "grid gap-4 p-4 border-b",
      style: {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        borderColor: "var(--ds-table-border)"
      }
    },
    Array.from({ length: columns }).map((_, i) => /* @__PURE__ */ React.createElement(Skeleton, { key: i, variant: "text", height: "0.75rem", width: "70%" }))
  ), Array.from({ length: rows }).map((_, rowIdx) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: rowIdx,
      className: "grid gap-4 p-4 border-b",
      style: {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        borderColor: "var(--ds-table-border)"
      }
    },
    Array.from({ length: columns }).map((_2, colIdx) => /* @__PURE__ */ React.createElement(
      Skeleton,
      {
        key: colIdx,
        variant: "text",
        height: "0.875rem",
        width: `${60 + ((rowIdx * columns + colIdx) * 17 + 7) % 30}%`
      }
    ))
  )));
}
Spinner.displayName = "Spinner";
Skeleton.displayName = "Skeleton";
SkeletonText.displayName = "SkeletonText";
TableSkeleton.displayName = "TableSkeleton";

// src/components/Header/Header.js

var Header = _react.forwardRef.call(void 0, function Header2({
  logo,
  productName = "Product",
  navItems = [],
  actions,
  className = "",
  ...props
}, ref) {
  return /* @__PURE__ */ React.createElement(
    "header",
    {
      ref,
      className: [
        "flex items-center h-14 px-4 border-b shrink-0",
        "bg-[var(--ds-header-bg)] border-[var(--ds-header-border)]",
        className
      ].join(" "),
      style: { zIndex: "var(--ds-z-fixed)" },
      ...props
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 mr-8" }, logo && /* @__PURE__ */ React.createElement("span", { className: "shrink-0" }, logo), /* @__PURE__ */ React.createElement("span", { className: "text-[length:var(--ds-text-md)] font-semibold text-[var(--ds-text-primary)] whitespace-nowrap" }, productName)),
    /* @__PURE__ */ React.createElement("nav", { className: "hidden md:flex items-center gap-1 flex-1" }, navItems.map((item) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: item.label,
        href: item.href || "#",
        onClick: item.onClick,
        className: [
          "ds-focus-ring px-3 py-1.5 rounded-[var(--ds-radius-md)] text-[length:var(--ds-text-sm)] font-medium",
          "transition-colors duration-[var(--ds-duration-normal)]",
          item.active ? "bg-[var(--ds-bg-selected)] text-[var(--ds-text-brand)]" : "text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)] hover:bg-[var(--ds-bg-hover)]"
        ].join(" ")
      },
      item.icon && /* @__PURE__ */ React.createElement("span", { className: "mr-1.5 inline-flex" }, item.icon),
      item.label
    ))),
    actions && /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 ml-auto" }, actions)
  );
});
Header.displayName = "Header";
var Header_default = Header;

// src/components/SideNav/SideNav.js


function NavItem({ item, collapsed, depth = 0 }) {
  const [expanded, setExpanded] = _react.useState.call(void 0, item.defaultExpanded || false);
  const hasChildren = item.children && item.children.length > 0;
  const handleClick = (e) => {
    var _a;
    if (hasChildren) {
      e.preventDefault();
      setExpanded(!expanded);
    }
    (_a = item.onClick) == null ? void 0 : _a.call(item, e);
  };
  return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: item.href || "#",
      onClick: handleClick,
      title: collapsed ? item.label : void 0,
      className: [
        "ds-focus-ring flex items-center gap-3 px-3 py-2 rounded-[var(--ds-radius-md)] text-[length:var(--ds-text-sm)]",
        "transition-colors duration-[var(--ds-duration-normal)] cursor-pointer",
        item.active ? "bg-[var(--ds-sidebar-active)] text-[color:var(--ds-sidebar-text-active)] font-medium" : "text-[color:var(--ds-sidebar-text)] hover:bg-[var(--ds-sidebar-hover)] hover:text-[color:var(--ds-sidebar-text-active)]"
      ].join(" "),
      style: { paddingLeft: collapsed ? void 0 : `${12 + depth * 12}px` }
    },
    item.icon && /* @__PURE__ */ React.createElement("span", { className: "shrink-0 w-5 h-5 flex items-center justify-center" }, item.icon),
    !collapsed && /* @__PURE__ */ React.createElement("span", { className: "flex-1 truncate" }, item.label),
    !collapsed && item.badge && /* @__PURE__ */ React.createElement(
      "span",
      {
        className: "text-[length:var(--ds-text-xs)] px-1.5 py-0.5 rounded-full font-medium",
        style: {
          backgroundColor: "var(--ds-bg-brand)",
          color: "var(--ds-text-on-brand)"
        }
      },
      item.badge
    ),
    !collapsed && hasChildren && /* @__PURE__ */ React.createElement("span", { className: "shrink-0" }, expanded ? /* @__PURE__ */ React.createElement(_lucidereact.ChevronDown, { size: 14 }) : /* @__PURE__ */ React.createElement(_lucidereact.ChevronRight, { size: 14 }))
  ), !collapsed && hasChildren && expanded && /* @__PURE__ */ React.createElement("ul", { className: "mt-0.5" }, item.children.map((child) => /* @__PURE__ */ React.createElement(NavItem, { key: child.label, item: child, collapsed, depth: depth + 1 }))));
}
var SideNav = _react.forwardRef.call(void 0, function SideNav2({
  items = [],
  header,
  footer,
  collapsed = false,
  className = "",
  ...props
}, ref) {
  return /* @__PURE__ */ React.createElement(
    "aside",
    {
      ref,
      className: [
        "flex flex-col h-full shrink-0 bg-[var(--ds-sidebar-bg)] ds-scrollbar overflow-y-auto",
        "transition-[width] duration-[var(--ds-duration-slow)]",
        collapsed ? "w-16" : "w-60",
        className
      ].join(" "),
      ...props
    },
    header && /* @__PURE__ */ React.createElement("div", { className: "p-3 border-b shrink-0", style: { borderColor: "var(--ds-sidebar-border)" } }, header),
    /* @__PURE__ */ React.createElement("nav", { className: "flex-1 p-2" }, /* @__PURE__ */ React.createElement("ul", { className: "flex flex-col gap-0.5" }, items.map((item) => {
      if (item.divider) {
        return /* @__PURE__ */ React.createElement("li", { key: item.label || "divider", className: "my-2" }, !collapsed && item.label && /* @__PURE__ */ React.createElement("span", { className: "px-3 text-[length:11px] font-semibold uppercase tracking-[var(--ds-tracking-widest)] text-[color:var(--ds-sidebar-text)] opacity-80" }, item.label), /* @__PURE__ */ React.createElement("div", { className: "mt-1 border-t", style: { borderColor: "var(--ds-sidebar-border)" } }));
      }
      return /* @__PURE__ */ React.createElement(NavItem, { key: item.label, item, collapsed });
    }))),
    footer && /* @__PURE__ */ React.createElement("div", { className: "p-3 border-t shrink-0", style: { borderColor: "var(--ds-sidebar-border)" } }, footer)
  );
});
SideNav.displayName = "SideNav";
var SideNav_default = SideNav;

// src/components/Breadcrumb/Breadcrumb.js


var Breadcrumb = _react.forwardRef.call(void 0, function Breadcrumb2({ items = [], separator, className = "", ...props }, ref) {
  const SeparatorIcon = separator || /* @__PURE__ */ React.createElement(_lucidereact.ChevronRight, { size: 14, style: { color: "var(--ds-text-tertiary)" } });
  return /* @__PURE__ */ React.createElement("nav", { ref, "aria-label": "Breadcrumb", className, ...props }, /* @__PURE__ */ React.createElement("ol", { className: "flex items-center gap-1.5 flex-wrap" }, items.map((item, index) => {
    const isLast = index === items.length - 1;
    return /* @__PURE__ */ React.createElement("li", { key: item.label, className: "flex items-center gap-1.5" }, isLast ? /* @__PURE__ */ React.createElement(
      "span",
      {
        className: "text-[length:var(--ds-text-sm)] font-medium text-[var(--ds-text-primary)]",
        "aria-current": "page"
      },
      item.icon && /* @__PURE__ */ React.createElement("span", { className: "mr-1 inline-flex align-text-bottom" }, item.icon),
      item.label
    ) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      "a",
      {
        href: item.href || "#",
        onClick: item.onClick,
        className: "ds-focus-ring text-[length:var(--ds-text-sm)] text-[var(--ds-text-link)] hover:text-[var(--ds-text-link-hover)] hover:underline transition-colors"
      },
      item.icon && /* @__PURE__ */ React.createElement("span", { className: "mr-1 inline-flex align-text-bottom" }, item.icon),
      item.label
    ), /* @__PURE__ */ React.createElement("span", { className: "flex items-center", "aria-hidden": "true" }, SeparatorIcon)));
  })));
});
Breadcrumb.displayName = "Breadcrumb";
var Breadcrumb_default = Breadcrumb;

// src/components/Tabs/Tabs.js

var Tabs = _react.forwardRef.call(void 0, function Tabs2({
  tabs = [],
  defaultActiveTab,
  activeTab: controlledActiveTab,
  onChange,
  variant = "underline",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}, ref) {
  var _a;
  const baseId = _react.useId.call(void 0, );
  const [internalTab, setInternalTab] = _react.useState.call(void 0, defaultActiveTab || ((_a = tabs[0]) == null ? void 0 : _a.id));
  const activeTab = _nullishCoalesce(controlledActiveTab, () => ( internalTab));
  const handleTabClick = (tabId) => {
    setInternalTab(tabId);
    onChange == null ? void 0 : onChange(tabId);
  };
  const sizeClasses = {
    sm: "text-[length:var(--ds-text-xs)] px-3 py-1.5",
    md: "text-[length:var(--ds-text-sm)] px-4 py-2",
    lg: "text-[length:var(--ds-text-md)] px-5 py-2.5"
  };
  const activeContent = tabs.find((t) => t.id === activeTab);
  return /* @__PURE__ */ React.createElement("div", { ref, className, ...props }, /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "tablist",
      className: [
        "flex",
        variant === "underline" ? "border-b border-[var(--ds-border-primary)]" : "gap-1 p-1 bg-[var(--ds-bg-tertiary)] rounded-[var(--ds-radius-lg)]"
      ].join(" ")
    },
    tabs.map((tab) => {
      const isActive = tab.id === activeTab;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: tab.id,
          role: "tab",
          type: "button",
          id: `${baseId}-tab-${tab.id}`,
          "aria-selected": isActive,
          "aria-controls": `${baseId}-panel-${tab.id}`,
          disabled: tab.disabled,
          onClick: () => handleTabClick(tab.id),
          className: [
            "ds-focus-ring font-medium transition-all duration-[var(--ds-duration-normal)] whitespace-nowrap cursor-pointer",
            sizeClasses[size],
            fullWidth ? "flex-1" : "",
            tab.disabled ? "opacity-40 cursor-not-allowed" : "",
            variant === "underline" ? [
              "-mb-px border-b-2",
              isActive ? "border-[var(--ds-border-brand)] text-[var(--ds-text-brand)]" : "border-transparent text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)] hover:border-[var(--ds-border-secondary)]"
            ].join(" ") : [
              "rounded-[var(--ds-radius-md)]",
              isActive ? "bg-[var(--ds-bg-primary)] text-[var(--ds-text-primary)] shadow-[var(--ds-shadow-xs)]" : "text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)]"
            ].join(" ")
          ].filter(Boolean).join(" ")
        },
        tab.icon && /* @__PURE__ */ React.createElement("span", { className: "mr-1.5 inline-flex align-text-bottom" }, tab.icon),
        tab.label,
        tab.badge !== void 0 && /* @__PURE__ */ React.createElement(
          "span",
          {
            className: "ml-2 text-[length:var(--ds-text-xs)] px-1.5 py-0.5 rounded-full",
            style: {
              backgroundColor: isActive ? "var(--ds-bg-brand)" : "var(--ds-bg-tertiary)",
              color: isActive ? "var(--ds-text-on-brand)" : "var(--ds-text-secondary)"
            }
          },
          tab.badge
        )
      );
    })
  ), activeContent && /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "tabpanel",
      id: `${baseId}-panel-${activeContent.id}`,
      "aria-labelledby": `${baseId}-tab-${activeContent.id}`,
      className: "pt-4"
    },
    activeContent.content
  ));
});
Tabs.displayName = "Tabs";
var Tabs_default = Tabs;

// src/components/Modal/Modal.js


var _reactdom = require('react-dom');
var sizeMap = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-[90vw]"
};
var Modal = _react.forwardRef.call(void 0, function Modal2({
  open = false,
  onClose,
  title,
  children,
  footer,
  size = "md",
  closeOnOverlay = true,
  closeOnEsc = true,
  showCloseButton = true,
  className = "",
  ...props
}, ref) {
  const overlayRef = _react.useRef.call(void 0, null);
  const handleEsc = _react.useCallback.call(void 0, 
    (e) => {
      if (e.key === "Escape" && closeOnEsc) {
        onClose == null ? void 0 : onClose();
      }
    },
    [closeOnEsc, onClose]
  );
  _react.useEffect.call(void 0, () => {
    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleEsc);
        document.body.style.overflow = "";
      };
    }
  }, [open, handleEsc]);
  if (!open) return null;
  const modal = /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: overlayRef,
      className: "fixed inset-0 flex items-center justify-center p-4",
      style: {
        zIndex: "var(--ds-z-modal)",
        backgroundColor: "var(--ds-bg-overlay)"
      },
      onClick: (e) => {
        if (closeOnOverlay && e.target === overlayRef.current) {
          onClose == null ? void 0 : onClose();
        }
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        ref,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": title ? "modal-title" : void 0,
        className: [
          "w-full rounded-[var(--ds-radius-xl)] shadow-[var(--ds-shadow-xl)] flex flex-col max-h-[85vh]",
          "bg-[var(--ds-bg-primary)] border border-[var(--ds-border-primary)]",
          sizeMap[size],
          className
        ].join(" "),
        ...props
      },
      (title || showCloseButton) && /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between px-6 py-4 border-b border-[var(--ds-border-primary)] shrink-0" }, title && /* @__PURE__ */ React.createElement(
        "h2",
        {
          id: "modal-title",
          className: "text-[length:var(--ds-text-lg)] font-semibold text-[var(--ds-text-primary)]"
        },
        title
      ), showCloseButton && /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          onClick: onClose,
          className: "ds-focus-ring p-1.5 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors ml-auto cursor-pointer",
          "aria-label": "Close dialog"
        },
        /* @__PURE__ */ React.createElement(_lucidereact.X, { size: 18, style: { color: "var(--ds-icon-secondary)" } })
      )),
      /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto px-6 py-4 ds-scrollbar" }, children),
      footer && /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-end gap-3 px-6 py-4 border-t border-[var(--ds-border-primary)] shrink-0" }, footer)
    )
  );
  if (typeof window === "undefined") return null;
  return _reactdom.createPortal.call(void 0, modal, document.body);
});
Modal.displayName = "Modal";
var Modal_default = Modal;

// src/components/Dropdown/Dropdown.js


var sizeStyles3 = {
  sm: "h-[var(--ds-size-sm)] text-[length:var(--ds-text-xs)] pl-2.5 pr-8",
  md: "h-[var(--ds-size-md)] text-[length:var(--ds-text-sm)] pl-3 pr-10",
  lg: "h-[var(--ds-size-lg)] text-[length:var(--ds-text-md)] pl-4 pr-12"
};
var Dropdown = _react.forwardRef.call(void 0, function Dropdown2({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  size = "md",
  disabled = false,
  required = false,
  errorText,
  helperText,
  id: idProp,
  className = "",
  wrapperClassName = "",
  ...props
}, ref) {
  const autoId = _react.useId.call(void 0, );
  const id = idProp || autoId;
  const [isOpen, setIsOpen] = _react.useState.call(void 0, false);
  const containerRef = _react.useRef.call(void 0, null);
  const selectedOption = options.find((o) => (typeof o === "string" ? o : o.value) === value);
  const selectedLabel = selectedOption ? typeof selectedOption === "string" ? selectedOption : selectedOption.label : "";
  _react.useEffect.call(void 0, () => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);
  const handleSelect = (optValue) => {
    onChange == null ? void 0 : onChange(optValue);
    setIsOpen(false);
  };
  const hasError = !!errorText;
  const borderColor = hasError ? "var(--ds-border-error)" : "var(--ds-input-border)";
  return /* @__PURE__ */ React.createElement("div", { ref: containerRef, className: ["flex flex-col gap-1.5 relative", wrapperClassName].join(" ") }, label && /* @__PURE__ */ React.createElement(
    "label",
    {
      htmlFor: id,
      className: "text-[length:var(--ds-text-sm)] font-medium text-[var(--ds-text-primary)]"
    },
    label,
    required && /* @__PURE__ */ React.createElement("span", { className: "text-[var(--ds-text-danger)] ml-0.5" }, "*")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      ref,
      type: "button",
      id,
      disabled,
      onClick: () => !disabled && setIsOpen(!isOpen),
      className: [
        "ds-focus-ring w-full rounded-[var(--ds-radius-md)] bg-[var(--ds-input-bg)] text-left",
        "transition-colors duration-[var(--ds-duration-normal)] relative cursor-pointer",
        sizeStyles3[size],
        disabled ? "opacity-50 cursor-not-allowed bg-[var(--ds-bg-disabled)]" : "",
        selectedLabel ? "text-[var(--ds-text-primary)]" : "text-[var(--ds-text-placeholder)]",
        className
      ].filter(Boolean).join(" "),
      style: { border: `1px solid ${borderColor}` },
      "aria-haspopup": "listbox",
      "aria-expanded": isOpen,
      ...props
    },
    /* @__PURE__ */ React.createElement("span", { className: "block truncate" }, selectedLabel || placeholder),
    /* @__PURE__ */ React.createElement(
      _lucidereact.ChevronDown,
      {
        size: 16,
        className: [
          "absolute right-3 top-1/2 -translate-y-1/2 transition-transform",
          isOpen ? "rotate-180" : ""
        ].join(" "),
        style: { color: "var(--ds-icon-secondary)" }
      }
    )
  ), isOpen && /* @__PURE__ */ React.createElement(
    "ul",
    {
      role: "listbox",
      className: "absolute top-full left-0 right-0 mt-1 py-1 rounded-[var(--ds-radius-lg)] border overflow-auto max-h-60 ds-scrollbar",
      style: {
        zIndex: "var(--ds-z-dropdown)",
        backgroundColor: "var(--ds-bg-primary)",
        borderColor: "var(--ds-border-primary)",
        boxShadow: "var(--ds-shadow-lg)"
      }
    },
    options.map((opt) => {
      const optValue = typeof opt === "string" ? opt : opt.value;
      const optLabel = typeof opt === "string" ? opt : opt.label;
      const optDisabled = typeof opt === "object" && opt.disabled;
      const isSelected = optValue === value;
      return /* @__PURE__ */ React.createElement(
        "li",
        {
          key: optValue,
          role: "option",
          "aria-selected": isSelected,
          onClick: () => !optDisabled && handleSelect(optValue),
          className: [
            "flex items-center gap-2 px-3 py-2 text-[length:var(--ds-text-sm)] cursor-pointer",
            "transition-colors duration-[var(--ds-duration-fast)]",
            isSelected ? "bg-[var(--ds-bg-selected)] text-[var(--ds-text-brand)] font-medium" : "text-[var(--ds-text-primary)]",
            optDisabled ? "opacity-40 cursor-not-allowed" : "hover:bg-[var(--ds-bg-hover)]"
          ].join(" ")
        },
        /* @__PURE__ */ React.createElement("span", { className: "flex-1 truncate" }, optLabel),
        isSelected && /* @__PURE__ */ React.createElement(_lucidereact.Check, { size: 16, style: { color: "var(--ds-icon-brand)" } })
      );
    }),
    options.length === 0 && /* @__PURE__ */ React.createElement("li", { className: "px-3 py-2 text-[length:var(--ds-text-sm)] text-[var(--ds-text-tertiary)]" }, "No options available")
  ), (errorText || helperText) && /* @__PURE__ */ React.createElement(
    "p",
    {
      className: "text-[length:var(--ds-text-xs)]",
      style: { color: hasError ? "var(--ds-text-danger)" : "var(--ds-text-secondary)" }
    },
    errorText || helperText
  ));
});
Dropdown.displayName = "Dropdown";
var Dropdown_default = Dropdown;

// src/components/OverflowMenu/OverflowMenu.js


var OverflowMenu = _react.forwardRef.call(void 0, function OverflowMenu2({
  items = [],
  trigger,
  align = "right",
  size = "md",
  className = "",
  ...props
}, ref) {
  const [isOpen, setIsOpen] = _react.useState.call(void 0, false);
  const containerRef = _react.useRef.call(void 0, null);
  _react.useEffect.call(void 0, () => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);
  const handleItemClick = (item) => {
    var _a;
    if (!item.disabled) {
      (_a = item.onClick) == null ? void 0 : _a.call(item);
      setIsOpen(false);
    }
  };
  const iconSize = size === "sm" ? 16 : size === "lg" ? 24 : 20;
  return /* @__PURE__ */ React.createElement("div", { ref: containerRef, className: ["relative inline-flex", className].join(" "), ...props }, trigger ? /* @__PURE__ */ React.createElement("span", { onClick: () => setIsOpen(!isOpen), className: "cursor-pointer" }, trigger) : /* @__PURE__ */ React.createElement(
    "button",
    {
      ref,
      type: "button",
      onClick: () => setIsOpen(!isOpen),
      className: "ds-focus-ring p-1.5 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors cursor-pointer",
      "aria-label": "More actions",
      "aria-haspopup": "menu",
      "aria-expanded": isOpen
    },
    /* @__PURE__ */ React.createElement(_lucidereact.MoreVertical, { size: iconSize, style: { color: "var(--ds-icon-secondary)" } })
  ), isOpen && /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "menu",
      className: [
        "absolute top-full mt-1 min-w-[160px] py-1 rounded-[var(--ds-radius-lg)] border",
        align === "right" ? "right-0" : "left-0"
      ].join(" "),
      style: {
        zIndex: "var(--ds-z-dropdown)",
        backgroundColor: "var(--ds-bg-primary)",
        borderColor: "var(--ds-border-primary)",
        boxShadow: "var(--ds-shadow-lg)"
      }
    },
    items.map((item, idx) => {
      if (item.divider) {
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            key: `divider-${idx}`,
            className: "my-1 border-t",
            style: { borderColor: "var(--ds-border-primary)" }
          }
        );
      }
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: item.label,
          type: "button",
          role: "menuitem",
          disabled: item.disabled,
          onClick: () => handleItemClick(item),
          className: [
            "flex items-center gap-2 w-full px-3 py-2 text-[length:var(--ds-text-sm)] text-left",
            "transition-colors duration-[var(--ds-duration-fast)] cursor-pointer",
            item.danger ? "text-[var(--ds-text-danger)]" : "text-[var(--ds-text-primary)]",
            item.disabled ? "opacity-40 cursor-not-allowed" : item.danger ? "hover:bg-[var(--ds-bg-error)]" : "hover:bg-[var(--ds-bg-hover)]"
          ].join(" ")
        },
        item.icon && /* @__PURE__ */ React.createElement("span", { className: "shrink-0 w-4 h-4 flex items-center justify-center" }, item.icon),
        /* @__PURE__ */ React.createElement("span", { className: "flex-1" }, item.label),
        item.shortcut && /* @__PURE__ */ React.createElement("span", { className: "text-[length:var(--ds-text-xs)] text-[var(--ds-text-tertiary)]" }, item.shortcut)
      );
    })
  ));
});
OverflowMenu.displayName = "OverflowMenu";
var OverflowMenu_default = OverflowMenu;

// src/components/DatePicker/DatePicker.js


var DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}
function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function isSameDay(a, b) {
  if (!a || !b) return false;
  const da = new Date(a);
  const db = new Date(b);
  return da.getFullYear() === db.getFullYear() && da.getMonth() === db.getMonth() && da.getDate() === db.getDate();
}
var DatePicker = _react.forwardRef.call(void 0, function DatePicker2({
  label,
  value,
  onChange,
  rangeEnd,
  onRangeChange,
  mode = "single",
  placeholder = "Select date",
  disabled = false,
  required = false,
  errorText,
  helperText,
  min,
  max,
  size = "md",
  id: idProp,
  className = "",
  wrapperClassName = "",
  ...props
}, ref) {
  const autoId = _react.useId.call(void 0, );
  const id = idProp || autoId;
  const [isOpen, setIsOpen] = _react.useState.call(void 0, false);
  const containerRef = _react.useRef.call(void 0, null);
  const today = _react.useMemo.call(void 0, () => /* @__PURE__ */ new Date(), []);
  const initialDate = value ? new Date(value) : today;
  const [viewYear, setViewYear] = _react.useState.call(void 0, initialDate.getFullYear());
  const [viewMonth, setViewMonth] = _react.useState.call(void 0, initialDate.getMonth());
  const [hoverDate, setHoverDate] = _react.useState.call(void 0, null);
  const [rangeStart, setRangeStart] = _react.useState.call(void 0, value || null);
  const [rangeEndInternal, setRangeEndInternal] = _react.useState.call(void 0, rangeEnd || null);
  _react.useEffect.call(void 0, () => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);
  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  const prevMonth = _react.useCallback.call(void 0, () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }, [viewMonth]);
  const nextMonth = _react.useCallback.call(void 0, () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }, [viewMonth]);
  const handleDayClick = (day) => {
    const selected = new Date(viewYear, viewMonth, day);
    if (min && selected < new Date(min)) return;
    if (max && selected > new Date(max)) return;
    if (mode === "range") {
      if (!rangeStart || rangeEndInternal) {
        setRangeStart(selected);
        setRangeEndInternal(null);
        onChange == null ? void 0 : onChange(formatDate(selected));
        onRangeChange == null ? void 0 : onRangeChange(formatDate(selected), null);
      } else {
        const end = selected < rangeStart ? rangeStart : selected;
        const start = selected < rangeStart ? selected : rangeStart;
        setRangeStart(start);
        setRangeEndInternal(end);
        onChange == null ? void 0 : onChange(formatDate(start));
        onRangeChange == null ? void 0 : onRangeChange(formatDate(start), formatDate(end));
        setIsOpen(false);
      }
    } else {
      onChange == null ? void 0 : onChange(formatDate(selected));
      setIsOpen(false);
    }
  };
  const isInRange = (day) => {
    if (mode !== "range") return false;
    const d = new Date(viewYear, viewMonth, day);
    const s = rangeStart ? new Date(rangeStart) : null;
    const e = rangeEndInternal ? new Date(rangeEndInternal) : hoverDate ? new Date(hoverDate) : null;
    if (!s || !e) return false;
    const start = s < e ? s : e;
    const end = s < e ? e : s;
    return d > start && d < end;
  };
  const isDisabledDay = (day) => {
    const d = new Date(viewYear, viewMonth, day);
    if (min && d < new Date(min)) return true;
    if (max && d > new Date(max)) return true;
    return false;
  };
  const displayValue = mode === "range" && value && rangeEndInternal ? `${value} \u2192 ${formatDate(rangeEndInternal)}` : value || "";
  const hasError = !!errorText;
  const borderColor = hasError ? "var(--ds-border-error)" : "var(--ds-input-border)";
  const sizeClasses = {
    sm: "h-[var(--ds-size-sm)] text-[length:var(--ds-text-xs)] pl-2.5 pr-8",
    md: "h-[var(--ds-size-md)] text-[length:var(--ds-text-sm)] pl-3 pr-10",
    lg: "h-[var(--ds-size-lg)] text-[length:var(--ds-text-md)] pl-4 pr-12"
  };
  return /* @__PURE__ */ React.createElement("div", { ref: containerRef, className: ["flex flex-col gap-1.5 relative", wrapperClassName].join(" ") }, label && /* @__PURE__ */ React.createElement("label", { htmlFor: id, className: "text-[length:var(--ds-text-sm)] font-medium text-[var(--ds-text-primary)]" }, label, required && /* @__PURE__ */ React.createElement("span", { className: "text-[var(--ds-text-danger)] ml-0.5" }, "*")), /* @__PURE__ */ React.createElement(
    "button",
    {
      ref,
      type: "button",
      id,
      disabled,
      onClick: () => !disabled && setIsOpen(!isOpen),
      className: [
        "ds-focus-ring w-full rounded-[var(--ds-radius-md)] bg-[var(--ds-input-bg)] text-left relative cursor-pointer",
        "transition-colors duration-[var(--ds-duration-normal)]",
        sizeClasses[size],
        disabled ? "opacity-50 cursor-not-allowed" : "",
        displayValue ? "text-[var(--ds-text-primary)]" : "text-[var(--ds-text-placeholder)]",
        className
      ].join(" "),
      style: { border: `1px solid ${borderColor}` },
      ...props
    },
    /* @__PURE__ */ React.createElement("span", { className: "block truncate" }, displayValue || placeholder),
    /* @__PURE__ */ React.createElement(
      _lucidereact.Calendar,
      {
        size: 16,
        className: "absolute right-3 top-1/2 -translate-y-1/2",
        style: { color: "var(--ds-icon-secondary)" }
      }
    )
  ), isOpen && /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "absolute top-full left-0 mt-1 p-3 rounded-[var(--ds-radius-lg)] border w-[280px]",
      style: {
        zIndex: "var(--ds-z-dropdown)",
        backgroundColor: "var(--ds-bg-primary)",
        borderColor: "var(--ds-border-primary)",
        boxShadow: "var(--ds-shadow-lg)"
      }
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-3" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: prevMonth,
        className: "p-1 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors cursor-pointer"
      },
      /* @__PURE__ */ React.createElement(_lucidereact.ChevronLeft, { size: 16, style: { color: "var(--ds-icon-primary)" } })
    ), /* @__PURE__ */ React.createElement("span", { className: "text-[length:var(--ds-text-sm)] font-semibold text-[var(--ds-text-primary)]" }, MONTHS[viewMonth], " ", viewYear), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: nextMonth,
        className: "p-1 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors cursor-pointer"
      },
      /* @__PURE__ */ React.createElement(_lucidereact.ChevronRight, { size: 16, style: { color: "var(--ds-icon-primary)" } })
    )),
    /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-7 gap-0 mb-1" }, DAYS.map((d) => /* @__PURE__ */ React.createElement("div", { key: d, className: "text-center text-[11px] font-medium text-[var(--ds-text-tertiary)] py-1" }, d))),
    /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-7 gap-0" }, Array.from({ length: firstDay }).map((_, i) => /* @__PURE__ */ React.createElement("div", { key: `empty-${i}` })), Array.from({ length: daysInMonth }).map((_, i) => {
      const day = i + 1;
      const dateObj = new Date(viewYear, viewMonth, day);
      const isSelected = isSameDay(dateObj, value) || isSameDay(dateObj, rangeEndInternal);
      const isToday = isSameDay(dateObj, today);
      const inRange = isInRange(day);
      const dayDisabled = isDisabledDay(day);
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: day,
          type: "button",
          disabled: dayDisabled,
          onClick: () => handleDayClick(day),
          onMouseEnter: () => mode === "range" && rangeStart && !rangeEndInternal && setHoverDate(dateObj),
          className: [
            "w-9 h-9 text-[length:var(--ds-text-sm)] rounded-[var(--ds-radius-md)] transition-colors cursor-pointer",
            isSelected ? "bg-[var(--ds-bg-brand)] text-[var(--ds-text-on-brand)] font-semibold" : inRange ? "bg-[var(--ds-bg-selected)] text-[var(--ds-text-brand)]" : isToday ? "font-semibold text-[var(--ds-text-brand)] bg-[var(--ds-bg-selected)]" : "text-[var(--ds-text-primary)] hover:bg-[var(--ds-bg-hover)]",
            dayDisabled ? "opacity-30 cursor-not-allowed" : ""
          ].join(" ")
        },
        day
      );
    })),
    /* @__PURE__ */ React.createElement("div", { className: "mt-2 pt-2 border-t border-[var(--ds-border-primary)]" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => {
          setViewYear(today.getFullYear());
          setViewMonth(today.getMonth());
          handleDayClick(today.getDate());
        },
        className: "w-full text-[length:var(--ds-text-xs)] text-[var(--ds-text-brand)] hover:underline py-1 cursor-pointer"
      },
      "Today"
    ))
  ), (errorText || helperText) && /* @__PURE__ */ React.createElement(
    "p",
    {
      className: "text-[length:var(--ds-text-xs)]",
      style: { color: hasError ? "var(--ds-text-danger)" : "var(--ds-text-secondary)" }
    },
    errorText || helperText
  ));
});
DatePicker.displayName = "DatePicker";
var DatePicker_default = DatePicker;

// src/components/Form/Form.js

var Form = _react.forwardRef.call(void 0, function Form2({ children, onSubmit, className = "", ...props }, ref) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit == null ? void 0 : onSubmit(e);
  };
  return /* @__PURE__ */ React.createElement(
    "form",
    {
      ref,
      onSubmit: handleSubmit,
      className: ["flex flex-col gap-5", className].join(" "),
      noValidate: true,
      ...props
    },
    children
  );
});
function FormGroup({ legend, children, className = "" }) {
  return /* @__PURE__ */ React.createElement("fieldset", { className: ["flex flex-col gap-4", className].join(" ") }, legend && /* @__PURE__ */ React.createElement("legend", { className: "text-[length:var(--ds-text-md)] font-semibold text-[var(--ds-text-primary)] mb-1" }, legend), children);
}
function FormRow({ children, className = "" }) {
  return /* @__PURE__ */ React.createElement("div", { className: ["grid grid-cols-1 md:grid-cols-2 gap-4", className].join(" ") }, children);
}
function FormActions({ children, align = "right", className = "" }) {
  const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
    between: "justify-between"
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: [
        "flex items-center gap-3 pt-4 border-t border-[var(--ds-border-primary)]",
        alignClass[align],
        className
      ].join(" ")
    },
    children
  );
}
Form.displayName = "Form";
FormGroup.displayName = "FormGroup";
FormRow.displayName = "FormRow";
FormActions.displayName = "FormActions";
var Form_default = Form;

// src/components/Search/Search.js


var sizeStyles4 = {
  sm: "h-[var(--ds-size-sm)] text-[length:var(--ds-text-xs)] pl-8 pr-8",
  md: "h-[var(--ds-size-md)] text-[length:var(--ds-text-sm)] pl-10 pr-10",
  lg: "h-[var(--ds-size-lg)] text-[length:var(--ds-text-md)] pl-12 pr-12"
};
var Search = _react.forwardRef.call(void 0, function Search2({
  value: controlledValue,
  onChange,
  onSearch,
  onClear,
  placeholder = "Search...",
  suggestions = [],
  onSuggestionSelect,
  loading = false,
  size = "md",
  disabled = false,
  scope,
  id: idProp,
  className = "",
  wrapperClassName = "",
  debounceMs = 300,
  ...props
}, ref) {
  const autoId = _react.useId.call(void 0, );
  const id = idProp || autoId;
  const [internalValue, setInternalValue] = _react.useState.call(void 0, "");
  const [showSuggestions, setShowSuggestions] = _react.useState.call(void 0, false);
  const containerRef = _react.useRef.call(void 0, null);
  const debounceRef = _react.useRef.call(void 0, null);
  const searchValue = _nullishCoalesce(controlledValue, () => ( internalValue));
  _react.useEffect.call(void 0, () => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleChange = _react.useCallback.call(void 0, (e) => {
    const val = e.target.value;
    setInternalValue(val);
    onChange == null ? void 0 : onChange(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch == null ? void 0 : onSearch(val);
    }, debounceMs);
    setShowSuggestions(val.length > 0 && suggestions.length > 0);
  }, [onChange, onSearch, debounceMs, suggestions.length]);
  const handleClear = () => {
    setInternalValue("");
    onChange == null ? void 0 : onChange("");
    onClear == null ? void 0 : onClear();
    setShowSuggestions(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (debounceRef.current) clearTimeout(debounceRef.current);
      onSearch == null ? void 0 : onSearch(searchValue);
      setShowSuggestions(false);
    }
    if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };
  const handleSuggestionClick = (suggestion) => {
    const val = typeof suggestion === "string" ? suggestion : suggestion.label;
    setInternalValue(val);
    onChange == null ? void 0 : onChange(val);
    onSuggestionSelect == null ? void 0 : onSuggestionSelect(suggestion);
    setShowSuggestions(false);
  };
  const iconSize = size === "sm" ? 14 : size === "lg" ? 20 : 16;
  return /* @__PURE__ */ React.createElement("div", { ref: containerRef, className: ["relative", wrapperClassName].join(" ") }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
    _lucidereact.Search,
    {
      size: iconSize,
      className: "absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none",
      style: { color: "var(--ds-icon-secondary)" }
    }
  ), scope && /* @__PURE__ */ React.createElement(
    "span",
    {
      className: "absolute left-9 top-1/2 -translate-y-1/2 text-[length:var(--ds-text-xs)] font-medium px-1.5 py-0.5 rounded",
      style: {
        backgroundColor: "var(--ds-bg-tertiary)",
        color: "var(--ds-text-secondary)"
      }
    },
    scope
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      ref,
      id,
      type: "search",
      value: searchValue,
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      onFocus: () => searchValue && suggestions.length > 0 && setShowSuggestions(true),
      disabled,
      placeholder,
      className: [
        "ds-focus-ring w-full rounded-[var(--ds-radius-md)] bg-[var(--ds-input-bg)] text-[var(--ds-text-primary)]",
        "placeholder:text-[var(--ds-text-placeholder)]",
        "transition-colors duration-[var(--ds-duration-normal)]",
        "[&::-webkit-search-cancel-button]:hidden",
        sizeStyles4[size],
        scope ? "pl-20" : "",
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className
      ].join(" "),
      style: { border: `1px solid var(--ds-input-border)` },
      role: "searchbox",
      "aria-label": placeholder,
      ...props
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1" }, loading && /* @__PURE__ */ React.createElement(_lucidereact.Loader2, { size: iconSize, className: "animate-spin", style: { color: "var(--ds-icon-secondary)" } }), searchValue && !loading && /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: handleClear,
      className: "p-0.5 rounded hover:bg-[var(--ds-bg-hover)] transition-colors cursor-pointer",
      "aria-label": "Clear search"
    },
    /* @__PURE__ */ React.createElement(_lucidereact.X, { size: iconSize, style: { color: "var(--ds-icon-secondary)" } })
  ))), showSuggestions && suggestions.length > 0 && /* @__PURE__ */ React.createElement(
    "ul",
    {
      className: "absolute top-full left-0 right-0 mt-1 py-1 rounded-[var(--ds-radius-lg)] border max-h-60 overflow-auto ds-scrollbar",
      style: {
        zIndex: "var(--ds-z-dropdown)",
        backgroundColor: "var(--ds-bg-primary)",
        borderColor: "var(--ds-border-primary)",
        boxShadow: "var(--ds-shadow-lg)"
      },
      role: "listbox"
    },
    suggestions.map((s, i) => {
      const label = typeof s === "string" ? s : s.label;
      const desc = typeof s === "object" ? s.description : null;
      return /* @__PURE__ */ React.createElement(
        "li",
        {
          key: i,
          role: "option",
          onClick: () => handleSuggestionClick(s),
          className: "px-3 py-2 cursor-pointer hover:bg-[var(--ds-bg-hover)] transition-colors"
        },
        /* @__PURE__ */ React.createElement("div", { className: "text-[length:var(--ds-text-sm)] text-[var(--ds-text-primary)]" }, label),
        desc && /* @__PURE__ */ React.createElement("div", { className: "text-[length:var(--ds-text-xs)] text-[var(--ds-text-secondary)] mt-0.5" }, desc)
      );
    })
  ));
});
Search.displayName = "Search";
var Search_default = Search;

// src/components/DataTable/DataTable.js



// src/components/Pagination/Pagination.js


function getPageNumbers(currentPage, totalPages, siblingCount = 1) {
  const totalSlots = siblingCount * 2 + 5;
  if (totalPages <= totalSlots) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);
  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;
  const pages = [];
  pages.push(1);
  if (showLeftEllipsis) {
    pages.push("...");
  } else {
    for (let i = 2; i < leftSibling; i++) pages.push(i);
  }
  for (let i = leftSibling; i <= rightSibling; i++) {
    if (i !== 1 && i !== totalPages) pages.push(i);
  }
  if (showRightEllipsis) {
    pages.push("...");
  } else {
    for (let i = rightSibling + 1; i < totalPages; i++) pages.push(i);
  }
  if (totalPages > 1) pages.push(totalPages);
  return pages;
}
var Pagination = _react.forwardRef.call(void 0, function Pagination2({
  currentPage = 1,
  totalPages = 1,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 25, 50, 100],
  siblingCount = 1,
  showPageSizeSelector = false,
  showItemCount = false,
  className = "",
  ...props
}, ref) {
  const pages = _react.useMemo.call(void 0, 
    () => getPageNumbers(currentPage, totalPages, siblingCount),
    [currentPage, totalPages, siblingCount]
  );
  const handlePage = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange == null ? void 0 : onPageChange(page);
    }
  };
  const startItem = totalItems ? (currentPage - 1) * (pageSize || 10) + 1 : null;
  const endItem = totalItems ? Math.min(currentPage * (pageSize || 10), totalItems) : null;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      className: ["flex items-center justify-between gap-4 flex-wrap", className].join(" "),
      ...props
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4" }, showItemCount && totalItems != null && /* @__PURE__ */ React.createElement("span", { className: "text-[length:var(--ds-text-sm)] text-[var(--ds-text-secondary)]" }, startItem, "\u2013", endItem, " of ", totalItems), showPageSizeSelector && /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-[length:var(--ds-text-sm)] text-[var(--ds-text-secondary)]" }, "Rows:"), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: pageSize,
        onChange: (e) => onPageSizeChange == null ? void 0 : onPageSizeChange(Number(e.target.value)),
        className: "h-7 text-[length:var(--ds-text-xs)] px-2 rounded-[var(--ds-radius-md)] bg-[var(--ds-input-bg)] text-[var(--ds-text-primary)] border cursor-pointer",
        style: { borderColor: "var(--ds-input-border)" }
      },
      pageSizeOptions.map((s) => /* @__PURE__ */ React.createElement("option", { key: s, value: s }, s))
    ))),
    /* @__PURE__ */ React.createElement("nav", { className: "flex items-center gap-1", "aria-label": "Pagination" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => handlePage(1),
        disabled: currentPage === 1,
        className: "ds-focus-ring p-1.5 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer",
        "aria-label": "First page"
      },
      /* @__PURE__ */ React.createElement(_lucidereact.ChevronsLeft, { size: 16, style: { color: "var(--ds-icon-primary)" } })
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => handlePage(currentPage - 1),
        disabled: currentPage === 1,
        className: "ds-focus-ring p-1.5 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer",
        "aria-label": "Previous page"
      },
      /* @__PURE__ */ React.createElement(_lucidereact.ChevronLeft, { size: 16, style: { color: "var(--ds-icon-primary)" } })
    ), pages.map(
      (page, idx) => page === "..." ? /* @__PURE__ */ React.createElement(
        "span",
        {
          key: `ellipsis-${idx}`,
          className: "w-8 h-8 flex items-center justify-center text-[length:var(--ds-text-sm)] text-[var(--ds-text-tertiary)]"
        },
        "..."
      ) : /* @__PURE__ */ React.createElement(
        "button",
        {
          key: page,
          type: "button",
          onClick: () => handlePage(page),
          "aria-current": page === currentPage ? "page" : void 0,
          className: [
            "ds-focus-ring w-8 h-8 flex items-center justify-center rounded-[var(--ds-radius-md)] text-[length:var(--ds-text-sm)] font-medium transition-colors cursor-pointer",
            page === currentPage ? "bg-[var(--ds-bg-brand)] text-[var(--ds-text-on-brand)]" : "text-[var(--ds-text-primary)] hover:bg-[var(--ds-bg-hover)]"
          ].join(" ")
        },
        page
      )
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => handlePage(currentPage + 1),
        disabled: currentPage === totalPages,
        className: "ds-focus-ring p-1.5 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer",
        "aria-label": "Next page"
      },
      /* @__PURE__ */ React.createElement(_lucidereact.ChevronRight, { size: 16, style: { color: "var(--ds-icon-primary)" } })
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => handlePage(totalPages),
        disabled: currentPage === totalPages,
        className: "ds-focus-ring p-1.5 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer",
        "aria-label": "Last page"
      },
      /* @__PURE__ */ React.createElement(_lucidereact.ChevronsRight, { size: 16, style: { color: "var(--ds-icon-primary)" } })
    ))
  );
});
Pagination.displayName = "Pagination";
var Pagination_default = Pagination;

// src/components/DataTable/DataTable.js
var DataTable = _react.forwardRef.call(void 0, function DataTable2({
  columns = [],
  data = [],
  // Sorting
  sortable = true,
  defaultSortColumn,
  defaultSortDirection = "asc",
  onSort,
  // Selection
  selectable = false,
  selectedRows = [],
  onSelectionChange,
  // Pagination
  paginated = false,
  pageSize: controlledPageSize,
  defaultPageSize = 10,
  pageSizeOptions = [10, 25, 50, 100],
  // Inline editing
  editableColumns = [],
  onCellEdit,
  // Batch actions
  batchActions,
  // Filtering
  filterValue,
  onFilterChange,
  // State
  loading = false,
  emptyMessage = "No data available",
  stickyHeader = false,
  compact = false,
  striped = false,
  className = "",
  ...props
}, ref) {
  const [sortColumn, setSortColumn] = _react.useState.call(void 0, defaultSortColumn || null);
  const [sortDirection, setSortDirection] = _react.useState.call(void 0, defaultSortDirection);
  const [currentPage, setCurrentPage] = _react.useState.call(void 0, 1);
  const [pageSize, setPageSize] = _react.useState.call(void 0, controlledPageSize || defaultPageSize);
  const [editingCell, setEditingCell] = _react.useState.call(void 0, null);
  const [editValue, setEditValue] = _react.useState.call(void 0, "");
  const sortedData = _react.useMemo.call(void 0, () => {
    if (!sortColumn) return data;
    const col = columns.find((c) => c.key === sortColumn);
    const sortFn = (col == null ? void 0 : col.sortFn) || ((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];
      if (aVal == null) return 1;
      if (bVal == null) return -1;
      if (typeof aVal === "number" && typeof bVal === "number") return aVal - bVal;
      return String(aVal).localeCompare(String(bVal));
    });
    const sorted = [...data].sort(sortFn);
    return sortDirection === "desc" ? sorted.reverse() : sorted;
  }, [data, sortColumn, sortDirection, columns]);
  const totalPages = paginated ? Math.ceil(sortedData.length / pageSize) : 1;
  const paginatedData = paginated ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize) : sortedData;
  const handleSort = _react.useCallback.call(void 0, 
    (columnKey) => {
      if (!sortable) return;
      const newDir = sortColumn === columnKey && sortDirection === "asc" ? "desc" : "asc";
      setSortColumn(columnKey);
      setSortDirection(newDir);
      onSort == null ? void 0 : onSort(columnKey, newDir);
    },
    [sortable, sortColumn, sortDirection, onSort]
  );
  const allSelected = paginatedData.length > 0 && paginatedData.every((_, i) => {
    const idx = paginated ? (currentPage - 1) * pageSize + i : i;
    return selectedRows.includes(idx);
  });
  const someSelected = !allSelected && paginatedData.some((_, i) => {
    const idx = paginated ? (currentPage - 1) * pageSize + i : i;
    return selectedRows.includes(idx);
  });
  const handleSelectAll = () => {
    const pageIndices = paginatedData.map(
      (_, i) => paginated ? (currentPage - 1) * pageSize + i : i
    );
    if (allSelected) {
      onSelectionChange == null ? void 0 : onSelectionChange(selectedRows.filter((i) => !pageIndices.includes(i)));
    } else {
      onSelectionChange == null ? void 0 : onSelectionChange([.../* @__PURE__ */ new Set([...selectedRows, ...pageIndices])]);
    }
  };
  const handleSelectRow = (globalIndex) => {
    if (selectedRows.includes(globalIndex)) {
      onSelectionChange == null ? void 0 : onSelectionChange(selectedRows.filter((i) => i !== globalIndex));
    } else {
      onSelectionChange == null ? void 0 : onSelectionChange([...selectedRows, globalIndex]);
    }
  };
  const startEditing = (rowIndex, columnKey, currentValue) => {
    setEditingCell({ rowIndex, columnKey });
    setEditValue(_nullishCoalesce(currentValue, () => ( "")));
  };
  const commitEdit = () => {
    if (editingCell) {
      onCellEdit == null ? void 0 : onCellEdit(editingCell.rowIndex, editingCell.columnKey, editValue);
      setEditingCell(null);
    }
  };
  const cancelEdit = () => {
    setEditingCell(null);
    setEditValue("");
  };
  const cellPadding = compact ? "px-3 py-1.5" : "px-4 py-3";
  const textSize = compact ? "text-[length:var(--ds-text-xs)]" : "text-[length:var(--ds-text-sm)]";
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      className: [
        "w-full rounded-[var(--ds-radius-lg)] border overflow-hidden",
        "bg-[var(--ds-bg-primary)] border-[var(--ds-table-border)]",
        className
      ].join(" "),
      ...props
    },
    selectable && selectedRows.length > 0 && batchActions && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "flex items-center gap-3 px-4 py-2 border-b",
        style: {
          backgroundColor: "var(--ds-bg-selected)",
          borderColor: "var(--ds-table-border)"
        }
      },
      /* @__PURE__ */ React.createElement("span", { className: "text-[length:var(--ds-text-sm)] font-medium text-[var(--ds-text-brand)]" }, selectedRows.length, " selected"),
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, batchActions),
      /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          onClick: () => onSelectionChange == null ? void 0 : onSelectionChange([]),
          className: "ml-auto text-[length:var(--ds-text-sm)] text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)] cursor-pointer"
        },
        "Clear selection"
      )
    ),
    /* @__PURE__ */ React.createElement("div", { className: "overflow-x-auto ds-scrollbar" }, /* @__PURE__ */ React.createElement("table", { className: "w-full border-collapse" }, /* @__PURE__ */ React.createElement(
      "thead",
      {
        className: stickyHeader ? "sticky top-0" : "",
        style: { zIndex: stickyHeader ? 10 : void 0 }
      },
      /* @__PURE__ */ React.createElement("tr", { style: { backgroundColor: "var(--ds-table-header-bg)" } }, selectable && /* @__PURE__ */ React.createElement("th", { className: `${cellPadding} w-12` }, /* @__PURE__ */ React.createElement(
        Checkbox_default,
        {
          checked: allSelected,
          indeterminate: someSelected,
          onChange: handleSelectAll,
          size: "sm"
        }
      )), columns.map((col) => /* @__PURE__ */ React.createElement(
        "th",
        {
          key: col.key,
          className: [
            cellPadding,
            textSize,
            "text-left font-semibold text-[var(--ds-text-secondary)] whitespace-nowrap",
            sortable && col.sortable !== false ? "cursor-pointer select-none" : ""
          ].join(" "),
          style: {
            width: col.width,
            minWidth: col.minWidth,
            borderBottom: `1px solid var(--ds-table-border)`
          },
          onClick: () => sortable && col.sortable !== false && handleSort(col.key)
        },
        /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1.5" }, col.header, sortable && col.sortable !== false && /* @__PURE__ */ React.createElement("span", { className: "inline-flex" }, sortColumn === col.key ? sortDirection === "asc" ? /* @__PURE__ */ React.createElement(_lucidereact.ArrowUp, { size: 14 }) : /* @__PURE__ */ React.createElement(_lucidereact.ArrowDown, { size: 14 }) : /* @__PURE__ */ React.createElement(_lucidereact.ArrowUpDown, { size: 14, className: "opacity-30" })))
      )))
    ), /* @__PURE__ */ React.createElement("tbody", null, paginatedData.length === 0 && !loading && /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(
      "td",
      {
        colSpan: columns.length + (selectable ? 1 : 0),
        className: "px-4 py-12 text-center text-[length:var(--ds-text-sm)] text-[var(--ds-text-tertiary)]"
      },
      emptyMessage
    )), paginatedData.map((row, rowIdx) => {
      const globalIndex = paginated ? (currentPage - 1) * pageSize + rowIdx : rowIdx;
      const isSelected = selectedRows.includes(globalIndex);
      return /* @__PURE__ */ React.createElement(
        "tr",
        {
          key: row.id || globalIndex,
          className: "transition-colors",
          style: {
            backgroundColor: isSelected ? "var(--ds-table-row-selected)" : striped && rowIdx % 2 === 1 ? "var(--ds-bg-secondary)" : void 0
          },
          onMouseEnter: (e) => {
            if (!isSelected) e.currentTarget.style.backgroundColor = "var(--ds-table-row-hover)";
          },
          onMouseLeave: (e) => {
            if (!isSelected) {
              e.currentTarget.style.backgroundColor = striped && rowIdx % 2 === 1 ? "var(--ds-bg-secondary)" : "";
            }
          }
        },
        selectable && /* @__PURE__ */ React.createElement(
          "td",
          {
            className: cellPadding,
            style: { borderBottom: "1px solid var(--ds-table-border)" }
          },
          /* @__PURE__ */ React.createElement(
            Checkbox_default,
            {
              checked: isSelected,
              onChange: () => handleSelectRow(globalIndex),
              size: "sm"
            }
          )
        ),
        columns.map((col) => {
          const cellValue = row[col.key];
          const isEditing = (editingCell == null ? void 0 : editingCell.rowIndex) === globalIndex && (editingCell == null ? void 0 : editingCell.columnKey) === col.key;
          const isEditable = editableColumns.includes(col.key);
          return /* @__PURE__ */ React.createElement(
            "td",
            {
              key: col.key,
              className: [
                cellPadding,
                textSize,
                "text-[var(--ds-text-primary)]"
              ].join(" "),
              style: { borderBottom: "1px solid var(--ds-table-border)" },
              onDoubleClick: () => {
                if (isEditable) startEditing(globalIndex, col.key, cellValue);
              }
            },
            isEditing ? /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-1" }, /* @__PURE__ */ React.createElement(
              "input",
              {
                type: "text",
                value: editValue,
                onChange: (e) => setEditValue(e.target.value),
                onKeyDown: (e) => {
                  if (e.key === "Enter") commitEdit();
                  if (e.key === "Escape") cancelEdit();
                },
                className: "w-full px-2 py-1 text-[length:var(--ds-text-sm)] rounded border bg-[var(--ds-input-bg)] text-[var(--ds-text-primary)]",
                style: { borderColor: "var(--ds-border-focus)" },
                autoFocus: true
              }
            ), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: commitEdit, className: "p-0.5 text-[var(--ds-icon-success)] cursor-pointer" }, /* @__PURE__ */ React.createElement(_lucidereact.Check, { size: 14 })), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: cancelEdit, className: "p-0.5 text-[var(--ds-icon-danger)] cursor-pointer" }, /* @__PURE__ */ React.createElement(_lucidereact.X, { size: 14 }))) : col.render ? col.render(cellValue, row, globalIndex) : /* @__PURE__ */ React.createElement("span", null, cellValue)
          );
        })
      );
    })))),
    paginated && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "px-4 py-3 border-t",
        style: { borderColor: "var(--ds-table-border)" }
      },
      /* @__PURE__ */ React.createElement(
        Pagination_default,
        {
          currentPage,
          totalPages,
          totalItems: sortedData.length,
          pageSize,
          onPageChange: setCurrentPage,
          onPageSizeChange: (size) => {
            setPageSize(size);
            setCurrentPage(1);
          },
          pageSizeOptions,
          showPageSizeSelector: true,
          showItemCount: true
        }
      )
    )
  );
});
DataTable.displayName = "DataTable";
var DataTable_default = DataTable;

// src/components/Charts/BarChart.js












var _recharts = require('recharts');

// src/components/Charts/chartTheme.js
var CHART_COLORS = {
  blue: { 600: "#2563eb", 500: "#3b82f6", 400: "#60a5fa", 300: "#93c5fd", 200: "#bfdbfe", 100: "#dbeafe", 50: "#eff6ff" },
  teal: { 600: "#0d9488", 500: "#14b8a6", 400: "#2dd4bf", 300: "#5eead4", 200: "#99f6e4", 100: "#ccfbf1" },
  purple: { 600: "#9333ea", 500: "#a855f7", 400: "#c084fc", 300: "#d8b4fe", 200: "#e9d5ff", 100: "#f3e8ff" },
  amber: { 600: "#d97706", 500: "#f59e0b", 400: "#fbbf24", 300: "#fcd34d", 200: "#fde68a", 100: "#fef3c7" },
  red: { 600: "#dc2626", 500: "#ef4444", 400: "#f87171", 300: "#fca5a5", 200: "#fecaca", 100: "#fee2e2" },
  green: { 600: "#16a34a", 500: "#22c55e", 400: "#4ade80", 300: "#86efac", 200: "#bbf7d0", 100: "#dcfce7" }
};
var SERIES_COLORS = [
  CHART_COLORS.blue[500],
  CHART_COLORS.teal[500],
  CHART_COLORS.purple[500],
  CHART_COLORS.amber[500],
  CHART_COLORS.red[500],
  CHART_COLORS.green[500],
  CHART_COLORS.blue[300],
  CHART_COLORS.teal[300],
  CHART_COLORS.purple[300],
  CHART_COLORS.amber[300]
];
var CHART_THEME = {
  fontFamily: "var(--ds-font-sans)",
  fontSize: 12,
  // Semantic grays used in axes, grid, tooltips
  axisStroke: "#9ca3af",
  // gray-400
  gridStroke: "#e5e7eb",
  // gray-200
  gridStrokeDark: "#374151",
  // gray-700
  tooltipBg: "#ffffff",
  tooltipBgDark: "#1f2937",
  tooltipBorder: "#e5e7eb",
  tooltipBorderDark: "#374151",
  textPrimary: "#111827",
  // gray-900
  textSecondary: "#6b7280",
  // gray-500
  textPrimaryDark: "#f9fafb",
  // gray-50
  textSecondaryDark: "#9ca3af"
  // gray-400
};
function getIsDark() {
  if (typeof document === "undefined") return false;
  const theme = document.documentElement.getAttribute("data-theme");
  return theme === "dark" || theme === "high-contrast";
}
function getAxisProps(isDark) {
  return {
    tick: { fill: isDark ? CHART_THEME.textSecondaryDark : CHART_THEME.textSecondary, fontSize: 12 },
    axisLine: { stroke: isDark ? CHART_THEME.gridStrokeDark : CHART_THEME.gridStroke },
    tickLine: false
  };
}
function getGridProps(isDark) {
  return {
    strokeDasharray: "3 3",
    stroke: isDark ? CHART_THEME.gridStrokeDark : CHART_THEME.gridStroke,
    vertical: false
  };
}
function getTooltipProps(isDark) {
  return {
    contentStyle: {
      backgroundColor: isDark ? CHART_THEME.tooltipBgDark : CHART_THEME.tooltipBg,
      border: `1px solid ${isDark ? CHART_THEME.tooltipBorderDark : CHART_THEME.tooltipBorder}`,
      borderRadius: "6px",
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      fontSize: 12,
      fontFamily: CHART_THEME.fontFamily,
      color: isDark ? CHART_THEME.textPrimaryDark : CHART_THEME.textPrimary,
      padding: "8px 12px"
    },
    labelStyle: {
      fontWeight: 600,
      marginBottom: 4,
      color: isDark ? CHART_THEME.textPrimaryDark : CHART_THEME.textPrimary
    },
    itemStyle: {
      padding: "2px 0",
      fontSize: 12
    },
    cursor: { fill: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)" }
  };
}
function getLegendProps(isDark) {
  return {
    wrapperStyle: { fontSize: 12, fontFamily: CHART_THEME.fontFamily, color: isDark ? CHART_THEME.textSecondaryDark : CHART_THEME.textSecondary },
    iconType: "circle",
    iconSize: 8
  };
}
function ChartWrapper({ title, subtitle, children, className = "", style = {} }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `rounded-[var(--ds-radius-lg)] border p-5 ${className}`,
      style: {
        borderColor: "var(--ds-border-primary)",
        backgroundColor: "var(--ds-bg-primary)",
        ...style
      }
    },
    (title || subtitle) && /* @__PURE__ */ React.createElement("div", { className: "mb-4" }, title && /* @__PURE__ */ React.createElement(
      "h4",
      {
        className: "text-[length:var(--ds-text-sm)] font-semibold",
        style: { color: "var(--ds-text-primary)" }
      },
      title
    ), subtitle && /* @__PURE__ */ React.createElement(
      "p",
      {
        className: "text-[length:var(--ds-text-xs)] mt-0.5",
        style: { color: "var(--ds-text-secondary)" }
      },
      subtitle
    )),
    children
  );
}

// src/components/Charts/BarChart.js
function toPercentData(data, dataKeys) {
  return data.map((row) => {
    const total = dataKeys.reduce((sum, key) => sum + (Math.abs(Number(row[key])) || 0), 0);
    if (total === 0) return { ...row };
    const next = { ...row, __raw: {} };
    dataKeys.forEach((key) => {
      next.__raw[key] = row[key];
      next[key] = (Math.abs(Number(row[key])) || 0) / total * 100;
    });
    return next;
  });
}
function toWaterfallData(data, valueKey) {
  let cumulative = 0;
  return data.map((row, idx) => {
    const value = Number(row[valueKey]) || 0;
    const isFirst = idx === 0;
    const isLast = idx === data.length - 1;
    if (isFirst) {
      cumulative = value;
      return { ...row, __base: 0, __value: value, __isTotal: true };
    }
    if (isLast) {
      return { ...row, __base: 0, __value: cumulative + value, __isTotal: true };
    }
    const base = value >= 0 ? cumulative : cumulative + value;
    cumulative += value;
    return { ...row, __base: base, __value: Math.abs(value), __isTotal: false, __rawValue: value };
  });
}
function BarChart({
  variant = "vertical",
  data = [],
  dataKeys = [],
  xAxisKey = "name",
  colors,
  height = 300,
  title,
  subtitle,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  barRadius = 4,
  className,
  ...rest
}) {
  const [isDark, setIsDark] = _react.useState.call(void 0, false);
  _react.useEffect.call(void 0, () => {
    setIsDark(getIsDark());
    const observer = new MutationObserver(() => {
      setIsDark(getIsDark());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
    return () => observer.disconnect();
  }, []);
  const palette = colors || SERIES_COLORS;
  const isHorizontal = variant === "horizontal";
  const isStacked = variant === "stacked" || variant === "stacked-percent";
  const isMultiSeries = dataKeys.length > 1;
  const shouldShowLegend = showLegend && isMultiSeries;
  const axisProps = getAxisProps(isDark);
  const gridProps = getGridProps(isDark);
  const tooltipProps = getTooltipProps(isDark);
  const legendProps = getLegendProps(isDark);
  const verticalRadius = [barRadius, barRadius, 0, 0];
  const horizontalRadius = [0, barRadius, barRadius, 0];
  const percentData = _react.useMemo.call(void 0, () => {
    if (variant !== "stacked-percent") return null;
    return toPercentData(data, dataKeys);
  }, [variant, data, dataKeys]);
  const waterfallData = _react.useMemo.call(void 0, () => {
    if (variant !== "waterfall") return null;
    return toWaterfallData(data, dataKeys[0]);
  }, [variant, data, dataKeys]);
  if (variant === "diverging") {
    return /* @__PURE__ */ React.createElement(ChartWrapper, { title, subtitle, className }, /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.BarChart, { data, ...rest }, showGrid && /* @__PURE__ */ React.createElement(_recharts.CartesianGrid, { ...gridProps }), /* @__PURE__ */ React.createElement(_recharts.XAxis, { dataKey: xAxisKey, ...axisProps }), /* @__PURE__ */ React.createElement(_recharts.YAxis, { ...axisProps }), showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...tooltipProps }), shouldShowLegend && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...legendProps }), /* @__PURE__ */ React.createElement(_recharts.ReferenceLine, { y: 0, stroke: isDark ? "#6b7280" : "#9ca3af" }), dataKeys.map((key) => /* @__PURE__ */ React.createElement(_recharts.Bar, { key, dataKey: key, radius: verticalRadius }, data.map((entry, idx) => {
      const val = Number(entry[key]) || 0;
      return /* @__PURE__ */ React.createElement(
        _recharts.Cell,
        {
          key: idx,
          fill: val >= 0 ? CHART_COLORS.green[500] : CHART_COLORS.red[500]
        }
      );
    }))))));
  }
  if (variant === "waterfall") {
    return /* @__PURE__ */ React.createElement(ChartWrapper, { title, subtitle, className }, /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.BarChart, { data: waterfallData, ...rest }, showGrid && /* @__PURE__ */ React.createElement(_recharts.CartesianGrid, { ...gridProps }), /* @__PURE__ */ React.createElement(_recharts.XAxis, { dataKey: xAxisKey, ...axisProps }), /* @__PURE__ */ React.createElement(_recharts.YAxis, { ...axisProps }), showTooltip && /* @__PURE__ */ React.createElement(
      _recharts.Tooltip,
      {
        ...tooltipProps,
        formatter: (value, name) => {
          if (name === "__base") return [null, null];
          return [value, dataKeys[0]];
        }
      }
    ), /* @__PURE__ */ React.createElement(_recharts.Bar, { dataKey: "__base", stackId: "waterfall", fill: "transparent", radius: 0 }), /* @__PURE__ */ React.createElement(_recharts.Bar, { dataKey: "__value", stackId: "waterfall", radius: verticalRadius }, waterfallData.map((entry, idx) => {
      let fill = CHART_COLORS.blue[500];
      if (!entry.__isTotal) {
        fill = (_nullishCoalesce(entry.__rawValue, () => ( 0))) >= 0 ? CHART_COLORS.green[500] : CHART_COLORS.red[500];
      }
      return /* @__PURE__ */ React.createElement(_recharts.Cell, { key: idx, fill });
    })))));
  }
  if (variant === "stacked-percent") {
    return /* @__PURE__ */ React.createElement(ChartWrapper, { title, subtitle, className }, /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.BarChart, { data: percentData, ...rest }, showGrid && /* @__PURE__ */ React.createElement(_recharts.CartesianGrid, { ...gridProps }), /* @__PURE__ */ React.createElement(_recharts.XAxis, { dataKey: xAxisKey, ...axisProps }), /* @__PURE__ */ React.createElement(_recharts.YAxis, { ...axisProps, domain: [0, 100], tickFormatter: (v) => `${v}%` }), showTooltip && /* @__PURE__ */ React.createElement(
      _recharts.Tooltip,
      {
        ...tooltipProps,
        formatter: (value, name, props) => {
          var _a, _b;
          const raw = (_b = (_a = props.payload) == null ? void 0 : _a.__raw) == null ? void 0 : _b[name];
          if (raw !== void 0) {
            return [`${raw} (${value.toFixed(1)}%)`, name];
          }
          return [`${value.toFixed(1)}%`, name];
        }
      }
    ), shouldShowLegend && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...legendProps }), dataKeys.map((key, i) => /* @__PURE__ */ React.createElement(
      _recharts.Bar,
      {
        key,
        dataKey: key,
        stackId: "stack",
        fill: palette[i % palette.length],
        radius: i === dataKeys.length - 1 ? verticalRadius : 0
      }
    )))));
  }
  if (isHorizontal) {
    return /* @__PURE__ */ React.createElement(ChartWrapper, { title, subtitle, className }, /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.BarChart, { data, layout: "vertical", ...rest }, showGrid && /* @__PURE__ */ React.createElement(_recharts.CartesianGrid, { ...gridProps, horizontal: false, vertical: true }), /* @__PURE__ */ React.createElement(_recharts.XAxis, { type: "number", ...axisProps }), /* @__PURE__ */ React.createElement(_recharts.YAxis, { type: "category", dataKey: xAxisKey, ...axisProps, width: 80 }), showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...tooltipProps }), shouldShowLegend && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...legendProps }), dataKeys.map((key, i) => /* @__PURE__ */ React.createElement(
      _recharts.Bar,
      {
        key,
        dataKey: key,
        fill: palette[i % palette.length],
        radius: horizontalRadius
      }
    )))));
  }
  const stackId = isStacked ? "stack" : void 0;
  return /* @__PURE__ */ React.createElement(ChartWrapper, { title, subtitle, className }, /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.BarChart, { data, ...rest }, showGrid && /* @__PURE__ */ React.createElement(_recharts.CartesianGrid, { ...gridProps }), /* @__PURE__ */ React.createElement(_recharts.XAxis, { dataKey: xAxisKey, ...axisProps }), /* @__PURE__ */ React.createElement(_recharts.YAxis, { ...axisProps }), showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...tooltipProps }), shouldShowLegend && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...legendProps }), dataKeys.map((key, i) => /* @__PURE__ */ React.createElement(
    _recharts.Bar,
    {
      key,
      dataKey: key,
      stackId,
      fill: palette[i % palette.length],
      radius: isStacked ? i === dataKeys.length - 1 ? verticalRadius : 0 : verticalRadius
    }
  )))));
}

// src/components/Charts/LineChart.js












var DOT_PROPS = { r: 3 };
var ACTIVE_DOT_PROPS = { r: 5, strokeWidth: 2 };
function LineChart({
  variant = "single",
  data = [],
  dataKeys = [],
  xAxisKey = "name",
  colors,
  height = 300,
  title,
  subtitle,
  showGrid = true,
  showLegend,
  showTooltip = true,
  showDots = true,
  strokeWidth = 2,
  thresholdValue,
  thresholdLabel = "Threshold",
  targetKey,
  className = ""
}) {
  const [isDark, setIsDark] = _react.useState.call(void 0, false);
  _react.useEffect.call(void 0, () => {
    setIsDark(getIsDark());
    const observer = new MutationObserver(() => {
      setIsDark(getIsDark());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
    return () => observer.disconnect();
  }, []);
  const isMultiSeries = dataKeys.length > 1;
  const legendVisible = showLegend !== void 0 ? showLegend : isMultiSeries;
  const palette = colors || SERIES_COLORS;
  const resolvedTargetKey = targetKey || dataKeys[dataKeys.length - 1];
  const getLineType = () => {
    if (variant === "stepped") return "stepAfter";
    return "monotone";
  };
  const renderLines = () => dataKeys.map((key, index) => {
    const color = palette[index % palette.length];
    const isDashed = variant === "dashed-target" && key === resolvedTargetKey;
    return /* @__PURE__ */ React.createElement(
      _recharts.Line,
      {
        key,
        type: getLineType(),
        dataKey: key,
        stroke: color,
        strokeWidth,
        strokeDasharray: isDashed ? "8 4" : void 0,
        strokeOpacity: isDashed ? 0.6 : 1,
        dot: showDots ? DOT_PROPS : false,
        activeDot: showDots ? ACTIVE_DOT_PROPS : false
      }
    );
  });
  return /* @__PURE__ */ React.createElement(ChartWrapper, { title, subtitle, className }, /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.LineChart, { data }, showGrid && /* @__PURE__ */ React.createElement(_recharts.CartesianGrid, { ...getGridProps(isDark) }), /* @__PURE__ */ React.createElement(_recharts.XAxis, { dataKey: xAxisKey, ...getAxisProps(isDark) }), /* @__PURE__ */ React.createElement(_recharts.YAxis, { ...getAxisProps(isDark) }), showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...getTooltipProps(isDark) }), legendVisible && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...getLegendProps(isDark) }), variant === "with-threshold" && thresholdValue != null && /* @__PURE__ */ React.createElement(
    _recharts.ReferenceLine,
    {
      y: thresholdValue,
      stroke: CHART_COLORS.red[400],
      strokeDasharray: "6 3",
      label: {
        value: thresholdLabel,
        position: "insideTopRight",
        fill: CHART_COLORS.red[400],
        fontSize: 12
      }
    }
  ), renderLines())));
}

// src/components/Charts/AreaChart.js











function AreaChart({
  variant = "single",
  data = [],
  dataKeys = [],
  xAxisKey = "name",
  colors,
  height = 300,
  title,
  subtitle,
  showGrid = true,
  showLegend,
  showTooltip = true,
  strokeWidth = 2,
  rangeKeys,
  className = ""
}) {
  const [isDark, setIsDark] = _react.useState.call(void 0, false);
  _react.useEffect.call(void 0, () => {
    setIsDark(getIsDark());
    const observer = new MutationObserver(() => {
      setIsDark(getIsDark());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
    return () => observer.disconnect();
  }, []);
  const isMultiSeries = dataKeys.length > 1;
  const legendVisible = showLegend !== void 0 ? showLegend : isMultiSeries;
  const palette = colors || SERIES_COLORS;
  const getChartData = () => {
    if (variant === "stacked-percent") {
      return data.map((entry) => {
        const total = dataKeys.reduce((sum, key) => sum + (Number(entry[key]) || 0), 0);
        if (total === 0) return entry;
        const transformed = { ...entry };
        dataKeys.forEach((key) => {
          transformed[key] = (Number(entry[key]) || 0) / total * 100;
        });
        return transformed;
      });
    }
    if (variant === "range" && rangeKeys) {
      return data.map((entry) => ({
        ...entry,
        __rangeDelta: (Number(entry[rangeKeys.upper]) || 0) - (Number(entry[rangeKeys.lower]) || 0)
      }));
    }
    return data;
  };
  const chartData = getChartData();
  const renderDefs = () => {
    if (variant === "single") {
      const color = palette[0];
      return /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "area-gradient-0", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: color, stopOpacity: 0.2 }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: color, stopOpacity: 0.02 })));
    }
    if (variant === "gradient") {
      const color = palette[0];
      return /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "area-gradient-prominent-0", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: color, stopOpacity: 0.6 }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: color, stopOpacity: 0.05 })));
    }
    return null;
  };
  const renderAreas = () => {
    if (variant === "single") {
      const color = palette[0];
      const key = dataKeys[0];
      return /* @__PURE__ */ React.createElement(
        _recharts.Area,
        {
          type: "monotone",
          dataKey: key,
          stroke: color,
          strokeWidth,
          fill: "url(#area-gradient-0)"
        }
      );
    }
    if (variant === "stacked" || variant === "stacked-percent") {
      return dataKeys.map((key, index) => {
        const color = palette[index % palette.length];
        return /* @__PURE__ */ React.createElement(
          _recharts.Area,
          {
            key,
            type: "monotone",
            dataKey: key,
            stackId: "stack",
            stroke: color,
            strokeWidth,
            fill: color,
            fillOpacity: 0.4
          }
        );
      });
    }
    if (variant === "gradient") {
      const color = palette[0];
      const key = dataKeys[0];
      return /* @__PURE__ */ React.createElement(
        _recharts.Area,
        {
          type: "monotone",
          dataKey: key,
          stroke: color,
          strokeWidth,
          fill: "url(#area-gradient-prominent-0)"
        }
      );
    }
    if (variant === "range" && rangeKeys) {
      const color = palette[0];
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        _recharts.Area,
        {
          type: "monotone",
          dataKey: rangeKeys.lower,
          stackId: "range",
          stroke: "transparent",
          fill: "transparent",
          fillOpacity: 0
        }
      ), /* @__PURE__ */ React.createElement(
        _recharts.Area,
        {
          type: "monotone",
          dataKey: "__rangeDelta",
          stackId: "range",
          stroke: color,
          strokeWidth,
          fill: color,
          fillOpacity: 0.2,
          name: "Range"
        }
      ), dataKeys[0] && /* @__PURE__ */ React.createElement(
        _recharts.Area,
        {
          type: "monotone",
          dataKey: dataKeys[0],
          stroke: CHART_COLORS.blue[600],
          strokeWidth,
          fill: "none",
          dot: { r: 3, fill: CHART_COLORS.blue[600] },
          name: dataKeys[0]
        }
      ));
    }
    return dataKeys.map((key, index) => {
      const color = palette[index % palette.length];
      return /* @__PURE__ */ React.createElement(
        _recharts.Area,
        {
          key,
          type: "monotone",
          dataKey: key,
          stroke: color,
          strokeWidth,
          fill: color,
          fillOpacity: 0.2
        }
      );
    });
  };
  return /* @__PURE__ */ React.createElement(ChartWrapper, { title, subtitle, className }, /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.AreaChart, { data: chartData }, renderDefs(), showGrid && /* @__PURE__ */ React.createElement(_recharts.CartesianGrid, { ...getGridProps(isDark) }), /* @__PURE__ */ React.createElement(_recharts.XAxis, { dataKey: xAxisKey, ...getAxisProps(isDark) }), /* @__PURE__ */ React.createElement(
    _recharts.YAxis,
    {
      ...getAxisProps(isDark),
      ...variant === "stacked-percent" ? { domain: [0, 100], tickFormatter: (v) => `${v}%` } : {}
    }
  ), showTooltip && /* @__PURE__ */ React.createElement(
    _recharts.Tooltip,
    {
      ...getTooltipProps(isDark),
      ...variant === "stacked-percent" ? { formatter: (value) => `${value.toFixed(1)}%` } : {}
    }
  ), legendVisible && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...getLegendProps(isDark) }), renderAreas())));
}

// src/components/Charts/PieChart.js










var RADIAN = Math.PI / 180;
function renderCustomizedLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }) {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return /* @__PURE__ */ React.createElement(
    "text",
    {
      x,
      y,
      fill: "#fff",
      textAnchor: "middle",
      dominantBaseline: "central",
      fontSize: 12,
      fontWeight: 600
    },
    `${(percent * 100).toFixed(0)}%`
  );
}
function renderActiveShape(props) {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
    _recharts.Sector,
    {
      cx,
      cy,
      innerRadius,
      outerRadius: outerRadius + 6,
      startAngle,
      endAngle,
      fill
    }
  ), innerRadius > 0 && /* @__PURE__ */ React.createElement(
    _recharts.Sector,
    {
      cx,
      cy,
      innerRadius: innerRadius - 2,
      outerRadius: innerRadius,
      startAngle,
      endAngle,
      fill,
      opacity: 0.3
    }
  ));
}
function PieChart({
  variant = "standard",
  data = [],
  outerData = [],
  colors,
  height = 300,
  title,
  subtitle,
  showLegend = true,
  showTooltip = true,
  showLabels = false,
  centerLabel,
  centerValue,
  className = ""
}) {
  const [isDark, setIsDark] = _react.useState.call(void 0, false);
  const [activeIndex, setActiveIndex] = _react.useState.call(void 0, -1);
  _react.useEffect.call(void 0, () => {
    setIsDark(getIsDark());
    const observer = new MutationObserver(() => {
      setIsDark(getIsDark());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
    return () => observer.disconnect();
  }, []);
  const palette = colors || SERIES_COLORS;
  const getColor = (index, paletteOverride) => {
    const p = paletteOverride || palette;
    return p[index % p.length];
  };
  const resolvedColors = data.map((entry, i) => entry.color || getColor(i));
  const outerPalette = [
    CHART_COLORS.blue[400],
    CHART_COLORS.teal[400],
    CHART_COLORS.purple[400],
    CHART_COLORS.amber[400],
    CHART_COLORS.red[400],
    CHART_COLORS.green[400],
    CHART_COLORS.blue[200],
    CHART_COLORS.teal[200],
    CHART_COLORS.purple[200],
    CHART_COLORS.amber[200]
  ];
  const resolvedOuterColors = outerData.map((entry, i) => entry.color || outerPalette[i % outerPalette.length]);
  const onPieEnter = (_, index) => setActiveIndex(index);
  const onPieLeave = () => setActiveIndex(-1);
  const renderCenterText = (cx, cy) => {
    if (!centerValue && !centerLabel) return null;
    return /* @__PURE__ */ React.createElement("g", null, centerValue != null && /* @__PURE__ */ React.createElement(
      "text",
      {
        x: cx,
        y: centerLabel ? cy - 10 : cy,
        textAnchor: "middle",
        dominantBaseline: "central",
        fill: isDark ? "#f9fafb" : "#111827",
        fontSize: 24,
        fontWeight: 700
      },
      centerValue
    ), centerLabel && /* @__PURE__ */ React.createElement(
      "text",
      {
        x: cx,
        y: centerValue != null ? cy + 16 : cy,
        textAnchor: "middle",
        dominantBaseline: "central",
        fill: isDark ? "#9ca3af" : "#6b7280",
        fontSize: 12
      },
      centerLabel
    ));
  };
  const tooltipProps = getTooltipProps(isDark);
  const legendProps = getLegendProps(isDark);
  const renderChart = () => {
    const cx = "50%";
    const cxNum = void 0;
    const cyNum = variant === "semi" ? height * 0.65 : void 0;
    const cyProp = variant === "semi" ? cyNum : "50%";
    switch (variant) {
      case "standard":
        return /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.PieChart, null, /* @__PURE__ */ React.createElement(
          _recharts.Pie,
          {
            data,
            cx,
            cy: "50%",
            outerRadius: 100,
            dataKey: "value",
            nameKey: "name",
            activeIndex,
            activeShape: renderActiveShape,
            onMouseEnter: onPieEnter,
            onMouseLeave: onPieLeave,
            label: showLabels ? renderCustomizedLabel : false,
            labelLine: false
          },
          data.map((entry, index) => /* @__PURE__ */ React.createElement(_recharts.Cell, { key: `cell-${index}`, fill: resolvedColors[index] }))
        ), showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...tooltipProps }), showLegend && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...legendProps })));
      case "donut":
        return /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.PieChart, null, /* @__PURE__ */ React.createElement(
          _recharts.Pie,
          {
            data,
            cx,
            cy: "50%",
            innerRadius: 60,
            outerRadius: 100,
            dataKey: "value",
            nameKey: "name",
            activeIndex,
            activeShape: renderActiveShape,
            onMouseEnter: onPieEnter,
            onMouseLeave: onPieLeave,
            label: showLabels ? renderCustomizedLabel : false,
            labelLine: false
          },
          data.map((entry, index) => /* @__PURE__ */ React.createElement(_recharts.Cell, { key: `cell-${index}`, fill: resolvedColors[index] }))
        ), renderCenterText("50%", height / 2 - (showLegend ? 15 : 0)), showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...tooltipProps }), showLegend && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...legendProps })));
      case "semi":
        return /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.PieChart, null, /* @__PURE__ */ React.createElement(
          _recharts.Pie,
          {
            data,
            cx,
            cy: cyNum,
            startAngle: 180,
            endAngle: 0,
            innerRadius: 60,
            outerRadius: 100,
            dataKey: "value",
            nameKey: "name",
            activeIndex,
            activeShape: renderActiveShape,
            onMouseEnter: onPieEnter,
            onMouseLeave: onPieLeave,
            label: showLabels ? renderCustomizedLabel : false,
            labelLine: false
          },
          data.map((entry, index) => /* @__PURE__ */ React.createElement(_recharts.Cell, { key: `cell-${index}`, fill: resolvedColors[index] }))
        ), renderCenterText("50%", cyNum), showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...tooltipProps }), showLegend && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...legendProps })));
      case "nested":
        return /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.PieChart, null, /* @__PURE__ */ React.createElement(
          _recharts.Pie,
          {
            data,
            cx,
            cy: "50%",
            innerRadius: 40,
            outerRadius: 65,
            dataKey: "value",
            nameKey: "name",
            activeIndex,
            activeShape: renderActiveShape,
            onMouseEnter: onPieEnter,
            onMouseLeave: onPieLeave
          },
          data.map((entry, index) => /* @__PURE__ */ React.createElement(_recharts.Cell, { key: `inner-${index}`, fill: resolvedColors[index] }))
        ), /* @__PURE__ */ React.createElement(
          _recharts.Pie,
          {
            data: outerData,
            cx,
            cy: "50%",
            innerRadius: 75,
            outerRadius: 100,
            dataKey: "value",
            nameKey: "name"
          },
          outerData.map((entry, index) => /* @__PURE__ */ React.createElement(_recharts.Cell, { key: `outer-${index}`, fill: resolvedOuterColors[index] }))
        ), showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...tooltipProps }), showLegend && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...legendProps })));
      default:
        return null;
    }
  };
  return /* @__PURE__ */ React.createElement(ChartWrapper, { title, subtitle, className }, renderChart());
}

// src/components/Charts/ComposedChart.js













function ComposedChart({
  variant = "bar-line",
  data = [],
  barKeys = [],
  lineKeys = [],
  areaKeys = [],
  xAxisKey = "name",
  colors,
  height = 300,
  title,
  subtitle,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  barRadius = 4,
  yAxisLabel,
  yAxisRightLabel,
  className = ""
}) {
  const [isDark, setIsDark] = _react.useState.call(void 0, false);
  _react.useEffect.call(void 0, () => {
    setIsDark(getIsDark());
    const observer = new MutationObserver(() => {
      setIsDark(getIsDark());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
    return () => observer.disconnect();
  }, []);
  const axisProps = getAxisProps(isDark);
  const gridProps = getGridProps(isDark);
  const tooltipProps = getTooltipProps(isDark);
  const legendProps = getLegendProps(isDark);
  const getColor = (index) => {
    if (colors && colors[index]) return colors[index];
    return SERIES_COLORS[index % SERIES_COLORS.length];
  };
  const renderBarLine = () => {
    const barColor = (i) => colors && colors[i] ? colors[i] : CHART_COLORS.blue[500];
    const lineColor = (i) => {
      const offset = barKeys.length + i;
      return colors && colors[offset] ? colors[offset] : CHART_COLORS.amber[500];
    };
    return /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.ComposedChart, { data }, showGrid && /* @__PURE__ */ React.createElement(_recharts.CartesianGrid, { ...gridProps }), /* @__PURE__ */ React.createElement(_recharts.XAxis, { dataKey: xAxisKey, ...axisProps }), /* @__PURE__ */ React.createElement(
      _recharts.YAxis,
      {
        yAxisId: "left",
        ...axisProps,
        label: yAxisLabel ? { value: yAxisLabel, angle: -90, position: "insideLeft", style: { fill: axisProps.tick.fill, fontSize: 12 } } : void 0
      }
    ), /* @__PURE__ */ React.createElement(
      _recharts.YAxis,
      {
        yAxisId: "right",
        orientation: "right",
        ...axisProps,
        label: yAxisRightLabel ? { value: yAxisRightLabel, angle: 90, position: "insideRight", style: { fill: axisProps.tick.fill, fontSize: 12 } } : void 0
      }
    ), showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...tooltipProps }), showLegend && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...legendProps }), barKeys.map((key, i) => /* @__PURE__ */ React.createElement(
      _recharts.Bar,
      {
        key,
        dataKey: key,
        yAxisId: "left",
        fill: barColor(i),
        radius: [barRadius, barRadius, 0, 0]
      }
    )), lineKeys.map((key, i) => /* @__PURE__ */ React.createElement(
      _recharts.Line,
      {
        key,
        dataKey: key,
        yAxisId: "right",
        type: "monotone",
        stroke: lineColor(i),
        strokeWidth: 2,
        dot: { r: 3 }
      }
    ))));
  };
  const renderBarArea = () => {
    let colorIndex = 0;
    return /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.ComposedChart, { data }, showGrid && /* @__PURE__ */ React.createElement(_recharts.CartesianGrid, { ...gridProps }), /* @__PURE__ */ React.createElement(_recharts.XAxis, { dataKey: xAxisKey, ...axisProps }), /* @__PURE__ */ React.createElement(
      _recharts.YAxis,
      {
        ...axisProps,
        label: yAxisLabel ? { value: yAxisLabel, angle: -90, position: "insideLeft", style: { fill: axisProps.tick.fill, fontSize: 12 } } : void 0
      }
    ), showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...tooltipProps }), showLegend && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...legendProps }), areaKeys.map((key) => {
      const c = getColor(colorIndex++);
      return /* @__PURE__ */ React.createElement(
        _recharts.Area,
        {
          key,
          dataKey: key,
          type: "monotone",
          fill: c,
          stroke: c,
          fillOpacity: 0.15,
          strokeWidth: 2
        }
      );
    }), barKeys.map((key) => {
      const c = getColor(colorIndex++);
      return /* @__PURE__ */ React.createElement(
        _recharts.Bar,
        {
          key,
          dataKey: key,
          fill: c,
          radius: [barRadius, barRadius, 0, 0]
        }
      );
    })));
  };
  const renderMultiAxis = () => {
    let colorIndex = 0;
    return /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.ComposedChart, { data }, showGrid && /* @__PURE__ */ React.createElement(_recharts.CartesianGrid, { ...gridProps }), /* @__PURE__ */ React.createElement(_recharts.XAxis, { dataKey: xAxisKey, ...axisProps }), /* @__PURE__ */ React.createElement(
      _recharts.YAxis,
      {
        yAxisId: "left",
        ...axisProps,
        label: yAxisLabel ? { value: yAxisLabel, angle: -90, position: "insideLeft", style: { fill: axisProps.tick.fill, fontSize: 12 } } : void 0
      }
    ), /* @__PURE__ */ React.createElement(
      _recharts.YAxis,
      {
        yAxisId: "right",
        orientation: "right",
        ...axisProps,
        label: yAxisRightLabel ? { value: yAxisRightLabel, angle: 90, position: "insideRight", style: { fill: axisProps.tick.fill, fontSize: 12 } } : void 0
      }
    ), showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...tooltipProps }), showLegend && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...legendProps }), areaKeys.map((key) => {
      const c = getColor(colorIndex++);
      return /* @__PURE__ */ React.createElement(
        _recharts.Area,
        {
          key,
          dataKey: key,
          yAxisId: "left",
          type: "monotone",
          fill: c,
          stroke: c,
          fillOpacity: 0.15,
          strokeWidth: 2
        }
      );
    }), barKeys.map((key) => {
      const c = getColor(colorIndex++);
      return /* @__PURE__ */ React.createElement(
        _recharts.Bar,
        {
          key,
          dataKey: key,
          yAxisId: "left",
          fill: c,
          radius: [barRadius, barRadius, 0, 0]
        }
      );
    }), lineKeys.map((key) => {
      const c = getColor(colorIndex++);
      return /* @__PURE__ */ React.createElement(
        _recharts.Line,
        {
          key,
          dataKey: key,
          yAxisId: "right",
          type: "monotone",
          stroke: c,
          strokeWidth: 2,
          dot: { r: 3 }
        }
      );
    })));
  };
  const renderChart = () => {
    switch (variant) {
      case "bar-area":
        return renderBarArea();
      case "multi-axis":
        return renderMultiAxis();
      case "bar-line":
      default:
        return renderBarLine();
    }
  };
  return /* @__PURE__ */ React.createElement(ChartWrapper, { title, subtitle, className }, renderChart());
}

// src/components/Charts/RadialChart.js














function getGaugeColor(percentage) {
  if (percentage >= 70) return CHART_COLORS.green[500];
  if (percentage >= 40) return CHART_COLORS.amber[500];
  return CHART_COLORS.red[500];
}
function CenterLabel({ viewBox, value, label, isDark }) {
  if (!viewBox) return null;
  const { cx, cy } = viewBox;
  return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement(
    "text",
    {
      x: cx,
      y: cy - 8,
      textAnchor: "middle",
      dominantBaseline: "central",
      style: {
        fontSize: 32,
        fontWeight: 700,
        fill: isDark ? "#f9fafb" : "#111827"
      }
    },
    value
  ), label && /* @__PURE__ */ React.createElement(
    "text",
    {
      x: cx,
      y: cy + 24,
      textAnchor: "middle",
      dominantBaseline: "central",
      style: {
        fontSize: 13,
        fontWeight: 400,
        fill: isDark ? "#9ca3af" : "#6b7280"
      }
    },
    label
  ));
}
function RadialChart({
  variant = "gauge",
  value = 0,
  maxValue = 100,
  data = [],
  dataKeys = [],
  colors,
  height = 300,
  title,
  subtitle,
  showLegend = false,
  showTooltip = true,
  label,
  className = ""
}) {
  const [isDark, setIsDark] = _react.useState.call(void 0, false);
  _react.useEffect.call(void 0, () => {
    setIsDark(getIsDark());
    const observer = new MutationObserver(() => {
      setIsDark(getIsDark());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
    return () => observer.disconnect();
  }, []);
  const palette = colors && colors.length > 0 ? colors : SERIES_COLORS;
  const trackFill = isDark ? "#374151" : "#e5e7eb";
  if (variant === "gauge") {
    const clampedValue = Math.min(Math.max(value, 0), maxValue);
    const percentage = clampedValue / maxValue * 100;
    const gaugeColor = getGaugeColor(percentage);
    const chartData = [{ name: "value", value: clampedValue, fill: gaugeColor }];
    return /* @__PURE__ */ React.createElement(ChartWrapper, { title, subtitle, className }, /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(
      _recharts.RadialBarChart,
      {
        cx: "50%",
        cy: "55%",
        innerRadius: "70%",
        outerRadius: "85%",
        startAngle: 210,
        endAngle: -30,
        data: chartData,
        barSize: 16
      },
      /* @__PURE__ */ React.createElement(
        _recharts.PolarAngleAxis,
        {
          type: "number",
          domain: [0, maxValue],
          angleAxisId: 0,
          tick: false
        }
      ),
      /* @__PURE__ */ React.createElement(
        _recharts.RadialBar,
        {
          background: { fill: trackFill },
          dataKey: "value",
          angleAxisId: 0,
          cornerRadius: 10,
          label: /* @__PURE__ */ React.createElement(
            CenterLabel,
            {
              value: clampedValue,
              label,
              isDark
            }
          )
        }
      ),
      showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...getTooltipProps(isDark) }),
      showLegend && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...getLegendProps(isDark) })
    )));
  }
  if (variant === "progress") {
    const clampedValue = Math.min(Math.max(value, 0), maxValue);
    const percentage = Math.round(clampedValue / maxValue * 100);
    const chartData = [{ name: "progress", value: clampedValue, fill: CHART_COLORS.blue[500] }];
    return /* @__PURE__ */ React.createElement(ChartWrapper, { title, subtitle, className }, /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(
      _recharts.RadialBarChart,
      {
        cx: "50%",
        cy: "50%",
        innerRadius: "75%",
        outerRadius: "90%",
        startAngle: 90,
        endAngle: -270,
        data: chartData,
        barSize: 16
      },
      /* @__PURE__ */ React.createElement(
        _recharts.PolarAngleAxis,
        {
          type: "number",
          domain: [0, maxValue],
          angleAxisId: 0,
          tick: false
        }
      ),
      /* @__PURE__ */ React.createElement(
        _recharts.RadialBar,
        {
          background: { fill: trackFill },
          dataKey: "value",
          angleAxisId: 0,
          cornerRadius: 10,
          label: /* @__PURE__ */ React.createElement(
            CenterLabel,
            {
              value: `${percentage}%`,
              label,
              isDark
            }
          )
        }
      ),
      showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...getTooltipProps(isDark) }),
      showLegend && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...getLegendProps(isDark) })
    )));
  }
  if (variant === "multi-ring") {
    const ringData = [...data].sort((a, b) => b.value - a.value).map((entry, i) => ({
      ...entry,
      fill: entry.fill || palette[i % palette.length]
    }));
    return /* @__PURE__ */ React.createElement(ChartWrapper, { title, subtitle, className }, /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(
      _recharts.RadialBarChart,
      {
        cx: "50%",
        cy: "50%",
        innerRadius: "20%",
        outerRadius: "90%",
        startAngle: 90,
        endAngle: -270,
        data: ringData,
        barSize: 14
      },
      /* @__PURE__ */ React.createElement(
        _recharts.PolarAngleAxis,
        {
          type: "number",
          domain: [0, maxValue],
          angleAxisId: 0,
          tick: false
        }
      ),
      /* @__PURE__ */ React.createElement(
        _recharts.RadialBar,
        {
          background: { fill: trackFill },
          dataKey: "value",
          angleAxisId: 0,
          cornerRadius: 10
        },
        ringData.map((entry, i) => /* @__PURE__ */ React.createElement(_recharts.Cell, { key: `cell-${i}`, fill: entry.fill }))
      ),
      showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...getTooltipProps(isDark) }),
      /* @__PURE__ */ React.createElement(_recharts.Legend, { ...getLegendProps(isDark) })
    )));
  }
  if (variant === "radar") {
    return /* @__PURE__ */ React.createElement(ChartWrapper, { title, subtitle, className }, /* @__PURE__ */ React.createElement(_recharts.ResponsiveContainer, { width: "100%", height }, /* @__PURE__ */ React.createElement(_recharts.RadarChart, { cx: "50%", cy: "50%", outerRadius: "75%", data }, /* @__PURE__ */ React.createElement(
      _recharts.PolarGrid,
      {
        stroke: isDark ? "#374151" : "#e5e7eb",
        gridType: "polygon"
      }
    ), /* @__PURE__ */ React.createElement(
      _recharts.PolarAngleAxis,
      {
        dataKey: "subject",
        tick: {
          fill: isDark ? "#9ca3af" : "#6b7280",
          fontSize: 12
        }
      }
    ), /* @__PURE__ */ React.createElement(
      _recharts.PolarRadiusAxis,
      {
        tick: {
          fill: isDark ? "#9ca3af" : "#6b7280",
          fontSize: 10
        },
        axisLine: false
      }
    ), dataKeys.map((key, i) => {
      const color = palette[i % palette.length];
      return /* @__PURE__ */ React.createElement(
        _recharts.Radar,
        {
          key,
          name: key,
          dataKey: key,
          stroke: color,
          fill: color,
          fillOpacity: 0.2
        }
      );
    }), showTooltip && /* @__PURE__ */ React.createElement(_recharts.Tooltip, { ...getTooltipProps(isDark) }), showLegend && /* @__PURE__ */ React.createElement(_recharts.Legend, { ...getLegendProps(isDark) }))));
  }
  return /* @__PURE__ */ React.createElement(ChartWrapper, { title, subtitle, className }, /* @__PURE__ */ React.createElement("p", { style: { color: isDark ? "#9ca3af" : "#6b7280", fontSize: 14 } }, "Unknown variant: ", /* @__PURE__ */ React.createElement("code", null, variant)));
}

// src/components/KpiCard/KpiCard.js


function Sparkline({ data = [], width = 80, height = 28, color = "var(--ds-text-brand)" }) {
  if (data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  const points = data.map((v, i) => `${i * step},${height - (v - min) / range * height}`).join(" ");
  const [tooltip, setTooltip] = _react.useState.call(void 0, null);
  const svgRef = _react.useRef.call(void 0, null);
  const handleMouseMove = (e) => {
    const rect = svgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const idx = Math.round(x / step);
    if (idx >= 0 && idx < data.length) {
      setTooltip({ x: idx * step, y: height - (data[idx] - min) / range * height, value: data[idx] });
    }
  };
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      ref: svgRef,
      width,
      height,
      className: "shrink-0",
      onMouseMove: handleMouseMove,
      onMouseLeave: () => setTooltip(null),
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ React.createElement(
      "polyline",
      {
        points,
        fill: "none",
        stroke: color,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    tooltip && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx: tooltip.x, cy: tooltip.y, r: "3", fill: color }), /* @__PURE__ */ React.createElement(
      "rect",
      {
        x: tooltip.x - 16,
        y: tooltip.y - 20,
        width: "32",
        height: "16",
        rx: "3",
        fill: "var(--ds-bg-tertiary)",
        stroke: "var(--ds-border-primary)",
        strokeWidth: "0.5"
      }
    ), /* @__PURE__ */ React.createElement(
      "text",
      {
        x: tooltip.x,
        y: tooltip.y - 9,
        textAnchor: "middle",
        fontSize: "9",
        fill: "var(--ds-text-primary)"
      },
      tooltip.value
    ))
  );
}
function ProgressRing({ value = 0, size = 40, strokeWidth = 4, color = "var(--ds-text-brand)" }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(Math.max(value, 0), 100);
  const offset = circumference - clamped / 100 * circumference;
  return /* @__PURE__ */ React.createElement("svg", { width: size, height: size, className: "shrink-0 -rotate-90" }, /* @__PURE__ */ React.createElement(
    "circle",
    {
      cx: size / 2,
      cy: size / 2,
      r: radius,
      fill: "none",
      stroke: "var(--ds-border-primary)",
      strokeWidth
    }
  ), /* @__PURE__ */ React.createElement(
    "circle",
    {
      cx: size / 2,
      cy: size / 2,
      r: radius,
      fill: "none",
      stroke: color,
      strokeWidth,
      strokeDasharray: circumference,
      strokeDashoffset: offset,
      strokeLinecap: "round",
      style: { transition: "stroke-dashoffset 0.4s ease" }
    }
  ));
}
function ProgressBar({ value = 0, color = "var(--ds-text-brand)" }) {
  const clamped = Math.min(Math.max(value, 0), 100);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "w-full h-1.5 rounded-full overflow-hidden mt-2",
      style: { backgroundColor: "var(--ds-bg-tertiary)" }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "h-full rounded-full",
        style: {
          width: `${clamped}%`,
          backgroundColor: color,
          transition: "width 0.4s ease"
        }
      }
    )
  );
}
function DeltaIndicator({ value, format = "percentage" }) {
  if (value == null) return null;
  const isPositive = value > 0;
  const isNeutral = value === 0;
  const Icon = isPositive ? _lucidereact.TrendingUp : isNeutral ? _lucidereact.Minus : _lucidereact.TrendingDown;
  const color = isPositive ? "var(--ds-text-success)" : isNeutral ? "var(--ds-text-secondary)" : "var(--ds-text-danger)";
  const display = format === "percentage" ? `${isPositive ? "+" : ""}${value}%` : `${isPositive ? "+" : ""}${value}`;
  return /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1 text-[length:var(--ds-text-xs)] font-medium", style: { color } }, /* @__PURE__ */ React.createElement(Icon, { size: 12 }), display);
}
var KpiCard = _react.forwardRef.call(void 0, function KpiCard2({
  // Core
  label,
  value,
  // Variant-specific
  variant = "simple",
  // simple | with-trend | with-delta | with-progress | with-icon
  // with-trend
  trendData,
  trendColor,
  // with-delta
  delta,
  deltaFormat = "percentage",
  // percentage | absolute
  deltaLabel,
  // with-progress
  progress,
  // 0-100
  target,
  progressType = "bar",
  // bar | ring
  progressColor,
  // with-icon
  icon,
  iconColor,
  // General
  className = "",
  ...props
}, ref) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      className: [
        "rounded-[var(--ds-radius-lg)] border p-4",
        "transition-shadow duration-[var(--ds-duration-normal)]",
        "hover:shadow-[var(--ds-shadow-md)]",
        className
      ].join(" "),
      style: {
        backgroundColor: "var(--ds-bg-primary)",
        borderColor: "var(--ds-border-primary)"
      },
      ...props
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between gap-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React.createElement(
      "p",
      {
        className: "text-[length:var(--ds-text-xs)] font-medium uppercase tracking-wider truncate",
        style: { color: "var(--ds-text-secondary)" }
      },
      label
    ), /* @__PURE__ */ React.createElement("div", { className: "flex items-end gap-2 mt-1" }, /* @__PURE__ */ React.createElement(
      "span",
      {
        className: "text-[length:var(--ds-text-2xl)] font-bold leading-none",
        style: { color: "var(--ds-text-primary)" }
      },
      value
    ), variant === "with-delta" && /* @__PURE__ */ React.createElement(DeltaIndicator, { value: delta, format: deltaFormat })), variant === "with-delta" && deltaLabel && /* @__PURE__ */ React.createElement(
      "p",
      {
        className: "text-[length:var(--ds-text-xs)] mt-1",
        style: { color: "var(--ds-text-tertiary)" }
      },
      deltaLabel
    ), variant === "with-progress" && progressType === "bar" && /* @__PURE__ */ React.createElement("div", { className: "mt-1" }, /* @__PURE__ */ React.createElement(ProgressBar, { value: progress, color: progressColor || "var(--ds-text-brand)" }), target != null && /* @__PURE__ */ React.createElement(
      "p",
      {
        className: "text-[length:var(--ds-text-xs)] mt-1",
        style: { color: "var(--ds-text-tertiary)" }
      },
      progress,
      "% of ",
      target
    ))), variant === "with-icon" && icon && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "shrink-0 w-10 h-10 rounded-[var(--ds-radius-md)] flex items-center justify-center",
        style: {
          backgroundColor: iconColor ? `${iconColor}18` : "var(--ds-bg-selected)",
          color: iconColor || "var(--ds-text-brand)"
        }
      },
      icon
    ), variant === "with-trend" && trendData && /* @__PURE__ */ React.createElement(Sparkline, { data: trendData, color: trendColor || "var(--ds-text-brand)" }), variant === "with-progress" && progressType === "ring" && /* @__PURE__ */ React.createElement("div", { className: "shrink-0 relative flex items-center justify-center" }, /* @__PURE__ */ React.createElement(ProgressRing, { value: progress, color: progressColor || "var(--ds-text-brand)" }), /* @__PURE__ */ React.createElement(
      "span",
      {
        className: "absolute text-[length:9px] font-bold",
        style: { color: "var(--ds-text-primary)" }
      },
      progress,
      "%"
    )))
  );
});
KpiCard.displayName = "KpiCard";
var KpiCard_default = KpiCard;

// src/components/List/List.js










var ActivityFeed = _react.forwardRef.call(void 0, function ActivityFeed2({ items = [], maxHeight, className = "", ...props }, ref) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      className: ["flex flex-col divide-y", className].join(" "),
      style: {
        borderColor: "var(--ds-border-primary)",
        maxHeight,
        overflowY: maxHeight ? "auto" : void 0,
        "--tw-divide-color": "var(--ds-border-primary)"
      },
      ...props
    },
    items.map((item, i) => /* @__PURE__ */ React.createElement("div", { key: _nullishCoalesce(item.id, () => ( i)), className: "flex gap-3 py-3 px-2" }, /* @__PURE__ */ React.createElement("div", { className: "shrink-0 mt-1.5" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "w-2 h-2 rounded-full",
        style: { backgroundColor: item.color || "var(--ds-text-brand)" }
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React.createElement(
      "p",
      {
        className: "text-[length:var(--ds-text-sm)]",
        style: { color: "var(--ds-text-primary)" }
      },
      item.content
    ), item.timestamp && /* @__PURE__ */ React.createElement(
      "p",
      {
        className: "text-[length:var(--ds-text-xs)] mt-0.5",
        style: { color: "var(--ds-text-tertiary)" }
      },
      item.timestamp
    ))))
  );
});
var severityConfig = {
  info: { icon: _lucidereact.Info, color: "var(--ds-icon-info)", bg: "var(--ds-bg-info)" },
  warning: { icon: _lucidereact.AlertTriangle, color: "var(--ds-icon-warning)", bg: "var(--ds-bg-warning)" },
  error: { icon: _lucidereact.AlertCircle, color: "var(--ds-icon-danger)", bg: "var(--ds-bg-error)" },
  success: { icon: _lucidereact.CheckCircle2, color: "var(--ds-icon-success)", bg: "var(--ds-bg-success)" }
};
var NotificationList = _react.forwardRef.call(void 0, function NotificationList2({ items = [], maxHeight, onItemClick, className = "", ...props }, ref) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      className: ["flex flex-col divide-y", className].join(" "),
      style: {
        maxHeight,
        overflowY: maxHeight ? "auto" : void 0,
        "--tw-divide-color": "var(--ds-border-primary)"
      },
      ...props
    },
    items.map((item, i) => {
      const sev = severityConfig[item.severity || "info"];
      const Icon = sev.icon;
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: _nullishCoalesce(item.id, () => ( i)),
          className: [
            "flex gap-3 py-3 px-3 transition-colors",
            onItemClick ? "cursor-pointer hover:bg-[var(--ds-bg-hover)]" : "",
            item.unread ? "bg-[var(--ds-bg-selected)]" : ""
          ].join(" "),
          onClick: () => onItemClick == null ? void 0 : onItemClick(item, i),
          role: onItemClick ? "button" : void 0,
          tabIndex: onItemClick ? 0 : void 0
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5",
            style: { backgroundColor: sev.bg }
          },
          /* @__PURE__ */ React.createElement(Icon, { size: 14, style: { color: sev.color } })
        ),
        /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React.createElement(
          "p",
          {
            className: [
              "text-[length:var(--ds-text-sm)]",
              item.unread ? "font-semibold" : ""
            ].join(" "),
            style: { color: "var(--ds-text-primary)" }
          },
          item.title
        ), item.description && /* @__PURE__ */ React.createElement(
          "p",
          {
            className: "text-[length:var(--ds-text-xs)] mt-0.5 line-clamp-2",
            style: { color: "var(--ds-text-secondary)" }
          },
          item.description
        ), item.timestamp && /* @__PURE__ */ React.createElement(
          "p",
          {
            className: "text-[length:var(--ds-text-xs)] mt-1",
            style: { color: "var(--ds-text-tertiary)" }
          },
          item.timestamp
        )),
        item.unread && /* @__PURE__ */ React.createElement("div", { className: "shrink-0 mt-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-2 h-2 rounded-full", style: { backgroundColor: "var(--ds-text-brand)" } }))
      );
    })
  );
});
var RankedList = _react.forwardRef.call(void 0, function RankedList2({ items = [], valueLabel, className = "", ...props }, ref) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      className: ["flex flex-col divide-y", className].join(" "),
      style: { "--tw-divide-color": "var(--ds-border-primary)" },
      ...props
    },
    items.map((item, i) => /* @__PURE__ */ React.createElement("div", { key: _nullishCoalesce(item.id, () => ( i)), className: "flex items-center gap-3 py-2.5 px-2" }, /* @__PURE__ */ React.createElement(
      "span",
      {
        className: "shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[length:var(--ds-text-xs)] font-bold",
        style: {
          backgroundColor: i < 3 ? "var(--ds-bg-selected)" : "var(--ds-bg-tertiary)",
          color: i < 3 ? "var(--ds-text-brand)" : "var(--ds-text-secondary)"
        }
      },
      i + 1
    ), /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React.createElement(
      "p",
      {
        className: "text-[length:var(--ds-text-sm)] font-medium truncate",
        style: { color: "var(--ds-text-primary)" }
      },
      item.label
    ), item.sublabel && /* @__PURE__ */ React.createElement(
      "p",
      {
        className: "text-[length:var(--ds-text-xs)] truncate",
        style: { color: "var(--ds-text-tertiary)" }
      },
      item.sublabel
    )), item.value != null && /* @__PURE__ */ React.createElement(
      "span",
      {
        className: "shrink-0 text-[length:var(--ds-text-sm)] font-semibold tabular-nums",
        style: { color: "var(--ds-text-primary)" }
      },
      item.value
    )))
  );
});
var AvatarList = _react.forwardRef.call(void 0, function AvatarList2({ items = [], onItemClick, className = "", ...props }, ref) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      className: ["flex flex-col divide-y", className].join(" "),
      style: { "--tw-divide-color": "var(--ds-border-primary)" },
      ...props
    },
    items.map((item, i) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: _nullishCoalesce(item.id, () => ( i)),
        className: [
          "flex items-center gap-3 py-2.5 px-2 transition-colors",
          onItemClick ? "cursor-pointer hover:bg-[var(--ds-bg-hover)]" : ""
        ].join(" "),
        onClick: () => onItemClick == null ? void 0 : onItemClick(item, i),
        role: onItemClick ? "button" : void 0,
        tabIndex: onItemClick ? 0 : void 0
      },
      item.avatar ? /* @__PURE__ */ React.createElement(
        "img",
        {
          src: item.avatar,
          alt: item.name || "",
          className: "shrink-0 w-8 h-8 rounded-full object-cover"
        }
      ) : /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[length:var(--ds-text-xs)] font-bold uppercase",
          style: {
            backgroundColor: "var(--ds-bg-selected)",
            color: "var(--ds-text-brand)"
          }
        },
        (item.name || "?").slice(0, 2)
      ),
      /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React.createElement(
        "p",
        {
          className: "text-[length:var(--ds-text-sm)] font-medium truncate",
          style: { color: "var(--ds-text-primary)" }
        },
        item.name
      ), item.description && /* @__PURE__ */ React.createElement(
        "p",
        {
          className: "text-[length:var(--ds-text-xs)] truncate",
          style: { color: "var(--ds-text-secondary)" }
        },
        item.description
      )),
      item.meta && /* @__PURE__ */ React.createElement(
        "span",
        {
          className: "shrink-0 text-[length:var(--ds-text-xs)]",
          style: { color: "var(--ds-text-tertiary)" }
        },
        item.meta
      )
    ))
  );
});
var TableList = _react.forwardRef.call(void 0, function TableList2({
  columns = [],
  data = [],
  sortable = false,
  defaultSortColumn,
  defaultSortDirection = "asc",
  actions,
  onFilter,
  className = "",
  ...props
}, ref) {
  const [sortCol, setSortCol] = _react.useState.call(void 0, defaultSortColumn || null);
  const [sortDir, setSortDir] = _react.useState.call(void 0, defaultSortDirection);
  const handleSort = _react.useCallback.call(void 0, (key) => {
    if (!sortable) return;
    if (sortCol === key) {
      setSortDir((d) => d === "asc" ? "desc" : "asc");
    } else {
      setSortCol(key);
      setSortDir("asc");
    }
  }, [sortCol, sortable]);
  const sortedData = _react.useMemo.call(void 0, () => {
    if (!sortCol) return data;
    const sorted = [...data].sort((a, b) => {
      const aVal = a[sortCol];
      const bVal = b[sortCol];
      if (aVal == null) return 1;
      if (bVal == null) return -1;
      if (typeof aVal === "number" && typeof bVal === "number") return aVal - bVal;
      return String(aVal).localeCompare(String(bVal));
    });
    return sortDir === "desc" ? sorted.reverse() : sorted;
  }, [data, sortCol, sortDir]);
  const SortIcon = ({ colKey }) => {
    if (!sortable) return null;
    if (sortCol !== colKey) return /* @__PURE__ */ React.createElement(_lucidereact.ChevronsUpDown, { size: 12, style: { color: "var(--ds-icon-secondary)", opacity: 0.5 } });
    return sortDir === "asc" ? /* @__PURE__ */ React.createElement(_lucidereact.ChevronUp, { size: 12, style: { color: "var(--ds-text-brand)" } }) : /* @__PURE__ */ React.createElement(_lucidereact.ChevronDown, { size: 12, style: { color: "var(--ds-text-brand)" } });
  };
  return /* @__PURE__ */ React.createElement("div", { ref, className, ...props }, actions && /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "flex items-center gap-2 flex-wrap pb-3 mb-3 border-b",
      style: { borderColor: "var(--ds-border-primary)" }
    },
    actions
  ), /* @__PURE__ */ React.createElement("div", { className: "overflow-x-auto" }, /* @__PURE__ */ React.createElement("table", { className: "w-full border-collapse text-left" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement(
    "tr",
    {
      className: "border-b",
      style: { borderColor: "var(--ds-border-primary)" }
    },
    columns.map((col) => /* @__PURE__ */ React.createElement(
      "th",
      {
        key: col.key,
        className: [
          "py-2 px-3 text-[length:var(--ds-text-xs)] font-semibold uppercase tracking-wider whitespace-nowrap",
          sortable ? "cursor-pointer select-none hover:bg-[var(--ds-bg-hover)]" : ""
        ].join(" "),
        style: {
          color: "var(--ds-text-secondary)",
          width: col.width,
          minWidth: col.minWidth
        },
        onClick: () => handleSort(col.key)
      },
      /* @__PURE__ */ React.createElement("span", { className: "inline-flex items-center gap-1" }, col.icon && /* @__PURE__ */ React.createElement("span", { className: "shrink-0" }, col.icon), col.header, /* @__PURE__ */ React.createElement(SortIcon, { colKey: col.key }))
    ))
  )), /* @__PURE__ */ React.createElement("tbody", null, sortedData.map((row, ri) => /* @__PURE__ */ React.createElement(
    "tr",
    {
      key: _nullishCoalesce(row.id, () => ( ri)),
      className: "border-b last:border-b-0 transition-colors hover:bg-[var(--ds-bg-hover)]",
      style: { borderColor: "var(--ds-border-primary)" }
    },
    columns.map((col) => /* @__PURE__ */ React.createElement(
      "td",
      {
        key: col.key,
        className: "py-2 px-3 text-[length:var(--ds-text-sm)]",
        style: { color: "var(--ds-text-primary)" }
      },
      col.render ? col.render(row[col.key], row, ri) : row[col.key]
    ))
  )), sortedData.length === 0 && /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(
    "td",
    {
      colSpan: columns.length,
      className: "py-8 text-center text-[length:var(--ds-text-sm)]",
      style: { color: "var(--ds-text-tertiary)" }
    },
    "No items"
  ))))));
});
var List = _react.forwardRef.call(void 0, function List2({ variant = "activity-feed", ...props }, ref) {
  switch (variant) {
    case "activity-feed":
      return /* @__PURE__ */ React.createElement(ActivityFeed, { ref, ...props });
    case "notification":
      return /* @__PURE__ */ React.createElement(NotificationList, { ref, ...props });
    case "ranked":
      return /* @__PURE__ */ React.createElement(RankedList, { ref, ...props });
    case "with-avatar":
      return /* @__PURE__ */ React.createElement(AvatarList, { ref, ...props });
    case "with-table":
      return /* @__PURE__ */ React.createElement(TableList, { ref, ...props });
    default:
      return /* @__PURE__ */ React.createElement(ActivityFeed, { ref, ...props });
  }
});
ActivityFeed.displayName = "ActivityFeed";
NotificationList.displayName = "NotificationList";
RankedList.displayName = "RankedList";
AvatarList.displayName = "AvatarList";
TableList.displayName = "TableList";
List.displayName = "List";
var List_default = List;

// src/context/ThemeProvider.js

var ThemeContext = _react.createContext.call(void 0, null);
function ThemeProvider({ children, defaultTheme = "light", themes = ["light", "dark"] }) {
  const [theme, setThemeState] = _react.useState.call(void 0, defaultTheme);
  _react.useEffect.call(void 0, () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("ds-theme");
      if (stored && themes.includes(stored)) {
        setThemeState(stored);
      }
    }
  }, []);
  _react.useEffect.call(void 0, () => {
    document.documentElement.setAttribute("data-theme", theme);
    if (typeof window !== "undefined") {
      localStorage.setItem("ds-theme", theme);
    }
  }, [theme]);
  const setTheme = _react.useCallback.call(void 0, (newTheme) => {
    if (themes.includes(newTheme)) {
      setThemeState(newTheme);
    }
  }, [themes]);
  const toggleTheme = _react.useCallback.call(void 0, () => {
    setThemeState((prev) => {
      const idx = themes.indexOf(prev);
      return themes[(idx + 1) % themes.length];
    });
  }, [themes]);
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, { value: { theme, setTheme, toggleTheme, themes } }, children);
}
function useTheme() {
  const context = _react.useContext.call(void 0, ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}















































exports.ActivityFeed = ActivityFeed; exports.AreaChart = AreaChart; exports.AvatarList = AvatarList; exports.Banner = Banner; exports.BarChart = BarChart; exports.Breadcrumb = Breadcrumb_default; exports.Button = Button_default; exports.CHART_COLORS = CHART_COLORS; exports.ChartWrapper = ChartWrapper; exports.Checkbox = Checkbox_default; exports.ComposedChart = ComposedChart; exports.DataTable = DataTable_default; exports.DatePicker = DatePicker_default; exports.Dropdown = Dropdown_default; exports.Form = Form_default; exports.FormActions = FormActions; exports.FormGroup = FormGroup; exports.FormRow = FormRow; exports.Header = Header_default; exports.KpiCard = KpiCard_default; exports.LineChart = LineChart; exports.List = List_default; exports.Modal = Modal_default; exports.Notification = Notification_default; exports.NotificationList = NotificationList; exports.OverflowMenu = OverflowMenu_default; exports.Pagination = Pagination_default; exports.PieChart = PieChart; exports.RadialChart = RadialChart; exports.RankedList = RankedList; exports.SERIES_COLORS = SERIES_COLORS; exports.Search = Search_default; exports.Select = Select_default; exports.SideNav = SideNav_default; exports.Skeleton = Skeleton; exports.SkeletonText = SkeletonText; exports.Spinner = Spinner; exports.TableList = TableList; exports.TableSkeleton = TableSkeleton; exports.Tabs = Tabs_default; exports.Tag = Tag_default; exports.TextInput = TextInput_default; exports.ThemeProvider = ThemeProvider; exports.Toast = Toast; exports.Toggle = Toggle_default; exports.useTheme = useTheme;
