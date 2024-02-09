// setupTests.ts

import '@testing-library/jest-dom/extend-expect';

// Add global cleanup for tests
afterEach(() => {
  jest.clearAllMocks();
});