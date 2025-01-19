import React, { useState } from 'react';
import InputPanel from './InputPanel';
import Clock from './Clock';
import type { ClockType } from '../../types';

export default function ClockPage(): React.JSX.Element {
  const [clocks, setClocks] = useState<ClockType[]>([]);

  const deleteClockHandler = (idClock: string): void => {
    setClocks(clocks.filter((clock) => clock.id !== idClock));
  };

  return (
    <div>
      <InputPanel setClocks={setClocks} />
      <div className="d-flex mt-3">
        {clocks.map((clock: ClockType) => (
          <Clock key={clock.id} clock={clock} setClocks={setClocks} deleteClockHandler={deleteClockHandler} />
        ))}
      </div>
    </div>
  );
}
