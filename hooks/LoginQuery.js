import { useMutation, useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../services/api';
import { getAPI, postAPI, putAPI } from '../services/requests';
import { apiEndpoints } from '../config/apiEndpoints';

import { setNewUserPhoneNumber } from '../features/auth/login/loginSlice';

export const useSendOtpMutation = () => {
  const dispatch = useDispatch();

  const {
    mutate: sendOtp,
    isLoading: isSendingOtp,
    isSuccess: isSendOtpSuccess,
    isError: isSendOtpIsError,
    error: isSendOtpError,
    data: sendOtpResponse,
  } = useMutation(
    phoneNumber => postAPI(apiEndpoints.sendOtp, { phoneNumber }),
    {
      onSuccess: data => {
        dispatch(setNewUserPhoneNumber(data.phoneNumber));
      },
    }
  );

  return {
    sendOtp,
    isSendingOtp,
    isSendOtpSuccess,
    isSendOtpIsError,
    isSendOtpError,
    sendOtpResponse,
  };
};

// // verify
export const useVerifyOtpMutation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    mutate: verifyOtp,
    isLoading: isVerifyOtp,
    isSuccess: isVerifyOtpSuccess,
    isError: isVerifyOtpIsError,
    data: verifyOtpResponse,
    error: isVerifyOtpError,
  } = useMutation(
    ({ phoneNumber, otp }) =>
      postAPI(apiEndpoints.verifyOtp, { phoneNumber, otp }),
    {
      onSuccess: data => {
        const userStatus = data?.status;
        if (userStatus === 'newuser') {
          dispatch(setNewUserPhoneNumber(data?.phoneNumber));

          navigate('/broker/register');
          return;
        }

        if (userStatus === 'olduser') {
          localStorage.setItem('authToken', data?.token);
          localStorage.setItem('brokerID', data?._id);
          navigate('/broker/dashboard');
          return;
        }
      },
      onError: error => {
        console.log('something goes wrong');
      },
    }
  );

  return {
    verifyOtp,
    isVerifyOtp,
    isVerifyOtpSuccess,
    isVerifyOtpIsError,
    verifyOtpResponse,
    isVerifyOtpError,
  };
};

// register
export const useRegisterMutation = () => {
  const navigate = useNavigate();

  const {
    mutate: register,
    data: registerResponse,
    isLoading: isLoadingRegister,
    isSuccess: isRegisterSuccess,
    isError: isRegisterIsError,
    error: isRegisterError,
  } = useMutation(
    ({ name, phoneNumber }) =>
      postAPI(apiEndpoints.registerName, { name, phoneNumber }),
    {
      onSuccess: data => {
        if (data?.token) {
          setAuthToken(data?.token);
          localStorage.setItem('authToken', data?.token);
          localStorage.setItem('brokerID', data?._id);
          navigate('/broker/dashboard');
        }
      },
    }
  );

  return {
    register,
    registerResponse,
    isLoadingRegister,
    isRegisterSuccess,
    isRegisterIsError,
    isRegisterError,
  };
};
// get all properties
export const useGetAllPropertyQuery = () => {
  const {
    isLoading: getAllPropertyIsLoading,
    isError: getAllPropertyIsError,
    data: getAllPropertyResponse,
    error: getAllPropertyError,
    isSuccess: getAllpropertyIsSuccess,
  } = useQuery(['getAllproperty'], () => getAPI(apiEndpoints.getAllproperty), {
    retry: 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onError: error => console.log(error),
    // onSuccess: data => console.log(data),
  });

  return {
    getAllPropertyIsLoading,
    getAllPropertyIsError,
    getAllPropertyResponse,
    getAllPropertyError,
    getAllpropertyIsSuccess,
  };
};

