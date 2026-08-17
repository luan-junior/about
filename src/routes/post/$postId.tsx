import { createFileRoute } from '@tanstack/react-router'
import { Post } from '@/pages/post'

export const Route = createFileRoute('/post/$postId')({
  // loader: ({ params }) => fetchPost(params.postId),
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams()
  return <Post postId={postId} />
}
