import { GET_THEME } from "../../services/endpoints";
import { getFetch } from "../../services/httpService";
function useTheme() {
  async function getTheme(language, detectedCurrency) {
    let data = null;
    try {
      const res = await getFetch(
        GET_THEME,
        process.env.NEXT_PUBLIC_MERCHANT,
        language,
        detectedCurrency
      );
      console.log("err")
      data = await res.json();
    } catch (e) {}
    return data;
  }

  return [getTheme];
}
export default useTheme;
