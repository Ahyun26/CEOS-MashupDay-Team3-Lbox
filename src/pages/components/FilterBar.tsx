import bellIcon from '../../assets/icons/icon-bell.svg';
import dropdownIcon from '../../assets/icons/icon-dropdown.svg';
import searchIcon from '../../assets/icons/icon-search.svg';

import Chip from '../../components/common/Chip';

const FILTERS = [
  {
    id: 'condition',
    label: '조건검색',
    icon: searchIcon,
    hasDropdown: false,
  },
  {
    id: 'caseType',
    label: '사건유형',
    icon: dropdownIcon,
    hasDropdown: true,
  },
  {
    id: 'court',
    label: '법원',
    icon: dropdownIcon,
    hasDropdown: true,
  },
  {
    id: 'orderType1',
    label: '주문유형',
    icon: dropdownIcon,
    hasDropdown: true,
  },
  {
    id: 'orderType2',
    label: '주문유형',
    icon: dropdownIcon,
    hasDropdown: true,
  },
  {
    id: 'decisionDate',
    label: '선고일',
    icon: dropdownIcon,
    hasDropdown: true,
  },
  {
    id: 'keywordAlert',
    label: '키워드 알림',
    icon: bellIcon,
    hasDropdown: false,
  },
];

const FilterBar = () => {
  return (
    <div className="flex items-center gap-[0.375rem] py-[1rem]">
      {FILTERS.map((filter) => (
        <Chip
          key={filter.id}
          label={filter.label}
          icon={filter.icon}
          iconPosition={filter.hasDropdown ? 'right' : 'left'}
        />
      ))}
    </div>
  );
};

export default FilterBar;
