import { ProfileLinkButton } from '@atomic/atm.profile-link-button';
import { Spinner } from '@atomic/atm.spinner';
import type { GithubUser } from '@data/types/github-user';
import { Status, type StatusType } from '@data/types/status';
import { strings } from './profile.strings';

interface ProfileProps {
  data: GithubUser | null;
  status: StatusType;
}

export const Profile = (props: ProfileProps) => {
  if (props.status === Status.Idle) return;
  if (props.status === Status.Loading) return <Spinner />;
  if (props.status === Status.Error) {
    return (
      <p className="text-feedback-danger-medium">{strings.errorMessage}</p>
    );
  }
  if (!props.data || props.status === Status.NoData) {
    return <p>{strings.noExistentUser}</p>;
  }

  return <ProfileDetails data={props.data} />;
};

interface ProfileDetailsProps {
  data: GithubUser;
}

const ProfileDetails = (props: ProfileDetailsProps) => {
  return (
    <div className="flex flex-col gap-xs md:flex-row">
      <div className="flex flex-col items-center gap-xs">
        <img
          className="size-[250px] rounded-full"
          src={props.data.avatar_url}
          alt={props.data.login}
        />

        <ProfileLinkButton href={props.data.html_url}>
          {props.data.login}
        </ProfileLinkButton>
      </div>
      <dl className="flex flex-col gap-2xs max-w-[400px]">
        <h1 className="text-xl text-center font-bold md:text-left">
          {props.data.login}
        </h1>

        <div className="flex gap-3xs">
          <dt className="font-bold">{strings.userDetails.following}</dt>
          <dd>{props.data.following}</dd>
        </div>

        <div className="flex gap-3xs">
          <dt className="font-bold">{strings.userDetails.followers}</dt>
          <dd>{props.data.followers}</dd>
        </div>

        <div className="flex gap-3xs">
          <dt className="font-bold">{strings.userDetails.publicRepos}</dt>
          <dd>{props.data.public_repos}</dd>
        </div>

        <div className="flex gap-3xs">
          <dt className="font-bold">{strings.userDetails.bio}</dt>
          <dd>
            {props.data.bio ?? (
              <i className="text-2xs text-medium">
                {strings.userDetails.emptyBio}
              </i>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
};
