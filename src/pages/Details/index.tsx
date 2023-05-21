import { PostInfo } from './components/PostInfo';
import { PostContent } from './components/PostContent';

import { DeatilsContainer } from './styles';

export function Details() {
  return (
    <DeatilsContainer>
      <PostInfo />
      <PostContent markdown="**Teste**" />
    </DeatilsContainer>
  );
}
