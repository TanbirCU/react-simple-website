import { useState } from "react";
import "./post.css";
import {useRef} from "react";

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    age: "",
    category: "",
    description: "",
    image: null,
    file: null,
  });
  const imageInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    await fetch("https://ieltsmaster.test/api/post_store", {
      method: "POST",
      body: data,
    });
    
    setSuccess("Post added successfully!");
    setFormData({
      title: "",
      age: "",
      category: "",
      description: "",
      image: null,
      file: null,
    });

  };

  return (
    <section className="post-form-wrapper">
      {success && <p className="success-message">{success}</p>}
      <form className="post-form" onSubmit={handleSubmit}>
        <h2>Create Post</h2>

        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <select name="category" onChange={handleChange} value={formData.category}>
          <option value="">Select Category</option>
          <option value="tech">Tech</option>
          <option value="education">Education</option>
          <option value="news">News</option>
        </select>

        <textarea
          name="description"
          placeholder="Post Description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <input
          type="file"
          name="image"
          accept="image/*"
          ref={imageInputRef}
          onChange={handleChange}
        />

        <input
          type="file"
          name="file"
          ref={fileInputRef}
          onChange={handleChange}
        />

        <button type="submit">Publish Post</button>
      </form>
    </section>
  );
};

export default PostForm;
