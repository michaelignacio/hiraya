'use client';

import React from 'react';
import { getLocalExhibitionSingle } from '@/services/exhibitions';
import ExhibitionDetails from '../../components/ExhibitionContent';

export default async function ExhibitionSingle({ params }: { params: { slug: string } }) {
  const post = await getLocalExhibitionSingle(params.slug);

  return (
    <main className="container mx-auto px-5 md:px-0">
      {post ? (
        <article>
          <section className="grid grid-cols-12">
            <section className="col-span-12 text-center">
              <h1 className="text-2xl font-bold">{post.title.rendered}</h1>
              <p className="italic mb-3">{post.start_date}{post.end_date && ' - ' + post.end_date}</p>
              <p className="max-w-6xl mx-auto">{post.artists && post.artists.join(', ')}</p>
              <p>{post.venue}</p>
            </section>
          </section>
          <ExhibitionDetails post={post} />
        </article>
      ) : (
        <>
          <h1>404</h1>
          <p>Exhibition not found.</p>
        </>
      )}
    </main>
  );
}
