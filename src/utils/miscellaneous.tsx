import toast from 'react-hot-toast';

/**
 * Returns a promise that resolves after the specified time in milliseconds
 * @param ms Time to wait in milliseconds
 * @returns Promise that resolves after the specified time
 */
export const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Starts a view transition if supported by the browser, otherwise executes the callback directly
 * @param callback - Function to execute during the view transition
 */
export const startViewTransition = (callback: () => void) => {
  if (document.startViewTransition) {
    document.startViewTransition(callback);
  } else {
    callback();
  }
};

export const promptJSON = (data: unknown) =>
  toast(
    t => (
      <code
        className="whitespace-pre text-left text-sm text-red-800 overflow-x-auto"
        onClick={() => toast.dismiss(t.id)}
      >
        {JSON.stringify(data, undefined, 2)}
      </code>
    ),
    { duration: Infinity, className: 'overflow-x-auto' }
  );