// get Property by id
export const useGetPropertyById = propertyID => {
  const {
    isLoading: getPropertyByIdIsLoading,
    isError: getPropertyByIdIsError,
    data: getPropertyByIdResponse,
    error: getPropertyByIdError,
    isSuccess: getPropertyByIdIsSuccess,
  } = useQuery(
    ['getPropertyById', propertyID],
    () => getAPI(`${apiEndpoints.getPropertyById}?id=${propertyID}`),
    {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: true,
      onError: error => console.log(error),
      // onSuccess: data => console.log(data),
      enabled: !!propertyID,
    }
  );
  console.log(getPropertyByIdResponse);

  return {
    getPropertyByIdIsLoading,
    getPropertyByIdIsError,
    getPropertyByIdResponse,
    getPropertyByIdError,
    getPropertyByIdIsSuccess,
  };
};

// get all banner
export const useGetAllBanner = () => {
  const {
    isLoading: getAllBannerIsLoading,
    isError: getAllBannerIsError,
    data: getAllBannerResponse,
    error: getAllBannerError,
    isSuccess: getAllBannerIsSuccess,
  } = useQuery(['getAllBanner'], () => getAPI(apiEndpoints.getAllBanner), {
    retry: 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onError: error => console.log(error),
    // onSuccess: data => console.log(data),
  });

  return {
    getAllBannerIsLoading,
    getAllBannerIsError,
    getAllBannerResponse,
    getAllBannerError,
    getAllBannerIsSuccess,
  };
};

// useBookVisit
export const useAddVisitMutation = () => {
  // const dispatch = useDispatch();

  const {
    mutate: addVisit,
    isLoading: isAddVisitLoading,
    isSuccess: isAddVisitSuccess,
    isError: isAddIsError,
    error: isAddVisitError,
    data: isAddVisitResponse,
  } = useMutation(payload => postAPI(apiEndpoints.addVisit, payload), {
    // onSuccess: data => {},
  });

  return {
    addVisit,
    isAddVisitLoading,
    isAddVisitSuccess,
    isAddIsError,
    isAddVisitError,
    isAddVisitResponse,
  };
};

// // verify
export const useVisitVerifyOtpMutation = () => {
  const {
    mutate: visitVerifyOtp,
    isLoading: isVisitVerifyOtpLoading,
    isSuccess: isVisitVerifyOtpSuccess,
    isError: isVisitVerifyOtpIsError,
    data: visitVerifyOtpResponse,
    error: isVisitVerifyOtpError,
  } = useMutation(
    ({ otp, visitId }) =>
      postAPI(apiEndpoints.visitVerifyOtp, { otp, visitId }),
    {
      onSuccess: data => {},
      onError: error => {
        console.log('something goes wrong');
      },
    }
  );

  return {
    visitVerifyOtp,
    isVisitVerifyOtpLoading,
    isVisitVerifyOtpSuccess,
    isVisitVerifyOtpIsError,
    visitVerifyOtpResponse,
    isVisitVerifyOtpError,
  };
};

//profile page
export const useGetBrokerById = brokerID => {
  const {
    isLoading: getBrokerByIdIsLoading,
    isError: getBrokerByIdIsError,
    data: getBrokerByIdResponse,
    error: getBrokerByIdError,
    isSuccess: getBrokerByIdIsSuccess,
  } = useQuery(
    ['getBrokerById', brokerID],
    () => getAPI(`${apiEndpoints.getBrokerById}?id=${brokerID}`),
    {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: true,
      onError: error => console.log(error),
      // onSuccess: data => console.log(data),
      enabled: !!brokerID,
    }
  );

  return {
    getBrokerByIdIsLoading,
    getBrokerByIdIsError,
    getBrokerByIdResponse,
    getBrokerByIdError,
    getBrokerByIdIsSuccess,
  };
};

