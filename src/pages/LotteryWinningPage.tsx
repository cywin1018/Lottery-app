import LotteryWinning from "../components/LotteryWinning";

const LotteryWinningPage = () => {
  const userNumbers = [17300, 12164, 21398, 20263, 29078, 67890];
  return <LotteryWinning userNumbers={userNumbers} />;
};
export default LotteryWinningPage;
