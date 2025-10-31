import PropTypes from 'prop-types';

/**
 * Badge Component
 * 
 * A small status indicator or label component.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Badge content
 * @param {'primary'|'secondary'|'success'|'warning'|'danger'|'info'} props.variant - Badge color variant
 * @param {'sm'|'md'|'lg'} props.size - Badge size
 * @param {boolean} props.rounded - Whether badge is fully rounded (pill shape)
 * @param {string} props.className - Additional CSS classes
 */
function Badge({ children, variant = 'primary', size = 'md', rounded = false, className = '', ...props }) {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200';

  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-900 text-white',
    secondary: 'bg-cyan-600 text-white',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-500 text-slate-900',
    danger: 'bg-red-600 text-white',
    info: 'bg-slate-500 text-white',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  // Shape styles
  const shapeStyles = rounded ? 'rounded-full' : 'rounded';

  // Combine all styles
  const badgeClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${shapeStyles} ${className}`;

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  rounded: PropTypes.bool,
  className: PropTypes.string,
};

export default Badge;
