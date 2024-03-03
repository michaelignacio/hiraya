import React from 'react';
import Image from 'next/image';
import Gallery from './Gallery';
import Contact from './Contact';
import Modal from './Modal';
import Overlay from './Overlay';

interface ExhibitionDetailsProps {
  post: {
    title: {
      rendered: string;
    };
    start_date: string;
    end_date?: string;
    artists?: string[];
    venue: string;
    notes?: string;
    slide?: any;
    cover_art?: string;
  };
}

const ExhibitionDetails: React.FC<ExhibitionDetailsProps> = ({ post }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
        <>
          <div className="flex justify-center">
            <button onClick={openModal} className="my-5 bg-red-500 text-white py-3 px-8 font-semibold rounded-md mx-auto">
              Inquire about this artwork
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <Contact />
            </Modal>
            <Overlay isOpen={isModalOpen} onClose={closeModal} />
          </div>
          <article className="grid grid-cols-12 md:gap-10">
            <section className={post.notes ? "col-span-12 md:col-span-6" : "col-span-12 md:col-span-6 md:col-start-4"}>
              {post.slide && (
                <section className="mt-5">
                  <Gallery post={post} />
                </section>
              )}
              {!post.slide && post.cover_art && (
                <Image
                  className="mx-auto max-h-[40rem] w-full md:max-w-[40rem] object-contain mt-5"
                  src={post.cover_art}
                  alt={post.title.rendered}
                  width="500"
                  height="200"
                />
              )}
            </section>
            <section className="col-span-12 md:col-span-6 flex flex-col">
              {post.notes && <div className="mt-5 md:mt-10 post-notes" dangerouslySetInnerHTML={{ __html: post.notes }} />}
            </section>
          </article>
        </>
  );
};

export default ExhibitionDetails;
