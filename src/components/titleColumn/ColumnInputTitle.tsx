interface Props {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  name: string;
}

export const ColumnInputTitle: React.FC<Props> = ({
  value,
  onChange,
  onBlur,
  onKeyDown,
  name,
}) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      autoFocus={true}
    />
  );
};
