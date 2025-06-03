import { ReactNode, useState } from 'react';
import { Button } from '../button';

interface Fab {
  label: string;
  onClick?: () => void;
}

interface FabFormProps {
  fab: Fab;
  children: ReactNode;
  successState: {
    children: ReactNode;
    fab: Fab;
  };
  onSubmit?: () => Promise<void>;
}

function FabForm({ fab, children, successState, onSubmit }: FabFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (onSubmit) {
        await onSubmit();
      }

      if (!document.startViewTransition) {
        setIsSubmitted(true);
        return;
      }

      document.startViewTransition(() => {
        setIsSubmitted(true);
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col">
      <div className={`flex-1 ${isSubmitted ? 'flex items-center' : ''}`}>
        {isSubmitted ? successState.children : children}
      </div>
      <div className="flex-none p-4 sticky bottom-0">
        <Button
          appearAnimation
          type="submit"
          onClick={isSubmitted ? successState.fab.onClick : fab.onClick}
          loading={isLoading}
          disabled={isLoading}
        >
          {isSubmitted ? successState.fab.label : fab.label}
        </Button>
      </div>
    </form>
  );
}

export default FabForm;
