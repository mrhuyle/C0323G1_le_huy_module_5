import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { DELETE_USER } from "./redux/actions";
import Swal from "sweetalert2";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const userDeleted = useSelector((state) => state.userDeleted);

  const loadAllUsers = () => {
    dispatch({ type: "GET_ALL_USERS" });
  };

  useEffect(() => {
    loadAllUsers();
  }, [userDeleted]);

  const deleteUser = (userId) => {
    Swal.fire({
      title: "Do you want to delete user: " + userId,
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: DELETE_USER,
          payload: userId,
        });
      }
    });
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
