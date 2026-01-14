import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/abc.html')({
  component: () => <div>ABC</div>,
})
