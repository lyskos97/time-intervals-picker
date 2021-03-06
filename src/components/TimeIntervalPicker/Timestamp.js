/* @flow */
/* eslint-disabl */

import * as React from 'react';
import fns from 'date-fns';
import { type Stamp } from './TimeIntervalPicker';
import s from './TimeIntervalPicker.scss';

type Props = {
  handleClick?: () => void,
} & Stamp;

export default class Timestamp extends React.Component<Props, void> {
  formatTime(d: Date): string {
    return fns.format(d, 'HH:mm');
  }

  handleClick = () => {
    const { handleClick } = this.props;

    if (handleClick) {
      handleClick();
    }
  };

  render() {
    const { value, status } = this.props;
    const classnames = [s.cell];

    if (status === 'selected') classnames.push(s.cellSelected);
    else if (status === 'disabled') classnames.push(s.cellInactive);
    else classnames.push(s.cellActive);

    return (
      <div className={classnames.join(' ')} onClick={this.handleClick}>
        <span className="time">{this.formatTime(value)}</span>
      </div>
    );
  }
}
