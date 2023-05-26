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
import { humanizeDate } from '../../../../utils/formatter';

import {
  PostInfoContainer,
  PostInfoActions,
  PostInfoData,
  PostInfoTitle,
} from './styles';

export interface PostInfoProps {
  html_url: string;
  title: string;
  owner: string;
  created_at: string;
  comments: number;
}

export function PostInfo({
  html_url,
  title,
  owner,
  created_at,
  comments,
}: PostInfoProps) {
  return (
    <PostInfoContainer>
      <PostInfoActions>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>

        <Link to={html_url} rel="noopener noreferrer">
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </PostInfoActions>

      <PostInfoData>
        <PostInfoTitle>{title}</PostInfoTitle>

        <ListGithubContainer>
          <ListGithubItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>{owner}</span>
          </ListGithubItem>

          <ListGithubItem>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{humanizeDate(new Date(created_at))}</span>
          </ListGithubItem>

          <ListGithubItem>
            <FontAwesomeIcon icon={faComment} />
            <span>
              {comments === 1 ? 'Um comentário' : `${comments} comentários`}
            </span>
          </ListGithubItem>
        </ListGithubContainer>
      </PostInfoData>
    </PostInfoContainer>
  );
}
