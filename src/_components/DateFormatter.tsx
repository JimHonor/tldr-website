import { format } from "date-fns";

type Props = {
  date: Date;
};

export default function DateFormatter({ date }: Props) {
  return <time>{format(date, "yyyy-MM-dd")}</time>;
}
