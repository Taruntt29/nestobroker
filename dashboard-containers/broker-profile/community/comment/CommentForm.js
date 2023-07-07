import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';
import './CommentForm.css';

const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(comment);
    setComment('');
  };

  return (
    <div
      className="comment-form rounded-pill"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <InputGroup className="d-flex">
          <FormControl
            type="text"
            placeholder="Write a Comment"
            value={comment}
            onChange={event => setComment(event.target.value)}
            className="bg-transparent rounded-0 border-0"
          />
          <InputGroup.Text id="basic-addon2" className="bg-transparent">
            <Button
              variant="link"
              type="submit"
              className="rounded-0 comment-send"
            >
              <FaPaperPlane size={20} className="p-0" color="#000000" />
            </Button>
          </InputGroup.Text>
        </InputGroup>
      </Form>
    </div>
  );
};

export default CommentForm;
