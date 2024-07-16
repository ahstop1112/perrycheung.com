import { useContext } from 'react';
import { ApiHandlerContext } from 'core/store/providers/ApiHandler';

const useApiHandler = () => {
  const ApiHandler = useContext(ApiHandlerContext);
  const ApiHandlerState = ApiHandler?.state;
  const dispatch = ApiHandler?.dispatch;

  return { ApiHandler, ApiHandlerState, dispatch };
};

export default useApiHandler;
