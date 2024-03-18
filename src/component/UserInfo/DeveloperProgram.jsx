import { DevProgramIcon } from './icons';

export default function DeveloperProgram(props) {
  let renderDevProgram = null;

  if (props.show === true) {
    renderDevProgram = (
      <a className='link pt-10' href='/'>
        <DevProgramIcon className='icon' />
        Developer Program Member
      </a>
    );
  }
  return renderDevProgram;
}
