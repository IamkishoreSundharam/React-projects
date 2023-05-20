import { Col } from "react-bootstrap";
import React from "react";
export const ProjectCard = ({ title, link, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} size="300px" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={link}>Click to view more</a>
        </div>
      </div>
    </Col>
  );
};
