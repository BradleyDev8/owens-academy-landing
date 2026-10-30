import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InquiryDialog } from '@/components/inquiry-dialog';
import { SectionHeading } from '@/components/section-heading';

const address = 'Church Ave, Downpatrick BT30 6EP';
const mapQuery = encodeURIComponent(`${address}, UK`);

const details = [
  { icon: Phone, label: 'Phone', value: '07443 498510', href: 'tel:+447443498510' },
  { icon: Mail, label: 'Email', value: 'owensacademy@hotmail.com', href: 'mailto:owensacademy@hotmail.com' },
  { icon: MapPin, label: 'Downpatrick', value: address, href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}` },
];

const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61553698612127' },
  { name: 'Instagram', href: 'https://www.instagram.com/theowensacademy/' },
];

const Contact = () => {
  return (
    <section id="contact" className="border-t border-border bg-card py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[5fr_6fr] md:gap-16">
        <div>
          <SectionHeading eyebrow="Contact" title="Get in touch">
            Call, email or send an enquiry and we&apos;ll help you find the right class.
          </SectionHeading>

          <dl className="mt-10 grid gap-6">
            {details.map((detail) => (
              <div key={detail.label} className="flex gap-4">
                <detail.icon aria-hidden className="mt-0.5 size-5 shrink-0 text-faint" strokeWidth={1.5} />
                <div>
                  <dt className="text-sm text-muted-foreground">{detail.label}</dt>
                  <dd className="mt-1">
                    <a
                      href={detail.href}
                      className="text-base underline decoration-border underline-offset-4 transition-colors duration-150 hover:decoration-foreground"
                    >
                      {detail.value}
                    </a>
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <InquiryDialog>
              <Button size="lg" className="h-11 px-5">
                Send an enquiry
              </Button>
            </InquiryDialog>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
              >
                {social.name}
                <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <iframe
          title={`Map of ${address}`}
          src={`https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`}
          className="h-[360px] w-full rounded-2xl border border-border md:h-full md:min-h-[480px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Contact;
