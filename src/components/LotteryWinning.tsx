import { Box, Typography, Button } from "@mui/joy";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

interface Submission {
  이름: string;
  숫자1: number;
  숫자2: number;
  숫자3: number;
  숫자4: number;
  숫자5: number;
  숫자6: number;
}

const LotteryWinning = ({ userNumbers }: { userNumbers: number[] }) => {
  const [rankings, setRankings] = useState<string>("");

  const checkWinnings = async () => {
    const { data: submissions, error } = await supabase
      .from("submissions")
      .select("*");

    if (error) {
      console.error("Error:", error);
      return;
    }

    if (submissions) {
      const results = submissions.map((submission: Submission) => {
        const dbNumbers = [
          submission.숫자1,
          submission.숫자2,
          submission.숫자3,
          submission.숫자4,
          submission.숫자5,
          submission.숫자6,
        ];
        const matchCount = userNumbers.filter((num) =>
          dbNumbers.includes(num)
        ).length;
        console.log(matchCount);

        return { name: submission.이름, matchCount };
      });
      console.log(results);

      results.sort((a, b) => b.matchCount - a.matchCount);

      const topResults = results.slice(0, 3).map((result, index) => {
        const rank = index + 1;
        return `${rank}등: ${result.name}님 (${result.matchCount}개 일치)`;
      });
      setRankings(topResults.join("\n"));
    }
  };

  useEffect(() => {
    checkWinnings();
  }, []);

  return (
    <Box>
      <Typography>당첨 결과</Typography>
      <Box sx={{ whiteSpace: "pre-line", marginTop: 2 }}>
        {rankings || "로딩 중..."}
      </Box>
      <Button onClick={checkWinnings} sx={{ marginTop: 2 }}>
        다시 확인
      </Button>
    </Box>
  );
};

export default LotteryWinning;
