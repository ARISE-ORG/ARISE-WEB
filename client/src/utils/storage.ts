// localStorage wrapper for type-safe storage
export const storage = {
  get: <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },

  set: <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.error(`Failed to set localStorage key: ${key}`);
    }
  },

  remove: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch {
      console.error(`Failed to remove localStorage key: ${key}`);
    }
  },

  clear: (): void => {
    try {
      localStorage.clear();
    } catch {
      console.error("Failed to clear localStorage");
    }
  },
};
