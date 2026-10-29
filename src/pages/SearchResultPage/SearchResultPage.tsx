import { useEffect, useState } from 'react';
import { searchJudgments } from '../../api/judgments';
import type {
  JudgmentSearchParams,
  JudgmentSearchResponse,
  JudgmentSearchSort,
} from '../../types/judgment';
import navigationTop from '../../assets/icons/sidebar/icon-navigation-top.svg';
import bookIcon from '../../assets/icons/sidebar/icon-open-book.svg';
import columnIcon from '../../assets/icons/sidebar/icon-column.svg';
import timeIcon from '../../assets/icons/sidebar/icon-time.svg';
import playIcon from '../../assets/icons/sidebar/icon-play.svg';
import archiveIcon from '../../assets/icons/sidebar/icon-archive.svg';
import layersIcon from '../../assets/icons/sidebar/icon-layer.svg';
import helpIcon from '../../assets/icons/sidebar/icon-question.svg';
import backIcon from '../../assets/icons/common/icon-arrow.svg';
import dropdownIcon from '../../assets/icons/topbar/icon-dropdown-filled.svg';
import layerIcon from '../../assets/icons/sidebar/icon-layer.svg';
import infoIcon from '../../assets/icons/topbar/icon-info.svg';

import CategoryTabs from './components/CategoryTabs';
import FilterBar from './components/FilterBar';
import PromptInput from './components/PromptInput';
import ResultHeader from './components/ResultHeader';
import SearchCard from './components/SearchCard';

const INITIAL_KEYWORD = '층간소음';

type PageState = 'success' | 'loading' | 'empty' | 'error';

