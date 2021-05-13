
export const routingMaps = {
  HOME: {
    path: 'home',
    absolute: 'home',
    modulePath: './modules/home/home.module',
  },
  AUTHEN: {
    path: 'auth',
    LOGIN: {
      path: 'login',
      absolute: 'auth/login',
    },
    REGISTER: {
      path: 'register',
      absolute: 'auth/register',
    }
  },
  NOT_FOUD: {
    path: 'not-found',
    absolute: 'not-found',
  }
};
