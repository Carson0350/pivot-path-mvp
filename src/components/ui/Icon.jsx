import PropTypes from 'prop-types';

/**
 * Icon Component
 * 
 * A reusable wrapper for React Icons (Font Awesome) with consistent sizing,
 * colors, and accessibility support.
 * 
 * @example
 * // Basic usage
 * import { FaHeart } from 'react-icons/fa';
 * <Icon icon={FaHeart} size="md" color="primary" label="Favorite" />
 * 
 * @example
 * // Decorative icon (no label)
 * import { FaStar } from 'react-icons/fa';
 * <Icon icon={FaStar} size="lg" color="accent" />
 * 
 * @example
 * // Custom styling with className
 * import { FaBolt } from 'react-icons/fa';
 * <Icon icon={FaBolt} size="xl" className="hover:text-blue-700 transition-colors" />
 */
// eslint-disable-next-line no-unused-vars
function Icon({ icon: IconComponent, size = 'md', color = 'inherit', label, className = '' }) {
  // Size mapping (in pixels)
  const sizeMap = {
    sm: 16,  // 1rem - For inline text icons
    md: 24,  // 1.5rem - Default size, most common
    lg: 32,  // 2rem - For section headings
    xl: 48,  // 3rem - For hero sections
  };

  // Color mapping (TailwindCSS classes)
  const colorMap = {
    primary: 'text-blue-900',
    secondary: 'text-slate-600',
    accent: 'text-orange-500',
    muted: 'text-slate-400',
    inherit: '', // Uses currentColor from parent
  };

  const sizeValue = sizeMap[size] || sizeMap.md;
  const colorClass = colorMap[color] || '';

  // Combine classes
  const combinedClassName = `${colorClass} ${className}`.trim();

  // Accessibility: If label is provided, use aria-label; otherwise, hide from screen readers
  const ariaProps = label
    ? { 'aria-label': label }
    : { 'aria-hidden': 'true' };

  return (
    <IconComponent
      size={sizeValue}
      className={combinedClassName}
      {...ariaProps}
    />
  );
}

Icon.propTypes = {
  /** The React Icon component to render (e.g., FaHeart from react-icons/fa) */
  icon: PropTypes.elementType.isRequired,
  
  /** Size variant: sm (16px), md (24px), lg (32px), xl (48px) */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  
  /** Color variant matching design system */
  color: PropTypes.oneOf(['primary', 'secondary', 'accent', 'muted', 'inherit']),
  
  /** Accessible label for screen readers. If not provided, icon is decorative (aria-hidden) */
  label: PropTypes.string,
  
  /** Additional TailwindCSS classes for custom styling */
  className: PropTypes.string,
};

export default Icon;
