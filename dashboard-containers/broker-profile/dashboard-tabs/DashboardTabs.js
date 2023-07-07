import React, { useState, Children } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./DashboardTabs.css";

const DashboardTabs = ({ children, tabsKey, activeState }) => {
  const [key, setKey] = useState(activeState);

  const filteredChildren = Children.toArray(children).filter((child) => {
    const { props } = child;
    return props.tabKey === key;
  });

  return (
    <Tabs
      id="dashboard-tabs"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 p-5 rounded flex-column flex-sm-row"
    >
      {tabsKey.map((item, index) => (
        <Tab eventKey={item} title={item} key={index}>
          <div className="bg-white p-3">
            {filteredChildren.length > 0 ? filteredChildren : children}
          </div>
        </Tab>
      ))}
    </Tabs>
  );
};

export default DashboardTabs;
