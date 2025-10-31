import PropTypes from 'prop-types';

/**
 * Card Component
 * 
 * A flexible container component for grouping related content.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {'default'|'bordered'|'elevated'} props.variant - Card style variant
 * @param {boolean} props.hoverable - Whether card has hover effect
 * @param {Function} props.onClick - Click handler (makes card clickable)
 * @param {string} props.className - Additional CSS classes
 */
function Card({ children, variant = 'default', hoverable = false, onClick, className = '', ...props }) {
  // Base styles
  const baseStyles = 'rounded-lg transition-all duration-200';

  // Variant styles
  const variantStyles = {
    default: 'bg-white',
    bordered: 'bg-white border-2 border-slate-200',
    elevated: 'bg-white shadow-lg',
  };

  // Hover styles
  const hoverStyles = hoverable || onClick ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';

  // Clickable styles
  const clickableStyles = onClick ? 'cursor-pointer' : '';

  // Combine all styles
  const cardClasses = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${clickableStyles} ${className}`;

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'bordered', 'elevated']),
  hoverable: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

/**
 * CardHeader Component
 * 
 * Header section of a card, typically contains title and optional actions.
 */
function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`px-6 py-4 border-b border-slate-200 ${className}`} {...props}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * CardBody Component
 * 
 * Main content area of a card.
 */
function CardBody({ children, className = '', ...props }) {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * CardFooter Component
 * 
 * Footer section of a card, typically contains actions or metadata.
 */
function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={`px-6 py-4 border-t border-slate-200 bg-slate-50 rounded-b-lg ${className}`} {...props}>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * CardImage Component
 * 
 * Image section for a card, typically at the top.
 */
function CardImage({ src, alt, className = '', ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-48 object-cover rounded-t-lg ${className}`}
      {...props}
    />
  );
}

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

// Export all card components
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
