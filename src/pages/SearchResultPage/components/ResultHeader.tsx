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
    <div className="mx-auto mt-[16px] mb-[8px] flex h-[16px] w-[685px] max-w-full items-center justify-between px-[16px]">
      <p className="text-[14px] leading-[16px] text-gray-600">
        검색 결과 {resultCount.toLocaleString()}개
      </p>

      <button
        type="button"
        onClick={onSortClick}
        className="flex cursor-pointer items-center gap-[0.125rem] text-[14px] leading-[16px] text-gray-600"
      >
        <img src={sortIcon} alt="" />

        <span>{sortLabel}</span>
      </button>
    </div>
  );
};

export default ResultHeader;
