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
        className="cursor-pointer text-[0.75rem] text-gray-500"
      >
        {sortLabel}
      </button>
    </div>
  );
};

export default ResultHeader;
