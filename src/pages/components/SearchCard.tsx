interface SearchCardProps {
  court?: string;
  decisionDate?: string;
  caseNumber?: string;
  title?: string;
  preview?: string;
  resultLabel?: string;
  categoryLabel?: string;
  views?: number;
}

const SearchCard = ({
  court = '서울중앙지방법원',
  decisionDate = '2023. 4. 13.',
  caseNumber = '2022가단5065289',
  title = '층간소음으로인한위자료청구의건',
  preview = '제정, 이하 ‘구규칙’이라 한다) 제3조 [별표]에 따르면 이 사건 아파트의 경우 그 층간 소음 기준이 1분간 등가소음도 43dB(주간), 38dB(야간)로서...',
  resultLabel = '원고일부승',
  categoryLabel = '청구취지',
  views = 859,
}: SearchCardProps) => {
  return (
    <article className="border-b border-gray-200 px-[1rem] py-[1.25rem]">
      <div className="flex flex-col gap-[0.5rem]">
        <p className="text-[1rem] font-medium text-purple-500">
          {court} {decisionDate} 선고 {caseNumber} 판결
        </p>

        <p className="text-[0.875rem] font-medium text-gray-900">[{title}]</p>

        <p className="text-[0.875rem] leading-[1.25rem] text-gray-500">{preview}</p>
      </div>

      <div className="mt-[1rem] flex items-center justify-between">
        <div className="flex items-center gap-[0.5rem]">
          <span className="rounded-[0.25rem] bg-gray-100 px-[0.25rem] py-[0.125rem] text-[0.6875rem] font-medium text-gray-700">
            {resultLabel}
          </span>

          <span className="rounded-[0.25rem] bg-gray-100 px-[0.25rem] py-[0.125rem] text-[0.6875rem] font-medium text-gray-700">
            {categoryLabel}
          </span>
        </div>

        <span className="text-[0.75rem] text-gray-500">조회 {views.toLocaleString()}</span>
      </div>
    </article>
  );
};

export default SearchCard;
