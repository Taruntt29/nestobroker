import {
  useGetAllPropertyQuery,
  useGetAllBanner,
} from '../../../../hooks/LoginQuery';
import { Container } from 'react-bootstrap';
import HeroSection from '../hero-section/HeroSection';
import SmallCardSection from '../small-card-section/SmallCardSection';
import { ProductContainers } from '../../../../dashboard-containers';
import SwiperSliderDashboard from '../swiper-slider-dashboard/SwiperSliderDashboard';
import { SearchFilter } from '../../../../../components';

import './BrokerView.css';
import { useAuth } from '../../../../services/api';
import LoadingSpinner from '../../../../Common/loading-spinner/LoadingSpinner';
import ErrorMessage from '../../../../Common/error-message/ErrorMessage';
import SwiperSliderNew from '../swiper-slider-new/SwiperSliderNew';
const BrokerView = () => {
  useAuth();
  const {
    getAllPropertyIsLoading,
    getAllPropertyIsError,
    getAllPropertyResponse,
    getAllPropertyError,
    getAllpropertyIsSuccess,
  } = useGetAllPropertyQuery();
  const {
    getAllBannerIsLoading,
    getAllBannerIsError,
    getAllBannerResponse,
    getAllBannerError,
    getAllBannerIsSuccess,
  } = useGetAllBanner();

  return (
    <Container fluid="lg">
      {getAllBannerIsLoading && <LoadingSpinner />}
      {getAllBannerError && <ErrorMessage />}
      <SwiperSliderNew
        swiperData={getAllBannerResponse}
        pagination
        promotionalBanner
      />
      <SmallCardSection />
      <section className="mt-3">
        <SearchFilter addBtn />
      </section>
      <section className="mt-5">
        <SwiperSliderDashboard />
      </section>
      {getAllPropertyIsLoading && <LoadingSpinner />}
      {getAllPropertyIsError && <ErrorMessage />}

      {getAllPropertyResponse && (
        <ProductContainers propertyData={getAllPropertyResponse} view="broker">
          <SwiperSliderNew
            swiperData={getAllBannerResponse}
            pagination
            promotionalBanner
          />
        </ProductContainers>
      )}
      <HeroSection />

      {/* <ProductContainers
        sectionTitle="Recently Added"
        productData={getAllPropertyResponse}
        view="broker"
      /> */}
      {/* <ProductContainers
        sectionTitle="Best Selling"
        productData={getAllPropertyResponse}
        view="broker"
      /> */}
    </Container>
  );
};

export default BrokerView;
