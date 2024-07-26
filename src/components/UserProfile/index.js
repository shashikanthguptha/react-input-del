const UserProfile = (props) => {
  const { userDetails, deleteUser } = props;
  const { imageUrl, name, role, uniqueNo } = userDetails;

  const onDelete = () => {
    deleteUser(uniqueNo);
  };
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};
export default UserProfile;
