import { Container, Image } from 'react-bootstrap';
import heroBackground from '../../assets/images/hero-section.png';
import Ribbon from '../ribbon/Ribbon';
import SwiperMain from '../../../../components/swiper/SwiperMain';
import './HeroSection.css';

const SwiperMainSlide = ({
  swiperDataItem: { image, description },
  details,
}) => {
  return (
    <section className="mt-5">
      <div
        className="hero-section nes__hero d-flex flex-column justify-content-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image[0]})`,
        }}
      >
        <Container>
          <div className="hero-caption d-flex flex-column justify-content-center justify-content-sm-start ms-sm-5">
            <h1 className="d-flex flex-column text-white">
              <span>Summer</span> <span>Vacation</span>
            </h1>
            <p className="mt-5">{description}</p>
          </div>
        </Container>
      </div>
    </section>
    // <section className="mt-5">
    //   <div
    //     className="hero-section nes__hero d-flex flex-column justify-content-center"
    //     style={{
    //       backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBackground})`,
    //     }}
    //   >
    //     <Container>
    //       <div className="hero-caption d-flex flex-column justify-content-center justify-content-sm-start ms-sm-5">
    //         {!details && (
    //           <>
    //             <h1 className="d-flex flex-column text-white">
    //               <span>Summer</span> <span>Vacation</span>
    //             </h1>
    //             <p className="mt-5">All Discount up to 60%</p>
    //           </>
    //         )}

    //         {details && (
    //           <>
    //             <Ribbon cssClass="ribbonStyle2" text="RERA" />
    //             <Ribbon cssClass="ribbonStyle" text="Best Seller" />
    //             <Ribbon
    //               cssClass="ribbonStyle2 rounded-pill mt-5 py-1 px-3"
    //               text="5% Brokerage"
    //             />
    //             <div className="hero-caption-img-navigation position-absolute">
    //               <Image
    //                 rounded
    //                 src="/assets/broker/hero-small-img.png"
    //                 className="ml-3"
    //               />
    //               <Image
    //                 src="/assets/broker/hero-small-img.png"
    //                 rounded
    //                 className="mx-5"
    //               />
    //               <div className="position-relative d-inline-block">
    //                 <Image
    //                   src="/assets/broker/hero-small-img.png"
    //                   rounded
    //                   className="ml-3"
    //                 />
    //                 <div className="position-absolute bottom-0 end-0 bg-dark text-white">
    //                   <span className="px-2">3+</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </>
    //         )}
    //       </div>
    //     </Container>
    //   </div>
    // </section>
  );
};

function HeroSection({ details, bgImg, bannerData, item }) {
  return (
    <SwiperMain swiperData={bannerData} slidesPerView="1" spaceBetween="0">
      <SwiperMainSlide details={details} />
    </SwiperMain>
  );
}

export default HeroSection;
