import { StarIcon } from './icons';

export default function Labels(props) {
  // Render Labels
  let renderLabels = null;
  if (props.labels && props.labels.length !== 0) {
    renderLabels = (
      <span className='labels pt-10'>
        <StarIcon />
        {props.labels.map((label) => {
          return (
            <p key={label._id} className={`label ${label.type} ml-10`}>
              {label.name}
            </p>
          );
        })}
      </span>
    );
  }
  return renderLabels;
}
