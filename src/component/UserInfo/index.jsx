import './style.css';

// Components
import DeveloperProgram from './DeveloperProgram';
import Divider from './Divider';
import Labels from './Labels';
import Organizations from './Organizations';
import SocialInfo from './SocialInfo';
import Avatar from './Avatar';
import GeneralInfo from './GeneralInfo';
import Followers from './Followers';

export default function UserInfo(props) {
  const user = props.user;

  return (
    <section className='user-info'>
      <Avatar avatar={user.avatar} />
      <article>
        <GeneralInfo name={user.name} username={user.username} bio={user.bio} />
        {/* Edit button */}

        <button type='button' className='desktop-only'>
          Edit profile
        </button>
        {/* Followers */}
        <Followers followers={user.followers} following={user.following} />
        {/* Addesss and social media links */}
        <SocialInfo
          email={user.email}
          address={user.address}
          website={user.website}
        />

        <div className='desktop-only'>
          <Divider />
          {/* Showcase */}
          <DeveloperProgram show={user.inDeveloperProgram} />
          <Labels labels={user.labels} />

          <Divider />

          <Organizations orgs={user.orgs} />
        </div>
      </article>
    </section>
  );
}
