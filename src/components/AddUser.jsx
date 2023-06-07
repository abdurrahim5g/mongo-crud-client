import { useState } from "react";
import { toast } from "react-hot-toast";

const AddUser = () => {
  const [user, setUser] = useState({});
  // hangle submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");

    fetch("http://localhost:5000/users/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("User added successfully");
          e.target.reset();
        }
      });
  };

  // input handle blur
  const handleBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[name] = value;
    setUser(newUser);
    // console.log(user, newUser);
  };

  return (
    <div>
      <h2>Add user</h2>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            onBlur={handleBlur}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            onBlur={handleBlur}
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            onBlur={handleBlur}
            type="text"
            name="address"
            placeholder="Your Address"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
