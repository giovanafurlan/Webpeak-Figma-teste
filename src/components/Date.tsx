import { Text } from "@chakra-ui/react";
import { format, formatISO } from "date-fns";

type Props = {
  date: Date;
  color: string;
};

export default function Date({ date, color }:Props) {
  
  return (
    <time dateTime={formatISO(date)}>
      <Text
        as={'span'}
        color={color}>
        {format(date, "d LLLL, yyyy")}
      </Text>
    </time>
  );
}
