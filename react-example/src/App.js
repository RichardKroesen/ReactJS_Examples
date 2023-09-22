import React, { Component } from 'react';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      posts: [],
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleContentChange = (event) => {
    this.setState({ content: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: this.state.title,
      content: this.state.content,
    };
    this.setState({
      title: '',
      content: '',
      posts: [...this.state.posts, newPost],
    });
  };

  render() {
    return (
      <div>
        <h1>My Blog</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={this.state.content}
              onChange={this.handleContentChange}
            ></textarea>
          </div>
          <button type="submit">Publish</button>
        </form>
        <div>
          <h2>Recent Posts</h2>
          {this.state.posts.map((post, index) => (
            <div key={index}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlogPost;
