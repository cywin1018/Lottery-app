import { BrowserRouter, Route, Routes } from "react-router-dom";
import LotteryMainPage from "../pages/LotteryMainPage";
import LotteryWinningPage from "../pages/LotteryWinningPage";

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LotteryMainPage />} />
        <Route path="result" element={<LotteryWinningPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouters;
