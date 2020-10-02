import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

class AllPosts extends Component {
  state = {
    posts: [{}],
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/post/")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }, console.log(data)));
  }

  allPost = () => {
    fetch("http://127.0.0.1:8000/api/post/")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }, console.log(data)));
  };

  upvote = (id) => {
    fetch(`http://127.0.0.1:8000/api/post/${id}/upvote/`)
      .then((res) => res.json())
      .then((data) => console.log(data));
    this.forceUpdate(this.allPost);
  };

  downvote = (id) => {
    fetch(`http://127.0.0.1:8000/api/post/${id}/downvote/`)
      .then((res) => res.json())
      .then((data) => console.log(data));
    this.forceUpdate(this.allPost);
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map((post) => (
            <>
              <div key={post.id}>
                <h3> {post.post_type ? "Boast" : "Roast"}</h3>
                <li> Body: {post.content}</li>
                <li> Created: {post.post_date}</li>
                <li> Votes: {post.total_votes}</li>
                <Button icon onClick={() => this.upvote(post.id)}>
                  <Icon name="thumbs up outline" />
                </Button>
                <Button icon onClick={() => this.downvote(post.id)}>
                  <Icon name="thumbs down outline" />
                </Button>
              </div>
              <br />
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default AllPosts;
