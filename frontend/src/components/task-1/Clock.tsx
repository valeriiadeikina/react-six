import type { Dispatch, SetStateAction } from 'react';
import React, { useEffect } from 'react';
import type { ClockType } from '../../types';
import styles from './clock-styles.module.css';
import Button from './Button';

type ClockProps = {
  clock: ClockType;
  deleteClockHandler: (clockId: string) => void;
  setClocks: Dispatch<SetStateAction<ClockType[]>>;
};

export default function Clock({
  clock,
  deleteClockHandler,
  setClocks,
}: ClockProps): React.JSX.Element {
  const hourDegree =
    (360 / 12) * clock.time.getHours() + (clock.time.getMinutes() / 60) * (360 / 12);
  const minuteDegree = (360 / 60) * clock.time.getMinutes();
  const secondDegree = (360 / 60) * clock.time.getSeconds(); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updateClockTime = new Date(
        new Date().getTime() + clock.timeZoneValue * 60 * 60 * 1000 - 3 * 60 * 60 * 1000,
      );

      setClocks((prev) => {
        const targetClockIndex = prev.findIndex((c) => c.id === clock.id);
        if (targetClockIndex === -1) return prev;

        const updatedClocks = prev.map((c, index) =>
          index === targetClockIndex ? { ...c, time: updateClockTime } : c,
        );

        return updatedClocks;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [clock, setClocks]);

  return (
    <div className="me-3 px-2">
      <div className="d-flex justify-content-between">
        <h5>{clock.name}</h5>
        <Button
          className={styles.delete_btn}
          title="X"
          onClick={() => deleteClockHandler(clock.id)}
        />
      </div>
      <div className={styles.clock}>
        <div
          className={`${styles.hand} ${styles.hour_hand}`}
          style={{ transform: `rotate(${hourDegree.toString()}deg)` }}
        ></div>
        <div
          className={`${styles.hand} ${styles.minute_hand}`}
          style={{ transform: `rotate(${minuteDegree.toString()}deg)` }}
        ></div>
        <div
          className={`${styles.hand} ${styles.second_hand}`} 
          style={{ transform: `rotate(${secondDegree.toString()}deg)` }}
        ></div>
        <div className={styles.center}></div>
      </div>
    </div>
  );
}