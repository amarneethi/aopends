'use client';

import { forwardRef, useState, useRef, useEffect, useId, useCallback } from 'react';
import { Search as SearchIcon, X, Loader2 } from 'lucide-react';

const sizeStyles = {
  sm: 'h-[var(--ds-size-sm)] text-[length:var(--ds-text-xs)] pl-8 pr-8',
  md: 'h-[var(--ds-size-md)] text-[length:var(--ds-text-sm)] pl-10 pr-10',
  lg: 'h-[var(--ds-size-lg)] text-[length:var(--ds-text-md)] pl-12 pr-12',
};

const Search = forwardRef(function Search(
  {
    value: controlledValue,
    onChange,
    onSubmit,
    onClear,
    placeholder = 'Search...',
    options = [],
    onOptionSelect,
    loading = false,
    size = 'md',
    disabled = false,
    scope,
    id: idProp,
    className = '',
    wrapperClassName = '',
    debounceMs = 300,
    ...props
  },
  ref
) {
  const autoId = useId();
  const id = idProp || autoId;
  const [internalValue, setInternalValue] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const containerRef = useRef(null);
  const debounceRef = useRef(null);

  const searchValue = controlledValue ?? internalValue;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = useCallback((e) => {
    const val = e.target.value;
    setInternalValue(val);
    onChange?.(val);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSubmit?.(val);
    }, debounceMs);

    setShowOptions(val.length > 0 && options.length > 0);
  }, [onChange, onSubmit, debounceMs, options.length]);

  const handleClear = () => {
    setInternalValue('');
    onChange?.('');
    onClear?.();
    setShowOptions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (debounceRef.current) clearTimeout(debounceRef.current);
      onSubmit?.(searchValue);
      setShowOptions(false);
    }
    if (e.key === 'Escape') {
      setShowOptions(false);
    }
  };

  const handleOptionClick = (option) => {
    const val = typeof option === 'string' ? option : option.label;
    setInternalValue(val);
    onChange?.(val);
    onOptionSelect?.(option);
    setShowOptions(false);
  };

  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16;

  return (
    <div ref={containerRef} className={['relative', wrapperClassName].join(' ')}>
      <div className="relative">
        <SearchIcon
          size={iconSize}
          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: 'var(--ds-icon-secondary)' }}
        />
        {scope && (
          <span
            className="absolute left-9 top-1/2 -translate-y-1/2 text-[length:var(--ds-text-xs)] font-medium px-1.5 py-0.5 rounded"
            style={{
              backgroundColor: 'var(--ds-bg-tertiary)',
              color: 'var(--ds-text-secondary)',
            }}
          >
            {scope}
          </span>
        )}
        <input
          ref={ref}
          id={id}
          type="search"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => searchValue && options.length > 0 && setShowOptions(true)}
          disabled={disabled}
          placeholder={placeholder}
          className={[
            'ds-focus-ring w-full rounded-[var(--ds-radius-md)] bg-[var(--ds-input-bg)] text-[var(--ds-text-primary)]',
            'placeholder:text-[var(--ds-text-placeholder)]',
            'transition-colors duration-[var(--ds-duration-normal)]',
            '[&::-webkit-search-cancel-button]:hidden',
            sizeStyles[size],
            scope ? 'pl-20' : '',
            disabled ? 'opacity-50 cursor-not-allowed' : '',
            className,
          ].join(' ')}
          style={{ border: `1px solid var(--ds-input-border)` }}
          role="searchbox"
          aria-label={placeholder}
          {...props}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {loading && <Loader2 size={iconSize} className="animate-spin" style={{ color: 'var(--ds-icon-secondary)' }} />}
          {searchValue && !loading && (
            <button
              type="button"
              onClick={handleClear}
              className="p-0.5 rounded hover:bg-[var(--ds-bg-hover)] transition-colors cursor-pointer"
              aria-label="Clear search"
            >
              <X size={iconSize} style={{ color: 'var(--ds-icon-secondary)' }} />
            </button>
          )}
        </div>
      </div>

      {/* Typeahead options */}
      {showOptions && options.length > 0 && (
        <ul
          className="absolute top-full left-0 right-0 mt-1 py-1 rounded-[var(--ds-radius-lg)] border max-h-60 overflow-auto ds-scrollbar"
          style={{
            zIndex: 'var(--ds-z-dropdown)',
            backgroundColor: 'var(--ds-bg-primary)',
            borderColor: 'var(--ds-border-primary)',
            boxShadow: 'var(--ds-shadow-lg)',
          }}
          role="listbox"
        >
          {options.map((option, i) => {
            const label = typeof option === 'string' ? option : option.label;
            const desc = typeof option === 'object' ? option.description : null;
            return (
              <li
                key={i}
                role="option"
                onClick={() => handleOptionClick(option)}
                className="px-3 py-2 cursor-pointer hover:bg-[var(--ds-bg-hover)] transition-colors"
              >
                <div className="text-[length:var(--ds-text-sm)] text-[var(--ds-text-primary)]">{label}</div>
                {desc && (
                  <div className="text-[length:var(--ds-text-xs)] text-[var(--ds-text-secondary)] mt-0.5">{desc}</div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
});

Search.displayName = 'Search';
export default Search;
