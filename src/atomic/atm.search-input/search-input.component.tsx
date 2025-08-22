interface SearchInputProps {
  placeholder?: string;
}

export const SearchInput = (props: SearchInputProps) => {
  return (
    <input
      className="p-xs rounded-md text-lg border border-brand-primary-dark"
      type="text"
      autoComplete="false"
      placeholder={props.placeholder}
    />
  );
};
