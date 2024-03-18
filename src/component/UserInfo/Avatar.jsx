export default function Avatar(props) {
  return (
    <img
      src={require(`../../images/${props.avatar.url}`)}
      alt={props.avatar.description}
      className='user-avatar'
    />
  );
}
