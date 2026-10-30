'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { InquiryForm } from '@/components/inquiry-form';

export function InquiryDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-normal">Ask about classes</DialogTitle>
          <DialogDescription>
            Tell us a little about the dancer and we&apos;ll get back to you with the right class.
          </DialogDescription>
        </DialogHeader>
        <InquiryForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
