'use client';

import { use } from 'react';
import { ItemDetailCard } from './card';
import { Item } from '@/_lib/items/type';
import { DetailCard } from '@/_components/detail/card';

export default function Item_({
  item,
}: {
  item: Promise<Item | null>
}) {
  const itemDetail = use(item);

  if (itemDetail === null) {
    return (
      <div className="p-4">
        <DetailCard title="Item not found">
          <div>Please select an Item</div>
        </DetailCard>
      </div>
    );
  }

  return (
    <ItemDetailCard data={itemDetail} />
  );
}
