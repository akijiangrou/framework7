import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { classNames, getDataAttrs } from '../utils/utils';
import { colorClasses } from '../utils/mixins';

/* dts-props
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  contentHeight? : string
  position? : string
  left? : boolean
  center? : boolean
  right? : boolean
  COLOR_PROPS
*/

const MenuDropdown = forwardRef((props, ref) => {
  const { className, id, style, children, contentHeight, position, left, center, right } = props;
  const dataAttrs = getDataAttrs(props);

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  let positionComputed = position || 'left';
  if (left) positionComputed = 'left';
  if (center) positionComputed = 'center';
  if (right) positionComputed = 'right';

  const classes = classNames(
    'menu-dropdown',
    `menu-dropdown-${positionComputed}`,
    colorClasses(props),
    className,
  );

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...dataAttrs}>
      <div className="menu-dropdown-content" style={{ height: contentHeight }}>
        {children}
      </div>
    </div>
  );
});

MenuDropdown.displayName = 'f7-menu-dropdown';

export default MenuDropdown;