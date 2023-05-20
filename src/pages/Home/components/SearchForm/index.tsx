import { Input } from '../../../../components/Input';

import { SearchFormContainer, SearchFormInfo } from './styles';

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormInfo>
        <strong>Publicações</strong>
        <span>5 publicações</span>
      </SearchFormInfo>

      <Input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  );
}
