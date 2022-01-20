const AddUser = (props) => {
  const SubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <label>Username</label>
        <input id="username" type="text" />
        <label>Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};
export default AddUser;
