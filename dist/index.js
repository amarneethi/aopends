'use client';

// src/components/Button/Button.js
import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
var Button = forwardRef(function Button2({
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
  return /* @__PURE__ */ jsxs(
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
      ...props,
      children: [
        loading && /* @__PURE__ */ jsx(Loader2, { className: "animate-spin", size: size === "sm" ? 14 : size === "lg" ? 20 : 16 }),
        !loading && icon && iconPosition === "left" && /* @__PURE__ */ jsx("span", { className: "shrink-0", children: icon }),
        children && /* @__PURE__ */ jsx(Fragment, { children }),
        !loading && icon && iconPosition === "right" && /* @__PURE__ */ jsx("span", { className: "shrink-0", children: icon })
      ]
    }
  );
});
Button.displayName = "Button";
var Button_default = Button;

// src/components/TextInput/TextInput.js
import { forwardRef as forwardRef2, useId } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var sizeStyles = {
  sm: "h-[var(--ds-size-sm)] text-[length:var(--ds-text-xs)] px-2.5",
  md: "h-[var(--ds-size-md)] text-[length:var(--ds-text-sm)] px-3",
  lg: "h-[var(--ds-size-lg)] text-[length:var(--ds-text-md)] px-4"
};
var TextInput = forwardRef2(function TextInput2({
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
  const autoId = useId();
  const id = idProp || autoId;
  const hasError = !!errorText;
  const hasSuccess = !!successText;
  const stateMessage = errorText || successText || helperText;
  const stateColor = hasError ? "var(--ds-text-danger)" : hasSuccess ? "var(--ds-text-success)" : "var(--ds-text-secondary)";
  const borderColor = hasError ? "var(--ds-border-error)" : hasSuccess ? "var(--ds-border-success)" : "var(--ds-input-border)";
  return /* @__PURE__ */ jsxs2("div", { className: ["flex flex-col gap-1.5", wrapperClassName].filter(Boolean).join(" "), children: [
    label && /* @__PURE__ */ jsxs2(
      "label",
      {
        htmlFor: id,
        className: "text-[length:var(--ds-text-sm)] font-medium text-[var(--ds-text-primary)]",
        children: [
          label,
          required && /* @__PURE__ */ jsx2("span", { className: "text-[var(--ds-text-danger)] ml-0.5", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs2("div", { className: "relative", children: [
      icon && /* @__PURE__ */ jsx2("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ds-icon-secondary)] pointer-events-none", children: icon }),
      /* @__PURE__ */ jsx2(
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
            "border",
            `hover:border-[var(--ds-input-border-hover)]`,
            sizeStyles[size],
            icon ? "pl-10" : "",
            disabled ? "opacity-50 cursor-not-allowed bg-[var(--ds-bg-disabled)]" : "",
            className
          ].filter(Boolean).join(" "),
          style: { borderColor },
          ...props
        }
      ),
      hasError && /* @__PURE__ */ jsx2(
        AlertCircle,
        {
          size: 16,
          className: "absolute right-3 top-1/2 -translate-y-1/2",
          style: { color: "var(--ds-icon-danger)" }
        }
      ),
      hasSuccess && !hasError && /* @__PURE__ */ jsx2(
        CheckCircle2,
        {
          size: 16,
          className: "absolute right-3 top-1/2 -translate-y-1/2",
          style: { color: "var(--ds-icon-success)" }
        }
      )
    ] }),
    stateMessage && /* @__PURE__ */ jsx2("p", { id: `${id}-message`, className: "text-[length:var(--ds-text-xs)]", style: { color: stateColor }, children: stateMessage })
  ] });
});
TextInput.displayName = "TextInput";
var TextInput_default = TextInput;

// src/components/Checkbox/Checkbox.js
import { forwardRef as forwardRef3, useId as useId2 } from "react";
import { Check, Minus } from "lucide-react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var Checkbox = forwardRef3(function Checkbox2({
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
  const autoId = useId2();
  const id = idProp || autoId;
  const boxSize = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5";
  const iconSize = size === "sm" ? 12 : size === "lg" ? 18 : 14;
  const isChecked = indeterminate || checked;
  return /* @__PURE__ */ jsxs3(
    "label",
    {
      htmlFor: id,
      className: [
        "inline-flex items-center gap-2 cursor-pointer select-none",
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ jsxs3("span", { className: "relative inline-flex items-center justify-center", children: [
          /* @__PURE__ */ jsx3(
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
          ),
          /* @__PURE__ */ jsx3(
            "span",
            {
              className: [
                boxSize,
                "rounded-[var(--ds-radius-sm)] border-2 transition-all duration-[var(--ds-duration-normal)]",
                "flex items-center justify-center",
                isChecked ? "bg-[var(--ds-bg-brand)] border-[var(--ds-bg-brand)] text-[var(--ds-text-on-brand)]" : "bg-[var(--ds-input-bg)] border-[var(--ds-input-border)]",
                "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-[var(--ds-focus-ring-color)] peer-focus-visible:outline-offset-2"
              ].join(" "),
              children: indeterminate ? /* @__PURE__ */ jsx3(Minus, { size: iconSize, strokeWidth: 3 }) : checked ? /* @__PURE__ */ jsx3(Check, { size: iconSize, strokeWidth: 3 }) : null
            }
          )
        ] }),
        label && /* @__PURE__ */ jsx3("span", { className: "text-[length:var(--ds-text-sm)] text-[var(--ds-text-primary)]", children: label })
      ]
    }
  );
});
Checkbox.displayName = "Checkbox";
var Checkbox_default = Checkbox;

// src/components/Toggle/Toggle.js
import { forwardRef as forwardRef4, useId as useId3 } from "react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var sizes2 = {
  sm: { track: "w-8 h-4", thumb: "w-3 h-3", translate: "translate-x-4" },
  md: { track: "w-11 h-6", thumb: "w-5 h-5", translate: "translate-x-5" },
  lg: { track: "w-14 h-7", thumb: "w-6 h-6", translate: "translate-x-7" }
};
var Toggle = forwardRef4(function Toggle2({
  label,
  checked = false,
  disabled = false,
  size = "md",
  onChange,
  id: idProp,
  className = "",
  ...props
}, ref) {
  const autoId = useId3();
  const id = idProp || autoId;
  const s = sizes2[size];
  return /* @__PURE__ */ jsxs4(
    "label",
    {
      htmlFor: id,
      className: [
        "inline-flex items-center gap-3 cursor-pointer select-none",
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ jsxs4("span", { className: "relative inline-flex items-center", children: [
          /* @__PURE__ */ jsx4(
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
          ),
          /* @__PURE__ */ jsx4(
            "span",
            {
              className: [
                s.track,
                "rounded-full transition-colors duration-[var(--ds-duration-normal)]",
                "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-[var(--ds-focus-ring-color)] peer-focus-visible:outline-offset-2",
                checked ? "bg-[var(--ds-bg-brand)]" : "bg-[var(--ds-border-secondary)]"
              ].join(" ")
            }
          ),
          /* @__PURE__ */ jsx4(
            "span",
            {
              className: [
                s.thumb,
                "absolute left-0.5 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-sm",
                "transition-transform duration-[var(--ds-duration-normal)]",
                checked ? s.translate : "translate-x-0"
              ].join(" ")
            }
          )
        ] }),
        label && /* @__PURE__ */ jsx4("span", { className: "text-[length:var(--ds-text-sm)] text-[var(--ds-text-primary)]", children: label })
      ]
    }
  );
});
Toggle.displayName = "Toggle";
var Toggle_default = Toggle;

// src/components/Select/Select.js
import { forwardRef as forwardRef5, useId as useId4 } from "react";
import { ChevronDown } from "lucide-react";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var sizeStyles2 = {
  sm: "h-[var(--ds-size-sm)] text-[length:var(--ds-text-xs)] pl-2.5 pr-8",
  md: "h-[var(--ds-size-md)] text-[length:var(--ds-text-sm)] pl-3 pr-10",
  lg: "h-[var(--ds-size-lg)] text-[length:var(--ds-text-md)] pl-4 pr-12"
};
var Select = forwardRef5(function Select2({
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
  const autoId = useId4();
  const id = idProp || autoId;
  const hasError = !!errorText;
  const borderColor = hasError ? "var(--ds-border-error)" : "var(--ds-input-border)";
  return /* @__PURE__ */ jsxs5("div", { className: ["flex flex-col gap-1.5", wrapperClassName].filter(Boolean).join(" "), children: [
    label && /* @__PURE__ */ jsxs5(
      "label",
      {
        htmlFor: id,
        className: "text-[length:var(--ds-text-sm)] font-medium text-[var(--ds-text-primary)]",
        children: [
          label,
          required && /* @__PURE__ */ jsx5("span", { className: "text-[var(--ds-text-danger)] ml-0.5", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs5("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs5(
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
          ...props,
          children: [
            placeholder && /* @__PURE__ */ jsx5("option", { value: "", disabled: true, children: placeholder }),
            options.map((opt) => {
              const val = typeof opt === "string" ? opt : opt.value;
              const lbl = typeof opt === "string" ? opt : opt.label;
              return /* @__PURE__ */ jsx5("option", { value: val, children: lbl }, val);
            })
          ]
        }
      ),
      /* @__PURE__ */ jsx5(
        ChevronDown,
        {
          size: 16,
          className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none",
          style: { color: "var(--ds-icon-secondary)" }
        }
      )
    ] }),
    (errorText || helperText) && /* @__PURE__ */ jsx5(
      "p",
      {
        className: "text-[length:var(--ds-text-xs)]",
        style: { color: hasError ? "var(--ds-text-danger)" : "var(--ds-text-secondary)" },
        children: errorText || helperText
      }
    )
  ] });
});
Select.displayName = "Select";
var Select_default = Select;

// src/components/Tag/Tag.js
import { forwardRef as forwardRef6 } from "react";
import { X } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
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
var Tag = forwardRef6(function Tag2({
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
  return /* @__PURE__ */ jsxs6(
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
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx6("span", { className: "shrink-0 flex items-center", children: icon }),
        /* @__PURE__ */ jsx6("span", { children }),
        dismissible && /* @__PURE__ */ jsx6(
          "button",
          {
            type: "button",
            onClick: onDismiss,
            className: "shrink-0 rounded-full p-0.5 hover:bg-black/10 transition-colors cursor-pointer",
            "aria-label": "Remove",
            children: /* @__PURE__ */ jsx6(X, { size: size === "sm" ? 10 : 12 })
          }
        )
      ]
    }
  );
});
Tag.displayName = "Tag";
var Tag_default = Tag;

// src/components/Notification/Notification.js
import { forwardRef as forwardRef7, useState, useEffect } from "react";
import { X as X2, CheckCircle2 as CheckCircle22, AlertTriangle, AlertCircle as AlertCircle2, Info } from "lucide-react";
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var typeConfig = {
  success: {
    icon: CheckCircle22,
    bg: "var(--ds-bg-success)",
    border: "var(--ds-border-success)",
    iconColor: "var(--ds-icon-success)",
    text: "var(--ds-text-success)"
  },
  warning: {
    icon: AlertTriangle,
    bg: "var(--ds-bg-warning)",
    border: "var(--ds-border-warning)",
    iconColor: "var(--ds-icon-warning)",
    text: "var(--ds-text-warning)"
  },
  error: {
    icon: AlertCircle2,
    bg: "var(--ds-bg-error)",
    border: "var(--ds-border-error)",
    iconColor: "var(--ds-icon-danger)",
    text: "var(--ds-text-danger)"
  },
  info: {
    icon: Info,
    bg: "var(--ds-bg-info)",
    border: "var(--ds-border-info)",
    iconColor: "var(--ds-icon-info)",
    text: "var(--ds-text-info)"
  }
};
var Notification = forwardRef7(function Notification2({
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
  return /* @__PURE__ */ jsxs7(
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
      ...props,
      children: [
        /* @__PURE__ */ jsx7(Icon, { size: 20, className: "shrink-0 mt-0.5", style: { color: config.iconColor } }),
        /* @__PURE__ */ jsxs7("div", { className: "flex-1 min-w-0", children: [
          title && /* @__PURE__ */ jsx7("p", { className: "font-semibold text-[length:var(--ds-text-sm)]", style: { color: config.text }, children: title }),
          children && /* @__PURE__ */ jsx7("div", { className: "text-[length:var(--ds-text-sm)] text-[var(--ds-text-secondary)] mt-1", children })
        ] }),
        dismissible && /* @__PURE__ */ jsx7(
          "button",
          {
            type: "button",
            onClick: onDismiss,
            className: "shrink-0 p-1 rounded-[var(--ds-radius-sm)] hover:bg-black/10 transition-colors cursor-pointer",
            "aria-label": "Dismiss",
            children: /* @__PURE__ */ jsx7(X2, { size: 16, style: { color: config.iconColor } })
          }
        )
      ]
    }
  );
});
function Toast({ type = "info", title, children, duration = 5e3, onClose, visible = true }) {
  const [show, setShow] = useState(visible);
  const config = typeConfig[type];
  const Icon = config.icon;
  useEffect(() => {
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
  return /* @__PURE__ */ jsx7(
    "div",
    {
      role: "alert",
      className: "fixed bottom-6 right-6 max-w-sm w-full animate-in slide-in-from-right",
      style: { zIndex: "var(--ds-z-toast)" },
      children: /* @__PURE__ */ jsxs7(
        "div",
        {
          className: "flex gap-3 p-4 rounded-[var(--ds-radius-lg)] shadow-[var(--ds-shadow-lg)] border",
          style: {
            backgroundColor: "var(--ds-bg-primary)",
            borderColor: "var(--ds-border-primary)"
          },
          children: [
            /* @__PURE__ */ jsx7(Icon, { size: 20, className: "shrink-0 mt-0.5", style: { color: config.iconColor } }),
            /* @__PURE__ */ jsxs7("div", { className: "flex-1 min-w-0", children: [
              title && /* @__PURE__ */ jsx7("p", { className: "font-semibold text-[length:var(--ds-text-sm)] text-[var(--ds-text-primary)]", children: title }),
              children && /* @__PURE__ */ jsx7("div", { className: "text-[length:var(--ds-text-sm)] text-[var(--ds-text-secondary)] mt-1", children })
            ] }),
            /* @__PURE__ */ jsx7(
              "button",
              {
                type: "button",
                onClick: () => {
                  setShow(false);
                  onClose == null ? void 0 : onClose();
                },
                className: "shrink-0 p-1 rounded-[var(--ds-radius-sm)] hover:bg-[var(--ds-bg-hover)] transition-colors cursor-pointer",
                "aria-label": "Close",
                children: /* @__PURE__ */ jsx7(X2, { size: 16, style: { color: "var(--ds-icon-secondary)" } })
              }
            )
          ]
        }
      )
    }
  );
}
function Banner({ type = "info", children, dismissible = true, onDismiss, className = "" }) {
  const config = typeConfig[type];
  const Icon = config.icon;
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      role: "alert",
      className: ["flex items-center gap-3 px-4 py-3", className].join(" "),
      style: {
        backgroundColor: config.bg,
        borderBottom: `1px solid ${config.border}`
      },
      children: [
        /* @__PURE__ */ jsx7(Icon, { size: 18, className: "shrink-0", style: { color: config.iconColor } }),
        /* @__PURE__ */ jsx7("div", { className: "flex-1 text-[length:var(--ds-text-sm)]", style: { color: config.text }, children }),
        dismissible && /* @__PURE__ */ jsx7(
          "button",
          {
            type: "button",
            onClick: onDismiss,
            className: "shrink-0 p-1 rounded-[var(--ds-radius-sm)] hover:bg-black/10 transition-colors cursor-pointer",
            "aria-label": "Dismiss",
            children: /* @__PURE__ */ jsx7(X2, { size: 16, style: { color: config.iconColor } })
          }
        )
      ]
    }
  );
}
Notification.displayName = "Notification";
Toast.displayName = "Toast";
Banner.displayName = "Banner";
var Notification_default = Notification;

// src/components/Loading/Loading.js
import { forwardRef as forwardRef8 } from "react";
import { Loader2 as Loader22 } from "lucide-react";
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var Spinner = forwardRef8(function Spinner2({ size = "md", label = "Loading...", className = "", ...props }, ref) {
  const sizes4 = { sm: 16, md: 24, lg: 32, xl: 48 };
  const px = sizes4[size] || sizes4.md;
  return /* @__PURE__ */ jsxs8(
    "span",
    {
      ref,
      role: "status",
      className: ["inline-flex items-center gap-2", className].join(" "),
      ...props,
      children: [
        /* @__PURE__ */ jsx8(
          Loader22,
          {
            size: px,
            className: "animate-spin",
            style: { color: "var(--ds-icon-brand)" }
          }
        ),
        label && /* @__PURE__ */ jsx8("span", { className: "ds-sr-only", children: label })
      ]
    }
  );
});
var Skeleton = forwardRef8(function Skeleton2({ width, height, variant = "rectangular", className = "", style: styleProp = {}, ...props }, ref) {
  const radiusMap = {
    rectangular: "var(--ds-radius-md)",
    circular: "50%",
    text: "var(--ds-radius-sm)"
  };
  return /* @__PURE__ */ jsx8(
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
  return /* @__PURE__ */ jsx8("div", { className: ["flex flex-col gap-2", className].join(" "), children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsx8(
    Skeleton,
    {
      variant: "text",
      height: "0.875rem",
      width: i === lines - 1 ? "60%" : "100%"
    },
    i
  )) });
}
function TableSkeleton({ rows = 5, columns = 4, className = "" }) {
  return /* @__PURE__ */ jsxs8("div", { className: ["w-full", className].join(" "), children: [
    /* @__PURE__ */ jsx8(
      "div",
      {
        className: "grid gap-4 p-4 border-b",
        style: {
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          borderColor: "var(--ds-table-border)"
        },
        children: Array.from({ length: columns }).map((_, i) => /* @__PURE__ */ jsx8(Skeleton, { variant: "text", height: "0.75rem", width: "70%" }, i))
      }
    ),
    Array.from({ length: rows }).map((_, rowIdx) => /* @__PURE__ */ jsx8(
      "div",
      {
        className: "grid gap-4 p-4 border-b",
        style: {
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          borderColor: "var(--ds-table-border)"
        },
        children: Array.from({ length: columns }).map((_2, colIdx) => /* @__PURE__ */ jsx8(
          Skeleton,
          {
            variant: "text",
            height: "0.875rem",
            width: `${60 + ((rowIdx * columns + colIdx) * 17 + 7) % 30}%`
          },
          colIdx
        ))
      },
      rowIdx
    ))
  ] });
}
Spinner.displayName = "Spinner";
Skeleton.displayName = "Skeleton";
SkeletonText.displayName = "SkeletonText";
TableSkeleton.displayName = "TableSkeleton";

// src/components/Header/Header.js
import { forwardRef as forwardRef9 } from "react";
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
var Header = forwardRef9(function Header2({
  logo,
  productName = "Product",
  navItems = [],
  actions,
  className = "",
  ...props
}, ref) {
  return /* @__PURE__ */ jsxs9(
    "header",
    {
      ref,
      className: [
        "flex items-center h-14 px-4 border-b shrink-0",
        "bg-[var(--ds-header-bg)] border-[var(--ds-header-border)]",
        className
      ].join(" "),
      style: { zIndex: "var(--ds-z-fixed)" },
      ...props,
      children: [
        /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-3 mr-8", children: [
          logo && /* @__PURE__ */ jsx9("span", { className: "shrink-0", children: logo }),
          /* @__PURE__ */ jsx9("span", { className: "text-[length:var(--ds-text-md)] font-semibold text-[var(--ds-text-primary)] whitespace-nowrap", children: productName })
        ] }),
        /* @__PURE__ */ jsx9("nav", { className: "hidden md:flex items-center gap-1 flex-1", children: navItems.map((item) => /* @__PURE__ */ jsxs9(
          "a",
          {
            href: item.href || "#",
            onClick: item.onClick,
            className: [
              "ds-focus-ring px-3 py-1.5 rounded-[var(--ds-radius-md)] text-[length:var(--ds-text-sm)] font-medium",
              "transition-colors duration-[var(--ds-duration-normal)]",
              item.active ? "bg-[var(--ds-bg-selected)] text-[var(--ds-text-brand)]" : "text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)] hover:bg-[var(--ds-bg-hover)]"
            ].join(" "),
            children: [
              item.icon && /* @__PURE__ */ jsx9("span", { className: "mr-1.5 inline-flex", children: item.icon }),
              item.label
            ]
          },
          item.label
        )) }),
        actions && /* @__PURE__ */ jsx9("div", { className: "flex items-center gap-2 ml-auto", children: actions })
      ]
    }
  );
});
Header.displayName = "Header";
var Header_default = Header;

