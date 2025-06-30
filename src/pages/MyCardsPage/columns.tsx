import type { ColumnDef } from '@tanstack/react-table';
import type { Card } from '../../types/Card';

export type ActionHandlers = {
  onSetDefault: (cardId: string) => void;
  onDelete: (cardId: string) => void;
};

export const getColumns = ({ onSetDefault, onDelete }: ActionHandlers): ColumnDef<Card>[] => [
  {
    accessorKey: 'brand',
    header: 'Brand',
  },
  {
    accessorKey: 'last4',
    header: 'Last 4',
  },
  {
    accessorKey: 'isDefault',
    header: 'Default',
    cell: ({ row }) => row.original.isDefault ? '✅' : '',
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const card = row.original;
      return (
        <div className="flex items-center space-x-4">
          {!card.isDefault && (
            <button 
            onClick={() => onSetDefault(card.id)} 
            className="block text-blue-600 underline"
            >
              Set as default
            </button>
         )}
            <button 
            onClick={() => onDelete(card.id)} 
            className="block text-red-600 underline"
            >
          Delete
            </button>
        </div>
      );
    },
  },
];
