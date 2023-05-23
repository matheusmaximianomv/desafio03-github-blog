import { useState, useEffect, useCallback } from 'react';
import { createContext } from 'use-context-selector';

import { api } from '../../libs/axios';

import {
  IGithubContextData,
  IGithubProviderProps,
  IUser,
  IIssue,
  IIssueResponse,
} from './interfaces';

const USERNAME = 'matheusmaximianomv';
const REPOSITORY_NAME = 'desafio03-github-blog';

export const GithubContext = createContext({} as IGithubContextData);

export function GithubContextProvider({ children }: IGithubProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [issues, setIssues] = useState<IIssue[]>([]);

  const fetchUser = useCallback(async (): Promise<void> => {
    const response = await api.get<IUser>(`users/${USERNAME}`);
    const { avatar_url, bio, company, followers, html_url, login, name } =
      response.data;

    setUser({
      avatar_url,
      bio,
      company,
      followers,
      html_url,
      login,
      name,
    });
  }, []);

  const fetchIssues = useCallback(async (name?: string): Promise<void> => {
    let query = `repo:${USERNAME}/${REPOSITORY_NAME}`;

    if (name) {
      query = `${name}${query}`;
    }

    const response = await api.get<IIssueResponse>('search/issues', {
      params: {
        q: query,
      },
    });

    const issues = response.data.items.map<IIssue>(
      ({ title, body, created_at, comments, number }) => ({
        title,
        body,
        created_at,
        comments,
        id_number: number,
      })
    );

    setIssues(issues);
  }, []);

  useEffect(() => {
    Promise.all([fetchUser(), fetchIssues()]);
  }, [fetchUser, fetchIssues]);

  return (
    <GithubContext.Provider value={{ user, issues }}>
      {children}
    </GithubContext.Provider>
  );
}
