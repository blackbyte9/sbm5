
import { AddBookDialog } from '@/_components/books/add-book';
import AllBooksTable from '@/_components/books/show-book';

export default function Page() {

    return (
        <div>
            <h2>Books</h2>
            <div className="flex justify-end mb-4">
                <AddBookDialog />
            </div>
            <AllBooksTable />
        </div>
    );
};
