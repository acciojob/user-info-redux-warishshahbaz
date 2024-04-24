import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setEmail,
  selectName,
  selectEmail,
} from "../reducer/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <div>
        Current values in store:
        <br />
        Name - {name}
        <br />
        Email - {email}
      </div>
    </div>
  );
};

export default Home;
