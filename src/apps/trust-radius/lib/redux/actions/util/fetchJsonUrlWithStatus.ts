import fetchStatusAction from '../fetchStatusAction';
import { FetchStatusEnum } from '../../store';
import { ThunkDispatch } from 'redux-thunk';

const fetchJsonUrlWithStatus = async (
  url: string,
  cb: (res: any) => void,
  dispatch: ThunkDispatch<any, any, any>,
) => {
  if (!window.fetch) {
    console.error('Unable to use Fetch API in non-browser environments.');
    dispatch(fetchStatusAction(FetchStatusEnum.FAILURE));
    return;
  }
  try {
    // Ensure the application is aware we are fetching data.
    dispatch(fetchStatusAction(FetchStatusEnum.IN_PROGRESS));
    // Get the actual data from HTTP and parse the JSON response.
    const response = await window.fetch(url);
    const result = await response.json();
    // Each action using this helper will do something different here. Typically
    // this involves saving the data to the store.
    cb(result);
    // Make the application aware that we finished.
    dispatch(fetchStatusAction(FetchStatusEnum.READY));
  } catch (e) {
    console.error(e);
    // We cannot recover from this.
    dispatch(fetchStatusAction(FetchStatusEnum.FAILURE));
  }
};

export default fetchJsonUrlWithStatus;
