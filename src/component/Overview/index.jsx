import './style.css';

// Component
import Card from './Card';
import { ProfileCountIcon } from './icons';

export default function Overview(props) {
  return (
    <div className='overview'>
      <Card className='mt-20' data={props.readMeRepo}>
        {/* Profile Count SVG */}
        <ProfileCountIcon className='mt-20' />
      </Card>
      {/* Pinned text and option */}
      <div className='flex jc-sb mt-20'>
        <p>Pinned</p>
        <a className='semi-link text-sm' href='/'>
          Customize your pins
        </a>
      </div>
      {/* Pinned repos */}
      <div className='flex jc-sb wrap gap-10 mt-20 pinned-repos'>
        {props.pinnedRepos.map((card, index) => {
          return <Card key={index} className='half-card' data={card} />;
        })}
      </div>
    </div>
  );
}
