import { useState } from 'react';
import './SearchResultPage.css';
import navigationTop from '../assets/icons/sidebar/icon-navigation-top.svg';
import bookIcon from '../assets/icons/sidebar/icon-open-book.svg';
import columnIcon from '../assets/icons/sidebar/icon-column.svg';
import timeIcon from '../assets/icons/sidebar/icon-time.svg';
import playIcon from '../assets/icons/sidebar/icon-play.svg';
import archiveIcon from '../assets/icons/sidebar/icon-archive.svg';
import layersIcon from '../assets/icons/sidebar/icon-layer.svg';
import helpIcon from '../assets/icons/sidebar/icon-question.svg';
import backIcon from '../assets/icons/common/icon-arrow.svg';
import dropdownIcon from '../assets/icons/topbar/icon-dropdown-filled.svg';
import layerIcon from '../assets/icons/sidebar/icon-layer.svg';
import infoIcon from '../assets/icons/topbar/icon-info.svg';

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
      '제정, 이하 ‘구규칙’이라 한다) 제3조 [별표]에 따르면 이 사건 아파트의 경우 그 층간 소음 기준이 1분간 등가소음도 43dB(주간), 38dB(야간)로서, 한국환경공단 층간소음 이웃사이센터에 의한 소음진동측정결과표에 의하면...',
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
      '제정, 이하 ‘구규칙’이라 한다) 제3조 [별표]에 따르면 이 사건 아파트의 경우 그 층간 소음 기준이 1분간 등가소음도 43dB(주간), 38dB(야간)로서, 한국환경공단 층간소음 이웃사이센터에 의한 소음진동측정결과표에 의하면...',
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
      '제정, 이하 ‘구규칙’이라 한다) 제3조 [별표]에 따르면 이 사건 아파트의 경우 그 층간 소음 기준이 1분간 등가소음도 43dB(주간), 38dB(야간)로서, 한국환경공단 층간소음 이웃사이센터에 의한 소음진동측정결과표에 의하면...',
    resultLabel: '원고일부승',
    categoryLabel: '청구취지',
    views: 859,
  },
];

type PageState = 'success' | 'loading' | 'empty' | 'error';

const SearchResultPage = () => {
  const [pageState] = useState<PageState>('success');

  return (
    <div className="search-result-page">
      <aside className="search-navigation" aria-label="글로벌 내비게이션">
        <img src={navigationTop} alt="내비게이션" />
        <div className="search-navigation-group">
          {[[bookIcon, '법률 자료'], [columnIcon, '문서']].map(([icon, label]) => (
            <button key={label} type="button" aria-label={label} className="cursor-pointer"><img src={icon} alt="" /></button>
          ))}
        </div>
        <div className="search-navigation-group search-navigation-main">
          {[[timeIcon, '최근 작업'], [playIcon, '동영상'], [archiveIcon, '아카이브'], [layersIcon, '작업 목록']].map(([icon, label]) => (
            <button key={label} type="button" aria-label={label} className="cursor-pointer"><img src={icon} alt="" /></button>
          ))}
        </div>
        <button type="button" aria-label="도움말" className="search-help cursor-pointer"><img src={helpIcon} alt="" /></button>
      </aside>
      <div className="search-workspace">
        <header className="search-topbar">
          <div className="search-topbar-title">
            <button type="button" aria-label="뒤로 가기" onClick={() => window.history.back()} className="cursor-pointer"><img className="search-back-icon" src={backIcon} alt="" /></button>
            <span>“층간소음” 검색</span><button type="button" aria-label="검색 작업 메뉴" className="cursor-pointer"><img src={dropdownIcon} alt="" /></button>
          </div>
          <div className="search-topbar-actions">
            {[0, 1].map((id) => <button key={id} type="button" className="search-file-button cursor-pointer">참조 파일 0<img src={infoIcon} alt="파일 정보" /></button>)}
            <button type="button" className="search-new-task cursor-pointer"><span className="search-layer-icon"><img src={layerIcon} alt="" /></span>새 작업</button>
          </div>
        </header>
        <main className="search-panel">
      <div className="search-content">
        <CategoryTabs />

        <div className="search-results-scroll">
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
        </div>

        <PromptInput />
      </div>
        </main>
      </div>
    </div>
  );
};

export default SearchResultPage;
