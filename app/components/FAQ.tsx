"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is HookHub?",
    answer: "HookHub is a curated collection of custom React hooks designed to help developers build better applications faster. We gather the best community-created hooks and organize them by category and programming language for easy discovery.",
  },
  {
    question: "How do I use a hook from HookHub?",
    answer: "Each hook card includes a 'View on GitHub' link that takes you directly to the source repository. From there, you can view the code, read the documentation, and install the hook in your project. Most hooks can be installed via npm or copied directly into your codebase.",
  },
  {
    question: "Can I submit my own custom hook?",
    answer: "Yes! We welcome contributions from the community. You can submit your custom React hook by opening a pull request on our GitHub repository. Make sure your hook includes proper documentation, examples, and follows React best practices.",
  },
  {
    question: "Are these hooks production-ready?",
    answer: "While we curate high-quality hooks, each hook may have different levels of maturity and testing. Always review the source code, check for tests, read the documentation, and test thoroughly in your own environment before using in production.",
  },
  {
    question: "What programming languages are supported?",
    answer: "Currently, HookHub focuses primarily on React hooks written in JavaScript and TypeScript. We also include hooks for React Native and Next.js. We're constantly expanding our collection to include more frameworks and languages.",
  },
  {
    question: "How often is the collection updated?",
    answer: "We regularly update HookHub with new hooks and improvements to existing ones. Follow our GitHub repository to stay informed about the latest additions and updates to the collection.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-4xl font-bold text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to know about HookHub
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-900/70 via-gray-800/70 to-gray-900/70 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors duration-300"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="pr-8 text-lg font-semibold text-gray-100 transition-colors duration-300 group-hover:text-white">
                  {faq.question}
                </h3>
                <svg
                  className={`h-6 w-6 flex-shrink-0 text-blue-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-gray-700/50 bg-gray-900/50 p-6">
                  <p className="leading-relaxed text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 p-8 text-center backdrop-blur-sm">
          <h3 className="mb-3 text-xl font-bold text-gray-100">
            Still have questions?
          </h3>
          <p className="mb-6 text-gray-400">
            Can&apos;t find the answer you&apos;re looking for? Feel free to reach out to
            our community.
          </p>
          <a
            href="https://github.com/yourusername/hookhub/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-500/30"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Join the Discussion
          </a>
        </div>
      </div>
    </section>
  );
};
