import PropTypes from 'prop-types';

/**
 * Section Component
 * 
 * A semantic section wrapper with consistent spacing and optional background.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Section content
 * @param {'white'|'gray'|'blue'|'dark'} props.background - Background color variant
 * @param {'sm'|'md'|'lg'|'xl'} props.spacing - Vertical padding size
 * @param {string} props.id - Section ID for anchor links
 * @param {string} props.className - Additional CSS classes
 */
function Section({
  children,
  background = 'white',
  spacing = 'lg',
  id,
  className = '',
  ...props
}) {
  // Background styles
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    blue: 'bg-blue-50',
    dark: 'bg-slate-900 text-white',
  };

  // Spacing styles
  const spacingStyles = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };

  // Combine all styles
  const sectionClasses = `${backgroundStyles[background]} ${spacingStyles[spacing]} ${className}`;

  return (
    <section id={id} className={sectionClasses} {...props}>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.oneOf(['white', 'gray', 'blue', 'dark']),
  spacing: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  id: PropTypes.string,
  className: PropTypes.string,
};

export default Section;
