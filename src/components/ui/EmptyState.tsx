type EmptyStateProps = {
  message?: string;
};

export function EmptyState({ message = 'No cards found' }: EmptyStateProps) {
  return (
    <div className="text-center py-10 text-gray-500 text-lg">
      {message}
    </div>
  );
}
