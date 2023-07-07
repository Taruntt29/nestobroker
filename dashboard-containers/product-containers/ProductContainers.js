import { Col, Row } from 'react-bootstrap';
import { ProductCard } from '../../features';
import { Link } from 'react-router-dom';
import './ProductContainers.css';

const PropertySection = props => {
  return (
    <section className="nes__product__section mt-5">
      <Row className="gy-3">
        <Col
          sm={12}
          className="d-flex justify-content-between align-items-center mb-3"
        >
          <h2 className="nes__product__section__title">{props.sectionTitle}</h2>
          {props.view === 'promoted' && (
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          )}

          {props.view !== 'promoted' && (
            <Link className="nes__product__section__view">View All</Link>
          )}
        </Col>

        {/* <ProductCard {...property} view={view} /> */}

        {props.propertyData &&
          props.sliceData.map(property => (
            <Col key={property?._id} xs={12} sm={6} md={4} className="mb-4">
              <ProductCard {...property} view={props.view} pagination />
            </Col>
          ))}
      </Row>
    </section>
  );
};

const ProductContainers = ({ propertyData, view, children }) => {
  return (
    <>
      <PropertySection
        sectionTitle="Promoted Property"
        propertyData={propertyData}
        sliceData={propertyData
          .filter(property => property.isPromoted)
          .slice(0, 6)}
        view={view}
      />
      {children}
      <PropertySection
        sectionTitle="Recently Added"
        propertyData={propertyData}
        sliceData={propertyData.slice(0, 6)}
        view={view}
      />
      <PropertySection
        sectionTitle="Best Selling"
        propertyData={propertyData}
        sliceData={propertyData
          .filter(property => property.isBestSelling)
          .slice(0, 6)}
        view={view}
      />
    </>
  );
};

export default ProductContainers;
