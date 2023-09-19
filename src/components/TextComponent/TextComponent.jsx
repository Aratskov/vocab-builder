import { useLocation } from 'react-router-dom';
import { Text } from './TextComponent.styled';

export const TextComponent = () => {
  const { pathname } = useLocation();

  if (pathname !== '/login') return;
  return <Text>Word · Translation · Grammar · Progress </Text>;
};
