import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import CaseDetailPage from './pages/CaseDetailPage/CaseDetailPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchResultPage />} />
        <Route
          path="/judgments/:judgmentId"
          element={
            <AppLayout title={'“층간소음" 검색'}>
              <CaseDetailPage />
            </AppLayout>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
