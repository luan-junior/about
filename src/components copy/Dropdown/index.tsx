import { Select, OptionStyled } from './styles';

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};


export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <Select
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {placeholder && (
        <OptionStyled value="" disabled>
          {placeholder}
        </OptionStyled>
      )}
      {options.map((opt) => (
        <OptionStyled key={opt.value} value={opt.value}>
          {opt.label}
        </OptionStyled>
      ))}
    </Select>
  );
};
