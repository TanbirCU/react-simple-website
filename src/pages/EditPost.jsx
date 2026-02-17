import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import "../styles/post-form.css";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    age: "",
    category: "",
    description: "",
    image: null,
    file: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [oldImage, setOldImage] = useState(null);
  const [oldFile, setOldFile] = useState(null);

  // fetch single post
  useEffect(() => {
    fetch(`https://ieltsmaster.test/api/post-edit/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const post = data.data;
        setFormData({
          title: post.title,
          age: post.age,
          category: post.category,
          description: post.description,
          image: null,
          file: post.file,
        });
        setOldImage(post.image);
        setOldFile(post.file);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files[0]) {
      setFormData({ ...formData, image: files[0] });
      setImagePreview(URL.createObjectURL(files[0]));
    } else if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("_method", "PUT");
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
        data.append(key, formData[key]);
      }
    });

    console.log("Sending FormData:", data);

    try {
      const response = await fetch(`https://ieltsmaster.test/api/post_update/${id}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") || "",
        },
        body: data,
      });

      const result = await response.json();
      console.log("Response:", result);

      if (response.ok) {
        alert("Post updated successfully");
        navigate("/post-list");
      } else {
        alert("Failed to update post: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error updating post");
    }
  };

  return (
    <div className="post-form-wrapper">
      <h2>Edit Post</h2>

      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="tech">Tech</option>
          <option value="education">Education</option>
          <option value="news">News</option>
        </select>

        <textarea
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />

        {/* OLD IMAGE */}
        {oldImage && !imagePreview && (
          <img
            src={`https://ieltsmaster.test/storage/${oldImage}`}
            className="preview-img"
            alt="Old"
          />
        )}

        {/* NEW IMAGE PREVIEW */}
        {imagePreview && (
          <img src={imagePreview} className="preview-img" alt="Preview" />
        )}

        <input type="file" name="image" onChange={handleChange} />

        {/* OLD FILE */}
        {oldFile && (
          <p>Current File: <strong>{oldFile}</strong></p>
        )}

        <input type="file" name="file"    onChange={handleChange} />

        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
