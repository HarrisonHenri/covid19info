import React from 'react';

import { Label, Picker, Row } from '..';

interface Props {
  status: string;
  handleSetPicker: (newStatus: string) => void;
}

const StatusBar: React.FC<Props> = ({ status, handleSetPicker }) => {
  return (
    <>
      <Row justify="space-between" flexDirection="row" spaced>
        <Picker
          active={status === 'confirmed'}
          onPress={handleSetPicker.bind(null, 'confirmed')}>
          <Label type="small">Confirmed</Label>
        </Picker>
        <Picker
          active={status === 'deaths'}
          onPress={handleSetPicker.bind(null, 'deaths')}>
          <Label type="small">Deaths</Label>
        </Picker>
        <Picker
          active={status === 'recovered'}
          onPress={handleSetPicker.bind(null, 'recovered')}>
          <Label type="small">Recovered</Label>
        </Picker>
      </Row>
      <Row justify="center" flexDirection="row">
        <Picker
          active={status === 'active'}
          onPress={handleSetPicker.bind(null, 'active')}>
          <Label type="small">Active</Label>
        </Picker>
      </Row>
    </>
  );
};

export default StatusBar;
