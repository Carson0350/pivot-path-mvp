import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * AccordionItem Component
 * 
 * Individual accordion item with collapsible content.
 */
function AccordionItem({ title, children, isOpen, onToggle, ...props }) {
  return (
    <div className="border-b border-slate-200 last:border-b-0" {...props}>
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-900">{title}</span>
        <svg
          className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 text-slate-600">{children}</div>
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

/**
 * Accordion Component
 * 
 * A collapsible content container with multiple panels.
 * 
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of accordion items {title, content}
 * @param {boolean} props.allowMultiple - Whether multiple items can be open at once
 * @param {number|number[]} props.defaultOpen - Index(es) of items open by default
 * @param {string} props.className - Additional CSS classes
 */
function Accordion({ items, allowMultiple = false, defaultOpen = null, className = '', ...props }) {
  const [openItems, setOpenItems] = useState(() => {
    if (defaultOpen === null) return [];
    if (Array.isArray(defaultOpen)) return defaultOpen;
    return [defaultOpen];
  });

  const handleToggle = (index) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`bg-white rounded-lg border border-slate-200 overflow-hidden ${className}`} {...props}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openItems.includes(index)}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  allowMultiple: PropTypes.bool,
  defaultOpen: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  className: PropTypes.string,
};

export default Accordion;
