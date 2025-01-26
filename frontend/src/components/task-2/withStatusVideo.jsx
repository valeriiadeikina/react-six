import { NewComponent, Popular } from './MainPage';

export const withStatusVideo = (Component) => {
  return function ({ views, ...args }) {
    if (views < 100) {
      return <NewComponent {...args} children={<Component views={views} {...args} />} />;
    }
    if (views < 1000) {
      return <Popular {...args} children={<Component {...args} views={views} />} />;
    } else {
      return <Component {...args} views={views} />;
    }
  };
};
