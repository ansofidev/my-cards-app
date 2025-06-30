import { useState } from 'react';
import { mockCards } from '../../data/mockCards';
import type { Card } from '../../types/Card';
import { columns } from './columns';
import { DataTable } from '@/components/ui/data-table';

const MyCardsPage = () => {
  const [cards] = useState<Card[]>(mockCards);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Cards</h1>
      <DataTable columns={columns} data={cards} />
    </div>
  );
};

export default MyCardsPage;
