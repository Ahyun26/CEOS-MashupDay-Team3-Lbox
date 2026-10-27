import bellIcon from '../../assets/icons/icon-bell.svg';
import dropdownIcon from '../../assets/icons/icon-dropdown.svg';
import searchIcon from '../../assets/icons/icon-search.svg';

import Chip from '../../components/common/Chip';

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
    <div className="search-filter-bar">
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
