import React, { Component } from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";

class PostForm extends Component {
  state = {
    submitted: false,
    formData: {
      post_type: "",
      content: "",
    },
  };

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  };

  handleDropdownChange = (event, data) => {
    const formData = { ...this.state.formData };
    formData[data.name] = data.value;
    this.setState({
      formData,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const url = "http://127.0.0.1:8000/api/post/";
    const options = {
      method: "POST",
      body: JSON.stringify(this.state.formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    this.setState({
      submitted: true,
    });

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  resetFrom = (event) => {
    this.setState({
      submitted: false,
      formData: {
        post_type: "",
        content: "",
      },
    });
  };

  render() {
    if (this.state.submitted) {
      return (
        <div className="Contact">
          <p>Thank you for submitting the form!</p>
          <button onClick={this.resetFrom}>reset</button>
        </div>
      );
    }

    const postOptions = [
      { key: 1, text: "Boast", value: true },
      { key: 2, text: "Roast", value: false },
    ];

    return (
      <div className="Contact">
        <Form onSubmit={this.handleSubmit}>
          <Dropdown
            placeholder="Select a post type"
            search
            selection
            name="post_type"
            required
            onChange={this.handleDropdownChange}
            options={postOptions}
          />
          <Form.Field>
            <label>Post Content</label>
            <input
              placeholder="Content"
              type="text"
              required
              name="content"
              value={this.state.formData.content}
              onChange={this.handleChange}
              width={3}
            />
          </Form.Field>
          <Button type="submit">Create Post</Button>
        </Form>
      </div>
    );
  }
}

export default PostForm;
