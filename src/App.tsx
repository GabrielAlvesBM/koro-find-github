import { useState, type FormEvent } from 'react';
import { Profile } from '@atomic/mol.profile';
import { SearchForm } from '@atomic/mol.search-form';
import type { GithubUser } from '@data/types/github-user';
import { Status, type StatusType } from '@data/types/status';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState<GithubUser | null>(null);
  const [status, setStatus] = useState<StatusType>(Status.Idle);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const isSameSearch =
      userData?.login.toLocaleLowerCase() === username.toLocaleLowerCase();
    if (!username || isSameSearch) return;

    setStatus(Status.Loading);
    setUserData(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        setStatus(Status.NoData);
        return;
      }
      const data: GithubUser = await res.json();

      setUserData(data);
      setStatus(Status.Success);
    } catch {
      setStatus(Status.Error);
    }

    setUsername('');
  };

  return (
    <main className="flex flex-col items-center justify-center gap-md h-screen">
      <Profile data={userData} status={status} />

      <SearchForm
        onSubmit={handleSubmit}
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
    </main>
  );
}

export default App;
