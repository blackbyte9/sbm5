
import { Suspense } from 'react';
import Item_ from './card/card-wrapper';
import { readItemById } from '@/_lib/items/read';

export default function ItemDetail(props: {
    id: string,
}) {
    const item = readItemById(props.id);

    return (
        <Suspense fallback={<div>Laden...</div>}>
            <Item_ item={item} />
        </Suspense>
    );
}
