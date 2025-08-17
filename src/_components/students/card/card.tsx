import { DetailCard } from "@/_components/detail/card";
import { Item } from "@/_lib/items/type";
import { Student } from "@/_lib/students/type";

interface StudentDetailProps<TData> {
  data: TData extends Student ? TData : Student
}

export function StudentDetailCard<TData extends Item>({
  data
}: StudentDetailProps<TData>) {

  const title = data.lastname + ", " + data.firstname + " (" + data.course + ")";
  return (
    <div className="p-4">
      <DetailCard title={title}>
        <div> Vorname: {data.firstname}</div>
        <div> Nachname: {data.lastname}</div>
        <div> Klasse: {data.course}</div>
      </DetailCard>
    </div>
  );
}