// get all terms and conditions
export const useGetAllTermsAndConditionsBroker = () => {
  const {
    isLoading: getAllTermsAndConditionsBrokerIsLoading,
    isError: getAllTermsAndConditionsBrokerIsError,
    data: getAllTermsAndConditionsBrokerResponse,
    error: getAllTermsAndConditionsBrokerError,
    isSuccess: getAllTermsAndConditionsBrokerIsSuccess,
  } = useQuery(
    ['getAllTermsAndConditionsBroker'],
    () => getAPI(apiEndpoints.getAllTermsAndConditionsBroker),
    {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError: error => console.log(error),
      // onSuccess: data => console.log(data),
    }
  );

  return {
    getAllTermsAndConditionsBrokerIsLoading,
    getAllTermsAndConditionsBrokerIsError,
    getAllTermsAndConditionsBrokerResponse,
    getAllTermsAndConditionsBrokerError,
    getAllTermsAndConditionsBrokerIsSuccess,
  };
};

// get all faq and support
export const useGetAllFaqAndSupport = type => {
  const {
    isLoading: getAllFaqAndSupportIsLoading,
    isError: getAllFaqAndSupportIsError,
    data: getAllFaqAndSupportResponse,
    error: getAllFaqAndSupportError,
    isSuccess: getAllFaqAndSupportIsSuccess,
  } = useQuery(
    ['getAllFaqAndSupport', type],
    () => getAPI(`${apiEndpoints.getAllFaqAndSupport}?for=broker&type=${type}`),
    {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError: error => console.log(error),
      // onSuccess: data => console.log(data),
    }
  );

  return {
    getAllFaqAndSupportIsLoading,
    getAllFaqAndSupportIsError,
    getAllFaqAndSupportResponse,
    getAllFaqAndSupportError,
    getAllFaqAndSupportIsSuccess,
  };
};

// get all questions
export const useGetAllCommunitySupportQuestions = () => {
  const {
    isLoading: getAllCommunitySupportQuestionsIsLoading,
    isError: getAllCommunitySupportQuestionsIsError,
    data: getAllCommunitySupportQuestionsResponse,
    error: getAllCommunitySupportQuestionsError,
    isSuccess: getAllCommunitySupportQuestionsIsSuccess,
  } = useQuery(
    ['getAllCommunitySupportQuestions'],
    () => getAPI(apiEndpoints.getAllCommunitySupportQuestions),
    {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError: error => console.log(error),
      // onSuccess: data => console.log(data),
    }
  );

  return {
    getAllCommunitySupportQuestionsIsLoading,
    getAllCommunitySupportQuestionsIsError,
    getAllCommunitySupportQuestionsResponse,
    getAllCommunitySupportQuestionsError,
    getAllCommunitySupportQuestionsIsSuccess,
  };
};

// get all category
export const useGetAllPropertyCategory = () => {
  const {
    isLoading: getAllPropertyCategoryIsLoading,
    isError: getAllPropertyCategoryIsError,
    data: getAllPropertyCategoryResponse,
    error: getAllPropertyCategoryError,
    isSuccess: getAllPropertyCategoryIsSuccess,
  } = useQuery(
    ['getAllPropertyCategory'],
    () => getAPI(apiEndpoints.getAllPropertyCategory),
    {
      retry: 3,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError: error => console.log(error),
      // onSuccess: data => console.log(data),
    }
  );

  return {
    getAllPropertyCategoryIsLoading,
    getAllPropertyCategoryIsError,
    getAllPropertyCategoryResponse,
    getAllPropertyCategoryError,
    getAllPropertyCategoryIsSuccess,
  };
};

// get all promotion banner
export const useGetAllPromotionBanner = () => {
  const {
    isLoading: getAllPromotionBannerIsLoading,
    isError: getAllPromotionBannerIsError,
    data: getAllPromotionBannerResponse,
    error: getAllPromotionBannerError,
    isSuccess: getAllPromotionBannerIsSuccess,
  } = useQuery(
    ['getAllPromotionBanner'],
    () => getAPI(apiEndpoints.getAllPromotionBanner),
    {
      retry: 3,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError: error => console.log(error),
      // onSuccess: data => console.log(data),
    }
  );

  return {
    getAllPromotionBannerIsLoading,
    getAllPromotionBannerIsError,
    getAllPromotionBannerResponse,
    getAllPromotionBannerError,
    getAllPromotionBannerIsSuccess,
  };
};

