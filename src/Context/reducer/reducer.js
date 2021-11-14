export const init = {
  loading: false,
  data: [],
};

export const AuthReducer = (init, action) => {
  switch (action.type) {
    case "req_data":
      return {
        ...init,
        loading: action.payload,
      };

    case "req_done":
      return {
        ...init,
        data: action.payload,
      };

    case "req_fail":
      return {
        ...init,
        data: action.payload,
      };

    default:
      return init;
  }
};
