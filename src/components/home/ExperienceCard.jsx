import React from 'react';
import { Col } from 'react-bootstrap';

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        
        <figure>
          <img 
            className="bg-white mb-3" 
            src={data.companylogo} 
            alt={data.companyName || 'Company Logo'} 
          />
          <figcaption>
            <p className="lead" style={{ color: '#5a5a5a' }}>
              {data.role}
              <br />
              {data.date}
            </p>
          </figcaption>
        </figure>

      </div>
    </Col>
  );
}

export default ExperienceCard;
