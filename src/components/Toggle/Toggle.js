'use client';

import { forwardRef, useId } from 'react';

const sizes = {
  sm: { track: 'w-8 h-4', thumb: 'w-3 h-3', translate: 'translate-x-4' },
  md: { track: 'w-11 h-6', thumb: 'w-5 h-5', translate: 'translate-x-5' },
  lg: { track: 'w-14 h-7', thumb: 'w-6 h-6', translate: 'translate-x-7' },
};

const Toggle = forwardRef(function Toggle(
  {
    label,
    checked,
    defaultChecked = false,
    disabled = false,
    size = 'md',
    onChange,
    id: idProp,
    className = '',
    wrapperClassName = '',
    ...props
  },
  ref
) {
  const autoId = useId();
  const id = idProp || autoId;
  const s = sizes[size];

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : defaultChecked;

  return (
    <label
      htmlFor={id}
      className={[
        'inline-flex items-center gap-3 cursor-pointer select-none',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        wrapperClassName,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="relative inline-flex items-center">
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={id}
          checked={isControlled ? checked : undefined}
          defaultChecked={isControlled ? undefined : defaultChecked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="ds-sr-only peer"
          {...props}
        />
        <span
          className={[
            s.track,
            'rounded-full transition-colors duration-[var(--ds-duration-normal)]',
            'peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-[var(--ds-focus-ring-color)] peer-focus-visible:outline-offset-2',
            isChecked ? 'bg-[var(--ds-bg-brand)]' : 'bg-[var(--ds-border-secondary)]',
          ].join(' ')}
        />
        <span
          className={[
            s.thumb,
            'absolute left-0.5 top-0.5 rounded-full bg-white shadow-sm',
            'transition-transform duration-[var(--ds-duration-normal)]',
            isChecked ? s.translate : 'translate-x-0',
          ].join(' ')}
        />
      </span>
      {label && (
        <span className="text-[length:var(--ds-text-sm)] text-[var(--ds-text-primary)]">{label}</span>
      )}
    </label>
  );
});

Toggle.displayName = 'Toggle';
export default Toggle;
