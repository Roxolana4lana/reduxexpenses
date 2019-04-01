import React from "react";
import { connect } from "react-redux";
import Post from "../components/Post";
import { deletePost } from "../actions";
import CreatePost from "./CreatePost";

function PostList({ posts, onDelete }) {
  if (!posts.length) {
    return <div>No Posts</div>;
  }
  return (
    <div className="App">
      <div className="split expenses_lising">
        {posts.map(post => {
          return <Post post={post} onDelete={onDelete} key={post.id} />;
        })}
      </div>
      <div className="split App_Form">
        <CreatePost />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