// src/components/SideNav/SideNav.js
import { forwardRef as forwardRef10, useState as useState2 } from "react";
import { ChevronDown as ChevronDown2, ChevronRight } from "lucide-react";
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
function NavItem({ item, collapsed, depth = 0 }) {
  const [expanded, setExpanded] = useState2(item.defaultExpanded || false);
  const hasChildren = item.children && item.children.length > 0;
  const handleClick = (e) => {
    var _a;
    if (hasChildren) {
      e.preventDefault();
      setExpanded(!expanded);
    }
    (_a = item.onClick) == null ? void 0 : _a.call(item, e);
  };
  return /* @__PURE__ */ jsxs10("li", { children: [
    /* @__PURE__ */ jsxs10(
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
        style: { paddingLeft: collapsed ? void 0 : `${12 + depth * 12}px` },
        children: [
          item.icon && /* @__PURE__ */ jsx10("span", { className: "shrink-0 w-5 h-5 flex items-center justify-center", children: item.icon }),
          !collapsed && /* @__PURE__ */ jsx10("span", { className: "flex-1 truncate", children: item.label }),
          !collapsed && item.badge && /* @__PURE__ */ jsx10(
            "span",
            {
              className: "text-[length:var(--ds-text-xs)] px-1.5 py-0.5 rounded-full font-medium",
              style: {
                backgroundColor: "var(--ds-bg-brand)",
                color: "var(--ds-text-on-brand)"
              },
              children: item.badge
            }
          ),
          !collapsed && hasChildren && /* @__PURE__ */ jsx10("span", { className: "shrink-0", children: expanded ? /* @__PURE__ */ jsx10(ChevronDown2, { size: 14 }) : /* @__PURE__ */ jsx10(ChevronRight, { size: 14 }) })
        ]
      }
    ),
    !collapsed && hasChildren && expanded && /* @__PURE__ */ jsx10("ul", { className: "mt-0.5", children: item.children.map((child) => /* @__PURE__ */ jsx10(NavItem, { item: child, collapsed, depth: depth + 1 }, child.label)) })
  ] });
}
var SideNav = forwardRef10(function SideNav2({
  items = [],
  header,
  footer,
  collapsed = false,
  className = "",
  ...props
}, ref) {
  return /* @__PURE__ */ jsxs10(
    "aside",
    {
      ref,
      className: [
        "flex flex-col h-full shrink-0 bg-[var(--ds-sidebar-bg)] ds-scrollbar overflow-y-auto",
        "transition-[width] duration-[var(--ds-duration-slow)]",
        collapsed ? "w-16" : "w-60",
        className
      ].join(" "),
      ...props,
      children: [
        header && /* @__PURE__ */ jsx10("div", { className: "p-3 border-b shrink-0", style: { borderColor: "var(--ds-sidebar-border)" }, children: header }),
        /* @__PURE__ */ jsx10("nav", { className: "flex-1 p-2", children: /* @__PURE__ */ jsx10("ul", { className: "flex flex-col gap-0.5", children: items.map((item) => {
          if (item.divider) {
            return /* @__PURE__ */ jsxs10("li", { className: "my-2", children: [
              !collapsed && item.label && /* @__PURE__ */ jsx10("span", { className: "px-3 text-[length:11px] font-semibold uppercase tracking-[var(--ds-tracking-widest)] text-[color:var(--ds-sidebar-text)] opacity-80", children: item.label }),
              /* @__PURE__ */ jsx10("div", { className: "mt-1 border-t", style: { borderColor: "var(--ds-sidebar-border)" } })
            ] }, item.label || "divider");
          }
          return /* @__PURE__ */ jsx10(NavItem, { item, collapsed }, item.label);
        }) }) }),
        footer && /* @__PURE__ */ jsx10("div", { className: "p-3 border-t shrink-0", style: { borderColor: "var(--ds-sidebar-border)" }, children: footer })
      ]
    }
  );
});
SideNav.displayName = "SideNav";
var SideNav_default = SideNav;

// src/components/Breadcrumb/Breadcrumb.js
import { forwardRef as forwardRef11 } from "react";
import { ChevronRight as ChevronRight2 } from "lucide-react";
import { Fragment as Fragment2, jsx as jsx11, jsxs as jsxs11 } from "react/jsx-runtime";
var Breadcrumb = forwardRef11(function Breadcrumb2({ items = [], separator, className = "", ...props }, ref) {
  const SeparatorIcon = separator || /* @__PURE__ */ jsx11(ChevronRight2, { size: 14, style: { color: "var(--ds-text-tertiary)" } });
  return /* @__PURE__ */ jsx11("nav", { ref, "aria-label": "Breadcrumb", className, ...props, children: /* @__PURE__ */ jsx11("ol", { className: "flex items-center gap-1.5 flex-wrap", children: items.map((item, index) => {
    const isLast = index === items.length - 1;
    return /* @__PURE__ */ jsx11("li", { className: "flex items-center gap-1.5", children: isLast ? /* @__PURE__ */ jsxs11(
      "span",
      {
        className: "text-[length:var(--ds-text-sm)] font-medium text-[var(--ds-text-primary)]",
        "aria-current": "page",
        children: [
          item.icon && /* @__PURE__ */ jsx11("span", { className: "mr-1 inline-flex align-text-bottom", children: item.icon }),
          item.label
        ]
      }
    ) : /* @__PURE__ */ jsxs11(Fragment2, { children: [
      /* @__PURE__ */ jsxs11(
        "a",
        {
          href: item.href || "#",
          onClick: item.onClick,
          className: "ds-focus-ring text-[length:var(--ds-text-sm)] text-[var(--ds-text-link)] hover:text-[var(--ds-text-link-hover)] hover:underline transition-colors",
          children: [
            item.icon && /* @__PURE__ */ jsx11("span", { className: "mr-1 inline-flex align-text-bottom", children: item.icon }),
            item.label
          ]
        }
      ),
      /* @__PURE__ */ jsx11("span", { className: "flex items-center", "aria-hidden": "true", children: SeparatorIcon })
    ] }) }, item.label);
  }) }) });
});
Breadcrumb.displayName = "Breadcrumb";
var Breadcrumb_default = Breadcrumb;

// src/components/Tabs/Tabs.js
import { forwardRef as forwardRef12, useState as useState3, useId as useId5 } from "react";
import { jsx as jsx12, jsxs as jsxs12 } from "react/jsx-runtime";
var Tabs = forwardRef12(function Tabs2({
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
  const baseId = useId5();
  const [internalTab, setInternalTab] = useState3(defaultActiveTab || ((_a = tabs[0]) == null ? void 0 : _a.id));
  const activeTab = controlledActiveTab ?? internalTab;
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
  return /* @__PURE__ */ jsxs12("div", { ref, className, ...props, children: [
    /* @__PURE__ */ jsx12(
      "div",
      {
        role: "tablist",
        className: [
          "flex",
          variant === "underline" ? "border-b border-[var(--ds-border-primary)]" : "gap-1 p-1 bg-[var(--ds-bg-tertiary)] rounded-[var(--ds-radius-lg)]"
        ].join(" "),
        children: tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return /* @__PURE__ */ jsxs12(
            "button",
            {
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
              ].filter(Boolean).join(" "),
              children: [
                tab.icon && /* @__PURE__ */ jsx12("span", { className: "mr-1.5 inline-flex align-text-bottom", children: tab.icon }),
                tab.label,
                tab.badge !== void 0 && /* @__PURE__ */ jsx12(
                  "span",
                  {
                    className: "ml-2 text-[length:var(--ds-text-xs)] px-1.5 py-0.5 rounded-full",
                    style: {
                      backgroundColor: isActive ? "var(--ds-bg-brand)" : "var(--ds-bg-tertiary)",
                      color: isActive ? "var(--ds-text-on-brand)" : "var(--ds-text-secondary)"
                    },
                    children: tab.badge
                  }
                )
              ]
            },
            tab.id
          );
        })
      }
    ),
    activeContent && /* @__PURE__ */ jsx12(
      "div",
      {
        role: "tabpanel",
        id: `${baseId}-panel-${activeContent.id}`,
        "aria-labelledby": `${baseId}-tab-${activeContent.id}`,
        className: "pt-4",
        children: activeContent.content
      }
    )
  ] });
});
Tabs.displayName = "Tabs";
var Tabs_default = Tabs;

