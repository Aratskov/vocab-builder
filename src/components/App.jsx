import { Routes, Route } from 'react-router-dom';

import { Container } from './Container/Container';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';

export const App = () => {
  return (
    <Container>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Container>
  );
};
