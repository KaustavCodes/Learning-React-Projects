import styles from './Post.module.css';

function Post(props) {
    return (
        <li>
            <h3 className={styles.posts}>HELLO {props.author}</h3>
            <p>{ props.post }</p>
        </li>
    )
}


export default Post;