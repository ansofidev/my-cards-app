import type { ColumnDef } from '@tanstack/react-table';
import type { Card } from '../../types/Card';

export const columns: ColumnDef<Card>[] = [
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
];
