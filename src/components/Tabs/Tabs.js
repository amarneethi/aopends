'use client';

import { forwardRef, useState, useId } from 'react';

const Tabs = forwardRef(function Tabs(
  {
    items = [],
    defaultValue,
    value: controlledValue,
    onChange,
    variant = 'underline',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
  },
  ref
) {
  const baseId = useId();
  const [internalTab, setInternalTab] = useState(defaultValue || items[0]?.value);
  const activeTab = controlledValue ?? internalTab;

  const handleTabClick = (tabValue) => {
    setInternalTab(tabValue);
    onChange?.(tabValue);
  };

  const sizeClasses = {
    sm: 'text-[length:var(--ds-text-xs)] px-3 py-1.5',
    md: 'text-[length:var(--ds-text-sm)] px-4 py-2',
    lg: 'text-[length:var(--ds-text-md)] px-5 py-2.5',
  };

  const activeContent = items.find((t) => t.value === activeTab);

  return (
    <div ref={ref} className={className} {...props}>
      {/* Tab list */}
      <div
        role="tablist"
        className={[
          'flex',
          variant === 'underline' ? 'border-b border-[var(--ds-border-primary)]' : 'gap-1 p-1 bg-[var(--ds-bg-tertiary)] rounded-[var(--ds-radius-lg)]',
        ].join(' ')}
      >
        {items.map((tab) => {
          const isActive = tab.value === activeTab;
          return (
            <button
              key={tab.value}
              role="tab"
              type="button"
              id={`${baseId}-tab-${tab.value}`}
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${tab.value}`}
              disabled={tab.disabled}
              onClick={() => handleTabClick(tab.value)}
              className={[
                'ds-focus-ring font-medium transition-all duration-[var(--ds-duration-normal)] whitespace-nowrap cursor-pointer',
                sizeClasses[size],
                fullWidth ? 'flex-1' : '',
                tab.disabled ? 'opacity-40 cursor-not-allowed' : '',
                variant === 'underline'
                  ? [
                      '-mb-px border-b-2',
                      isActive
                        ? 'border-[var(--ds-border-brand)] text-[var(--ds-text-brand)]'
                        : 'border-transparent text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)] hover:border-[var(--ds-border-secondary)]',
                    ].join(' ')
                  : [
                      'rounded-[var(--ds-radius-md)]',
                      isActive
                        ? 'bg-[var(--ds-bg-primary)] text-[var(--ds-text-primary)] shadow-[var(--ds-shadow-xs)]'
                        : 'text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)]',
                    ].join(' '),
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {tab.icon && <span className="mr-1.5 inline-flex align-text-bottom">{tab.icon}</span>}
              {tab.label}
              {tab.badge !== undefined && (
                <span
                  className="ml-2 text-[length:var(--ds-text-xs)] px-1.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: isActive ? 'var(--ds-bg-brand)' : 'var(--ds-bg-tertiary)',
                    color: isActive ? 'var(--ds-text-on-brand)' : 'var(--ds-text-secondary)',
                  }}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab panel */}
      {activeContent && (
        <div
          role="tabpanel"
          id={`${baseId}-panel-${activeContent.value}`}
          aria-labelledby={`${baseId}-tab-${activeContent.value}`}
          className="pt-4"
        >
          {activeContent.content}
        </div>
      )}
    </div>
  );
});

Tabs.displayName = 'Tabs';
export default Tabs;
