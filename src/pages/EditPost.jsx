import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/post-form.css";

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

  // fetch single post
  useEffect(() => {
    fetch(`https://ieltsmaster.test/api/post_edit/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const post = data.data;
        setFormData({
          title: post.title,
          age: post.age,
          category: post.category,
          description: post.description,
          image: null,
          file: null,
        });
        setOldImage(post.image);
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
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
        data.append(key, formData[key]);
      }
    });

    await fetch(`https://ieltsmaster.test/api/post_update/${id}`, {
      method: "POST",
      body: data,
    });

    alert("Post updated successfully");
    navigate("/posts");
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
          required
        />

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
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
        <input type="file" name="file" onChange={handleChange} />

        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