// src/components/Modal/Modal.js
import { forwardRef as forwardRef13, useEffect as useEffect2, useRef, useCallback } from "react";
import { X as X3 } from "lucide-react";
import { createPortal } from "react-dom";
import { jsx as jsx13, jsxs as jsxs13 } from "react/jsx-runtime";
var sizeMap = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-[90vw]"
};
var Modal = forwardRef13(function Modal2({
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
  const overlayRef = useRef(null);
  const handleEsc = useCallback(
    (e) => {
      if (e.key === "Escape" && closeOnEsc) {
        onClose == null ? void 0 : onClose();
      }
    },
    [closeOnEsc, onClose]
  );
  useEffect2(() => {
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
  const modal = /* @__PURE__ */ jsx13(
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
      },
      children: /* @__PURE__ */ jsxs13(
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
          ...props,
          children: [
            (title || showCloseButton) && /* @__PURE__ */ jsxs13("div", { className: "flex items-center justify-between px-6 py-4 border-b border-[var(--ds-border-primary)] shrink-0", children: [
              title && /* @__PURE__ */ jsx13(
                "h2",
                {
                  id: "modal-title",
                  className: "text-[length:var(--ds-text-lg)] font-semibold text-[var(--ds-text-primary)]",
                  children: title
                }
              ),
              showCloseButton && /* @__PURE__ */ jsx13(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "ds-focus-ring p-1.5 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors ml-auto cursor-pointer",
                  "aria-label": "Close dialog",
                  children: /* @__PURE__ */ jsx13(X3, { size: 18, style: { color: "var(--ds-icon-secondary)" } })
                }
              )
            ] }),
            /* @__PURE__ */ jsx13("div", { className: "flex-1 overflow-y-auto px-6 py-4 ds-scrollbar", children }),
            footer && /* @__PURE__ */ jsx13("div", { className: "flex items-center justify-end gap-3 px-6 py-4 border-t border-[var(--ds-border-primary)] shrink-0", children: footer })
          ]
        }
      )
    }
  );
  if (typeof window === "undefined") return null;
  return createPortal(modal, document.body);
});
Modal.displayName = "Modal";
var Modal_default = Modal;

