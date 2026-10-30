import Image from 'next/image';
import { SectionHeading } from '@/components/section-heading';
import photo1 from '@/public/images/OwensAcademy1.jpeg';
import photo2 from '@/public/images/OwensAcademy2.jpeg';
import photo3 from '@/public/images/OwensAcademy3.jpeg';
import photo4 from '@/public/images/OwensAcademy4.jpeg';
import photo5 from '@/public/images/OwensAcademy5.jpeg';
import photo6 from '@/public/images/OwensAcademy6.jpeg';
import photo7 from '@/public/images/OwensAcademy7.jpeg';
import photo8 from '@/public/images/OwensAcademy8.jpeg';
import photo9 from '@/public/images/OwensAcademy9.jpeg';

const photos = [
  { src: photo1, alt: 'Young dancers in academy costumes and red t-shirts at an outdoor event' },
  { src: photo2, alt: 'Christopher Owens with four solo dancers wearing sashes and trophies' },
  { src: photo3, alt: 'Academy dancers and teachers together at an indoor event' },
  { src: photo4, alt: 'A line of academy dancers in red and black performing outdoors' },
  { src: photo5, alt: 'Christopher Owens between two dancers wearing championship sashes' },
  { src: photo6, alt: 'Children smiling together at a class' },
  { src: photo7, alt: 'Young dancers with competitor numbers holding medals' },
  { src: photo8, alt: 'Four young dancers in academy costumes with competitor numbers' },
  { src: photo9, alt: 'A large group of dancers holding certificates' },
];

const ImageGallery = () => {
  return (
    <section id="gallery" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Gallery" title="Our dancers" />
        <div className="mt-12 columns-2 gap-3 md:columns-3 md:gap-4">
          {photos.map((photo) => (
            <Image
              key={photo.src.src}
              src={photo.src}
              alt={photo.alt}
              placeholder="blur"
              sizes="(min-width: 1152px) 360px, (min-width: 768px) 33vw, 50vw"
              className="mb-3 w-full break-inside-avoid rounded-xl md:mb-4"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
