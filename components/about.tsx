import { Award, Users, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: 'Expert Instruction',
      description: 'Learn from a certified TCRG',
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: 'All Levels Welcome',
      description: 'Classes for beginners to championship level dancers',
    },
    {
      icon: <Star className="h-8 w-8 text-red-600" />,
      title: 'Competition Success',
      description: 'Award-winning dancers and regular competition achievements',
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat text-4xl font-bold mb-6">
              Celebrating Irish Dance Excellence Since 2023
            </h2>
            <p className="text-gray-600 mb-6">
            The Owens Academy of Irish dance was established in 2023 by Christopher Owens TCRG, a fully qualified teacher with An Coimisiún Le Rincí Gaelacha - the world&apos;s leading Irish dancing organisation.
            </p>
            <p className="text-gray-600 mb-6">
            Boys and girls who are in Primary One are welcome for recreation or competition. Classes are held in Downpatrick and Saintfield on a weekly basis.
            </p>
            <p className="text-gray-600 mb-6">
            At the Owens Academy, we are committed to the growth and education of our students whereby basic steps are taught right up to World Championship level choreography. Dancers have taken part in local class competitions, regional competitions and international major championships. Dancers have opportunities to dance at shows and displays. Dancers are prepared for grade examinations as formal certification of their dancing progress.
            </p>
            <p className="text-gray-600 mb-6">
            The Owens Academy seeks to promote positive mental health and hold non-dancing events throughout the year for the dancers to unwind and socialise.
            </p>
            <p className="text-gray-600 mb-6">
            The Owens Academy of Irish dance aims to instill a passion for dance within our students as well as promoting physical activity, culture, confidence and social skills.
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="flex items-start p-6">
                  <div className="mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;