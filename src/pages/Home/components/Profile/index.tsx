import { useContextSelector } from 'use-context-selector';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Link } from '../../../../components/Link';
import {
  ListGithubContainer,
  ListGithubItem,
} from '../../../../components/DetailsGithub';
import { GithubContext } from '../../../../contexts/github';

import {
  ProfileContainer,
  ProfileAvatar,
  ProfileApresentation,
  ProfileDescription,
  ProfileHeader,
  ProfileBio,
} from './styles';

export function Profile() {
  const user = useContextSelector(GithubContext, (context) => context.user);

  return (
    <ProfileContainer>
      <ProfileAvatar src={user.avatar_url} alt={user.name} />

      <ProfileApresentation>
        <ProfileDescription>
          <ProfileHeader>
            <h2>{user.name}</h2>
            <Link to={user.html_url} rel="noopener noreferrer">
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </ProfileHeader>

          <ProfileBio>{user.bio}</ProfileBio>
        </ProfileDescription>

        <ListGithubContainer>
          <ListGithubItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </ListGithubItem>

          {user.company && (
            <ListGithubItem>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company}</span>
            </ListGithubItem>
          )}

          <ListGithubItem>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>
              {parseInt(user.followers) === 1
                ? `${user.followers} seguidor`
                : `${user.followers} seguidores`}
            </span>
          </ListGithubItem>
        </ListGithubContainer>
      </ProfileApresentation>
    </ProfileContainer>
  );
}
