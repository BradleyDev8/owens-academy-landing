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
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat text-4xl font-bold mb-6">
              Celebrating Irish Dance Excellence Since 2023
            </h2>
            <p className="text-gray-600 mb-6">
              At Owens Academy, we preserve and celebrate the rich tradition of Irish
              dance while nurturing the next generation of dancers. Our academy combines
              traditional techniques with modern teaching methods to create an engaging
              and effective learning environment.
            </p>
            <p className="text-gray-600">
              Led by Owen, TCRG, our academy has trained numerous championship
              dancers and helped countless students discover the joy of Irish dance.
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