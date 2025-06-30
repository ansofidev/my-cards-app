import { useEffect, useState } from 'react';
import { mockCards } from '../../data/mockCards';
import type { Card } from '../../types/Card';
import { getColumns } from './columns';
import { DataTable } from '../../components/ui/data-table';
import { CardDialog } from '../../components/card/CardDialog';
import { LoadingState } from '../../components/ui/LoadingState';
import { EmptyState } from '../../components/ui/EmptyState';

const MyCardsPage = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(mockCards);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">My Cards</h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by brand or last 4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-md flex-1"
        />

        <CardDialog onSubmit={(newCard) => setCards((prev) => [...prev, newCard])} />
      </div>

      {loading ? (
        <LoadingState />
      ) : filteredCards.length === 0 ? (
        <EmptyState />
      ) : (
        <DataTable columns={columns} data={filteredCards} />
      )}
    </div>
  );
};

export default MyCardsPage;
