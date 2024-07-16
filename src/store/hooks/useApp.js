import { useContext } from 'react';
import { AppContext } from 'core/store/providers/App';

const useApp = () => {
  const App = useContext(AppContext);
  const AppState = App?.state;
  const dispatch = App?.dispatch;

  return { App, AppState, dispatch };
};

export default useApp;
