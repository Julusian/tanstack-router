import { physical, rootRoute, route } from '@tanstack/virtual-file-routes'

// This test verifies the single-argument physical() overload
// which uses an empty path prefix (merges at current level)
export const routes = rootRoute('__root.tsx', [
  physical('root'), // Single argument - merges at root

  route('/abc.html', 'abc[.]html.tsx'),
])
