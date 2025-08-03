
import ItemDetail from '@/_components/items/detail-item';
import { LeaseTable } from '@/_components/leases/table/data-table';
import { readLeasesByItem } from '@/lib/leases/read';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const leases = await readLeasesByItem(Array.isArray(id) ? id[0] : id);

    return (
        <div>
            <ItemDetail id={id} />
            <LeaseTable data={leases ?? []} />
        </div>
    );
};
