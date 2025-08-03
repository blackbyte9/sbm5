
import BookDetail from '@/_components/books/detail-book';
import { AddItemDialog } from '@/_components/items/add-item';
import { ItemsByIsbnTable } from '@/_components/items/show-item';

export default async function Page({ params }: { params: Promise<{ isbn: string }> }) {
    const { isbn } = await params;
    return (
        <div>
            <BookDetail isbn={isbn} />
            <div className="flex justify-end mb-4">
                <AddItemDialog isbn={isbn} />
            </div>
            <ItemsByIsbnTable isbn={isbn} />
        </div>
    );
};
