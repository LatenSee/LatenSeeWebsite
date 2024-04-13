import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Does any of my data go to a third party server?',
      answer:
        'No. All data for running the application stays within your self-hosted app. There is no third party communication in LatenSee.',
    },
    {
      question: 'Where can I host LatenSee?',
      answer:
        'LatenSee is easily hosted anywhere you can host a docker container. We recommend using the same cluster that your app is deployed in in order to ensure secure connections between your LatenSee app and the functions you are warming.',
    },
  ],
  [
    {
      question:
        "I don't want my Lambda to run or send data back, how can I ensure that LatenSee doesn't receive any other info?",
      answer:
        "LatenSee's only addition to your Lambda is a small closure variable (used to detect if the invocation is a cold start) and immediately processes a response - feel free to audit the code snippet!",
    },
    {
      question: "I'd like to suggest a new feature, what can I do?",
      answer:
        'Feel free to open an issue on our Github - and of course, feel free to contribute directly yourself!',
    },
  ],
  [
    {
      question:
        "My Lambda doesn't have an API endpoint and is triggered by something else, what should I do?",
      answer:
        'We suggest adding an additional API gateway trigger for your Lambda.',
    },
    {
      question: 'How can I get in touch with the team?',
      answer:
        "Feel free to follow us on LinkedIn or Github, we're always willing to share what we've learned with others!",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, open an issue in our
            Github.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
