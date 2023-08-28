import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const loadAllUsers = () => {
    dispatch({ type: "GET_ALL_USERS" });
  };

  useEffect(() => {
    loadAllUsers();
  }, []);

  return (
    <>
      <div>
        <table>
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
