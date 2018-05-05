import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __reactComponentDispatchEvent from '../runtime-helpers/react-component-dispatch-event.js';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';
const CheckboxProps = Utils.extend({
  checked: Boolean,
  name: [
    Number,
    String
  ],
  value: [
    Number,
    String,
    Boolean
  ],
  disabled: Boolean,
  readonly: Boolean
}, Mixins.colorProps);
class F7Checkbox extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const self = this;
    const {name, value, disabled, readonly, checked} = self;
    const inputEl = React.createElement('input', {
      type: 'checkbox',
      name: name,
      value: value,
      disabled: disabled,
      readOnly: readonly,
      checked: checked,
      onChange: self.onChange.bind(self)
    });
    const iconEl = React.createElement('i', { className: 'icon-checkbox' });
    return React.createElement('label', {
      id: self.props.id,
      style: self.props.style,
      className: self.classes
    }, inputEl, iconEl, this.slots['default']);
  }
  get classes() {
    const self = this;
    return Utils.classNames(self.props.className, {
      checkbox: true,
      disabled: self.disabled
    }, Mixins.colorClasses(self));
  }
  onChange(event) {
    this.dispatchEvent('change', event);
  }
  get slots() {
    return __reactComponentSlots(this);
  }
  dispatchEvent(events, ...args) {
    return __reactComponentDispatchEvent(this, events, ...args);
  }
}
__reactComponentSetProps(F7Checkbox, CheckboxProps);
export default F7Checkbox;