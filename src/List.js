import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const renderItems = (items, itemsClassName) => {
  const classNames = classnames('list__item', itemsClassName);

  return items.map((item, index) => (
    <li
      className={classNames}
      key={index}>
      {item}
    </li>
  ));
};

export default function List(props) {
  const {
    items,
    className,
    itemsClassName,
    showBullets,
    isOrdered,
    isInlined
  } = props;

  const listClassNames = classnames('list', className, {
    'list--unordered': !isOrdered,
    'list--show-bullets': showBullets,
    'list--inline': isInlined
  });

  const tag = isOrdered ? 'ol' : 'ul';

  return React.createElement(tag, { className: listClassNames }, renderItems(items, itemsClassName));
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.node.isRequired
  ).isRequired,
  className: PropTypes.string,
  itemsClassName: PropTypes.string,
  showBullets: PropTypes.bool,
  isOrdered: PropTypes.bool,
  isInlined: PropTypes.bool
};