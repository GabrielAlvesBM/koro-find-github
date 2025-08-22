import { Button } from '@atomic/atm.button';
import { SearchInput } from '@atomic/atm.search-input';

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-xs">
        <SearchInput placeholder={strings.placeholder} />
        <Button>{strings.search}</Button>
      </div>
    </main>
  );
}

const strings = {
  placeholder: 'Username do Github',
  search: 'Buscar',
};

export default App;
