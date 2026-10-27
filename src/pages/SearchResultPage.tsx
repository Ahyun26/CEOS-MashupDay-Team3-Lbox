import { useState } from 'react';

import CategoryTabs from './components/CategoryTabs';
import FilterBar from './components/FilterBar';
import PromptInput from './components/PromptInput';
import ResultHeader from './components/ResultHeader';
import SearchCard from './components/SearchCard';

const MOCK_SEARCH_RESULTS = [
  {
    id: 1,
    court: '서울중앙지방법원',
    decisionDate: '2023. 4. 13.',
    caseNumber: '2022가단5065289',
    title: '층간소음으로인한위자료청구의건',
    preview:
      '제정, 이하 ‘구규칙’이라 한다) 제3조 [별표]에 따르면 이 사건 아파트의 경우 그 층간 소음 기준이 1분간 등가소음도 43dB(주간), 38dB(야간)로서...',
    resultLabel: '원고일부승',
    categoryLabel: '청구취지',
    views: 859,
  },
  {
    id: 2,
    court: '서울중앙지방법원',
    decisionDate: '2023. 4. 13.',
    caseNumber: '2022가단5065289',
    title: '층간소음으로인한위자료청구의건',
    preview:
      '한국환경공단 층간소음 이웃사이센터에 의한 소음진동측정결과표에 의하면, 측정된 층간소음과 관련하여...',
    resultLabel: '원고일부승',
    categoryLabel: '청구취지',
    views: 859,
  },
  {
    id: 3,
    court: '서울중앙지방법원',
    decisionDate: '2023. 4. 13.',
    caseNumber: '2022가단5065289',
    title: '층간소음으로인한위자료청구의건',
    preview:
      '시행된 층간소음 기준에 따라 주간 및 야간 소음 기준이 강화되었고, 이 사건 측정치와 비교하면...',
    resultLabel: '원고일부승',
    categoryLabel: '청구취지',
    views: 859,
  },
];

type PageState = 'success' | 'loading' | 'empty' | 'error';

const SearchResultPage = () => {
  const [pageState] = useState<PageState>('success');

  return (
    <main className="flex min-h-screen justify-center bg-white">
      <div className="w-[42.75rem]">
        <CategoryTabs />

        <FilterBar />

        <ResultHeader resultCount={3798} />

        {pageState === 'loading' && (
          <div className="py-[3rem] text-center text-[0.875rem] text-gray-500">
            검색 결과를 불러오는 중입니다.
          </div>
        )}

        {pageState === 'empty' && (
          <div className="py-[3rem] text-center text-[0.875rem] text-gray-500">
            검색 결과가 없습니다.
          </div>
        )}

        {pageState === 'error' && (
          <div className="py-[3rem] text-center text-[0.875rem] text-gray-500">
            검색 결과를 불러오지 못했습니다.
          </div>
        )}

        {pageState === 'success' && (
          <section>
            {MOCK_SEARCH_RESULTS.map((result) => (
              <SearchCard
                key={result.id}
                court={result.court}
                decisionDate={result.decisionDate}
                caseNumber={result.caseNumber}
                title={result.title}
                preview={result.preview}
                resultLabel={result.resultLabel}
                categoryLabel={result.categoryLabel}
                views={result.views}
              />
            ))}
          </section>
        )}

        <PromptInput />
      </div>
    </main>
  );
};

export default SearchResultPage;
