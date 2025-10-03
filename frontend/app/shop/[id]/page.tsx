export default async function BlogPostPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params
  //   const post = await getPost(slug)

  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}
