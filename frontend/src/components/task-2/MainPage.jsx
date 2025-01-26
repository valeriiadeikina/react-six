import React, { useState } from 'react';
import { withStatusVideo } from './withStatusVideo';
import styles from './main-page-styles.module.css';

export function NewComponent(props) {
  return (
    <div className={`${styles.wrap_item} ${styles.new}`}>
      <span className={styles.label}>New!</span>
      {props.children}
    </div>
  );
}

export function Popular(props) {
  return (
    <div className={`${styles.wrap_item} ${styles.wrap_item_popular}`}>
      <span className={styles.label}>Popular!</span>
      {props.children}
    </div>
  );
}

function Article(props) {
  return (
    <div className={`${styles.item} ${styles.item_article}`}>
      <h3>
        <a href="#">{props.title}</a>
      </h3>
      <p className={styles.views}>Прочтений: {props.views}</p>
    </div>
  );
}

function Video(props) {
  return (
    <div className={`${styles.item} ${styles.item_video}`}>
      <iframe
        src={props.url}
        frameborder="0"
        allow="encrypted-media"
        allowFullscreen
      ></iframe>
      <p className={styles.views}>Просмотров: {props.views}</p>
    </div>
  );
}

function List(props) {
  return props.list.map((item, i) => {
    const VideoWithStatus = withStatusVideo(Video);
    const ArticleWithStatus = withStatusVideo(Article);
    switch (item.type) {
      case 'video':
        return <VideoWithStatus {...item} key={i} />;

      case 'article':
        return <ArticleWithStatus {...item} key={i} />;
    }
  });
}

export function App() {
  const [list, setList] = useState([
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12,
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175,
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532,
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253,
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12,
    },
  ]);

  return <List list={list} />;
}