// src/components/Dropdown/Dropdown.js
import { forwardRef as forwardRef14, useState as useState4, useRef as useRef2, useEffect as useEffect3, useId as useId6 } from "react";
import { ChevronDown as ChevronDown3, Check as Check2 } from "lucide-react";
import { jsx as jsx14, jsxs as jsxs14 } from "react/jsx-runtime";
var sizeStyles3 = {
  sm: "h-[var(--ds-size-sm)] text-[length:var(--ds-text-xs)] pl-2.5 pr-8",
  md: "h-[var(--ds-size-md)] text-[length:var(--ds-text-sm)] pl-3 pr-10",
  lg: "h-[var(--ds-size-lg)] text-[length:var(--ds-text-md)] pl-4 pr-12"
};
var Dropdown = forwardRef14(function Dropdown2({
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
  const autoId = useId6();
  const id = idProp || autoId;
  const [isOpen, setIsOpen] = useState4(false);
  const containerRef = useRef2(null);
  const selectedOption = options.find((o) => (typeof o === "string" ? o : o.value) === value);
  const selectedLabel = selectedOption ? typeof selectedOption === "string" ? selectedOption : selectedOption.label : "";
  useEffect3(() => {
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
  return /* @__PURE__ */ jsxs14("div", { ref: containerRef, className: ["flex flex-col gap-1.5 relative", wrapperClassName].join(" "), children: [
    label && /* @__PURE__ */ jsxs14(
      "label",
      {
        htmlFor: id,
        className: "text-[length:var(--ds-text-sm)] font-medium text-[var(--ds-text-primary)]",
        children: [
          label,
          required && /* @__PURE__ */ jsx14("span", { className: "text-[var(--ds-text-danger)] ml-0.5", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs14(
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
        ...props,
        children: [
          /* @__PURE__ */ jsx14("span", { className: "block truncate", children: selectedLabel || placeholder }),
          /* @__PURE__ */ jsx14(
            ChevronDown3,
            {
              size: 16,
              className: [
                "absolute right-3 top-1/2 -translate-y-1/2 transition-transform",
                isOpen ? "rotate-180" : ""
              ].join(" "),
              style: { color: "var(--ds-icon-secondary)" }
            }
          )
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxs14(
      "ul",
      {
        role: "listbox",
        className: "absolute top-full left-0 right-0 mt-1 py-1 rounded-[var(--ds-radius-lg)] border overflow-auto max-h-60 ds-scrollbar",
        style: {
          zIndex: "var(--ds-z-dropdown)",
          backgroundColor: "var(--ds-bg-primary)",
          borderColor: "var(--ds-border-primary)",
          boxShadow: "var(--ds-shadow-lg)"
        },
        children: [
          options.map((opt) => {
            const optValue = typeof opt === "string" ? opt : opt.value;
            const optLabel = typeof opt === "string" ? opt : opt.label;
            const optDisabled = typeof opt === "object" && opt.disabled;
            const isSelected = optValue === value;
            return /* @__PURE__ */ jsxs14(
              "li",
              {
                role: "option",
                "aria-selected": isSelected,
                onClick: () => !optDisabled && handleSelect(optValue),
                className: [
                  "flex items-center gap-2 px-3 py-2 text-[length:var(--ds-text-sm)] cursor-pointer",
                  "transition-colors duration-[var(--ds-duration-fast)]",
                  isSelected ? "bg-[var(--ds-bg-selected)] text-[var(--ds-text-brand)] font-medium" : "text-[var(--ds-text-primary)]",
                  optDisabled ? "opacity-40 cursor-not-allowed" : "hover:bg-[var(--ds-bg-hover)]"
                ].join(" "),
                children: [
                  /* @__PURE__ */ jsx14("span", { className: "flex-1 truncate", children: optLabel }),
                  isSelected && /* @__PURE__ */ jsx14(Check2, { size: 16, style: { color: "var(--ds-icon-brand)" } })
                ]
              },
              optValue
            );
          }),
          options.length === 0 && /* @__PURE__ */ jsx14("li", { className: "px-3 py-2 text-[length:var(--ds-text-sm)] text-[var(--ds-text-tertiary)]", children: "No options available" })
        ]
      }
    ),
    (errorText || helperText) && /* @__PURE__ */ jsx14(
      "p",
      {
        className: "text-[length:var(--ds-text-xs)]",
        style: { color: hasError ? "var(--ds-text-danger)" : "var(--ds-text-secondary)" },
        children: errorText || helperText
      }
    )
  ] });
});
Dropdown.displayName = "Dropdown";
var Dropdown_default = Dropdown;

// src/components/OverflowMenu/OverflowMenu.js
import { forwardRef as forwardRef15, useState as useState5, useRef as useRef3, useEffect as useEffect4 } from "react";
import { MoreVertical } from "lucide-react";
import { jsx as jsx15, jsxs as jsxs15 } from "react/jsx-runtime";
var OverflowMenu = forwardRef15(function OverflowMenu2({
  items = [],
  trigger,
  align = "right",
  size = "md",
  className = "",
  ...props
}, ref) {
  const [isOpen, setIsOpen] = useState5(false);
  const containerRef = useRef3(null);
  useEffect4(() => {
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
  return /* @__PURE__ */ jsxs15("div", { ref: containerRef, className: ["relative inline-flex", className].join(" "), ...props, children: [
    trigger ? /* @__PURE__ */ jsx15("span", { onClick: () => setIsOpen(!isOpen), className: "cursor-pointer", children: trigger }) : /* @__PURE__ */ jsx15(
      "button",
      {
        ref,
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: "ds-focus-ring p-1.5 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors cursor-pointer",
        "aria-label": "More actions",
        "aria-haspopup": "menu",
        "aria-expanded": isOpen,
        children: /* @__PURE__ */ jsx15(MoreVertical, { size: iconSize, style: { color: "var(--ds-icon-secondary)" } })
      }
    ),
    isOpen && /* @__PURE__ */ jsx15(
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
        },
        children: items.map((item, idx) => {
          if (item.divider) {
            return /* @__PURE__ */ jsx15(
              "div",
              {
                className: "my-1 border-t",
                style: { borderColor: "var(--ds-border-primary)" }
              },
              `divider-${idx}`
            );
          }
          return /* @__PURE__ */ jsxs15(
            "button",
            {
              type: "button",
              role: "menuitem",
              disabled: item.disabled,
              onClick: () => handleItemClick(item),
              className: [
                "flex items-center gap-2 w-full px-3 py-2 text-[length:var(--ds-text-sm)] text-left",
                "transition-colors duration-[var(--ds-duration-fast)] cursor-pointer",
                item.danger ? "text-[var(--ds-text-danger)]" : "text-[var(--ds-text-primary)]",
                item.disabled ? "opacity-40 cursor-not-allowed" : item.danger ? "hover:bg-[var(--ds-bg-error)]" : "hover:bg-[var(--ds-bg-hover)]"
              ].join(" "),
              children: [
                item.icon && /* @__PURE__ */ jsx15("span", { className: "shrink-0 w-4 h-4 flex items-center justify-center", children: item.icon }),
                /* @__PURE__ */ jsx15("span", { className: "flex-1", children: item.label }),
                item.shortcut && /* @__PURE__ */ jsx15("span", { className: "text-[length:var(--ds-text-xs)] text-[var(--ds-text-tertiary)]", children: item.shortcut })
              ]
            },
            item.label
          );
        })
      }
    )
  ] });
});
OverflowMenu.displayName = "OverflowMenu";
var OverflowMenu_default = OverflowMenu;

// src/components/DatePicker/DatePicker.js
import { forwardRef as forwardRef16, useState as useState6, useRef as useRef4, useEffect as useEffect5, useMemo, useCallback as useCallback2, useId as useId7 } from "react";
import { Calendar, ChevronLeft, ChevronRight as ChevronRight3 } from "lucide-react";
import { jsx as jsx16, jsxs as jsxs16 } from "react/jsx-runtime";
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
var DatePicker = forwardRef16(function DatePicker2({
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
  const autoId = useId7();
  const id = idProp || autoId;
  const [isOpen, setIsOpen] = useState6(false);
  const containerRef = useRef4(null);
  const today = useMemo(() => /* @__PURE__ */ new Date(), []);
  const initialDate = value ? new Date(value) : today;
  const [viewYear, setViewYear] = useState6(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState6(initialDate.getMonth());
  const [hoverDate, setHoverDate] = useState6(null);
  const [rangeStart, setRangeStart] = useState6(value || null);
  const [rangeEndInternal, setRangeEndInternal] = useState6(rangeEnd || null);
  useEffect5(() => {
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
  const prevMonth = useCallback2(() => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }, [viewMonth]);
  const nextMonth = useCallback2(() => {
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
  return /* @__PURE__ */ jsxs16("div", { ref: containerRef, className: ["flex flex-col gap-1.5 relative", wrapperClassName].join(" "), children: [
    label && /* @__PURE__ */ jsxs16("label", { htmlFor: id, className: "text-[length:var(--ds-text-sm)] font-medium text-[var(--ds-text-primary)]", children: [
      label,
      required && /* @__PURE__ */ jsx16("span", { className: "text-[var(--ds-text-danger)] ml-0.5", children: "*" })
    ] }),
    /* @__PURE__ */ jsxs16(
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
        ...props,
        children: [
          /* @__PURE__ */ jsx16("span", { className: "block truncate", children: displayValue || placeholder }),
          /* @__PURE__ */ jsx16(
            Calendar,
            {
              size: 16,
              className: "absolute right-3 top-1/2 -translate-y-1/2",
              style: { color: "var(--ds-icon-secondary)" }
            }
          )
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxs16(
      "div",
      {
        className: "absolute top-full left-0 mt-1 p-3 rounded-[var(--ds-radius-lg)] border w-[280px]",
        style: {
          zIndex: "var(--ds-z-dropdown)",
          backgroundColor: "var(--ds-bg-primary)",
          borderColor: "var(--ds-border-primary)",
          boxShadow: "var(--ds-shadow-lg)"
        },
        children: [
          /* @__PURE__ */ jsxs16("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsx16(
              "button",
              {
                type: "button",
                onClick: prevMonth,
                className: "p-1 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors cursor-pointer",
                children: /* @__PURE__ */ jsx16(ChevronLeft, { size: 16, style: { color: "var(--ds-icon-primary)" } })
              }
            ),
            /* @__PURE__ */ jsxs16("span", { className: "text-[length:var(--ds-text-sm)] font-semibold text-[var(--ds-text-primary)]", children: [
              MONTHS[viewMonth],
              " ",
              viewYear
            ] }),
            /* @__PURE__ */ jsx16(
              "button",
              {
                type: "button",
                onClick: nextMonth,
                className: "p-1 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors cursor-pointer",
                children: /* @__PURE__ */ jsx16(ChevronRight3, { size: 16, style: { color: "var(--ds-icon-primary)" } })
              }
            )
          ] }),
          /* @__PURE__ */ jsx16("div", { className: "grid grid-cols-7 gap-0 mb-1", children: DAYS.map((d) => /* @__PURE__ */ jsx16("div", { className: "text-center text-[11px] font-medium text-[var(--ds-text-tertiary)] py-1", children: d }, d)) }),
          /* @__PURE__ */ jsxs16("div", { className: "grid grid-cols-7 gap-0", children: [
            Array.from({ length: firstDay }).map((_, i) => /* @__PURE__ */ jsx16("div", {}, `empty-${i}`)),
            Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dateObj = new Date(viewYear, viewMonth, day);
              const isSelected = isSameDay(dateObj, value) || isSameDay(dateObj, rangeEndInternal);
              const isToday = isSameDay(dateObj, today);
              const inRange = isInRange(day);
              const dayDisabled = isDisabledDay(day);
              return /* @__PURE__ */ jsx16(
                "button",
                {
                  type: "button",
                  disabled: dayDisabled,
                  onClick: () => handleDayClick(day),
                  onMouseEnter: () => mode === "range" && rangeStart && !rangeEndInternal && setHoverDate(dateObj),
                  className: [
                    "w-9 h-9 text-[length:var(--ds-text-sm)] rounded-[var(--ds-radius-md)] transition-colors cursor-pointer",
                    isSelected ? "bg-[var(--ds-bg-brand)] text-[var(--ds-text-on-brand)] font-semibold" : inRange ? "bg-[var(--ds-bg-selected)] text-[var(--ds-text-brand)]" : isToday ? "font-semibold text-[var(--ds-text-brand)] bg-[var(--ds-bg-selected)]" : "text-[var(--ds-text-primary)] hover:bg-[var(--ds-bg-hover)]",
                    dayDisabled ? "opacity-30 cursor-not-allowed" : ""
                  ].join(" "),
                  children: day
                },
                day
              );
            })
          ] }),
          /* @__PURE__ */ jsx16("div", { className: "mt-2 pt-2 border-t border-[var(--ds-border-primary)]", children: /* @__PURE__ */ jsx16(
            "button",
            {
              type: "button",
              onClick: () => {
                setViewYear(today.getFullYear());
                setViewMonth(today.getMonth());
                handleDayClick(today.getDate());
              },
              className: "w-full text-[length:var(--ds-text-xs)] text-[var(--ds-text-brand)] hover:underline py-1 cursor-pointer",
              children: "Today"
            }
          ) })
        ]
      }
    ),
    (errorText || helperText) && /* @__PURE__ */ jsx16(
      "p",
      {
        className: "text-[length:var(--ds-text-xs)]",
        style: { color: hasError ? "var(--ds-text-danger)" : "var(--ds-text-secondary)" },
        children: errorText || helperText
      }
    )
  ] });
});
DatePicker.displayName = "DatePicker";
var DatePicker_default = DatePicker;

// src/components/Form/Form.js
import { forwardRef as forwardRef17 } from "react";
import { jsx as jsx17, jsxs as jsxs17 } from "react/jsx-runtime";
var Form = forwardRef17(function Form2({ children, onSubmit, className = "", ...props }, ref) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit == null ? void 0 : onSubmit(e);
  };
  return /* @__PURE__ */ jsx17(
    "form",
    {
      ref,
      onSubmit: handleSubmit,
      className: ["flex flex-col gap-5", className].join(" "),
      noValidate: true,
      ...props,
      children
    }
  );
});
function FormGroup({ legend, children, className = "" }) {
  return /* @__PURE__ */ jsxs17("fieldset", { className: ["flex flex-col gap-4", className].join(" "), children: [
    legend && /* @__PURE__ */ jsx17("legend", { className: "text-[length:var(--ds-text-md)] font-semibold text-[var(--ds-text-primary)] mb-1", children: legend }),
    children
  ] });
}
function FormRow({ children, className = "" }) {
  return /* @__PURE__ */ jsx17("div", { className: ["grid grid-cols-1 md:grid-cols-2 gap-4", className].join(" "), children });
}
function FormActions({ children, align = "right", className = "" }) {
  const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
    between: "justify-between"
  };
  return /* @__PURE__ */ jsx17(
    "div",
    {
      className: [
        "flex items-center gap-3 pt-4 border-t border-[var(--ds-border-primary)]",
        alignClass[align],
        className
      ].join(" "),
      children
    }
  );
}
Form.displayName = "Form";
FormGroup.displayName = "FormGroup";
FormRow.displayName = "FormRow";
FormActions.displayName = "FormActions";
var Form_default = Form;

// src/components/Search/Search.js
import { forwardRef as forwardRef18, useState as useState7, useRef as useRef5, useEffect as useEffect6, useId as useId8, useCallback as useCallback3 } from "react";
import { Search as SearchIcon, X as X4, Loader2 as Loader23 } from "lucide-react";
import { jsx as jsx18, jsxs as jsxs18 } from "react/jsx-runtime";
var sizeStyles4 = {
  sm: "h-[var(--ds-size-sm)] text-[length:var(--ds-text-xs)] pl-8 pr-8",
  md: "h-[var(--ds-size-md)] text-[length:var(--ds-text-sm)] pl-10 pr-10",
  lg: "h-[var(--ds-size-lg)] text-[length:var(--ds-text-md)] pl-12 pr-12"
};
var Search = forwardRef18(function Search2({
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
  const autoId = useId8();
  const id = idProp || autoId;
  const [internalValue, setInternalValue] = useState7("");
  const [showSuggestions, setShowSuggestions] = useState7(false);
  const containerRef = useRef5(null);
  const debounceRef = useRef5(null);
  const searchValue = controlledValue ?? internalValue;
  useEffect6(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleChange = useCallback3((e) => {
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
  return /* @__PURE__ */ jsxs18("div", { ref: containerRef, className: ["relative", wrapperClassName].join(" "), children: [
    /* @__PURE__ */ jsxs18("div", { className: "relative", children: [
      /* @__PURE__ */ jsx18(
        SearchIcon,
        {
          size: iconSize,
          className: "absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none",
          style: { color: "var(--ds-icon-secondary)" }
        }
      ),
      scope && /* @__PURE__ */ jsx18(
        "span",
        {
          className: "absolute left-9 top-1/2 -translate-y-1/2 text-[length:var(--ds-text-xs)] font-medium px-1.5 py-0.5 rounded",
          style: {
            backgroundColor: "var(--ds-bg-tertiary)",
            color: "var(--ds-text-secondary)"
          },
          children: scope
        }
      ),
      /* @__PURE__ */ jsx18(
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
      ),
      /* @__PURE__ */ jsxs18("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1", children: [
        loading && /* @__PURE__ */ jsx18(Loader23, { size: iconSize, className: "animate-spin", style: { color: "var(--ds-icon-secondary)" } }),
        searchValue && !loading && /* @__PURE__ */ jsx18(
          "button",
          {
            type: "button",
            onClick: handleClear,
            className: "p-0.5 rounded hover:bg-[var(--ds-bg-hover)] transition-colors cursor-pointer",
            "aria-label": "Clear search",
            children: /* @__PURE__ */ jsx18(X4, { size: iconSize, style: { color: "var(--ds-icon-secondary)" } })
          }
        )
      ] })
    ] }),
    showSuggestions && suggestions.length > 0 && /* @__PURE__ */ jsx18(
      "ul",
      {
        className: "absolute top-full left-0 right-0 mt-1 py-1 rounded-[var(--ds-radius-lg)] border max-h-60 overflow-auto ds-scrollbar",
        style: {
          zIndex: "var(--ds-z-dropdown)",
          backgroundColor: "var(--ds-bg-primary)",
          borderColor: "var(--ds-border-primary)",
          boxShadow: "var(--ds-shadow-lg)"
        },
        role: "listbox",
        children: suggestions.map((s, i) => {
          const label = typeof s === "string" ? s : s.label;
          const desc = typeof s === "object" ? s.description : null;
          return /* @__PURE__ */ jsxs18(
            "li",
            {
              role: "option",
              onClick: () => handleSuggestionClick(s),
              className: "px-3 py-2 cursor-pointer hover:bg-[var(--ds-bg-hover)] transition-colors",
              children: [
                /* @__PURE__ */ jsx18("div", { className: "text-[length:var(--ds-text-sm)] text-[var(--ds-text-primary)]", children: label }),
                desc && /* @__PURE__ */ jsx18("div", { className: "text-[length:var(--ds-text-xs)] text-[var(--ds-text-secondary)] mt-0.5", children: desc })
              ]
            },
            i
          );
        })
      }
    )
  ] });
});
Search.displayName = "Search";
var Search_default = Search;

// src/components/DataTable/DataTable.js
import { forwardRef as forwardRef20, useState as useState8, useMemo as useMemo3, useCallback as useCallback4 } from "react";
import { ArrowUp, ArrowDown, ArrowUpDown, Check as Check3, X as XIcon } from "lucide-react";

// src/components/Pagination/Pagination.js
import { forwardRef as forwardRef19, useMemo as useMemo2 } from "react";
import { ChevronLeft as ChevronLeft2, ChevronRight as ChevronRight4, ChevronsLeft, ChevronsRight } from "lucide-react";
import { jsx as jsx19, jsxs as jsxs19 } from "react/jsx-runtime";
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
var Pagination = forwardRef19(function Pagination2({
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
  const pages = useMemo2(
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
  return /* @__PURE__ */ jsxs19(
    "div",
    {
      ref,
      className: ["flex items-center justify-between gap-4 flex-wrap", className].join(" "),
      ...props,
      children: [
        /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-4", children: [
          showItemCount && totalItems != null && /* @__PURE__ */ jsxs19("span", { className: "text-[length:var(--ds-text-sm)] text-[var(--ds-text-secondary)]", children: [
            startItem,
            "\u2013",
            endItem,
            " of ",
            totalItems
          ] }),
          showPageSizeSelector && /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx19("span", { className: "text-[length:var(--ds-text-sm)] text-[var(--ds-text-secondary)]", children: "Rows:" }),
            /* @__PURE__ */ jsx19(
              "select",
              {
                value: pageSize,
                onChange: (e) => onPageSizeChange == null ? void 0 : onPageSizeChange(Number(e.target.value)),
                className: "h-7 text-[length:var(--ds-text-xs)] px-2 rounded-[var(--ds-radius-md)] bg-[var(--ds-input-bg)] text-[var(--ds-text-primary)] border cursor-pointer",
                style: { borderColor: "var(--ds-input-border)" },
                children: pageSizeOptions.map((s) => /* @__PURE__ */ jsx19("option", { value: s, children: s }, s))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs19("nav", { className: "flex items-center gap-1", "aria-label": "Pagination", children: [
          /* @__PURE__ */ jsx19(
            "button",
            {
              type: "button",
              onClick: () => handlePage(1),
              disabled: currentPage === 1,
              className: "ds-focus-ring p-1.5 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer",
              "aria-label": "First page",
              children: /* @__PURE__ */ jsx19(ChevronsLeft, { size: 16, style: { color: "var(--ds-icon-primary)" } })
            }
          ),
          /* @__PURE__ */ jsx19(
            "button",
            {
              type: "button",
              onClick: () => handlePage(currentPage - 1),
              disabled: currentPage === 1,
              className: "ds-focus-ring p-1.5 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer",
              "aria-label": "Previous page",
              children: /* @__PURE__ */ jsx19(ChevronLeft2, { size: 16, style: { color: "var(--ds-icon-primary)" } })
            }
          ),
          pages.map(
            (page, idx) => page === "..." ? /* @__PURE__ */ jsx19(
              "span",
              {
                className: "w-8 h-8 flex items-center justify-center text-[length:var(--ds-text-sm)] text-[var(--ds-text-tertiary)]",
                children: "..."
              },
              `ellipsis-${idx}`
            ) : /* @__PURE__ */ jsx19(
              "button",
              {
                type: "button",
                onClick: () => handlePage(page),
                "aria-current": page === currentPage ? "page" : void 0,
                className: [
                  "ds-focus-ring w-8 h-8 flex items-center justify-center rounded-[var(--ds-radius-md)] text-[length:var(--ds-text-sm)] font-medium transition-colors cursor-pointer",
                  page === currentPage ? "bg-[var(--ds-bg-brand)] text-[var(--ds-text-on-brand)]" : "text-[var(--ds-text-primary)] hover:bg-[var(--ds-bg-hover)]"
                ].join(" "),
                children: page
              },
              page
            )
          ),
          /* @__PURE__ */ jsx19(
            "button",
            {
              type: "button",
              onClick: () => handlePage(currentPage + 1),
              disabled: currentPage === totalPages,
              className: "ds-focus-ring p-1.5 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer",
              "aria-label": "Next page",
              children: /* @__PURE__ */ jsx19(ChevronRight4, { size: 16, style: { color: "var(--ds-icon-primary)" } })
            }
          ),
          /* @__PURE__ */ jsx19(
            "button",
            {
              type: "button",
              onClick: () => handlePage(totalPages),
              disabled: currentPage === totalPages,
              className: "ds-focus-ring p-1.5 rounded-[var(--ds-radius-md)] hover:bg-[var(--ds-bg-hover)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer",
              "aria-label": "Last page",
              children: /* @__PURE__ */ jsx19(ChevronsRight, { size: 16, style: { color: "var(--ds-icon-primary)" } })
            }
          )
        ] })
      ]
    }
  );
});
Pagination.displayName = "Pagination";
var Pagination_default = Pagination;

// src/components/DataTable/DataTable.js
import { jsx as jsx20, jsxs as jsxs20 } from "react/jsx-runtime";
var DataTable = forwardRef20(function DataTable2({
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
  const [sortColumn, setSortColumn] = useState8(defaultSortColumn || null);
  const [sortDirection, setSortDirection] = useState8(defaultSortDirection);
  const [currentPage, setCurrentPage] = useState8(1);
  const [pageSize, setPageSize] = useState8(controlledPageSize || defaultPageSize);
  const [editingCell, setEditingCell] = useState8(null);
  const [editValue, setEditValue] = useState8("");
  const sortedData = useMemo3(() => {
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
  const handleSort = useCallback4(
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
    setEditValue(currentValue ?? "");
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
  return /* @__PURE__ */ jsxs20(
    "div",
    {
      ref,
      className: [
        "w-full rounded-[var(--ds-radius-lg)] border overflow-hidden",
        "bg-[var(--ds-bg-primary)] border-[var(--ds-table-border)]",
        className
      ].join(" "),
      ...props,
      children: [
        selectable && selectedRows.length > 0 && batchActions && /* @__PURE__ */ jsxs20(
          "div",
          {
            className: "flex items-center gap-3 px-4 py-2 border-b",
            style: {
              backgroundColor: "var(--ds-bg-selected)",
              borderColor: "var(--ds-table-border)"
            },
            children: [
              /* @__PURE__ */ jsxs20("span", { className: "text-[length:var(--ds-text-sm)] font-medium text-[var(--ds-text-brand)]", children: [
                selectedRows.length,
                " selected"
              ] }),
              /* @__PURE__ */ jsx20("div", { className: "flex items-center gap-2", children: batchActions }),
              /* @__PURE__ */ jsx20(
                "button",
                {
                  type: "button",
                  onClick: () => onSelectionChange == null ? void 0 : onSelectionChange([]),
                  className: "ml-auto text-[length:var(--ds-text-sm)] text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)] cursor-pointer",
                  children: "Clear selection"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx20("div", { className: "overflow-x-auto ds-scrollbar", children: /* @__PURE__ */ jsxs20("table", { className: "w-full border-collapse", children: [
          /* @__PURE__ */ jsx20(
            "thead",
            {
              className: stickyHeader ? "sticky top-0" : "",
              style: { zIndex: stickyHeader ? 10 : void 0 },
              children: /* @__PURE__ */ jsxs20("tr", { style: { backgroundColor: "var(--ds-table-header-bg)" }, children: [
                selectable && /* @__PURE__ */ jsx20("th", { className: `${cellPadding} w-12`, children: /* @__PURE__ */ jsx20(
                  Checkbox_default,
                  {
                    checked: allSelected,
                    indeterminate: someSelected,
                    onChange: handleSelectAll,
                    size: "sm"
                  }
                ) }),
                columns.map((col) => /* @__PURE__ */ jsx20(
                  "th",
                  {
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
                    onClick: () => sortable && col.sortable !== false && handleSort(col.key),
                    children: /* @__PURE__ */ jsxs20("span", { className: "inline-flex items-center gap-1.5", children: [
                      col.header,
                      sortable && col.sortable !== false && /* @__PURE__ */ jsx20("span", { className: "inline-flex", children: sortColumn === col.key ? sortDirection === "asc" ? /* @__PURE__ */ jsx20(ArrowUp, { size: 14 }) : /* @__PURE__ */ jsx20(ArrowDown, { size: 14 }) : /* @__PURE__ */ jsx20(ArrowUpDown, { size: 14, className: "opacity-30" }) })
                    ] })
                  },
                  col.key
                ))
              ] })
            }
          ),
          /* @__PURE__ */ jsxs20("tbody", { children: [
            paginatedData.length === 0 && !loading && /* @__PURE__ */ jsx20("tr", { children: /* @__PURE__ */ jsx20(
              "td",
              {
                colSpan: columns.length + (selectable ? 1 : 0),
                className: "px-4 py-12 text-center text-[length:var(--ds-text-sm)] text-[var(--ds-text-tertiary)]",
                children: emptyMessage
              }
            ) }),
            paginatedData.map((row, rowIdx) => {
              const globalIndex = paginated ? (currentPage - 1) * pageSize + rowIdx : rowIdx;
              const isSelected = selectedRows.includes(globalIndex);
              return /* @__PURE__ */ jsxs20(
                "tr",
                {
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
                  },
                  children: [
                    selectable && /* @__PURE__ */ jsx20(
                      "td",
                      {
                        className: cellPadding,
                        style: { borderBottom: "1px solid var(--ds-table-border)" },
                        children: /* @__PURE__ */ jsx20(
                          Checkbox_default,
                          {
                            checked: isSelected,
                            onChange: () => handleSelectRow(globalIndex),
                            size: "sm"
                          }
                        )
                      }
                    ),
                    columns.map((col) => {
                      const cellValue = row[col.key];
                      const isEditing = (editingCell == null ? void 0 : editingCell.rowIndex) === globalIndex && (editingCell == null ? void 0 : editingCell.columnKey) === col.key;
                      const isEditable = editableColumns.includes(col.key);
                      return /* @__PURE__ */ jsx20(
                        "td",
                        {
                          className: [
                            cellPadding,
                            textSize,
                            "text-[var(--ds-text-primary)]"
                          ].join(" "),
                          style: { borderBottom: "1px solid var(--ds-table-border)" },
                          onDoubleClick: () => {
                            if (isEditable) startEditing(globalIndex, col.key, cellValue);
                          },
                          children: isEditing ? /* @__PURE__ */ jsxs20("div", { className: "flex items-center gap-1", children: [
                            /* @__PURE__ */ jsx20(
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
                            ),
                            /* @__PURE__ */ jsx20("button", { type: "button", onClick: commitEdit, className: "p-0.5 text-[var(--ds-icon-success)] cursor-pointer", children: /* @__PURE__ */ jsx20(Check3, { size: 14 }) }),
                            /* @__PURE__ */ jsx20("button", { type: "button", onClick: cancelEdit, className: "p-0.5 text-[var(--ds-icon-danger)] cursor-pointer", children: /* @__PURE__ */ jsx20(XIcon, { size: 14 }) })
                          ] }) : col.render ? col.render(cellValue, row, globalIndex) : /* @__PURE__ */ jsx20("span", { children: cellValue })
                        },
                        col.key
                      );
                    })
                  ]
                },
                row.id || globalIndex
              );
            })
          ] })
        ] }) }),
        paginated && /* @__PURE__ */ jsx20(
          "div",
          {
            className: "px-4 py-3 border-t",
            style: { borderColor: "var(--ds-table-border)" },
            children: /* @__PURE__ */ jsx20(
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
          }
        )
      ]
    }
  );
});
DataTable.displayName = "DataTable";
var DataTable_default = DataTable;

// src/components/Charts/BarChart.js
import { useState as useState9, useEffect as useEffect7, useMemo as useMemo4 } from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  ReferenceLine
} from "recharts";

// src/components/Charts/chartTheme.js
import { jsx as jsx21, jsxs as jsxs21 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs21(
    "div",
    {
      className: `rounded-[var(--ds-radius-lg)] border p-5 ${className}`,
      style: {
        borderColor: "var(--ds-border-primary)",
        backgroundColor: "var(--ds-bg-primary)",
        ...style
      },
      children: [
        (title || subtitle) && /* @__PURE__ */ jsxs21("div", { className: "mb-4", children: [
          title && /* @__PURE__ */ jsx21(
            "h4",
            {
              className: "text-[length:var(--ds-text-sm)] font-semibold",
              style: { color: "var(--ds-text-primary)" },
              children: title
            }
          ),
          subtitle && /* @__PURE__ */ jsx21(
            "p",
            {
              className: "text-[length:var(--ds-text-xs)] mt-0.5",
              style: { color: "var(--ds-text-secondary)" },
              children: subtitle
            }
          )
        ] }),
        children
      ]
    }
  );
}

// src/components/Charts/BarChart.js
import { jsx as jsx22, jsxs as jsxs22 } from "react/jsx-runtime";
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
  const [isDark, setIsDark] = useState9(false);
  useEffect7(() => {
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
  const percentData = useMemo4(() => {
    if (variant !== "stacked-percent") return null;
    return toPercentData(data, dataKeys);
  }, [variant, data, dataKeys]);
  const waterfallData = useMemo4(() => {
    if (variant !== "waterfall") return null;
    return toWaterfallData(data, dataKeys[0]);
  }, [variant, data, dataKeys]);
  if (variant === "diverging") {
    return /* @__PURE__ */ jsx22(ChartWrapper, { title, subtitle, className, children: /* @__PURE__ */ jsx22(ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ jsxs22(RechartsBarChart, { data, ...rest, children: [
      showGrid && /* @__PURE__ */ jsx22(CartesianGrid, { ...gridProps }),
      /* @__PURE__ */ jsx22(XAxis, { dataKey: xAxisKey, ...axisProps }),
      /* @__PURE__ */ jsx22(YAxis, { ...axisProps }),
      showTooltip && /* @__PURE__ */ jsx22(Tooltip, { ...tooltipProps }),
      shouldShowLegend && /* @__PURE__ */ jsx22(Legend, { ...legendProps }),
      /* @__PURE__ */ jsx22(ReferenceLine, { y: 0, stroke: isDark ? "#6b7280" : "#9ca3af" }),
      dataKeys.map((key) => /* @__PURE__ */ jsx22(Bar, { dataKey: key, radius: verticalRadius, children: data.map((entry, idx) => {
        const val = Number(entry[key]) || 0;
        return /* @__PURE__ */ jsx22(
          Cell,
          {
            fill: val >= 0 ? CHART_COLORS.green[500] : CHART_COLORS.red[500]
          },
          idx
        );
      }) }, key))
    ] }) }) });
  }
  if (variant === "waterfall") {
    return /* @__PURE__ */ jsx22(ChartWrapper, { title, subtitle, className, children: /* @__PURE__ */ jsx22(ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ jsxs22(RechartsBarChart, { data: waterfallData, ...rest, children: [
      showGrid && /* @__PURE__ */ jsx22(CartesianGrid, { ...gridProps }),
      /* @__PURE__ */ jsx22(XAxis, { dataKey: xAxisKey, ...axisProps }),
      /* @__PURE__ */ jsx22(YAxis, { ...axisProps }),
      showTooltip && /* @__PURE__ */ jsx22(
        Tooltip,
        {
          ...tooltipProps,
          formatter: (value, name) => {
            if (name === "__base") return [null, null];
            return [value, dataKeys[0]];
          }
        }
      ),
      /* @__PURE__ */ jsx22(Bar, { dataKey: "__base", stackId: "waterfall", fill: "transparent", radius: 0 }),
      /* @__PURE__ */ jsx22(Bar, { dataKey: "__value", stackId: "waterfall", radius: verticalRadius, children: waterfallData.map((entry, idx) => {
        let fill = CHART_COLORS.blue[500];
        if (!entry.__isTotal) {
          fill = (entry.__rawValue ?? 0) >= 0 ? CHART_COLORS.green[500] : CHART_COLORS.red[500];
        }
        return /* @__PURE__ */ jsx22(Cell, { fill }, idx);
      }) })
    ] }) }) });
  }
  if (variant === "stacked-percent") {
    return /* @__PURE__ */ jsx22(ChartWrapper, { title, subtitle, className, children: /* @__PURE__ */ jsx22(ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ jsxs22(RechartsBarChart, { data: percentData, ...rest, children: [
      showGrid && /* @__PURE__ */ jsx22(CartesianGrid, { ...gridProps }),
      /* @__PURE__ */ jsx22(XAxis, { dataKey: xAxisKey, ...axisProps }),
      /* @__PURE__ */ jsx22(YAxis, { ...axisProps, domain: [0, 100], tickFormatter: (v) => `${v}%` }),
      showTooltip && /* @__PURE__ */ jsx22(
        Tooltip,
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
      ),
      shouldShowLegend && /* @__PURE__ */ jsx22(Legend, { ...legendProps }),
      dataKeys.map((key, i) => /* @__PURE__ */ jsx22(
        Bar,
        {
          dataKey: key,
          stackId: "stack",
          fill: palette[i % palette.length],
          radius: i === dataKeys.length - 1 ? verticalRadius : 0
        },
        key
      ))
    ] }) }) });
  }
  if (isHorizontal) {
    return /* @__PURE__ */ jsx22(ChartWrapper, { title, subtitle, className, children: /* @__PURE__ */ jsx22(ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ jsxs22(RechartsBarChart, { data, layout: "vertical", ...rest, children: [
      showGrid && /* @__PURE__ */ jsx22(CartesianGrid, { ...gridProps, horizontal: false, vertical: true }),
      /* @__PURE__ */ jsx22(XAxis, { type: "number", ...axisProps }),
      /* @__PURE__ */ jsx22(YAxis, { type: "category", dataKey: xAxisKey, ...axisProps, width: 80 }),
      showTooltip && /* @__PURE__ */ jsx22(Tooltip, { ...tooltipProps }),
      shouldShowLegend && /* @__PURE__ */ jsx22(Legend, { ...legendProps }),
      dataKeys.map((key, i) => /* @__PURE__ */ jsx22(
        Bar,
        {
          dataKey: key,
          fill: palette[i % palette.length],
          radius: horizontalRadius
        },
        key
      ))
    ] }) }) });
  }
  const stackId = isStacked ? "stack" : void 0;
  return /* @__PURE__ */ jsx22(ChartWrapper, { title, subtitle, className, children: /* @__PURE__ */ jsx22(ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ jsxs22(RechartsBarChart, { data, ...rest, children: [
    showGrid && /* @__PURE__ */ jsx22(CartesianGrid, { ...gridProps }),
    /* @__PURE__ */ jsx22(XAxis, { dataKey: xAxisKey, ...axisProps }),
    /* @__PURE__ */ jsx22(YAxis, { ...axisProps }),
    showTooltip && /* @__PURE__ */ jsx22(Tooltip, { ...tooltipProps }),
    shouldShowLegend && /* @__PURE__ */ jsx22(Legend, { ...legendProps }),
    dataKeys.map((key, i) => /* @__PURE__ */ jsx22(
      Bar,
      {
        dataKey: key,
        stackId,
        fill: palette[i % palette.length],
        radius: isStacked ? i === dataKeys.length - 1 ? verticalRadius : 0 : verticalRadius
      },
      key
    ))
  ] }) }) });
}

// src/components/Charts/LineChart.js
import { useState as useState10, useEffect as useEffect8 } from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis as XAxis2,
  YAxis as YAxis2,
  CartesianGrid as CartesianGrid2,
  Tooltip as Tooltip2,
  Legend as Legend2,
  ResponsiveContainer as ResponsiveContainer2,
  ReferenceLine as ReferenceLine2
} from "recharts";
import { jsx as jsx23, jsxs as jsxs23 } from "react/jsx-runtime";
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
  const [isDark, setIsDark] = useState10(false);
  useEffect8(() => {
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
    return /* @__PURE__ */ jsx23(
      Line,
      {
        type: getLineType(),
        dataKey: key,
        stroke: color,
        strokeWidth,
        strokeDasharray: isDashed ? "8 4" : void 0,
        strokeOpacity: isDashed ? 0.6 : 1,
        dot: showDots ? DOT_PROPS : false,
        activeDot: showDots ? ACTIVE_DOT_PROPS : false
      },
      key
    );
  });
  return /* @__PURE__ */ jsx23(ChartWrapper, { title, subtitle, className, children: /* @__PURE__ */ jsx23(ResponsiveContainer2, { width: "100%", height, children: /* @__PURE__ */ jsxs23(RechartsLineChart, { data, children: [
    showGrid && /* @__PURE__ */ jsx23(CartesianGrid2, { ...getGridProps(isDark) }),
    /* @__PURE__ */ jsx23(XAxis2, { dataKey: xAxisKey, ...getAxisProps(isDark) }),
    /* @__PURE__ */ jsx23(YAxis2, { ...getAxisProps(isDark) }),
    showTooltip && /* @__PURE__ */ jsx23(Tooltip2, { ...getTooltipProps(isDark) }),
    legendVisible && /* @__PURE__ */ jsx23(Legend2, { ...getLegendProps(isDark) }),
    variant === "with-threshold" && thresholdValue != null && /* @__PURE__ */ jsx23(
      ReferenceLine2,
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
    ),
    renderLines()
  ] }) }) });
}

// src/components/Charts/AreaChart.js
import { useState as useState11, useEffect as useEffect9 } from "react";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis as XAxis3,
  YAxis as YAxis3,
  CartesianGrid as CartesianGrid3,
  Tooltip as Tooltip3,
  Legend as Legend3,
  ResponsiveContainer as ResponsiveContainer3
} from "recharts";
import { Fragment as Fragment3, jsx as jsx24, jsxs as jsxs24 } from "react/jsx-runtime";
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
  const [isDark, setIsDark] = useState11(false);
  useEffect9(() => {
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
      return /* @__PURE__ */ jsx24("defs", { children: /* @__PURE__ */ jsxs24("linearGradient", { id: "area-gradient-0", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsx24("stop", { offset: "0%", stopColor: color, stopOpacity: 0.2 }),
        /* @__PURE__ */ jsx24("stop", { offset: "100%", stopColor: color, stopOpacity: 0.02 })
      ] }) });
    }
    if (variant === "gradient") {
      const color = palette[0];
      return /* @__PURE__ */ jsx24("defs", { children: /* @__PURE__ */ jsxs24("linearGradient", { id: "area-gradient-prominent-0", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsx24("stop", { offset: "0%", stopColor: color, stopOpacity: 0.6 }),
        /* @__PURE__ */ jsx24("stop", { offset: "100%", stopColor: color, stopOpacity: 0.05 })
      ] }) });
    }
    return null;
  };
  const renderAreas = () => {
    if (variant === "single") {
      const color = palette[0];
      const key = dataKeys[0];
      return /* @__PURE__ */ jsx24(
        Area,
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
        return /* @__PURE__ */ jsx24(
          Area,
          {
            type: "monotone",
            dataKey: key,
            stackId: "stack",
            stroke: color,
            strokeWidth,
            fill: color,
            fillOpacity: 0.4
          },
          key
        );
      });
    }
    if (variant === "gradient") {
      const color = palette[0];
      const key = dataKeys[0];
      return /* @__PURE__ */ jsx24(
        Area,
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
      return /* @__PURE__ */ jsxs24(Fragment3, { children: [
        /* @__PURE__ */ jsx24(
          Area,
          {
            type: "monotone",
            dataKey: rangeKeys.lower,
            stackId: "range",
            stroke: "transparent",
            fill: "transparent",
            fillOpacity: 0
          }
        ),
        /* @__PURE__ */ jsx24(
          Area,
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
        ),
        dataKeys[0] && /* @__PURE__ */ jsx24(
          Area,
          {
            type: "monotone",
            dataKey: dataKeys[0],
            stroke: CHART_COLORS.blue[600],
            strokeWidth,
            fill: "none",
            dot: { r: 3, fill: CHART_COLORS.blue[600] },
            name: dataKeys[0]
          }
        )
      ] });
    }
    return dataKeys.map((key, index) => {
      const color = palette[index % palette.length];
      return /* @__PURE__ */ jsx24(
        Area,
        {
          type: "monotone",
          dataKey: key,
          stroke: color,
          strokeWidth,
          fill: color,
          fillOpacity: 0.2
        },
        key
      );
    });
  };
  return /* @__PURE__ */ jsx24(ChartWrapper, { title, subtitle, className, children: /* @__PURE__ */ jsx24(ResponsiveContainer3, { width: "100%", height, children: /* @__PURE__ */ jsxs24(RechartsAreaChart, { data: chartData, children: [
    renderDefs(),
    showGrid && /* @__PURE__ */ jsx24(CartesianGrid3, { ...getGridProps(isDark) }),
    /* @__PURE__ */ jsx24(XAxis3, { dataKey: xAxisKey, ...getAxisProps(isDark) }),
    /* @__PURE__ */ jsx24(
      YAxis3,
      {
        ...getAxisProps(isDark),
        ...variant === "stacked-percent" ? { domain: [0, 100], tickFormatter: (v) => `${v}%` } : {}
      }
    ),
    showTooltip && /* @__PURE__ */ jsx24(
      Tooltip3,
      {
        ...getTooltipProps(isDark),
        ...variant === "stacked-percent" ? { formatter: (value) => `${value.toFixed(1)}%` } : {}
      }
    ),
    legendVisible && /* @__PURE__ */ jsx24(Legend3, { ...getLegendProps(isDark) }),
    renderAreas()
  ] }) }) });
}

// src/components/Charts/PieChart.js
import { useState as useState12, useEffect as useEffect10 } from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell as Cell2,
  Tooltip as Tooltip4,
  Legend as Legend4,
  ResponsiveContainer as ResponsiveContainer4,
  Sector
} from "recharts";
import { jsx as jsx25, jsxs as jsxs25 } from "react/jsx-runtime";
var RADIAN = Math.PI / 180;
function renderCustomizedLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }) {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return /* @__PURE__ */ jsx25(
    "text",
    {
      x,
      y,
      fill: "#fff",
      textAnchor: "middle",
      dominantBaseline: "central",
      fontSize: 12,
      fontWeight: 600,
      children: `${(percent * 100).toFixed(0)}%`
    }
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
  return /* @__PURE__ */ jsxs25("g", { children: [
    /* @__PURE__ */ jsx25(
      Sector,
      {
        cx,
        cy,
        innerRadius,
        outerRadius: outerRadius + 6,
        startAngle,
        endAngle,
        fill
      }
    ),
    innerRadius > 0 && /* @__PURE__ */ jsx25(
      Sector,
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
    )
  ] });
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
  const [isDark, setIsDark] = useState12(false);
  const [activeIndex, setActiveIndex] = useState12(-1);
  useEffect10(() => {
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
    return /* @__PURE__ */ jsxs25("g", { children: [
      centerValue != null && /* @__PURE__ */ jsx25(
        "text",
        {
          x: cx,
          y: centerLabel ? cy - 10 : cy,
          textAnchor: "middle",
          dominantBaseline: "central",
          fill: isDark ? "#f9fafb" : "#111827",
          fontSize: 24,
          fontWeight: 700,
          children: centerValue
        }
      ),
      centerLabel && /* @__PURE__ */ jsx25(
        "text",
        {
          x: cx,
          y: centerValue != null ? cy + 16 : cy,
          textAnchor: "middle",
          dominantBaseline: "central",
          fill: isDark ? "#9ca3af" : "#6b7280",
          fontSize: 12,
          children: centerLabel
        }
      )
    ] });
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
        return /* @__PURE__ */ jsx25(ResponsiveContainer4, { width: "100%", height, children: /* @__PURE__ */ jsxs25(RechartsPieChart, { children: [
          /* @__PURE__ */ jsx25(
            Pie,
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
              labelLine: false,
              children: data.map((entry, index) => /* @__PURE__ */ jsx25(Cell2, { fill: resolvedColors[index] }, `cell-${index}`))
            }
          ),
          showTooltip && /* @__PURE__ */ jsx25(Tooltip4, { ...tooltipProps }),
          showLegend && /* @__PURE__ */ jsx25(Legend4, { ...legendProps })
        ] }) });
      case "donut":
        return /* @__PURE__ */ jsx25(ResponsiveContainer4, { width: "100%", height, children: /* @__PURE__ */ jsxs25(RechartsPieChart, { children: [
          /* @__PURE__ */ jsx25(
            Pie,
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
              labelLine: false,
              children: data.map((entry, index) => /* @__PURE__ */ jsx25(Cell2, { fill: resolvedColors[index] }, `cell-${index}`))
            }
          ),
          renderCenterText("50%", height / 2 - (showLegend ? 15 : 0)),
          showTooltip && /* @__PURE__ */ jsx25(Tooltip4, { ...tooltipProps }),
          showLegend && /* @__PURE__ */ jsx25(Legend4, { ...legendProps })
        ] }) });
      case "semi":
        return /* @__PURE__ */ jsx25(ResponsiveContainer4, { width: "100%", height, children: /* @__PURE__ */ jsxs25(RechartsPieChart, { children: [
          /* @__PURE__ */ jsx25(
            Pie,
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
              labelLine: false,
              children: data.map((entry, index) => /* @__PURE__ */ jsx25(Cell2, { fill: resolvedColors[index] }, `cell-${index}`))
            }
          ),
          renderCenterText("50%", cyNum),
          showTooltip && /* @__PURE__ */ jsx25(Tooltip4, { ...tooltipProps }),
          showLegend && /* @__PURE__ */ jsx25(Legend4, { ...legendProps })
        ] }) });
      case "nested":
        return /* @__PURE__ */ jsx25(ResponsiveContainer4, { width: "100%", height, children: /* @__PURE__ */ jsxs25(RechartsPieChart, { children: [
          /* @__PURE__ */ jsx25(
            Pie,
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
              onMouseLeave: onPieLeave,
              children: data.map((entry, index) => /* @__PURE__ */ jsx25(Cell2, { fill: resolvedColors[index] }, `inner-${index}`))
            }
          ),
          /* @__PURE__ */ jsx25(
            Pie,
            {
              data: outerData,
              cx,
              cy: "50%",
              innerRadius: 75,
              outerRadius: 100,
              dataKey: "value",
              nameKey: "name",
              children: outerData.map((entry, index) => /* @__PURE__ */ jsx25(Cell2, { fill: resolvedOuterColors[index] }, `outer-${index}`))
            }
          ),
          showTooltip && /* @__PURE__ */ jsx25(Tooltip4, { ...tooltipProps }),
          showLegend && /* @__PURE__ */ jsx25(Legend4, { ...legendProps })
        ] }) });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsx25(ChartWrapper, { title, subtitle, className, children: renderChart() });
}

// src/components/Charts/ComposedChart.js
import { useState as useState13, useEffect as useEffect11 } from "react";
import {
  ComposedChart as RechartsComposedChart,
  Bar as Bar2,
  Line as Line2,
  Area as Area2,
  XAxis as XAxis4,
  YAxis as YAxis4,
  CartesianGrid as CartesianGrid4,
  Tooltip as Tooltip5,
  Legend as Legend5,
  ResponsiveContainer as ResponsiveContainer5
} from "recharts";
import { jsx as jsx26, jsxs as jsxs26 } from "react/jsx-runtime";
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
  const [isDark, setIsDark] = useState13(false);
  useEffect11(() => {
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
    return /* @__PURE__ */ jsx26(ResponsiveContainer5, { width: "100%", height, children: /* @__PURE__ */ jsxs26(RechartsComposedChart, { data, children: [
      showGrid && /* @__PURE__ */ jsx26(CartesianGrid4, { ...gridProps }),
      /* @__PURE__ */ jsx26(XAxis4, { dataKey: xAxisKey, ...axisProps }),
      /* @__PURE__ */ jsx26(
        YAxis4,
        {
          yAxisId: "left",
          ...axisProps,
          label: yAxisLabel ? { value: yAxisLabel, angle: -90, position: "insideLeft", style: { fill: axisProps.tick.fill, fontSize: 12 } } : void 0
        }
      ),
      /* @__PURE__ */ jsx26(
        YAxis4,
        {
          yAxisId: "right",
          orientation: "right",
          ...axisProps,
          label: yAxisRightLabel ? { value: yAxisRightLabel, angle: 90, position: "insideRight", style: { fill: axisProps.tick.fill, fontSize: 12 } } : void 0
        }
      ),
      showTooltip && /* @__PURE__ */ jsx26(Tooltip5, { ...tooltipProps }),
      showLegend && /* @__PURE__ */ jsx26(Legend5, { ...legendProps }),
      barKeys.map((key, i) => /* @__PURE__ */ jsx26(
        Bar2,
        {
          dataKey: key,
          yAxisId: "left",
          fill: barColor(i),
          radius: [barRadius, barRadius, 0, 0]
        },
        key
      )),
      lineKeys.map((key, i) => /* @__PURE__ */ jsx26(
        Line2,
        {
          dataKey: key,
          yAxisId: "right",
          type: "monotone",
          stroke: lineColor(i),
          strokeWidth: 2,
          dot: { r: 3 }
        },
        key
      ))
    ] }) });
  };
  const renderBarArea = () => {
    let colorIndex = 0;
    return /* @__PURE__ */ jsx26(ResponsiveContainer5, { width: "100%", height, children: /* @__PURE__ */ jsxs26(RechartsComposedChart, { data, children: [
      showGrid && /* @__PURE__ */ jsx26(CartesianGrid4, { ...gridProps }),
      /* @__PURE__ */ jsx26(XAxis4, { dataKey: xAxisKey, ...axisProps }),
      /* @__PURE__ */ jsx26(
        YAxis4,
        {
          ...axisProps,
          label: yAxisLabel ? { value: yAxisLabel, angle: -90, position: "insideLeft", style: { fill: axisProps.tick.fill, fontSize: 12 } } : void 0
        }
      ),
      showTooltip && /* @__PURE__ */ jsx26(Tooltip5, { ...tooltipProps }),
      showLegend && /* @__PURE__ */ jsx26(Legend5, { ...legendProps }),
      areaKeys.map((key) => {
        const c = getColor(colorIndex++);
        return /* @__PURE__ */ jsx26(
          Area2,
          {
            dataKey: key,
            type: "monotone",
            fill: c,
            stroke: c,
            fillOpacity: 0.15,
            strokeWidth: 2
          },
          key
        );
      }),
      barKeys.map((key) => {
        const c = getColor(colorIndex++);
        return /* @__PURE__ */ jsx26(
          Bar2,
          {
            dataKey: key,
            fill: c,
            radius: [barRadius, barRadius, 0, 0]
          },
          key
        );
      })
    ] }) });
  };
  const renderMultiAxis = () => {
    let colorIndex = 0;
    return /* @__PURE__ */ jsx26(ResponsiveContainer5, { width: "100%", height, children: /* @__PURE__ */ jsxs26(RechartsComposedChart, { data, children: [
      showGrid && /* @__PURE__ */ jsx26(CartesianGrid4, { ...gridProps }),
      /* @__PURE__ */ jsx26(XAxis4, { dataKey: xAxisKey, ...axisProps }),
      /* @__PURE__ */ jsx26(
        YAxis4,
        {
          yAxisId: "left",
          ...axisProps,
          label: yAxisLabel ? { value: yAxisLabel, angle: -90, position: "insideLeft", style: { fill: axisProps.tick.fill, fontSize: 12 } } : void 0
        }
      ),
      /* @__PURE__ */ jsx26(
        YAxis4,
        {
          yAxisId: "right",
          orientation: "right",
          ...axisProps,
          label: yAxisRightLabel ? { value: yAxisRightLabel, angle: 90, position: "insideRight", style: { fill: axisProps.tick.fill, fontSize: 12 } } : void 0
        }
      ),
      showTooltip && /* @__PURE__ */ jsx26(Tooltip5, { ...tooltipProps }),
      showLegend && /* @__PURE__ */ jsx26(Legend5, { ...legendProps }),
      areaKeys.map((key) => {
        const c = getColor(colorIndex++);
        return /* @__PURE__ */ jsx26(
          Area2,
          {
            dataKey: key,
            yAxisId: "left",
            type: "monotone",
            fill: c,
            stroke: c,
            fillOpacity: 0.15,
            strokeWidth: 2
          },
          key
        );
      }),
      barKeys.map((key) => {
        const c = getColor(colorIndex++);
        return /* @__PURE__ */ jsx26(
          Bar2,
          {
            dataKey: key,
            yAxisId: "left",
            fill: c,
            radius: [barRadius, barRadius, 0, 0]
          },
          key
        );
      }),
      lineKeys.map((key) => {
        const c = getColor(colorIndex++);
        return /* @__PURE__ */ jsx26(
          Line2,
          {
            dataKey: key,
            yAxisId: "right",
            type: "monotone",
            stroke: c,
            strokeWidth: 2,
            dot: { r: 3 }
          },
          key
        );
      })
    ] }) });
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
  return /* @__PURE__ */ jsx26(ChartWrapper, { title, subtitle, className, children: renderChart() });
}

// src/components/Charts/RadialChart.js
import { useState as useState14, useEffect as useEffect12 } from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer as ResponsiveContainer6,
  Legend as Legend6,
  Tooltip as Tooltip6,
  Cell as Cell3
} from "recharts";
import { jsx as jsx27, jsxs as jsxs27 } from "react/jsx-runtime";
function getGaugeColor(percentage) {
  if (percentage >= 70) return CHART_COLORS.green[500];
  if (percentage >= 40) return CHART_COLORS.amber[500];
  return CHART_COLORS.red[500];
}
function CenterLabel({ viewBox, value, label, isDark }) {
  if (!viewBox) return null;
  const { cx, cy } = viewBox;
  return /* @__PURE__ */ jsxs27("g", { children: [
    /* @__PURE__ */ jsx27(
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
        },
        children: value
      }
    ),
    label && /* @__PURE__ */ jsx27(
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
        },
        children: label
      }
    )
  ] });
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
  const [isDark, setIsDark] = useState14(false);
  useEffect12(() => {
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
    return /* @__PURE__ */ jsx27(ChartWrapper, { title, subtitle, className, children: /* @__PURE__ */ jsx27(ResponsiveContainer6, { width: "100%", height, children: /* @__PURE__ */ jsxs27(
      RadialBarChart,
      {
        cx: "50%",
        cy: "55%",
        innerRadius: "70%",
        outerRadius: "85%",
        startAngle: 210,
        endAngle: -30,
        data: chartData,
        barSize: 16,
        children: [
          /* @__PURE__ */ jsx27(
            PolarAngleAxis,
            {
              type: "number",
              domain: [0, maxValue],
              angleAxisId: 0,
              tick: false
            }
          ),
          /* @__PURE__ */ jsx27(
            RadialBar,
            {
              background: { fill: trackFill },
              dataKey: "value",
              angleAxisId: 0,
              cornerRadius: 10,
              label: /* @__PURE__ */ jsx27(
                CenterLabel,
                {
                  value: clampedValue,
                  label,
                  isDark
                }
              )
            }
          ),
          showTooltip && /* @__PURE__ */ jsx27(Tooltip6, { ...getTooltipProps(isDark) }),
          showLegend && /* @__PURE__ */ jsx27(Legend6, { ...getLegendProps(isDark) })
        ]
      }
    ) }) });
  }
  if (variant === "progress") {
    const clampedValue = Math.min(Math.max(value, 0), maxValue);
    const percentage = Math.round(clampedValue / maxValue * 100);
    const chartData = [{ name: "progress", value: clampedValue, fill: CHART_COLORS.blue[500] }];
    return /* @__PURE__ */ jsx27(ChartWrapper, { title, subtitle, className, children: /* @__PURE__ */ jsx27(ResponsiveContainer6, { width: "100%", height, children: /* @__PURE__ */ jsxs27(
      RadialBarChart,
      {
        cx: "50%",
        cy: "50%",
        innerRadius: "75%",
        outerRadius: "90%",
        startAngle: 90,
        endAngle: -270,
        data: chartData,
        barSize: 16,
        children: [
          /* @__PURE__ */ jsx27(
            PolarAngleAxis,
            {
              type: "number",
              domain: [0, maxValue],
              angleAxisId: 0,
              tick: false
            }
          ),
          /* @__PURE__ */ jsx27(
            RadialBar,
            {
              background: { fill: trackFill },
              dataKey: "value",
              angleAxisId: 0,
              cornerRadius: 10,
              label: /* @__PURE__ */ jsx27(
                CenterLabel,
                {
                  value: `${percentage}%`,
                  label,
                  isDark
                }
              )
            }
          ),
          showTooltip && /* @__PURE__ */ jsx27(Tooltip6, { ...getTooltipProps(isDark) }),
          showLegend && /* @__PURE__ */ jsx27(Legend6, { ...getLegendProps(isDark) })
        ]
      }
    ) }) });
  }
  if (variant === "multi-ring") {
    const ringData = [...data].sort((a, b) => b.value - a.value).map((entry, i) => ({
      ...entry,
      fill: entry.fill || palette[i % palette.length]
    }));
    return /* @__PURE__ */ jsx27(ChartWrapper, { title, subtitle, className, children: /* @__PURE__ */ jsx27(ResponsiveContainer6, { width: "100%", height, children: /* @__PURE__ */ jsxs27(
      RadialBarChart,
      {
        cx: "50%",
        cy: "50%",
        innerRadius: "20%",
        outerRadius: "90%",
        startAngle: 90,
        endAngle: -270,
        data: ringData,
        barSize: 14,
        children: [
          /* @__PURE__ */ jsx27(
            PolarAngleAxis,
            {
              type: "number",
              domain: [0, maxValue],
              angleAxisId: 0,
              tick: false
            }
          ),
          /* @__PURE__ */ jsx27(
            RadialBar,
            {
              background: { fill: trackFill },
              dataKey: "value",
              angleAxisId: 0,
              cornerRadius: 10,
              children: ringData.map((entry, i) => /* @__PURE__ */ jsx27(Cell3, { fill: entry.fill }, `cell-${i}`))
            }
          ),
          showTooltip && /* @__PURE__ */ jsx27(Tooltip6, { ...getTooltipProps(isDark) }),
          /* @__PURE__ */ jsx27(Legend6, { ...getLegendProps(isDark) })
        ]
      }
    ) }) });
  }
  if (variant === "radar") {
    return /* @__PURE__ */ jsx27(ChartWrapper, { title, subtitle, className, children: /* @__PURE__ */ jsx27(ResponsiveContainer6, { width: "100%", height, children: /* @__PURE__ */ jsxs27(RadarChart, { cx: "50%", cy: "50%", outerRadius: "75%", data, children: [
      /* @__PURE__ */ jsx27(
        PolarGrid,
        {
          stroke: isDark ? "#374151" : "#e5e7eb",
          gridType: "polygon"
        }
      ),
      /* @__PURE__ */ jsx27(
        PolarAngleAxis,
        {
          dataKey: "subject",
          tick: {
            fill: isDark ? "#9ca3af" : "#6b7280",
            fontSize: 12
          }
        }
      ),
      /* @__PURE__ */ jsx27(
        PolarRadiusAxis,
        {
          tick: {
            fill: isDark ? "#9ca3af" : "#6b7280",
            fontSize: 10
          },
          axisLine: false
        }
      ),
      dataKeys.map((key, i) => {
        const color = palette[i % palette.length];
        return /* @__PURE__ */ jsx27(
          Radar,
          {
            name: key,
            dataKey: key,
            stroke: color,
            fill: color,
            fillOpacity: 0.2
          },
          key
        );
      }),
      showTooltip && /* @__PURE__ */ jsx27(Tooltip6, { ...getTooltipProps(isDark) }),
      showLegend && /* @__PURE__ */ jsx27(Legend6, { ...getLegendProps(isDark) })
    ] }) }) });
  }
  return /* @__PURE__ */ jsx27(ChartWrapper, { title, subtitle, className, children: /* @__PURE__ */ jsxs27("p", { style: { color: isDark ? "#9ca3af" : "#6b7280", fontSize: 14 }, children: [
    "Unknown variant: ",
    /* @__PURE__ */ jsx27("code", { children: variant })
  ] }) });
}

// src/components/KpiCard/KpiCard.js
import { forwardRef as forwardRef21, useState as useState15, useRef as useRef6, useEffect as useEffect13 } from "react";
import { TrendingUp, TrendingDown, Minus as Minus2 } from "lucide-react";
import { Fragment as Fragment4, jsx as jsx28, jsxs as jsxs28 } from "react/jsx-runtime";
function Sparkline({ data = [], width = 80, height = 28, color = "var(--ds-text-brand)" }) {
  if (data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  const points = data.map((v, i) => `${i * step},${height - (v - min) / range * height}`).join(" ");
  const [tooltip, setTooltip] = useState15(null);
  const svgRef = useRef6(null);
  const handleMouseMove = (e) => {
    const rect = svgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const idx = Math.round(x / step);
    if (idx >= 0 && idx < data.length) {
      setTooltip({ x: idx * step, y: height - (data[idx] - min) / range * height, value: data[idx] });
    }
  };
  return /* @__PURE__ */ jsxs28(
    "svg",
    {
      ref: svgRef,
      width,
      height,
      className: "shrink-0",
      onMouseMove: handleMouseMove,
      onMouseLeave: () => setTooltip(null),
      style: { overflow: "visible" },
      children: [
        /* @__PURE__ */ jsx28(
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
        tooltip && /* @__PURE__ */ jsxs28(Fragment4, { children: [
          /* @__PURE__ */ jsx28("circle", { cx: tooltip.x, cy: tooltip.y, r: "3", fill: color }),
          /* @__PURE__ */ jsx28(
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
          ),
          /* @__PURE__ */ jsx28(
            "text",
            {
              x: tooltip.x,
              y: tooltip.y - 9,
              textAnchor: "middle",
              fontSize: "9",
              fill: "var(--ds-text-primary)",
              children: tooltip.value
            }
          )
        ] })
      ]
    }
  );
}
function ProgressRing({ value = 0, size = 40, strokeWidth = 4, color = "var(--ds-text-brand)" }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(Math.max(value, 0), 100);
  const offset = circumference - clamped / 100 * circumference;
  return /* @__PURE__ */ jsxs28("svg", { width: size, height: size, className: "shrink-0 -rotate-90", children: [
    /* @__PURE__ */ jsx28(
      "circle",
      {
        cx: size / 2,
        cy: size / 2,
        r: radius,
        fill: "none",
        stroke: "var(--ds-border-primary)",
        strokeWidth
      }
    ),
    /* @__PURE__ */ jsx28(
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
    )
  ] });
}
function ProgressBar({ value = 0, color = "var(--ds-text-brand)" }) {
  const clamped = Math.min(Math.max(value, 0), 100);
  return /* @__PURE__ */ jsx28(
    "div",
    {
      className: "w-full h-1.5 rounded-full overflow-hidden mt-2",
      style: { backgroundColor: "var(--ds-bg-tertiary)" },
      children: /* @__PURE__ */ jsx28(
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
    }
  );
}
function DeltaIndicator({ value, format = "percentage" }) {
  if (value == null) return null;
  const isPositive = value > 0;
  const isNeutral = value === 0;
  const Icon = isPositive ? TrendingUp : isNeutral ? Minus2 : TrendingDown;
  const color = isPositive ? "var(--ds-text-success)" : isNeutral ? "var(--ds-text-secondary)" : "var(--ds-text-danger)";
  const display = format === "percentage" ? `${isPositive ? "+" : ""}${value}%` : `${isPositive ? "+" : ""}${value}`;
  return /* @__PURE__ */ jsxs28("span", { className: "inline-flex items-center gap-1 text-[length:var(--ds-text-xs)] font-medium", style: { color }, children: [
    /* @__PURE__ */ jsx28(Icon, { size: 12 }),
    display
  ] });
}
var KpiCard = forwardRef21(function KpiCard2({
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
  return /* @__PURE__ */ jsx28(
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
      ...props,
      children: /* @__PURE__ */ jsxs28("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxs28("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx28(
            "p",
            {
              className: "text-[length:var(--ds-text-xs)] font-medium uppercase tracking-wider truncate",
              style: { color: "var(--ds-text-secondary)" },
              children: label
            }
          ),
          /* @__PURE__ */ jsxs28("div", { className: "flex items-end gap-2 mt-1", children: [
            /* @__PURE__ */ jsx28(
              "span",
              {
                className: "text-[length:var(--ds-text-2xl)] font-bold leading-none",
                style: { color: "var(--ds-text-primary)" },
                children: value
              }
            ),
            variant === "with-delta" && /* @__PURE__ */ jsx28(DeltaIndicator, { value: delta, format: deltaFormat })
          ] }),
          variant === "with-delta" && deltaLabel && /* @__PURE__ */ jsx28(
            "p",
            {
              className: "text-[length:var(--ds-text-xs)] mt-1",
              style: { color: "var(--ds-text-tertiary)" },
              children: deltaLabel
            }
          ),
          variant === "with-progress" && progressType === "bar" && /* @__PURE__ */ jsxs28("div", { className: "mt-1", children: [
            /* @__PURE__ */ jsx28(ProgressBar, { value: progress, color: progressColor || "var(--ds-text-brand)" }),
            target != null && /* @__PURE__ */ jsxs28(
              "p",
              {
                className: "text-[length:var(--ds-text-xs)] mt-1",
                style: { color: "var(--ds-text-tertiary)" },
                children: [
                  progress,
                  "% of ",
                  target
                ]
              }
            )
          ] })
        ] }),
        variant === "with-icon" && icon && /* @__PURE__ */ jsx28(
          "div",
          {
            className: "shrink-0 w-10 h-10 rounded-[var(--ds-radius-md)] flex items-center justify-center",
            style: {
              backgroundColor: iconColor ? `${iconColor}18` : "var(--ds-bg-selected)",
              color: iconColor || "var(--ds-text-brand)"
            },
            children: icon
          }
        ),
        variant === "with-trend" && trendData && /* @__PURE__ */ jsx28(Sparkline, { data: trendData, color: trendColor || "var(--ds-text-brand)" }),
        variant === "with-progress" && progressType === "ring" && /* @__PURE__ */ jsxs28("div", { className: "shrink-0 relative flex items-center justify-center", children: [
          /* @__PURE__ */ jsx28(ProgressRing, { value: progress, color: progressColor || "var(--ds-text-brand)" }),
          /* @__PURE__ */ jsxs28(
            "span",
            {
              className: "absolute text-[length:9px] font-bold",
              style: { color: "var(--ds-text-primary)" },
              children: [
                progress,
                "%"
              ]
            }
          )
        ] })
      ] })
    }
  );
});
KpiCard.displayName = "KpiCard";
var KpiCard_default = KpiCard;

// src/components/List/List.js
import { forwardRef as forwardRef22, useState as useState16, useMemo as useMemo5, useCallback as useCallback5 } from "react";
import {
  Info as Info2,
  AlertTriangle as AlertTriangle2,
  AlertCircle as AlertCircle3,
  CheckCircle2 as CheckCircle23,
  ChevronUp,
  ChevronDown as ChevronDown4,
  ChevronsUpDown
} from "lucide-react";
import { jsx as jsx29, jsxs as jsxs29 } from "react/jsx-runtime";
var ActivityFeed = forwardRef22(function ActivityFeed2({ items = [], maxHeight, className = "", ...props }, ref) {
  return /* @__PURE__ */ jsx29(
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
      ...props,
      children: items.map((item, i) => /* @__PURE__ */ jsxs29("div", { className: "flex gap-3 py-3 px-2", children: [
        /* @__PURE__ */ jsx29("div", { className: "shrink-0 mt-1.5", children: /* @__PURE__ */ jsx29(
          "div",
          {
            className: "w-2 h-2 rounded-full",
            style: { backgroundColor: item.color || "var(--ds-text-brand)" }
          }
        ) }),
        /* @__PURE__ */ jsxs29("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx29(
            "p",
            {
              className: "text-[length:var(--ds-text-sm)]",
              style: { color: "var(--ds-text-primary)" },
              children: item.content
            }
          ),
          item.timestamp && /* @__PURE__ */ jsx29(
            "p",
            {
              className: "text-[length:var(--ds-text-xs)] mt-0.5",
              style: { color: "var(--ds-text-tertiary)" },
              children: item.timestamp
            }
          )
        ] })
      ] }, item.id ?? i))
    }
  );
});
var severityConfig = {
  info: { icon: Info2, color: "var(--ds-icon-info)", bg: "var(--ds-bg-info)" },
  warning: { icon: AlertTriangle2, color: "var(--ds-icon-warning)", bg: "var(--ds-bg-warning)" },
  error: { icon: AlertCircle3, color: "var(--ds-icon-danger)", bg: "var(--ds-bg-error)" },
  success: { icon: CheckCircle23, color: "var(--ds-icon-success)", bg: "var(--ds-bg-success)" }
};
var NotificationList = forwardRef22(function NotificationList2({ items = [], maxHeight, onItemClick, className = "", ...props }, ref) {
  return /* @__PURE__ */ jsx29(
    "div",
    {
      ref,
      className: ["flex flex-col divide-y", className].join(" "),
      style: {
        maxHeight,
        overflowY: maxHeight ? "auto" : void 0,
        "--tw-divide-color": "var(--ds-border-primary)"
      },
      ...props,
      children: items.map((item, i) => {
        const sev = severityConfig[item.severity || "info"];
        const Icon = sev.icon;
        return /* @__PURE__ */ jsxs29(
          "div",
          {
            className: [
              "flex gap-3 py-3 px-3 transition-colors",
              onItemClick ? "cursor-pointer hover:bg-[var(--ds-bg-hover)]" : "",
              item.unread ? "bg-[var(--ds-bg-selected)]" : ""
            ].join(" "),
            onClick: () => onItemClick == null ? void 0 : onItemClick(item, i),
            role: onItemClick ? "button" : void 0,
            tabIndex: onItemClick ? 0 : void 0,
            children: [
              /* @__PURE__ */ jsx29(
                "div",
                {
                  className: "shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5",
                  style: { backgroundColor: sev.bg },
                  children: /* @__PURE__ */ jsx29(Icon, { size: 14, style: { color: sev.color } })
                }
              ),
              /* @__PURE__ */ jsxs29("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx29(
                  "p",
                  {
                    className: [
                      "text-[length:var(--ds-text-sm)]",
                      item.unread ? "font-semibold" : ""
                    ].join(" "),
                    style: { color: "var(--ds-text-primary)" },
                    children: item.title
                  }
                ),
                item.description && /* @__PURE__ */ jsx29(
                  "p",
                  {
                    className: "text-[length:var(--ds-text-xs)] mt-0.5 line-clamp-2",
                    style: { color: "var(--ds-text-secondary)" },
                    children: item.description
                  }
                ),
                item.timestamp && /* @__PURE__ */ jsx29(
                  "p",
                  {
                    className: "text-[length:var(--ds-text-xs)] mt-1",
                    style: { color: "var(--ds-text-tertiary)" },
                    children: item.timestamp
                  }
                )
              ] }),
              item.unread && /* @__PURE__ */ jsx29("div", { className: "shrink-0 mt-2", children: /* @__PURE__ */ jsx29("div", { className: "w-2 h-2 rounded-full", style: { backgroundColor: "var(--ds-text-brand)" } }) })
            ]
          },
          item.id ?? i
        );
      })
    }
  );
});
var RankedList = forwardRef22(function RankedList2({ items = [], valueLabel, className = "", ...props }, ref) {
  return /* @__PURE__ */ jsx29(
    "div",
    {
      ref,
      className: ["flex flex-col divide-y", className].join(" "),
      style: { "--tw-divide-color": "var(--ds-border-primary)" },
      ...props,
      children: items.map((item, i) => /* @__PURE__ */ jsxs29("div", { className: "flex items-center gap-3 py-2.5 px-2", children: [
        /* @__PURE__ */ jsx29(
          "span",
          {
            className: "shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[length:var(--ds-text-xs)] font-bold",
            style: {
              backgroundColor: i < 3 ? "var(--ds-bg-selected)" : "var(--ds-bg-tertiary)",
              color: i < 3 ? "var(--ds-text-brand)" : "var(--ds-text-secondary)"
            },
            children: i + 1
          }
        ),
        /* @__PURE__ */ jsxs29("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx29(
            "p",
            {
              className: "text-[length:var(--ds-text-sm)] font-medium truncate",
              style: { color: "var(--ds-text-primary)" },
              children: item.label
            }
          ),
          item.sublabel && /* @__PURE__ */ jsx29(
            "p",
            {
              className: "text-[length:var(--ds-text-xs)] truncate",
              style: { color: "var(--ds-text-tertiary)" },
              children: item.sublabel
            }
          )
        ] }),
        item.value != null && /* @__PURE__ */ jsx29(
          "span",
          {
            className: "shrink-0 text-[length:var(--ds-text-sm)] font-semibold tabular-nums",
            style: { color: "var(--ds-text-primary)" },
            children: item.value
          }
        )
      ] }, item.id ?? i))
    }
  );
});
var AvatarList = forwardRef22(function AvatarList2({ items = [], onItemClick, className = "", ...props }, ref) {
  return /* @__PURE__ */ jsx29(
    "div",
    {
      ref,
      className: ["flex flex-col divide-y", className].join(" "),
      style: { "--tw-divide-color": "var(--ds-border-primary)" },
      ...props,
      children: items.map((item, i) => /* @__PURE__ */ jsxs29(
        "div",
        {
          className: [
            "flex items-center gap-3 py-2.5 px-2 transition-colors",
            onItemClick ? "cursor-pointer hover:bg-[var(--ds-bg-hover)]" : ""
          ].join(" "),
          onClick: () => onItemClick == null ? void 0 : onItemClick(item, i),
          role: onItemClick ? "button" : void 0,
          tabIndex: onItemClick ? 0 : void 0,
          children: [
            item.avatar ? /* @__PURE__ */ jsx29(
              "img",
              {
                src: item.avatar,
                alt: item.name || "",
                className: "shrink-0 w-8 h-8 rounded-full object-cover"
              }
            ) : /* @__PURE__ */ jsx29(
              "div",
              {
                className: "shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[length:var(--ds-text-xs)] font-bold uppercase",
                style: {
                  backgroundColor: "var(--ds-bg-selected)",
                  color: "var(--ds-text-brand)"
                },
                children: (item.name || "?").slice(0, 2)
              }
            ),
            /* @__PURE__ */ jsxs29("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx29(
                "p",
                {
                  className: "text-[length:var(--ds-text-sm)] font-medium truncate",
                  style: { color: "var(--ds-text-primary)" },
                  children: item.name
                }
              ),
              item.description && /* @__PURE__ */ jsx29(
                "p",
                {
                  className: "text-[length:var(--ds-text-xs)] truncate",
                  style: { color: "var(--ds-text-secondary)" },
                  children: item.description
                }
              )
            ] }),
            item.meta && /* @__PURE__ */ jsx29(
              "span",
              {
                className: "shrink-0 text-[length:var(--ds-text-xs)]",
                style: { color: "var(--ds-text-tertiary)" },
                children: item.meta
              }
            )
          ]
        },
        item.id ?? i
      ))
    }
  );
});
var TableList = forwardRef22(function TableList2({
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
  const [sortCol, setSortCol] = useState16(defaultSortColumn || null);
  const [sortDir, setSortDir] = useState16(defaultSortDirection);
  const handleSort = useCallback5((key) => {
    if (!sortable) return;
    if (sortCol === key) {
      setSortDir((d) => d === "asc" ? "desc" : "asc");
    } else {
      setSortCol(key);
      setSortDir("asc");
    }
  }, [sortCol, sortable]);
  const sortedData = useMemo5(() => {
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
    if (sortCol !== colKey) return /* @__PURE__ */ jsx29(ChevronsUpDown, { size: 12, style: { color: "var(--ds-icon-secondary)", opacity: 0.5 } });
    return sortDir === "asc" ? /* @__PURE__ */ jsx29(ChevronUp, { size: 12, style: { color: "var(--ds-text-brand)" } }) : /* @__PURE__ */ jsx29(ChevronDown4, { size: 12, style: { color: "var(--ds-text-brand)" } });
  };
  return /* @__PURE__ */ jsxs29("div", { ref, className, ...props, children: [
    actions && /* @__PURE__ */ jsx29(
      "div",
      {
        className: "flex items-center gap-2 flex-wrap pb-3 mb-3 border-b",
        style: { borderColor: "var(--ds-border-primary)" },
        children: actions
      }
    ),
    /* @__PURE__ */ jsx29("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs29("table", { className: "w-full border-collapse text-left", children: [
      /* @__PURE__ */ jsx29("thead", { children: /* @__PURE__ */ jsx29(
        "tr",
        {
          className: "border-b",
          style: { borderColor: "var(--ds-border-primary)" },
          children: columns.map((col) => /* @__PURE__ */ jsx29(
            "th",
            {
              className: [
                "py-2 px-3 text-[length:var(--ds-text-xs)] font-semibold uppercase tracking-wider whitespace-nowrap",
                sortable ? "cursor-pointer select-none hover:bg-[var(--ds-bg-hover)]" : ""
              ].join(" "),
              style: {
                color: "var(--ds-text-secondary)",
                width: col.width,
                minWidth: col.minWidth
              },
              onClick: () => handleSort(col.key),
              children: /* @__PURE__ */ jsxs29("span", { className: "inline-flex items-center gap-1", children: [
                col.icon && /* @__PURE__ */ jsx29("span", { className: "shrink-0", children: col.icon }),
                col.header,
                /* @__PURE__ */ jsx29(SortIcon, { colKey: col.key })
              ] })
            },
            col.key
          ))
        }
      ) }),
      /* @__PURE__ */ jsxs29("tbody", { children: [
        sortedData.map((row, ri) => /* @__PURE__ */ jsx29(
          "tr",
          {
            className: "border-b last:border-b-0 transition-colors hover:bg-[var(--ds-bg-hover)]",
            style: { borderColor: "var(--ds-border-primary)" },
            children: columns.map((col) => /* @__PURE__ */ jsx29(
              "td",
              {
                className: "py-2 px-3 text-[length:var(--ds-text-sm)]",
                style: { color: "var(--ds-text-primary)" },
                children: col.render ? col.render(row[col.key], row, ri) : row[col.key]
              },
              col.key
            ))
          },
          row.id ?? ri
        )),
        sortedData.length === 0 && /* @__PURE__ */ jsx29("tr", { children: /* @__PURE__ */ jsx29(
          "td",
          {
            colSpan: columns.length,
            className: "py-8 text-center text-[length:var(--ds-text-sm)]",
            style: { color: "var(--ds-text-tertiary)" },
            children: "No items"
          }
        ) })
      ] })
    ] }) })
  ] });
});
var List = forwardRef22(function List2({ variant = "activity-feed", ...props }, ref) {
  switch (variant) {
    case "activity-feed":
      return /* @__PURE__ */ jsx29(ActivityFeed, { ref, ...props });
    case "notification":
      return /* @__PURE__ */ jsx29(NotificationList, { ref, ...props });
    case "ranked":
      return /* @__PURE__ */ jsx29(RankedList, { ref, ...props });
    case "with-avatar":
      return /* @__PURE__ */ jsx29(AvatarList, { ref, ...props });
    case "with-table":
      return /* @__PURE__ */ jsx29(TableList, { ref, ...props });
    default:
      return /* @__PURE__ */ jsx29(ActivityFeed, { ref, ...props });
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
import { createContext, useContext, useState as useState17, useEffect as useEffect14, useCallback as useCallback6 } from "react";
import { jsx as jsx30 } from "react/jsx-runtime";
var ThemeContext = createContext(null);
function ThemeProvider({ children, defaultTheme = "light", themes = ["light", "dark"] }) {
  const [theme, setThemeState] = useState17(defaultTheme);
  useEffect14(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("ds-theme");
      if (stored && themes.includes(stored)) {
        setThemeState(stored);
      }
    }
  }, []);
  useEffect14(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (typeof window !== "undefined") {
      localStorage.setItem("ds-theme", theme);
    }
  }, [theme]);
  const setTheme = useCallback6((newTheme) => {
    if (themes.includes(newTheme)) {
      setThemeState(newTheme);
    }
  }, [themes]);
  const toggleTheme = useCallback6(() => {
    setThemeState((prev) => {
      const idx = themes.indexOf(prev);
      return themes[(idx + 1) % themes.length];
    });
  }, [themes]);
  return /* @__PURE__ */ jsx30(ThemeContext.Provider, { value: { theme, setTheme, toggleTheme, themes }, children });
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
export {
  ActivityFeed,
  AreaChart,
  AvatarList,
  Banner,
  BarChart,
  Breadcrumb_default as Breadcrumb,
  Button_default as Button,
  CHART_COLORS,
  ChartWrapper,
  Checkbox_default as Checkbox,
  ComposedChart,
  DataTable_default as DataTable,
  DatePicker_default as DatePicker,
  Dropdown_default as Dropdown,
  Form_default as Form,
  FormActions,
  FormGroup,
  FormRow,
  Header_default as Header,
  KpiCard_default as KpiCard,
  LineChart,
  List_default as List,
  Modal_default as Modal,
  Notification_default as Notification,
  NotificationList,
  OverflowMenu_default as OverflowMenu,
  Pagination_default as Pagination,
  PieChart,
  RadialChart,
  RankedList,
  SERIES_COLORS,
  Search_default as Search,
  Select_default as Select,
  SideNav_default as SideNav,
  Skeleton,
  SkeletonText,
  Spinner,
  TableList,
  TableSkeleton,
  Tabs_default as Tabs,
  Tag_default as Tag,
  TextInput_default as TextInput,
  ThemeProvider,
  Toast,
  Toggle_default as Toggle,
  useTheme
};
