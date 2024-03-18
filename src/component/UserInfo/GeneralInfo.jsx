import { Fragment } from 'react';

export default function GeneralInfo(props) {
  return (
    <Fragment>
      <h2 className='name'>{props.name}</h2>
      <h2 className='username'>{props.username}</h2>
      <p className='bio'>{props.bio}</p>
    </Fragment>
  );
}
