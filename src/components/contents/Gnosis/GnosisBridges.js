import "../Markdown.css";
import "../Contents.css"
import file from './GnosisBridges.md';

import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'


const GnosisBridges = () => {

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <main>
      <div className="markdown-body">
        <ReactMarkdown children={markdown}  />
      </div>
    </main>
  );
};

export default GnosisBridges;
