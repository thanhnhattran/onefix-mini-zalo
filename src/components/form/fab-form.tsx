import { ReactNode, useState } from 'react';
import { Button } from '../button';

interface Fab {
  label: ReactNode;
  onClick?: () => void;
}

interface FabFormProps {
  fab: Fab | Fab[];
  children: ReactNode;
  onSubmit?: () => Promise<void>;
}

function FabForm({ fab, children, onSubmit }: FabFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (onSubmit) {
        await onSubmit();
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col">
      <div className="flex-1">{children}</div>
      <div className="flex-none flex p-4 space-x-3 sticky bottom-0">
        {(Array.isArray(fab) ? fab : [fab]).map((fab, i) => (
          <Button
            key={i}
            appearAnimation
            type="submit"
            onClick={fab.onClick}
            loading={isLoading}
            disabled={isLoading}
          >
            {fab.label}
          </Button>
        ))}
      </div>
    </form>
  );
}

export default FabForm;
