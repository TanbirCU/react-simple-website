
import PostForm from '../components/post/PostForm';
import PostInfo from '../components/post/PostInfo';
import PostSlider from '../components/post/PostSlider';
import './Page.css';
const AddPost = () => {
    return (
        <div>
            <PostSlider />
            <PostForm />
            <PostInfo />
        </div>
    );
}
export default AddPost;