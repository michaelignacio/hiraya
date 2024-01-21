import Image from "next/image";
import { getExhibitionArchive } from '@/services/exhibitions'

export default async function ExhibitionArchive() {
	const data = await getExhibitionArchive()

    const postHtml = data.map((post,i) => {
        let featuredImage = ''
        if (post.cover_art) {
        featuredImage = post.cover_art
        } else if (post.the_post_thumbnail) {
        featuredImage = post.the_post_thumbnail
        } else if (post.slide) {
        featuredImage = post.slide[1][0]
        }
        return(
            <div key={post.id} className="flex flex-col gap-3">
                <a href={`exhibitions/` + post.slug}>
                    <Image className="size-60 rounded-xl mx-auto" src={featuredImage} alt={post.title.rendered} width="200" height="200" />
                    <p className="text-center">{post.title.rendered}</p>
                </a>
            </div>
        )
    })
  
	return (
    <div className="py-10">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {postHtml}
        </div>
      </div>
    </div>
	)
}