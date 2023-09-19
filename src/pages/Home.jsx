import { ImageHome } from 'components/ImageHome/ImageHome';
import { TextComponent } from 'components/TextComponent/TextComponent';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <ImageHome />
      <TextComponent/>
      <Outlet/>
    </>
  );
};
