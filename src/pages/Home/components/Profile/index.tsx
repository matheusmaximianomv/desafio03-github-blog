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

import {
  ProfileContainer,
  ProfileAvatar,
  ProfileApresentation,
  ProfileDescription,
  ProfileHeader,
  ProfileBio,
} from './styles';

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileAvatar
        src="https://avatars.githubusercontent.com/u/44318510?v=4"
        alt="Matheus Maximiano"
      />

      <ProfileApresentation>
        <ProfileDescription>
          <ProfileHeader>
            <h2>Matheus Maximiano</h2>
            <Link
              to="https://github.com/matheusmaximianomv"
              rel="noopener noreferrer"
            >
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </ProfileHeader>

          <ProfileBio>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </ProfileBio>
        </ProfileDescription>

        <ListGithubContainer>
          <ListGithubItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>matheusmaximianomv</span>
          </ListGithubItem>

          <ListGithubItem>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Brisanet Telecomunicações</span>
          </ListGithubItem>

          <ListGithubItem>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </ListGithubItem>
        </ListGithubContainer>
      </ProfileApresentation>
    </ProfileContainer>
  );
}
