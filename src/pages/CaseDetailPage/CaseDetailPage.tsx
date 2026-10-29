import { useRef, useState } from 'react';
import ContentPanel from '../../components/layout/ContentPanel';
import ScrollPane from '../../components/layout/ScrollPane';
import {
  CASE_DETAIL_MOCK,
  CITATION_SECTIONS_MOCK,
  CITED_CASE_DETAIL_MOCK,
} from './caseDetail.mock';
import CaseCompareView from './components/CaseCompareView';
import CaseDocument from './components/CaseDocument';
import CitationPanel from './components/CitationPanel';
import DocumentToolbar from './components/DocumentToolbar';
import ScrollTopButton from './components/ScrollTopButton';

function CaseDetailPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [comparedCaseId, setComparedCaseId] = useState<number | null>(null);
  const caseDetail = CASE_DETAIL_MOCK;

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 비교 화면에서 패널 버튼을 누르면 비교를 닫고 패널로 돌아감
  const togglePanel = () => {
    if (comparedCaseId) {
      setComparedCaseId(null);
      setIsPanelOpen(true);
      return;
    }
    setIsPanelOpen((prev) => !prev);
  };

  if (comparedCaseId) {
    return (
      <CaseCompareView
        original={caseDetail}
        compared={CITED_CASE_DETAIL_MOCK}
        onClose={() => setComparedCaseId(null)}
        onTogglePanel={togglePanel}
      />
    );
  }

  return (
    <ContentPanel
      aside={
        isPanelOpen && (
          <CitationPanel
            title={caseDetail.title}
            caseName={caseDetail.caseName}
            sections={CITATION_SECTIONS_MOCK}
            onClose={() => setIsPanelOpen(false)}
            onSelectCase={setComparedCaseId}
          />
        )
      }
    >
      <ScrollPane
        scrollRef={scrollRef}
        floating={
          <>
            <DocumentToolbar isPanelOpen={isPanelOpen} onTogglePanel={togglePanel} />
            <ScrollTopButton onClick={scrollToTop} isPanelOpen={isPanelOpen} />
          </>
        }
      >
        <CaseDocument detail={caseDetail} />
      </ScrollPane>
    </ContentPanel>
  );
}

export default CaseDetailPage;
