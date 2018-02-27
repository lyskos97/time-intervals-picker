/* @flow */

import React from 'react';
import TimeIntervalPicker, {
  type DateRange,
} from './components/TimeIntervalPicker/TimeIntervalPicker';

type Props = {};

export default class App extends React.Component<Props, void> {
  cb = (value: DateRange) => {
    console.log('cb invoked on', value);
  };

  render() {
    return (
      <TimeIntervalPicker
        timeStep={30}
        timeMin={new Date(2018, 0, 1, 9)}
        timeMax={new Date(2018, 0, 1, 19)}
        selectedTime={[new Date(2018, 0, 1, 15, 30), new Date(2018, 0, 1, 15, 59)]}
        busyTime={[[new Date(2018, 0, 1, 12, 30), new Date(2018, 0, 1, 13, 30)]]}
        onChange={this.cb}
        eventDuration={70}
      />
    );
  }
}
