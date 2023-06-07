import { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const [displayUser, setDisplayUser] = useState(users);

  const handleDelete = (user) => {
    const agree = confirm(`Are you sure you want to delete ${user?.name}`);
    if (agree) {
      console.log(`Delete request send`);
      fetch(`http://localhost:5000/user/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            toast.success(`${user.name} was successfuly deleted!`);
            const remainingUsers = displayUser.filter(
              (u) => u._id !== user._id
            );
            setDisplayUser(remainingUsers);
          }
        });
    }
    console.log(agree, user._id);
  };

  return (
    <div>
      <h2>Users [{displayUser?.length}]</h2>

      <div
        className="users"
        style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}
      >
        {displayUser?.map((user) => (
          <div key={user._id}>
            <p className="" style={{ display: "block", overflow: "hidden" }}>
              {user.name}{" "}
              <button
                style={{ float: "right", color: "red", margin: "0px" }}
                onClick={() => handleDelete(user)}
              >
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
