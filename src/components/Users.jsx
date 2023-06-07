import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>Users [{users?.length}]</h2>

      <div
        className="users"
        style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}
      >
        {users?.map((user) => (
          <div key={user._id}>
            <p className="" style={{ display: "block", overflow: "hidden" }}>
              {user.name}{" "}
              <button style={{ float: "right", color: "red", margin: "0px" }}>
                X
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
