import type { Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react';
import InputCustom from './InputCustom';
import Button from './Button';
import type { ClockType } from '../../types';
import { v4 as uuidv4 } from 'uuid';

type InputPanelProps = {
  setClocks: Dispatch<SetStateAction<ClockType[]>>;
};

export default function InputPanel({ setClocks }: InputPanelProps): React.JSX.Element {
  const [clockNameValue, setClockNameValue] = useState('');
  const [timeZoneValue, setTimeZoneValue] = useState<string>('0');

  const addClockHandler = (): void => {
    const newClock: ClockType = {
      id: uuidv4(),
      name: clockNameValue,
      time: new Date(new Date().getTime() + +timeZoneValue * 60 * 60 * 1000 - 3 * 60 * 60 * 1000),
      timeZoneValue: +timeZoneValue,
    };
    setClocks((prev) => [...prev, newClock]);
    setClockNameValue('');
    setTimeZoneValue('');
  };

  return (
    <div>
      <InputCustom
        type="text"
        label="Название"
        value={clockNameValue}
        setValue={setClockNameValue}
      />
      <InputCustom
        type="number"
        label="Временная зона"
        value={timeZoneValue}
        setValue={setTimeZoneValue}
        min={-12}
        max={+14}
      />
      <Button
        title="Добавить"
        onClick={addClockHandler}
        disabled={!clockNameValue || +timeZoneValue > 14 || +timeZoneValue < -12}
      />
    </div>
  );
}
