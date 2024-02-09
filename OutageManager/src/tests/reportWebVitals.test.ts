```typescript
import { reportWebVitals } from '../reportWebVitals';

describe('reportWebVitals', () => {
  it('should call the report handler', () => {
    const reportHandler = jest.fn();
    reportWebVitals(reportHandler);

    expect(reportHandler).toHaveBeenCalled();
  });
});
```