import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/def.html')({
  component: () => <div>DEF</div>,
})
