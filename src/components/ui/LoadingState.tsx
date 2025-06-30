type LoadingStateProps = {
  message?: string;
};

export function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <div className="text-center py-10 text-gray-500 text-lg">
      {message}
    </div>
  );
}
