import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Languages.scss';
function Languages(props) {
  const [languages, setLanguage] = useState([]);
  const [showLanguage, setShowLanguage] = useState(false);
  useEffect(() => {
    const repo = props.repo;
    console.log(repo);
    axios
      .get(`https://api.github.com/repos/Naman-1234/${repo}/languages`)
      .then((result) => {
        const data = Object.keys(result.data);
        setLanguage(data);
        setShowLanguage(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {languages.map((language) => {
        return <span>{language}</span>;
      })}
    </>
  );
}

export default Languages;
