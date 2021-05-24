import axios from "axios";
import React, { useEffect, useState } from "react";

function Languages(props) {
  const [languages, setLanguage] = useState(["Image-Editor", "Sahaayak"]);
  const [showLanguage, setShowLanguage] = useState(false);
  useEffect(() => {
    const repo = props.repo;
    console.log(repo);
    axios
      .get(`https://api.github.com/users/Naman-1234/${repo}/languages`)
      .then((result) => {
        console.log(result);
        setShowLanguage(true);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);
  return (
    <>
      <h1>HI there</h1>
      {languages.map((language) => {
        return <h4>language</h4>;
      })}
    </>
  );
}

export default Languages;
