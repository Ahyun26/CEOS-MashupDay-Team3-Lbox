import iconCircle from '../../assets/icons/icon-circle.svg';
import iconDropdown from '../../assets/icons/icon-dropdown-filled.svg';
import iconLayer from '../../assets/icons/icon-layer-20.svg';
import iconArrowLeft from '../../assets/icons/icon-arrow.svg';
import IconButton from '../common/IconButton';

interface ReferenceBadgeProps {
  count: number;
  showIcon?: boolean;
}

function ReferenceBadge({ count, showIcon = false }: ReferenceBadgeProps) {
  return (
    <button
      type="button"
      className="flex h-[1.25rem] shrink-0 cursor-pointer items-center justify-center gap-4 overflow-clip rounded-sm border border-gray-400 bg-(--color-surface-default) px-8 py-[0.125rem]"
    >
      <span className="shrink-0 text-[0.75rem] leading-[1.4] font-medium whitespace-nowrap text-(--color-text-primary)">
        참조 파일 {count}
      </span>
      {showIcon && (
        <img
          src={iconCircle}
          alt=""
          width={10}
          height={10}
          className="block size-[0.625rem] max-w-none shrink-0"
        />
      )}
    </button>
  );
}

interface TopBarProps {
  title: string;
  onBack?: () => void;
}

function TopBar({ title, onBack }: TopBarProps) {
  return (
    <header className="flex h-[2.5rem] w-full shrink-0 items-center justify-between bg-gray-100 px-[1.25rem] py-8">
      <div className="flex shrink-0 items-start gap-[0.125rem]">
        <div className="flex shrink-0 items-center gap-16">
          <IconButton label="뒤로가기" onClick={onBack} className="size-[1.25rem]">
            <img
              src={iconArrowLeft}
              alt=""
              width={20}
              height={20}
              className="block size-[1.25rem] max-w-none"
            />
          </IconButton>
          <p className="shrink-0 text-[0.875rem] leading-[normal] font-medium whitespace-nowrap text-gray-900">
            {title}
          </p>
        </div>
        <IconButton label="검색 기록 열기" className="size-[1rem]">
          <img
            src={iconDropdown}
            alt=""
            width={16}
            height={16}
            className="block size-[1rem] max-w-none"
          />
        </IconButton>
      </div>

      <div className="flex shrink-0 items-center gap-16">
        <div className="flex shrink-0 items-center gap-4">
          <ReferenceBadge count={0} />
          <ReferenceBadge count={0} showIcon />
        </div>
        <button type="button" className="flex shrink-0 cursor-pointer items-end gap-[0.125rem]">
          <img
            src={iconLayer}
            alt=""
            width={20}
            height={20}
            className="block size-[1.25rem] max-w-none shrink-0"
          />
          <span className="shrink-0 text-[0.75rem] leading-[1.4] font-medium whitespace-nowrap text-gray-600">
            새 작업
          </span>
        </button>
      </div>
    </header>
  );
}

export default TopBar;
