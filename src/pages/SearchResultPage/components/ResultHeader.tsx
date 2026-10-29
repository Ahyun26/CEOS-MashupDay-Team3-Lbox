import sortIcon from '../../../assets/icons/search/icon-sort.svg';

interface ResultHeaderProps {
  resultCount?: number;
  sortLabel?: string;
  onSortClick?: () => void;
}

const ResultHeader = ({
  resultCount = 3798,
  sortLabel = '관련도순',
  onSortClick,
}: ResultHeaderProps) => {
  return (
    <div className="search-result-header">
      <p className="text-[0.75rem] text-gray-400">검색 결과 {resultCount.toLocaleString()}개</p>

      <button
        type="button"
        onClick={onSortClick}
        className="flex cursor-pointer items-center gap-[0.125rem] text-[0.75rem] text-gray-400"
      >
        <img src={sortIcon} alt="" />

        <span>{sortLabel}</span>
      </button>
    </div>
  );
};

export default ResultHeader;
