import { useState } from "react";
import "./post.css";

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    age: "",
    category: "",
    description: "",
    image: null,
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    await fetch("http://127.0.0.1:8000/api/posts", {
      method: "POST",
      body: data,
    });

    alert("Post added successfully");
  };

  return (
    <section className="post-form-wrapper">
      <form className="post-form" onSubmit={handleSubmit}>
        <h2>Create Post</h2>

        <input
          type="text"
          name="title"
          placeholder="Post Title"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
        />

        <select name="category" onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="tech">Tech</option>
          <option value="education">Education</option>
          <option value="news">News</option>
        </select>

        <textarea
          name="description"
          placeholder="Post Description"
          rows="4"
          onChange={handleChange}
        ></textarea>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />

        <input
          type="file"
          name="file"
          onChange={handleChange}
        />

        <button type="submit">Publish Post</button>
      </form>
    </section>
  );
};

export default PostForm;
