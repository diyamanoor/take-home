import React, { useState } from "react";

const Settings = () => {
  const [source, setSource] = useState("All");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    // Save values to local storage
    localStorage.setItem("source", source);
    localStorage.setItem("category", category);
    localStorage.setItem("author", author);

    // Display values in the console
    console.log("Source:", source);
    console.log("Source:",  localStorage.getItem("source"));
    console.log("category:", category);
    console.log("author:", author);
  };

  return (
    <>
      <div>Personalized</div>
      <div>
        <select value={source} onChange={(e) => setSource(e.target.value)}>
          <option value="All">All Source</option>
          <option value="news">News</option>
          <option value="nyt">NYT</option>
          <option value="guardian">Guardian</option>
        </select>

        <input
          type="text"
          id="category"
          name="category"
          placeholder="Type category here..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          id="author"
          name="author"
          placeholder="Type Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Settings;
