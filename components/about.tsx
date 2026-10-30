import { CalendarHeart, GraduationCap, Trophy, Users } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const facts = [
  {
    icon: Users,
    title: 'From Primary One',
    description: 'Boys and girls are welcome from Primary One, for recreation or competition',
  },
  {
    icon: Trophy,
    title: 'Competitions and shows',
    description:
      'Dancers take part in local class competitions, regional competitions and international major championships, and dance at shows and displays',
  },
  {
    icon: GraduationCap,
    title: 'Grade examinations',
    description: 'Dancers are prepared for grade exams as formal certification of their progress',
  },
  {
    icon: CalendarHeart,
    title: 'More than dancing',
    description: 'Non-dancing events through the year give dancers time to unwind and socialise',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeading eyebrow="About the academy" title="Teaching Irish dance in Downpatrick since 2023" />
          <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
            <p>
              The Owens Academy of Irish dance was established in 2023 by Christopher Owens TCRG, a fully qualified
              teacher with An Coimisiún Le Rincí Gaelacha, the world&apos;s leading Irish dancing organisation.
            </p>
            <p>
              We teach everything from basic steps right up to World Championship level choreography, with classes in
              Downpatrick and Saintfield every week.
            </p>
            <p>
              The academy aims to instil a passion for dance while promoting positive mental health, physical activity,
              culture, confidence and social skills.
            </p>
          </div>
        </div>

        <dl className="divide-y divide-border self-start border-y border-border">
          {facts.map((fact) => (
            <div key={fact.title} className="flex gap-4 py-6">
              <fact.icon aria-hidden className="mt-0.5 size-5 shrink-0 text-faint" strokeWidth={1.5} />
              <div>
                <dt className="text-base font-medium">{fact.title}</dt>
                <dd className="mt-1 text-base leading-6 text-muted-foreground">{fact.description}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;
