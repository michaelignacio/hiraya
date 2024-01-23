import Link from 'next/link'
import Image from "next/image";
import { getExhibitionSingle } from '@/services/exhibitions'

export default async function ExhibitionSingle({ params }: { params: { slug: string } }) {
	const post = await getExhibitionSingle(params.slug)
  const allSlides = Object.values(post.slide || {}).map((slideItem, i) => {
    const slideDetails = Object.values(slideItem || {})
    return (
        <Image key={i} className="size-20 rounded-xl" src={slideDetails[0]} alt={post.title.rendered} width="100" height="100" />
    )
  })

	return (
		<main className="container max-w-5xl mx-auto">
			{post && (
        <article className="grid grid-cols-12 gap-10">
          <section className="col-span-6">
            <Image className="rounded-xl" src={post.cover_art ? post.cover_art : post.the_post_thumbnail} alt={post.title.rendered} width="500" height="200" />
            <section className="flex mt-5 gap-3 flex-wrap">
              {allSlides}
            </section>
          </section>
          <section className="col-span-6 flex flex-col">
            <h1 className="text-3xl">{post.title.rendered}</h1>
            <p>{post.artists && post.artists.join(', ')}</p>
            <p>{post.venue}</p>
            <p>{post.start_date}{post.end_date && ' - ' + post.end_date}</p>
            {post.notes && <div dangerouslySetInnerHTML={{ __html: post.notes }} />}
          </section>
        </article>
			)}
			{!post && (
				<>
					<h1>404</h1>
					<p>Exhibition not found.</p>
				</>
			)}
		</main>
	)
}