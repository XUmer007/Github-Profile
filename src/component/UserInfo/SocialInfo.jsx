import { EmailIcon, LinkIcon, LocationIcon } from './icons';

export default function SocialInfo(props) {
  return (
    <div className='social-info'>
      {/* Location */}
      <address>
        <LocationIcon className='icon' />
        {props.address}
      </address>
      {/* Email */}
      <a className='link pt-10' href={`mailto:${props.email}`}>
        <EmailIcon className='icon' />
        {props.email}
      </a>
      {/* Website */}
      <a
        className='link pt-10'
        href={props.website}
        rel='noreferrer'
        target='_blank'>
        <LinkIcon className='icon' />
        {props.website}
      </a>
    </div>
  );
}
