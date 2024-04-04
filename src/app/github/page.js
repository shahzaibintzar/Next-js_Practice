"use client";
import axios from "axios";
import React, { useState } from "react";

export default function github() {
  const [email, setemail] = useState("");
  const [data, setData] = useState(null);
  const [followers, setfolloers] = useState([]);

  const onChangeemail = (e) => {
    console.log(e.target.value);
    setemail(e.target.value);
  };

  const onpress = async () => {
    setfolloers([]);
    let response = await fetch(`https://api.github.com/users/${email}`);

    response = await response.json();
    setData(response);
    console.log("response", response);
  };

  const getFollower = async () => {
    let response = await axios.get(data.followers_url);
    setfolloers(response.data);
    console.log("followers", followers);
  };

  return (
    <div>
      <h1>Github App</h1>
      <label htmlFor="userName">Enter username</label>
      <input
        onChange={onChangeemail}
        type="text"
        placeholder="inter user name"
      />
      <button onClick={onpress}>search</button>
      <hr />
      {data && (
        <>
          <h1>user Data</h1>
          <img src={data.avatar_url} alt="" className="h-32 w-32" />
          <h1>bio == {data.bio}</h1>
          <h1>followers == {data.followers}</h1>

          <button onClick={getFollower}>Get Followers</button>
        </>
      )}
      {followers.map((item, i) => {
        return (
          <div key={i}>
            <img src={item.avatar_url} alt="" className="h-36 w-36" />
            <h1>id ={item.id}</h1>
            <h1>name ={item.login}</h1>
            <h1>type = {item.type}</h1>
          </div>
        );
      })}
    </div>
  );
}
