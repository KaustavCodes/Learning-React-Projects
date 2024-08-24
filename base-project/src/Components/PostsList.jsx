import style from './PostList.module.css';
import Post from './Post';

function PostList(props) {
    return (
        <ul>
            <Post author={props.author} post={props.description} />
            <Post author="Pratiba" post="This is my post message by Pratibha" />
        </ul>
    );
}


export default PostList;