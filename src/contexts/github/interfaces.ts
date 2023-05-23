import { ReactNode } from 'react';

export interface IUser {
  login: string;
  avatar_url: string;
  bio: string;
  company: string;
  name: string;
  html_url: string;
  followers: string;
}

export interface IIssue {
  id_number: number;
  body: string;
  created_at: string;
  title: string;
  comments: number;
  // user_login: string;
  // html_url: string;
}

export interface IIssueResponseItem {
  html_url: string;
  number: number;
  title: string;
  user: {
    login: string;
  };
  comments: number;
  created_at: string;
  body: string;
}

export interface IIssueResponse {
  incomplete_results: boolean;
  items: IIssueResponseItem[];
  total_count: number;
}

export interface IGithubContextData {
  user: IUser;
  issues: IIssue[];
  fetchIssues: (name?: string) => Promise<void>;
}

export interface IGithubProviderProps {
  children: ReactNode;
}
