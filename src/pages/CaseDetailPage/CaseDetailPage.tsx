import { useRef, useState } from 'react';
import ContentPanel from '../../components/layout/ContentPanel';
import { CASE_DETAIL_MOCK, CITATION_SECTIONS_MOCK } from './caseDetail.mock';
import CaseBody from './components/CaseBody';
import CaseHeader from './components/CaseHeader';
import CitationPanel from './components/CitationPanel';
import DocumentToolbar from './components/DocumentToolbar';
import ScrollTopButton from './components/ScrollTopButton';

function CaseDetailPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const caseDetail = CASE_DETAIL_MOCK;

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ContentPanel
      scrollRef={scrollRef}
      floating={
        <>
          <DocumentToolbar
            isPanelOpen={isPanelOpen}
            onTogglePanel={() => setIsPanelOpen((prev) => !prev)}
          />
          <ScrollTopButton onClick={scrollToTop} isPanelOpen={isPanelOpen} />
        </>
      }
      aside={
        isPanelOpen && (
          <CitationPanel
            title={caseDetail.title}
            caseName={caseDetail.caseName}
            sections={CITATION_SECTIONS_MOCK}
            onClose={() => setIsPanelOpen(false)}
          />
        )
      }
    >
      <article className="mx-auto flex min-h-full w-full max-w-[46.75rem] flex-col items-center gap-px px-32">
        <CaseHeader title={caseDetail.title} caseName={caseDetail.caseName} />
        <CaseBody courtLines={caseDetail.courtLines} infoRows={caseDetail.infoRows} />
      </article>
    </ContentPanel>
  );
}

export default CaseDetailPage;
