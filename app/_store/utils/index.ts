import { userDataActions } from '@store/slices/user-slice';
import { removeAuthToken } from '@lib/utils/cookies';
import { removeUserFromCookies } from '@/app/_lib/cookies';

const { removeUserData } = userDataActions;

const clearDashboardSlicesAndLogoutUser = () => (dispatch: any) => {
  // clear UserData slice
  dispatch(removeUserData());

  // remove userToken cookie
  removeAuthToken();

  // remove user Info from Cookies
  removeUserFromCookies();
};

export default clearDashboardSlicesAndLogoutUser;
