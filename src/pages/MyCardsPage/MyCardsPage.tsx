import { useState } from 'react';
import { mockCards } from '../../data/mockCards';
import type { Card } from '../../types/Card';

const MyCardsPage = () => {
  const [cards] = useState<Card[]>(mockCards);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Cards</h1>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Last 4</th>
            <th>Default</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card.id}>
              <td>{card.brand}</td>
              <td>{card.last4}</td>
              <td>{card.isDefault ? '✅' : ''}</td>
              <td>
                <button>Set as default</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCardsPage;
