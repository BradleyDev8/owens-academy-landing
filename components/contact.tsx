"use client";

import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { InquiryForm } from '@/components/inquiry-form';

const Contact = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your Irish dance journey? Get in touch with us today!
          </p>
        </div>

        <div className="flex flex-col items-center mb-12">
          <div className="relative">
            <div className="absolute -top-10 left-[-100px] hidden md:block">
              <div className="flex flex-col items-center gap-2">
                <span className="font-handwriting text-xl text-red-600">Get in Touch</span>
                <svg 
                  className="w-14 h-8 rotate-[25deg] scale-y-[-1] text-red-600" 
                  viewBox="0 0 296 71" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3_228)">
                    <path d="M-3.10351e-06 71C13.102 44.3623 83.0496 8.91537 132.922 2.62301C186.809 -4.29859 217.873 1.57428 281.27 31.1484C280.425 26.9535 279.368 23.5976 278.945 20.4514C278.311 16.8857 277.677 13.1103 277.889 9.54461C277.889 8.49589 279.791 6.60818 281.059 6.39843C282.327 6.18869 284.44 7.6569 284.862 8.70563C288.666 18.7734 292.047 28.8412 295.64 39.1187C296.696 42.4746 295.428 44.9916 291.836 46.0403C278.1 49.3962 264.364 52.9619 250.417 56.1081C247.247 56.7373 243.443 55.8983 239.217 55.8983C242.598 46.8793 250.206 47.928 255.7 45.6208C261.406 43.1039 267.534 41.6357 274.93 39.1187C257.39 27.373 239.639 20.0319 220.832 15.4175C151.941 -1.78164 88.544 12.481 30.0078 50.6547C22.4002 55.6886 15.4265 61.5615 8.03027 66.8051C5.70572 67.8538 3.59247 68.9026 -3.10351e-06 71Z" />
                  </g>
                </svg>
              </div>
            </div>
            <Button
              variant="destructive"
              size="lg"
              className="text-lg px-8 transform transition-all duration-300 hover:scale-110 hover:shadow-lg button-glow"
              onClick={handleClick}
            >
              Start Your Dance Journey
            </Button>
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-playfair">Start Your Dance Journey</DialogTitle>
              <DialogDescription className="pt-2">
                Fill out this quick form and we&apos;ll get back to you about starting your Irish dance journey.
              </DialogDescription>
            </DialogHeader>
            <InquiryForm onSuccess={() => setIsDialogOpen(false)} />
          </DialogContent>
        </Dialog>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
              <h3 className="font-bold text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <Phone className="h-6 w-6 text-red-600 mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <span className="text-gray-600">07443 498510</span>
                  </div>
                </div>
                <div className="flex items-center group">
                  <Mail className="h-6 w-6 text-red-600 mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">Email</p>
                    <span className="text-gray-600">owensacademy@hotmail.com</span>
                  </div>
                </div>
                <div className="flex items-center group">
                  <MapPin className="h-6 w-6 text-red-600 mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">Location</p>
                    <span className="text-gray-600">Church Ave, Downpatrick BT30 6EP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-2xl mb-6">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-8">
                <Link
                  href="https://www.facebook.com/profile.php?id=61553698612127" 
                  className="flex flex-col items-center text-red-600 hover:text-red-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-8 w-8 mb-2" />
                  <span>Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/theowensacademy/" 
                  className="flex flex-col items-center text-red-600 hover:text-red-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-8 w-8 mb-2" />
                  <span>Instagram</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="h-[500px] rounded-lg overflow-hidden shadow-sm">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Church+Ave,+Downpatrick+BT30+6EP,+UK`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;