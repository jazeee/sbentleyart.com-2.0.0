export const DEV_APP_ID="2372443056406649"
export const PROD_APP_ID = "505787579524800";

export const getAppId = (hostname) => {
  switch (hostname) {
    // case "heysbsorry.github.io":
    case "localhost":
      return DEV_APP_ID;
    default:
      return PROD_APP_ID;
  }
};
