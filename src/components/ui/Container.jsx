import PropTypes from 'prop-types';

/**
 * Container Component
 * 
 * A responsive wrapper component for content with max-width constraints.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Container content
 * @param {'sm'|'md'|'lg'|'xl'|'full'} props.maxWidth - Maximum width of container
 * @param {boolean} props.centerContent - Whether to center content horizontally
 * @param {string} props.className - Additional CSS classes
 */
function Container({
  children,
  maxWidth = 'lg',
  centerContent = false,
  className = '',
  ...props
}) {
  // Max width styles
  const maxWidthStyles = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  // Center content styles
  const centerStyles = centerContent ? 'mx-auto' : '';

  // Combine all styles
  const containerClasses = `w-full px-4 sm:px-6 lg:px-8 ${maxWidthStyles[maxWidth]} ${centerStyles} ${className}`;

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
  centerContent: PropTypes.bool,
  className: PropTypes.string,
};

export default Container;
