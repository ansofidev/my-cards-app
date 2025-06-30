import { useState } from 'react';
import { mockCards } from '../../data/mockCards';
import type { Card } from '../../types/Card';
import { getColumns } from './columns';
import { DataTable } from '../../components/ui/data-table';
import { CardDialog } from '../../components/card/CardDialog';

const MyCardsPage = () => {
  const [cards, setCards] = useState<Card[]>(mockCards);
  const [search, setSearch] = useState('');

  const filteredCards = cards.filter((card) =>
    card.brand.toLowerCase().includes(search.toLowerCase()) ||
    card.last4.includes(search)
  );

  const columns = getColumns({
  onSetDefault: (cardId) => {
    setCards((prev) =>
      prev.map((card) => ({
        ...card,
        isDefault: card.id === cardId,
      }))
    );
  },
  onDelete: (cardId) => {
    setCards((prev) => prev.filter((card) => card.id !== cardId));
  },
});

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Cards</h1>

      <div className="flex items-center justify-between mb-4 max-w-sm">
        <input
          type="text"
          placeholder="Search by brand or last 4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <CardDialog onSubmit={(newCard) => setCards((prev) => [...prev, newCard])} />
      </div>

      <DataTable columns={columns} data={filteredCards} />
    </div>
  );
};

export default MyCardsPage;
