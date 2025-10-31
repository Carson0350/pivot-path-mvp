import PropTypes from 'prop-types';

/**
 * Textarea Component
 * 
 * A flexible textarea component with validation states.
 * 
 * @param {Object} props - Component props
 * @param {string} props.label - Textarea label text
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Textarea value
 * @param {Function} props.onChange - Change handler
 * @param {number} props.rows - Number of visible text rows
 * @param {boolean} props.required - Whether textarea is required
 * @param {boolean} props.disabled - Whether textarea is disabled
 * @param {string} props.error - Error message to display
 * @param {string} props.helperText - Helper text to display
 * @param {string} props.id - Textarea ID
 * @param {string} props.name - Textarea name
 * @param {string} props.className - Additional CSS classes
 */
function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  required = false,
  disabled = false,
  error,
  helperText,
  id,
  name,
  className = '',
  ...props
}) {
  const textareaId = id || name || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  // Base styles
  const baseStyles =
    'w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 resize-vertical';

  // State styles
  const stateStyles = error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
    : 'border-slate-300 focus:border-blue-900 focus:ring-blue-900';

  // Disabled styles
  const disabledStyles = disabled
    ? 'bg-slate-100 cursor-not-allowed opacity-60'
    : 'bg-white hover:border-slate-400';

  // Combine all styles
  const textareaClasses = `${baseStyles} ${stateStyles} ${disabledStyles} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-semibold text-slate-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        id={textareaId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        disabled={disabled}
        className={textareaClasses}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
        {...props}
      />

      {error && (
        <p id={`${textareaId}-error`} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${textareaId}-helper`} className="mt-2 text-sm text-slate-500">
          {helperText}
        </p>
      )}
    </div>
  );
}

Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Textarea;
