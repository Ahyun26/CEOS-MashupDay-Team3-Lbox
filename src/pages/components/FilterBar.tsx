import Chip from '../../components/common/Chip';

const FILTERS = [
  { id: 'condition', label: '조건검색' },
  { id: 'caseType', label: '사건유형' },
  { id: 'court', label: '법원' },
  { id: 'orderType1', label: '주문유형' },
  { id: 'orderType2', label: '주문유형' },
  { id: 'decisionDate', label: '선고일' },
  { id: 'keywordAlert', label: '키워드 알림' },
];

const FilterBar = () => {
  return (
    <div className="flex items-center gap-[0.375rem] py-[1rem]">
      {FILTERS.map((filter) => (
        <Chip key={filter.id} label={filter.label} />
      ))}
    </div>
  );
};

export default FilterBar;
