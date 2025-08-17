import { Book } from "@/_lib/books/type";
import { DetailCard } from "../../detail/card";

interface BookDetailProps<TData> {
  data: TData extends Book ? TData : Book
}

export function BookDetailCard<TData extends Book>({
  data
}: BookDetailProps<TData>) {

  const title = data.name + " (" + data.isbn + ")";

  return (
    <div className="p-4">
      <DetailCard title={title}>
        <div>Anzahl von Items: {data.itemCount}</div>
        <div>Anzahl ausgeliehener Items: {data.leasedCount}</div>
      </DetailCard>
    </div>
  );
}
