import type { FaqItem } from '../types'

export const faqItems: FaqItem[] = [
  {
    id: 'pay',
    question: 'How do I pay for a service?',
    answer:
      'You pay securely online when you book using a credit card, debit card or digital wallet. The payment is held safely and only released to the professional once the service is completed to your satisfaction.',
  },
  {
    id: 'cancel',
    question: 'Can I cancel or reschedule a booking?',
    answer:
      'Yes. You can cancel or reschedule a booking free of charge up to 24 hours before the scheduled start time. Late cancellations may be subject to a small fee depending on the provider’s policy.',
  },
  {
    id: 'verified',
    question: 'How are professionals verified?',
    answer:
      'Every professional completes an identity check and is approved by our team before they can offer services. We also collect genuine customer reviews after every completed job to help you choose with confidence.',
  },
  {
    id: 'refund',
    question: 'What if I’m not happy with the service?',
    answer:
      'Your satisfaction is our priority. If a service is not delivered as described, contact our support team within 7 days and we will help arrange a fix or a full refund through our satisfaction guarantee.',
  },
  {
    id: 'business',
    question: 'Do you offer services for businesses?',
    answer:
      'Absolutely. We offer corporate accounts with bulk hiring, dedicated account managers, invoicing and flexible payment terms for companies of all sizes. Contact our business team to get started.',
  },
]
