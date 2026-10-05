interface ChipProps {
  label: string;
  onClick?: () => void;
}

const Chip = ({ label, onClick }: ChipProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer rounded-[0.25rem] border border-gray-200 bg-white px-[0.5rem] py-[0.25rem] text-[0.75rem] font-medium text-gray-700"
    >
      {label}
    </button>
  );
};

export default Chip;
