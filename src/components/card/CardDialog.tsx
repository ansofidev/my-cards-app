import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import type { Card } from 'src/types/Card';

interface Props {
  onSubmit: (card: Card) => void;
}

export const CardDialog = ({ onSubmit }: Props) => {
  const [brand, setBrand] = useState('');
  const [last4, setLast4] = useState('');

  const handleSubmit = () => {
    if (brand && last4.length === 4) {
      onSubmit({
        id: crypto.randomUUID(),
        brand: brand.toLowerCase() as Card['brand'],
        last4,
        isDefault: false,
      });
      setBrand('');
      setLast4('');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Card</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          <Input
            placeholder="Brand (visa/mastercard/amex)"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <Input
            placeholder="Last 4 digits"
            value={last4}
            maxLength={4}
            onChange={(e) => setLast4(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
