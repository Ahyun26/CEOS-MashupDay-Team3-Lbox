import iconDropdown from '../../../assets/icons/common/icon-dropdown.svg';
import iconPaper from '../../../assets/icons/panel/icon-paper.svg';
import type { CitationSection as CitationSectionData } from '../caseDetail.mock';

type CitationSectionProps = Omit<CitationSectionData, 'id'>;

function CitationSection({ label, count, badge }: CitationSectionProps) {
  return (
    <button
      type="button"
      className="flex w-full shrink-0 cursor-pointer items-center justify-between border-b-[0.5px] border-(--color-border-default) bg-(--color-surface-default) p-12"
    >
      <span className="flex shrink-0 items-center gap-12">
        <span className="flex shrink-0 items-center gap-8">
          <img
            src={iconPaper}
            alt=""
            width={18}
            height={18}
            className="block size-[1.125rem] max-w-none shrink-0"
          />
          <span className="heading-sm whitespace-nowrap text-(--color-text-primary)">{label}</span>
          <span className="body-lg whitespace-nowrap text-gray-600">{count}</span>
        </span>
        {badge && (
          <span className="flex shrink-0 items-center justify-center rounded-sm bg-gray-300 px-4 py-[0.125rem] text-[0.6875rem] leading-[1rem] font-medium tracking-[-0.2px] whitespace-nowrap text-(--color-text-primary)">
            {badge}
          </span>
        )}
      </span>
      {/* Figma는 12px 칸(꺾쇠 9×5, 위치 1.5·4)을 18px로 키워 씀 → 같은 비율로 13.5×7.5를 2.25·6에 배치 */}
      <span className="relative block size-[1.125rem] shrink-0">
        <img
          src={iconDropdown}
          alt=""
          width={13.5}
          height={7.5}
          className="absolute top-[0.375rem] left-[0.140625rem] block h-[0.46875rem] w-[0.84375rem] max-w-none"
        />
      </span>
    </button>
  );
}

export default CitationSection;
