import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InquiryDialog } from '@/components/inquiry-dialog';
import OwensCover from '@/public/images/OwensCover.jpg';

const Hero = () => {
  return (
    <section id="hero" className="overflow-hidden bg-stage text-stage-foreground">
      <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-sm text-stage-muted">
            <span aria-hidden className="h-0.5 w-6 bg-primary" />
            Taught by Christopher Owens TCRG
          </p>
          <h1 className="mt-6 font-display text-[2.75rem] leading-[1.04] tracking-[-0.02em] text-balance md:text-6xl lg:text-7xl lg:tracking-[-0.03em]">
            Irish dance from Primary One to championship level
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-7 text-stage-muted">
            Weekly classes in Downpatrick and Saintfield for boys and girls, whether they dance for fun or to compete.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <InquiryDialog>
              <Button size="lg" className="h-12 px-4 text-base sm:px-5">
                Ask about classes
              </Button>
            </InquiryDialog>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-12 px-3 text-base text-stage-foreground hover:bg-white/8 hover:text-stage-foreground has-[>svg]:px-3"
            >
              <a href="#schedule">
                View timetable
                <ArrowDown className="size-4" strokeWidth={1.5} />
              </a>
            </Button>
          </div>
        </div>

        <Image
          src={OwensCover}
          alt="Five dancers mid-jump in white socks and black hard shoes"
          priority
          placeholder="blur"
          sizes="(min-width: 1152px) 1104px, 100vw"
          className="mt-16 aspect-[16/9] w-full rounded-t-2xl object-cover md:mt-20 md:aspect-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
