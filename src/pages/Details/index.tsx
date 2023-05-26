import { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';

import { PostInfo } from './components/PostInfo';
import { PostContent } from './components/PostContent';

import { GithubContext } from '../../contexts/github';
import { IIssueResponseItem } from '../../contexts/github/interfaces';

import { DeatilsContainer } from './styles';

interface IDetailsRouteParams extends Record<string, string> {
  id: string;
}

export function Details() {
  const { id } = useParams<IDetailsRouteParams>();
  const navigate = useNavigate();

  const fetchIssueByNumber = useContextSelector(
    GithubContext,
    (context) => context.fetchIssueByNumber
  );

  const [dataRequest, setDataRequest] = useState<IIssueResponseItem | null>(
    null
  );

  async function getDataIssue(): Promise<void> {
    const idParsedToNumber = parseInt(id as string);

    if (
      typeof idParsedToNumber === 'number' &&
      !Number.isNaN(idParsedToNumber) &&
      fetchIssueByNumber
    ) {
      const data = await fetchIssueByNumber(idParsedToNumber);
      setDataRequest(data);
    } else {
      navigate('/', { replace: true });
    }
  }

  useEffect(() => {
    getDataIssue();
  }, [id, fetchIssueByNumber]);

  if (!dataRequest) {
    return <NavLink to="/" />;
  }

  return (
    <DeatilsContainer>
      <PostInfo
        title={dataRequest.title}
        html_url={dataRequest.html_url}
        owner={dataRequest.user.login}
        created_at={dataRequest.created_at}
        comments={dataRequest.comments}
      />
      <PostContent markdown={dataRequest.body} />
    </DeatilsContainer>
  );
}
