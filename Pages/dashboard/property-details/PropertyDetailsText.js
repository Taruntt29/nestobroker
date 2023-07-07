import Slider from '../swiper/SwiperSlider';
import IconsCard from './IconsCard';
import ViewDetailsCard from './ViewDetailsCard';

const PropertyDetailsText = () => {
  return (
    <>
      <ViewDetailsCard title="Description" bg />
      <div className="nes__dashboard__largeicons">
        <IconsCard
          length={10}
          title="Project Amenities"
          iconTitle={false}
          col={5}
        />
      </div>
      <div className="nes__dashboard__smallicons">
        <IconsCard length={4} title="Location Advantages" col={4} iconTitle />
      </div>

      <Slider />

      <ViewDetailsCard title="About The Project" link="View Details" bg />
      <ViewDetailsCard title="Payment Plan" table />
      <div className="nes__dashboard__banks">
        <ViewDetailsCard title="Loan Approved By" link="View All" img />
      </div>

      <ViewDetailsCard title="About The Builder" link="View Details" bg />

      <ViewDetailsCard title="View official brochure" media />
      <ViewDetailsCard title="Terms & Conditions" link="View Details" />
    </>
  );
};

export default PropertyDetailsText;
