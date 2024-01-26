import Link from 'next/link'
import Image from 'next/image';
import { getLocalExhibitionSingle } from '@/services/exhibitions'
import Gallery from '../../components/gallery'

export default async function ExhibitionSingle({ params }: { params: { slug: string } }) {
	const post = await getLocalExhibitionSingle(params.slug)
	return (
		<main className="container mx-auto px-5 md:px-0">
			{post && (
        <article className="grid grid-cols-12 md:gap-16">
          <section className="col-span-12 md:col-span-6">
            {post.slide && 
            <section className="mt-5">
              <Gallery post={post} />
            </section>}
            {!post.slide && 
            <Image 
              className="mx-auto max-h-[40rem] max-w-[40rem] object-contain" 
              src={post.cover_art} 
              alt={post.title.rendered} 
              width="500" 
              height="200" />
            }
          </section>
          <section className="col-span-12 md:col-span-6 flex flex-col">
            <h1 className="text-3xl">{post.title.rendered}</h1>
            <p>{post.artists && post.artists.join(', ')}</p>
            <p>{post.venue}</p>
            <p>{post.start_date}{post.end_date && ' - ' + post.end_date}</p>
            {post.notes && <div className="my-5" dangerouslySetInnerHTML={{ __html: post.notes }} />}
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