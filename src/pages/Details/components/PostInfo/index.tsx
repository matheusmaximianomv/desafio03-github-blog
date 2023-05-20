import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Link } from '../../../../components/Link';
import {
  ListGithubContainer,
  ListGithubItem,
} from '../../../../components/DetailsGithub';

import {
  PostInfoContainer,
  PostInfoActions,
  PostInfoData,
  PostInfoTitle,
} from './styles';

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoActions>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>

        <Link to="/" rel="noopener noreferrer">
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </PostInfoActions>

      <PostInfoData>
        <PostInfoTitle>JavaScript data types and data structures</PostInfoTitle>

        <ListGithubContainer>
          <ListGithubItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>matheusmaximianomv</span>
          </ListGithubItem>

          <ListGithubItem>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </ListGithubItem>

          <ListGithubItem>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </ListGithubItem>
        </ListGithubContainer>
      </PostInfoData>
    </PostInfoContainer>
  );
}
