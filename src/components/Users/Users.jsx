import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataAsync } from "../../redux/slices/dataSlice";

function Users() {
  const dispatch = useDispatch();
  const { status, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchDataAsync());
  }, [dispatch]);

  if (status == "loading") {
    return <p>Loading...</p>;
  }

  if (status === "rejected") {
    return <p>Error : {error}</p>;
  }

  // console.log("data comp user", data);

  return (
    <>
      <h1>Users</h1>

      <ul>
        {data.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Users;
