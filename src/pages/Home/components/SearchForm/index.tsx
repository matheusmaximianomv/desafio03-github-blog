import { useEffect } from 'react';
import { useContextSelector } from 'use-context-selector';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '../../../../components/Input';
import { GithubContext } from '../../../../contexts/github';

import { SearchFormContainer, SearchFormInfo } from './styles';

const issueFormSchema = zod.object({
  name: zod.string(),
});

type TypeIssueForm = zod.infer<typeof issueFormSchema>;

export function SearchForm() {
  const { publications, fetchIssues } = useContextSelector(
    GithubContext,
    ({ issues, fetchIssues }) => ({
      fetchIssues,
      publications: issues.length,
    })
  );

  const { register, watch } = useForm<TypeIssueForm>({
    resolver: zodResolver(issueFormSchema),
  });

  function actionWatchForm(value: TypeIssueForm): void {
    const { name } = value;

    fetchIssues(name);
  }

  useEffect(() => {
    const subscription = watch((value) => {
      actionWatchForm(value as TypeIssueForm);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  return (
    <SearchFormContainer>
      <SearchFormInfo>
        <strong>Publicações</strong>
        <span>
          {publications === 1
            ? 'Uma publicação'
            : `${publications} publicações`}
        </span>
      </SearchFormInfo>

      <Input
        type="text"
        placeholder="Buscar conteúdo"
        autoComplete="off"
        {...register('name')}
      />
    </SearchFormContainer>
  );
}
