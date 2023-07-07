import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const CurrentlyComparing = () => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Locality</th>
          <th>Current Price</th>
          <th>Last 1 Year</th>
          <th>Last 3 Year</th>
          <th>Last 4 Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Current Price</td>
          <td>Rs 8,100/ sq.ft</td>
          <td>
            <Button variant="link">
              <FaCaretDown color="red" /> 11.8%
            </Button>
            <Button variant="link">
              <FaCaretUp color="green" /> 11.8%
            </Button>
          </td>
          <td>
            <Button variant="link">
              <FaCaretDown color="red" /> 11.8%
            </Button>
            <Button variant="link">
              <FaCaretUp color="green" /> 11.8%
            </Button>
          </td>
          <td>
            <Button variant="link">
              <FaCaretDown color="red" /> 11.8%
            </Button>
            <Button variant="link">
              <FaCaretUp color="green" /> 11.8%
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CurrentlyComparing;
