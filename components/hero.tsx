"use client";

import { Button } from '@/components/ui/button';
import irishDance from '@/public/irishDance.png';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { InquiryForm } from '@/components/inquiry-form';

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = () => {

    // Open dialog
    setIsDialogOpen(true);
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <Image
        src={irishDance}
        alt="Irish Dancing Background"
        fill
        priority
        className="object-cover z-0"
        quality={100}
      />
      <div className="absolute inset-0 hero-gradient z-[1]"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-6">
          Welcome to Owens Academy
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Experience the magic of Irish dance through tradition, passion, and excellence
        </p>
        <Button 
          variant="destructive" 
          size="lg" 
          className="text-lg px-8 transform transition-all duration-300 hover:scale-110 hover:shadow-lg button-glow"
          onClick={handleClick}
        >
          Start Your Dance Journey
        </Button>
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
    </section>
  );
};

export default Hero;