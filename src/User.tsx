import useGithub from "./hooks/useGithub";

type UserProps = {
  username: string;
};

export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

const User = ({ username }: UserProps) => {
  const { user, loading, error } = useGithub(username);

  return (
    <div>
      {loading && <span>loading...</span>}
      {error && <span>There was an error: {error}</span>}
      <br /> <br /> <br />
      {user ? (
        <div>
          hello {user.name} <img alt="user.login" src={user.avatar_url}></img>
        </div>
      ) : (
        <span>no user</span>
      )}
    </div>
  );
};

export default User;
