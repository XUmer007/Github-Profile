export default function Organizations(props) {
  // Render Orgs
  let renderOrgs = null;
  if (props.orgs && props.orgs.length !== 0) {
    renderOrgs = (
      <div className='orgs'>
        <h3 className='title'>Organizations</h3>
        {props.orgs.map((org) => {
          return (
            <a href='/' key={org._id}>
              <img
                className='org-img mtb-20 mr-10'
                src={require(`../../images/${org.icon}`)}
                alt={props.orgs.description}
              />
            </a>
          );
        })}
      </div>
    );
  }

  return renderOrgs;
}
