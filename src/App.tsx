import AppLayout from './components/layout/AppLayout';
import CaseDetailPage from './pages/CaseDetailPage/CaseDetailPage';

function App() {
  return (
    <AppLayout title={'“층간소음" 검색'}>
      <CaseDetailPage />
    </AppLayout>
  );
}

export default App;
