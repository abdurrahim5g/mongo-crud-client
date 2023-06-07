import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const storedUser = useLoaderData();
  const [update, setUpdate] = useState(storedUser);

  // hangle submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/users/update/${storedUser._id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  // input handle blur
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newUserDetails = { ...update };
    newUserDetails[name] = value;

    setUpdate(newUserDetails);
  };

  return (
    <div>
      <h2>Update User</h2>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            defaultValue={storedUser.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            defaultValue={storedUser.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            defaultValue={storedUser.address}
            onChange={handleChange}
            type="text"
            name="address"
            placeholder="Your Address"
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
