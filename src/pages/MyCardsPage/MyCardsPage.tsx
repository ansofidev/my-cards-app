import { useState } from 'react';
import { mockCards } from '../../data/mockCards';
import type { Card } from '../../types/Card';
import { columns } from './columns';
import { DataTable } from '../../components/ui/data-table';

const MyCardsPage = () => {
  const [cards] = useState<Card[]>(mockCards);
  const [search, setSearch] = useState('');

  const filteredCards = cards.filter((card) =>
    card.brand.toLowerCase().includes(search.toLowerCase()) ||
    card.last4.includes(search)
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Cards</h1>
      <input
        type="text"
        placeholder="Search by brand or last 4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 px-4 py-2 border rounded-md w-full max-w-sm"
      />
      <DataTable columns={columns} data={filteredCards} />
    </div>
  );
};

export default MyCardsPage;
