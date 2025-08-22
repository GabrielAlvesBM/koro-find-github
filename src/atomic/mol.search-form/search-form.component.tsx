import type { ChangeEvent, FormEvent } from 'react';
import { Button } from '@atomic/atm.button';
import { Input } from '@atomic/atm.input';

interface SearchForm {
  value: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchForm = (props: SearchForm) => {
  return (
    <form
      onSubmit={props.onSubmit}
      className="flex flex-col items-center gap-xs"
    >
      <Input
        placeholder={strings.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <Button type="submit">{strings.search}</Button>
    </form>
  );
};

const strings = {
  placeholder: 'Username do Github',
  search: 'Buscar',
};
