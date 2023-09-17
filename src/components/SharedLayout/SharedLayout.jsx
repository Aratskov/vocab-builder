import Icons from '../../assets/svg/logo.svg';
import { Icon, Text, WrapContainer, WrapLogo } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <WrapContainer>
      <WrapLogo>
        <Icon>
          <use href={`${Icons}#logo`} />
        </Icon>
        <Text>VocabBuilder</Text>
      </WrapLogo>
    </WrapContainer>
  );
};
