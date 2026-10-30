import { cn } from '@/lib/utils';
import { SectionHeading } from '@/components/section-heading';

type Level = 'Beginners & Primary' | 'Intermediate & Advanced' | 'Advanced';

const levelStyles: Record<Level, string> = {
  'Beginners & Primary': 'bg-level-beginner text-foreground',
  'Intermediate & Advanced': 'bg-level-intermediate text-stage-foreground',
  Advanced: 'bg-primary text-primary-foreground',
};

const classes: { day: string; sessions: { start: string; end: string; level: Level }[] }[] = [
  {
    day: 'Tuesday',
    sessions: [
      { start: '17:45', end: '18:45', level: 'Beginners & Primary' },
      { start: '18:45', end: '20:45', level: 'Intermediate & Advanced' },
    ],
  },
  {
    day: 'Wednesday',
    sessions: [{ start: '18:45', end: '20:45', level: 'Advanced' }],
  },
  {
    day: 'Thursday',
    sessions: [
      { start: '17:45', end: '18:45', level: 'Beginners & Primary' },
      { start: '18:30', end: '20:30', level: 'Intermediate & Advanced' },
    ],
  },
];

const dayStartMinutes = 17 * 60 + 30;
const dayLengthMinutes = 3.5 * 60;
const hourMarks = [18, 19, 20, 21];

const toMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const toTwelveHour = (time: string) => {
  const [hours, minutes] = time.split(':');
  return `${Number(hours) % 12 || 12}:${minutes}`;
};

const formatRange = (start: string, end: string) => `${toTwelveHour(start)}–${toTwelveHour(end)} pm`;

const Schedule = () => {
  return (
    <section id="schedule" className="pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Timetable" title="Classes run Tuesday to Thursday evenings">
          Classes are grouped by level, so every dancer learns alongside others at the same stage.
        </SectionHeading>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-[0_8px_24px_rgb(31_27_22/0.06)] md:p-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {Object.entries(levelStyles).map(([level, style]) => (
              <li key={level} className="flex items-center gap-2">
                <span aria-hidden className={cn('size-2.5 rounded-full ring-1 ring-foreground/15 ring-inset', style)} />
                {level}
              </li>
            ))}
          </ul>
          <WeekChart />
          <WeekList />
        </div>
      </div>
    </section>
  );
};

const WeekChart = () => (
  <div className="mt-8 hidden md:block" aria-hidden>
    <div className="ml-28 flex h-6 text-xs whitespace-nowrap text-faint tabular-nums">
      <div className="relative flex-1">
        {hourMarks.map((hour) => (
          <span
            key={hour}
            className="absolute -translate-x-1/2"
            style={{ left: `${((hour * 60 - dayStartMinutes) / dayLengthMinutes) * 100}%` }}
          >
            {hour - 12} pm
          </span>
        ))}
      </div>
    </div>
    {classes.map((day) => (
      <div key={day.day} className="flex border-t border-border">
        <p className="w-28 shrink-0 py-6 text-base font-medium">{day.day}</p>
        <div className="relative grid flex-1 gap-2 py-4">
          {hourMarks.map((hour) => (
            <span
              key={hour}
              className="absolute inset-y-0 w-px bg-border"
              style={{ left: `${((hour * 60 - dayStartMinutes) / dayLengthMinutes) * 100}%` }}
            />
          ))}
          {day.sessions.map((session) => {
            const start = toMinutes(session.start) - dayStartMinutes;
            const length = toMinutes(session.end) - toMinutes(session.start);
            return (
              <div key={session.start} className="relative h-14">
                <div
                  className={cn(
                    'absolute inset-y-0 flex flex-col justify-center rounded-lg px-3 text-sm leading-5',
                    levelStyles[session.level],
                  )}
                  style={{
                    left: `${(start / dayLengthMinutes) * 100}%`,
                    width: `${(length / dayLengthMinutes) * 100}%`,
                  }}
                >
                  <span className="truncate font-medium">{session.level}</span>
                  <span className="tabular-nums opacity-80">{formatRange(session.start, session.end)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </div>
);

const WeekList = () => (
  <dl className="mt-6 divide-y divide-border border-t border-border md:sr-only">
    {classes.map((day) => (
      <div key={day.day} className="py-4">
        <dt className="text-base font-medium">{day.day}</dt>
        {day.sessions.map((session) => (
          <dd key={session.start} className="mt-2 flex items-center gap-3 text-sm">
            <span aria-hidden className={cn('size-2.5 shrink-0 rounded-full ring-1 ring-foreground/15 ring-inset', levelStyles[session.level])} />
            <span className="flex-1 text-muted-foreground">{session.level}</span>
            <span className="tabular-nums">{formatRange(session.start, session.end)}</span>
          </dd>
        ))}
      </div>
    ))}
  </dl>
);

export default Schedule;
