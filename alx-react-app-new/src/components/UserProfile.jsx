const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', marginBottom: '0.5rem' }}>{props.name}</h2>
      <p style={{ margin: '0.3rem 0' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: 'italic', marginTop: '0.3rem' }}>{props.bio}</p>
    </div>
  );
};

export default UserProfile;
