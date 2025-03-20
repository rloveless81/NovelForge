/**
 * Utility functions for NovelForge application
 */

/**
 * Toggle sidebar visibility
 * @param sidebarId - ID of the sidebar element
 */
export const toggleSidebar = (sidebarId: string): void => {
  const sidebar = document.getElementById(sidebarId);
  if (sidebar) {
    sidebar.classList.toggle('hidden');
  }
};

/**
 * Format word count with commas
 * @param count - Number of words
 * @returns Formatted word count string
 */
export const formatWordCount = (count: number): string => {
  return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Calculate reading time based on word count
 * @param wordCount - Number of words
 * @returns Estimated reading time in minutes
 */
export const calculateReadingTime = (wordCount: number): number => {
  // Average reading speed: 200-250 words per minute
  const wordsPerMinute = 225;
  return Math.ceil(wordCount / wordsPerMinute);
};

/**
 * Save data to local storage
 * @param key - Storage key
 * @param data - Data to store
 */
export const saveToLocalStorage = (key: string, data: any): void => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

/**
 * Retrieve data from local storage
 * @param key - Storage key
 * @returns Retrieved data or null if not found
 */
export const getFromLocalStorage = (key: string): any => {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData ? JSON.parse(serializedData) : null;
  } catch (error) {
    console.error('Error retrieving from localStorage:', error);
    return null;
  }
};

/**
 * Generate a unique ID
 * @returns Unique ID string
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};
