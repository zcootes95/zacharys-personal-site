# Testing Documentation

This project uses Vitest and React Testing Library for testing.

## Running Tests

The following npm scripts are available for running tests:

- `pnpm test`: Run all tests once
- `pnpm test:watch`: Run tests in watch mode
- `pnpm test:coverage`: Run tests with coverage report

## Test Structure

Tests are organized to mirror the source code structure. For example:

- Component tests are in `src/components/**/__tests__/`
- Utility function tests are in `src/utils/**/__tests__/`
- Layout component tests are in `src/layout/__tests__/`

## Test Utilities

### `renderWithRouter`

A utility for rendering components with Router context:

```tsx
import { renderWithRouter } from '../test/utils'

renderWithRouter(<MyComponent />)
```

Pass a custom route if needed:

```tsx
renderWithRouter(<MyComponent />, { route: '/some-path' })
```

### `renderWithProviders`

A utility for rendering components with all necessary providers:

```tsx
import { renderWithProviders } from '../test/utils'

renderWithProviders(<MyComponent />)
```

## Testing Patterns

### Components

- Test rendering with different props
- Test user interactions
- Test accessibility concerns (when applicable)

Example:

```tsx
describe('MyComponent', () => {
  it('renders correctly with default props', () => {
    renderWithRouter(<MyComponent />)
    expect(screen.getByText('Default Text')).toBeInTheDocument()
  })
  
  it('responds to user interaction', async () => {
    const { user } = renderWithRouter(<MyComponent />)
    await user.click(screen.getByRole('button'))
    expect(screen.getByText('Clicked')).toBeInTheDocument()
  })
})
```

### Utility Functions

- Test with various inputs
- Test edge cases

Example:

```tsx
describe('myUtilityFunction', () => {
  it('handles normal input correctly', () => {
    expect(myUtilityFunction('normal input')).toBe('expected output')
  })
  
  it('handles edge cases', () => {
    expect(myUtilityFunction('')).toBe('default value')
  })
})
```

## Mocking

For tests that require mocking (e.g., external APIs, browser APIs, etc.), use Vitest's mocking functions:

```tsx
import { vi } from 'vitest'

vi.mock('some-module', () => ({
  someFunction: vi.fn().mockReturnValue('mocked value')
}))
```