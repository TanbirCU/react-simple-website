import { useEffect, useState } from "react";
import "./post-list.css";

const PostListData = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("https://ieltsmaster.test/api/post_list", {
      method: "POST",
    });
    const data = await res.json();
    setPosts(data.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    await fetch(`https://ieltsmaster.test/api/post_delete/${id}`, {
      method: "DELETE",
    });

    fetchPosts();
  };

  return (
    <div className="post-list-wrapper">
      <h2>Post List</h2>

      <table className="post-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Age</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>File</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>{post.age}</td>
                <td>{post.description}</td>
                <td>{post.category}</td>
                <td>
                  {post.image ? (
                    <img
                      src={`https://ieltsmaster.test/storage/${post.image}`}
                      alt=""
                      className="table-img"
                    />
                  ) : (
                    "N/A"
                  )}
                </td>
                <td>
                  {post.file ? (
                    <a
                      href={`https://ieltsmaster.test/storage/${post.file}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="actions">
                  <button className="edit-btn" onClick={()=>handleEdit(post.id)}>Edit</button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No posts found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PostListData;
