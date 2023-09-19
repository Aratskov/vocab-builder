import { Routes, Route } from 'react-router-dom';

import { Container } from './Container/Container';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { AuthForm } from './AuthForm/AuthForm';

export const App = () => {
  return (
    <Container>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<AuthForm />} />
          <Route path="register" element={<AuthForm isRegister={true} />} />
        </Route>
      </Routes>
    </Container>
  );
};
