import { Button } from '@atomic/atm.button';
import { SearchInput } from '@atomic/atm.search-input';

export const SearchPage = () => {
  return (
    <div className="flex flex-col items-center gap-xs">
      <SearchInput placeholder={strings.placeholder} />
      <Button>{strings.search}</Button>
    </div>
  );
};

const strings = {
  placeholder: 'Username do Github',
  search: 'Buscar',
};
