import bellIcon from '../../../assets/icons/search/icon-bell.svg';
import dropdownIcon from '../../../assets/icons/common/icon-dropdown.svg';
import searchIcon from '../../../assets/icons/search/icon-search.svg';

import Chip from '../../../components/common/Chip';

const FILTERS = [
  {
    id: 'condition',
    label: '조건검색',
    icon: searchIcon,
    iconPosition: 'left' as const,
  },
  {
    id: 'caseType',
    label: '사건유형',
    icon: dropdownIcon,
    iconPosition: 'right' as const,
  },
  {
    id: 'court',
    label: '법원',
    icon: dropdownIcon,
    iconPosition: 'right' as const,
  },
  {
    id: 'orderType',
    label: '주문유형',
    icon: dropdownIcon,
    iconPosition: 'right' as const,
  },
  {
    id: 'orderType2',
    label: '주문유형',
    icon: dropdownIcon,
    iconPosition: 'right' as const,
  },
  {
    id: 'decisionDate',
    label: '선고일',
    icon: dropdownIcon,
    iconPosition: 'right' as const,
  },
  {
    id: 'keywordAlert',
    label: '키워드 알림',
    icon: bellIcon,
    iconPosition: 'left' as const,
  },
];

const FilterBar = () => {
  return (
    <div className="mx-auto flex w-[685px] max-w-full items-center gap-[6px] overflow-x-auto px-[16px] pt-[16px] [&>button]:shrink-0 [&>button]:gap-[2px] [&>button]:border-gray-300 [&>button]:px-[6px] [&>button]:py-[2px] [&>button]:text-[11px] [&>button]:leading-[16px] [&>button]:font-normal [&>button]:text-gray-900 [&>button>img]:h-auto [&>button>img]:w-auto [&>button:last-child]:border-transparent [&>button:last-child]:bg-gray-200 [&>button:last-child]:font-medium">
      {FILTERS.map((filter) => (
        <Chip
          key={filter.id}
          label={filter.label}
          icon={filter.icon}
          iconPosition={filter.iconPosition}
        />
      ))}
    </div>
  );
};

export default FilterBar;
