import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

const Schedule = () => {
  const classes = [
    {
      day: 'Tuesday',
      sessions: [
        { time: '5:45 PM - 6:45 PM', level: 'Beginners & Primary' },
        { time: '6:45 PM - 8:45 PM', level: 'Intermediate & Advanced' },
      ],
    },
    {
      day: 'Wednesday',
      sessions: [
        { time: '6:45 PM - 8:45 PM', level: 'Advanced' },
      ],
    },
    {
      day: 'Thursday',
      sessions: [
        { time: '5:45 PM - 6:45 PM', level: 'Beginners & Primary' },
        { time: '6:30 PM - 8:30 PM', level: 'Intermediate & Advanced' },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-4xl font-bold mb-4">Class Schedule</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for classes tailored to every age and skill level. Our structured
            program ensures proper progression and skill development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((day) => (
            <Card key={day.day} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-black text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold text-center">
                  {day.day}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {day.sessions.map((session, index) => (
                    <div 
                      key={index} 
                      className="border-b pb-4 last:border-b-0 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200"
                    >
                      <div className="flex items-center justify-center  gap-2 text-red-600 font-semibold">
                        <Clock size={16} />
                        <p>{session.time}</p>
                      </div>
                      <p className="text-gray-600 mt-1 font-medium text-center ">{session.level}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;