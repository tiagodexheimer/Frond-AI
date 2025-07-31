import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './styles/theme';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy loading das páginas para otimização
const HomePage = React.lazy(() => import('./pages/HomePage'));
const CharactersPage = React.lazy(() => import('./pages/CharactersPage'));
const LorePage = React.lazy(() => import('./pages/LorePage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/characters" element={<CharactersPage />} />
              <Route path="/lore" element={<LorePage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Rota 404 - redireciona para home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;