// get all customer
export const useGetAllCustomer = brokerId => {
  const {
    isLoading: getAllCustomerIsLoading,
    isError: getAllCustomerIsError,
    data: getAllCustomerResponse,
    error: getAllCustomerError,
    isSuccess: getAllCustomerIsSuccess,
  } = useQuery(
    ['getAllCustomer', brokerId],
    () => getAPI(`${apiEndpoints.getAllCustomer}?brokerId=${brokerId}`),
    {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: true,
      onError: error => console.log(error),
      onSuccess: data => console.log(data),
      enabled: !!brokerId,
    }
  );

  return {
    getAllCustomerIsLoading,
    getAllCustomerIsError,
    getAllCustomerResponse,
    getAllCustomerError,
    getAllCustomerIsSuccess,
  };
};

export const useGetAllRequirement = (brokerId, customerId) => {
  const {
    isLoading: getAllRequirementIsLoading,
    isError: getAllRequirementIsError,
    data: getAllRequirementResponse,
    error: getAllRequirementError,
    isSuccess: getAllRequirementIsSuccess,
  } = useQuery(
    ['getAllRequirement', brokerId, customerId],
    () =>
      getAPI(
        `${apiEndpoints.getAllRequirement}?brokerId=${brokerId}&customerId=${customerId}`
      ),
    {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: true,
      onError: error => console.log(error),
      onSuccess: data => console.log(data),
      enabled: !!brokerId && !!customerId,
    }
  );

  return {
    getAllRequirementIsLoading,
    getAllRequirementIsError,
    getAllRequirementResponse,
    getAllRequirementError,
    getAllRequirementIsSuccess,
  };
};

// get all claims
export const useGetAllClaim = brokerId => {
  const {
    isLoading: getAllClaimIsLoading,
    isError: getAllClaimIsError,
    data: getAllClaimResponse,
    error: getAllClaimError,
    isSuccess: getAllClaimIsSuccess,
  } = useQuery(
    ['getAllClaim', brokerId],
    () =>
      getAPI(`${apiEndpoints.getAllClaim}?brokerId=${brokerId}&claimType=all`),
    {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: true,
      onError: error => console.log(error),
      onSuccess: data => console.log(data),
      enabled: !!brokerId,
    }
  );

  return {
    getAllClaimIsLoading,
    getAllClaimIsError,
    getAllClaimResponse,
    getAllClaimError,
    getAllClaimIsSuccess,
  };
};

// reusable function
// get api query without any params
export const useGetQuery = (queryKey, apiEndpoint) => {
  const { isLoading, isError, data, error, isSuccess } = useQuery(
    [queryKey],
    () => getAPI(apiEndpoint),
    {
      retry: 3,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError: error => console.log(error),
      // onSuccess: data => console.log(data),
    }
  );

  return {
    isLoading,
    isError,
    data,
    error,
    isSuccess,
  };
};

// get query with broker id params
export const useGetQueryWithId = (queryKey, apiEndpoint, brokerId) => {
  const { isLoading, isError, data, error, isSuccess } = useQuery(
    [queryKey, brokerId],
    () => getAPI(`${apiEndpoint}?brokerId=${brokerId}`),
    {
      retry: 3,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError: error => console.log(error),
      onSuccess: data => data,
      enabled: !!brokerId,
    }
  );

  return {
    isLoading,
    isError,
    data,
    error,
    isSuccess,
  };
};

// use post
export const usePostMutation = apiEndpoint => {
  const { mutate, isLoading, isSuccess, isError, error, data } = useMutation(
    payload => postAPI(apiEndpoint, payload),
    {
      // onSuccess: data => {
      //   console.log('test');
      //   console.log(data);
      // },
    }
  );
  console.log(data);
  return {
    mutate,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
};

// use put
export const usePutMutation = apiEndpoint => {
  const { mutate, isLoading, isSuccess, isError, error, data } = useMutation(
    payload => putAPI(apiEndpoint, payload),
    {
      onSuccess: data => {
        console.log(data);
      },
    }
  );

  return {
    mutate,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
};
