import { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <h2>{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserProfile;
