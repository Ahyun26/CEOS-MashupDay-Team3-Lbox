import sortIcon from '../../assets/icons/icon-sort.svg';

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
    <div className="flex items-center justify-between py-[0.75rem]">
      <p className="text-[0.875rem] text-gray-500">검색 결과 {resultCount.toLocaleString()}개</p>

      <button
        type="button"
        onClick={onSortClick}
        className="flex cursor-pointer items-center gap-[0.125rem] text-[0.75rem] text-gray-500"
      >
        <img src={sortIcon} alt="" className="h-[1rem] w-[1rem]" />

        <span>{sortLabel}</span>
      </button>
    </div>
  );
};

export default ResultHeader;
