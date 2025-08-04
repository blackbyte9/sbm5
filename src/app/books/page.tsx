
import { AddBookDialog } from '@/_components/books/add-book';
import AllBooksTable from '@/_components/books/show-book';

export default function Page() {

    return (
        <div>
            <h1>Bücher</h1>
            <div className="flex justify-end mb-4">
                <AddBookDialog />
            </div>
            <AllBooksTable />
        </div>
    );
};
