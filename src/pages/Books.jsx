import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  TextInput,
} from '@tremor/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { useBooks } from '../context/BooksContext';

const BooksPage = () => {
  const { books, getBooks } = useBooks();
  const [selectedTitles] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const isTitleSelected = (item) =>
    selectedTitles.includes(item.title) || selectedTitles.length === 0;

  const filteredBooks = books.filter(
    (item) =>
      isTitleSelected(item) &&
      item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-screen-2xl p-3 md:p-4 2xl:p-8 flex flex-col gap-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Libreria Siglo XXI</h1>
        <h3 className="text-xl font-bold">Listado de libros</h3>
      </div>

      <div className="flex space-x-2 mt-10">
        <TextInput
          icon={MagnifyingGlassIcon}
          placeholder="Search..."
          value={searchText}
          onValueChange={(value) => setSearchText(value)}
          className="max-w-full sm:max-w-xs"
        />
      </div>

      <div className="mt-4">
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Title</TableHeaderCell>
                <TableHeaderCell>Author</TableHeaderCell>
                <TableHeaderCell>Chapters</TableHeaderCell>
                <TableHeaderCell>Pages</TableHeaderCell>
                <TableHeaderCell>Price</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredBooks.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>
                    <Text>{item.author.name}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.chapters}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.pages}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>${item.price}</Text>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default BooksPage;