const SearchResultPage = () => {
  const [searchRequest, setSearchRequest] = useState<JudgmentSearchParams>({
    keyword: INITIAL_KEYWORD,
    sort: 'date,desc',
    page: 0,
    size: 20,
  });
  const [pageState, setPageState] = useState<PageState>('loading');
  const [searchResult, setSearchResult] = useState<JudgmentSearchResponse | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    searchJudgments(searchRequest, controller.signal)
      .then((result) => {
        if (controller.signal.aborted) return;
        setSearchResult(result);
        setPageState(result.content.length > 0 ? 'success' : 'empty');
      })
      .catch(() => {
        if (controller.signal.aborted) return;
        setPageState('error');
      });

    return () => controller.abort();
  }, [searchRequest]);

  const handleSearch = (value: string) => {
    const keyword = value.trim();
    if (!keyword) return;

    setPageState('loading');
    setSearchResult(null);
    setSearchRequest((previous) => ({ ...previous, keyword, page: 0 }));
  };

  const handleSortChange = (sort: JudgmentSearchSort) => {
    if (sort === searchRequest.sort) return;

    setPageState('loading');
    setSearchResult(null);
    setSearchRequest((previous) => ({ ...previous, sort, page: 0 }));
  };

  const handleCaseTypeChange = (caseType: JudgmentSearchParams['caseType']) => {
    if (caseType === searchRequest.caseType) return;

    setPageState('loading');
    setSearchResult(null);
    setSearchRequest((previous) => {
      const next = { ...previous, page: 0 };
      if (caseType) {
        next.caseType = caseType;
      } else {
        delete next.caseType;
      }
      return next;
    });
  };

  const handleCourtChange = (value: string | undefined) => {
    const court = value?.trim() || undefined;
    if (court === searchRequest.court) return;

    setPageState('loading');
    setSearchResult(null);
    setSearchRequest((previous) => {
      const next = { ...previous, page: 0 };
      if (court) {
        next.court = court;
      } else {
        delete next.court;
      }
      return next;
    });
  };

  const handleDateChange = ({
    dateFrom,
    dateTo,
  }: Pick<JudgmentSearchParams, 'dateFrom' | 'dateTo'>) => {
    if (dateFrom && dateTo && dateFrom > dateTo) return;
    if (dateFrom === searchRequest.dateFrom && dateTo === searchRequest.dateTo) return;

    setPageState('loading');
    setSearchResult(null);
    setSearchRequest((previous) => {
      const next = { ...previous, page: 0 };
      if (dateFrom) next.dateFrom = dateFrom;
      else delete next.dateFrom;
      if (dateTo) next.dateTo = dateTo;
      else delete next.dateTo;
      return next;
    });
  };

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-gray-100 font-sans tracking-[-0.2px] text-gray-900">
      <aside className="flex w-[56px] shrink-0 flex-col" aria-label="글로벌 내비게이션">
        <img src={navigationTop} alt="내비게이션" className="h-[204.5px] w-[56px]" />
        <div className="flex flex-col items-center gap-[16px] border-b-[0.5px] border-gray-300 p-[4px]">
          {[
            [bookIcon, '법률 자료'],
            [columnIcon, '문서'],
          ].map(([icon, label]) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="flex shrink-0 cursor-pointer items-center justify-center"
            >
              <img src={icon} alt="" />
            </button>
          ))}
        </div>
        <div className="flex min-h-0 flex-1 flex-col items-center gap-[16px] border-b-[0.5px] border-gray-300 p-[4px]">
          {[
            [timeIcon, '최근 작업'],
            [playIcon, '동영상'],
            [archiveIcon, '아카이브'],
            [layersIcon, '작업 목록'],
          ].map(([icon, label]) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="flex shrink-0 cursor-pointer items-center justify-center"
            >
              <img src={icon} alt="" />
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label="도움말"
          className="mx-auto flex shrink-0 cursor-pointer items-center justify-center p-[4px]"
        >
          <img src={helpIcon} alt="" />
        </button>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col pr-[8px] pb-[8px]">
        <header className="flex h-[40px] shrink-0 items-center justify-between py-[8px] pr-[12px] pl-[20px] max-[720px]:pl-[12px]">
          <div className="flex items-center gap-[2px] text-[14px] font-medium">
            <button
              type="button"
              aria-label="뒤로 가기"
              onClick={() => window.history.back()}
              className="mr-[14px] cursor-pointer"
            >
              <img src={backIcon} alt="" />
            </button>
            <span>“{searchRequest.keyword}” 검색</span>
            <button type="button" aria-label="검색 작업 메뉴" className="cursor-pointer">
              <img src={dropdownIcon} alt="" />
            </button>
          </div>
          <div className="flex items-center gap-[4px]">
            {[0, 1].map((id) => (
              <button
                key={id}
                type="button"
                className="flex h-[20px] cursor-pointer items-center gap-[4px] rounded-[4px] border border-gray-300 bg-white px-[8px] py-[2px] text-[12px] font-medium max-[720px]:hidden"
              >
                참조 파일 0<img src={infoIcon} alt="파일 정보" />
              </button>
            ))}
            <button
              type="button"
              className="ml-[12px] flex cursor-pointer items-center gap-[2px] text-[12px] text-gray-600"
            >
              <span className="flex h-[20px] w-[20px] items-center justify-center overflow-hidden">
                <img src={layerIcon} alt="" className="max-w-none shrink-0" />
              </span>
              새 작업
            </button>
          </div>
        </header>
        <main className="flex min-h-0 flex-1 justify-center overflow-hidden rounded-[8px] border-[0.5px] border-gray-300 bg-white">
          <div className="relative flex min-h-0 w-full flex-col items-center">
            <CategoryTabs />

            <div className="min-h-0 w-full flex-1 overflow-y-auto pb-[132px] [scrollbar-gutter:stable_both-edges]">
              <FilterBar
                caseType={searchRequest.caseType}
                onCaseTypeChange={handleCaseTypeChange}
                court={searchRequest.court}
                onCourtChange={handleCourtChange}
                dateFrom={searchRequest.dateFrom}
                dateTo={searchRequest.dateTo}
                onDateChange={handleDateChange}
              />
              <ResultHeader
                resultCount={searchResult?.page.totalElements ?? 0}
                sort={searchRequest.sort ?? 'date,desc'}
                onSortChange={handleSortChange}
              />

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
                <section className="mx-auto flex w-[694px] max-w-full flex-col gap-[4px]">
                  {searchResult?.content.map((result) => (
                    <SearchCard
                      key={result.id}
                      judgmentId={result.id}
                      court={result.court}
                      decisionDate={
                        result.judgmentDate ? `${result.judgmentDate.replaceAll('-', '. ')}.` : ''
                      }
                      caseNumber={result.caseNumber}
                      title={result.caseName ?? ''}
                      preview={result.excerpt ?? ''}
                      resultLabel={result.resultType ?? ''}
                      categoryLabel={result.claimPurpose ?? ''}
                      views={result.viewCount ?? 0}
                    />
                  ))}
                </section>
              )}
            </div>

            <PromptInput initialValue={INITIAL_KEYWORD} onSearch={handleSearch} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchResultPage;
