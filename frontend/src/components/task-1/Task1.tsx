import React, { useState } from 'react';
import styles from './task-styles.module.css';
import { withPrettiedDate } from './withPrettiedDate';

export type DateTimeProps = {
  date: string;
};

function DateTime(props: DateTimeProps): React.JSX.Element {
  return <p className={styles.date}>{props.date}</p>;
}

type Video = {
  url: string;
  date: string;
};

const DateTimePretty = withPrettiedDate(DateTime);

function Video(props: Video): React.JSX.Element {
  return (
    <div className={styles.video}>
      <iframe
        src={props.url}
        // frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}

type VideoListProps = {
  list: Video[];
};

function VideoList(props: VideoListProps): React.JSX.Element {
  return (
    <>
      {props.list.map((item, i) => (
        <Video key={(i + 1).toString()} url={item.url} date={item.date} />
      ))}
    </>
  );
}

export default function App(): React.JSX.Element {
  const [list] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00',
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-03-03 12:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-02-03 23:16:00',
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00',
    },
  ]);

  return <VideoList list={list} />;
}
