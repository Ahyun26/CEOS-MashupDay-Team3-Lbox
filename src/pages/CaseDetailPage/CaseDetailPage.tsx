import { useRef } from 'react';
import ContentPanel from '../../components/layout/ContentPanel';
import { CASE_DETAIL_MOCK } from './caseDetail.mock';
import CaseBody from './components/CaseBody';
import CaseHeader from './components/CaseHeader';
import DocumentToolbar from './components/DocumentToolbar';
import ScrollTopButton from './components/ScrollTopButton';

function CaseDetailPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const caseDetail = CASE_DETAIL_MOCK;

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ContentPanel
      scrollRef={scrollRef}
      floating={
        <>
          <DocumentToolbar />
          <ScrollTopButton onClick={scrollToTop} />
        </>
      }
    >
      <article className="flex min-h-full flex-col items-center gap-px">
        <CaseHeader title={caseDetail.title} caseName={caseDetail.caseName} />
        <CaseBody courtLines={caseDetail.courtLines} infoRows={caseDetail.infoRows} />
      </article>
    </ContentPanel>
  );
}

export default CaseDetailPage;
