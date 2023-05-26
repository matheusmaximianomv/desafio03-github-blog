import { Link } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';

import { GithubContext } from '../../contexts/github';

import { Profile } from './components/Profile';
import { SearchForm } from './components/SearchForm';
import { Card } from '../../components/Card';

import { HomeContainer, HomeListPublications } from './styles';

export function Home() {
  const issues = useContextSelector(GithubContext, (context) => context.issues);

  return (
    <HomeContainer>
      <Profile />

      <SearchForm />

      <HomeListPublications>
        {issues.map(({ id_number, title, created_at, body }) => (
          <Link key={id_number} to={`/details/${id_number}`}>
            <Card heading={title} createdAt={created_at} content={body} />
          </Link>
        ))}
      </HomeListPublications>
    </HomeContainer>
  );
}
