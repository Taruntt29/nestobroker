import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';
import './Preferences.css';

const Preferences = ({ getBrokerByIdResponse }) => {
  const [preferences, setPreferences] = useState({
    locality: [],
    propertyType: [],
    top3Builders: [],
  });

  const handleUnitTypeChange = selectedOptions => {
    const values = selectedOptions
      ? selectedOptions.map(option => option.value)
      : [];
    setPreferences({
      ...preferences,
      locality: values,
    });
  };

  return (
    <Form className="profile__form">
      <Form.Group className="mb-4">
        <Form.Label>Locality</Form.Label>
        <CreatableSelect
          isMulti
          placeholder="Add more"
          options={getBrokerByIdResponse.locality.map(l => ({
            label: l,
            value: l,
          }))}
          defaultValue={getBrokerByIdResponse.locality.map(l => ({
            label: l,
            value: l,
          }))}
          onChange={handleUnitTypeChange}
          name="locality"
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Property Type</Form.Label>
        <CreatableSelect
          isMulti
          placeholder="Add more"
          options={getBrokerByIdResponse.propertyType.map(l => ({
            label: l,
            value: l,
          }))}
          defaultValue={getBrokerByIdResponse.propertyType.map(l => ({
            label: l,
            value: l,
          }))}
          onChange={handleUnitTypeChange}
          name="propertyType"
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Bank Name</Form.Label>
        <Form.Control
          className="rounded-0"
          type="text"
          placeholder="Bank Name"
          value={getBrokerByIdResponse.bankName ?? ''}
          onChange={() => {}}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Top 3 Builder whom you worked with</Form.Label>
        <CreatableSelect
          isMulti
          placeholder="Add more"
          options={getBrokerByIdResponse.top3Builders.map(l => ({
            label: l,
            value: l,
          }))}
          defaultValue={getBrokerByIdResponse.top3Builders.map(l => ({
            label: l,
            value: l,
          }))}
          onChange={handleUnitTypeChange}
          name="top3Builders"
        />
      </Form.Group>
      <Button className="btn-color-primary rounded-100 btn-rounded w-100 mt-3">
        Done
      </Button>
    </Form>
  );
};

export default Preferences;
