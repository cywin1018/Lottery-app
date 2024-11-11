import { Box, Input, FormControl, FormLabel, FormHelperText } from "@mui/joy";

interface FormProps {
  name: string;
  numbers: number[];
  onNameChange: (name: string) => void;
  onNumberChange: (index: number, value: string) => void;
}

const LotteryForm = ({
  name,
  numbers,
  onNameChange,
  onNumberChange,
}: FormProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1,
      }}
    >
      <FormControl>
        <FormLabel>이름</FormLabel>
        <Input
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
        <FormHelperText>이름 입력 부탁드려요.</FormHelperText>
      </FormControl>
      {numbers.map((num, index) => (
        <FormControl key={index}>
          <FormLabel>숫자{index + 1}</FormLabel>
          <Input
            type="number"
            placeholder="숫자를 입력하세요"
            value={num || ""}
            onChange={(e) => onNumberChange(index, e.target.value)}
          />
          <FormHelperText>숫자는 10,000~30,000 사이</FormHelperText>
        </FormControl>
      ))}
    </Box>
  );
};

export default LotteryForm;
