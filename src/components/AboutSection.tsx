'use client';

import Image from 'next/image';
import { AcademicCapIcon, CodeBracketIcon, SparklesIcon } from '@heroicons/react/20/solid';

const skills = [
  {
    icon: CodeBracketIcon,
    title: 'Frontend Development',
    description: 'HTML, CSS, JavaScript, React.js, Next.js, and modern responsive design. Building interactive and performant user interfaces with focus on user experience and accessibility.'
  },
  {
    icon: ServerIcon,
    title: 'Backend Development',
    description: 'Node.js, Express.js for RESTful APIs, MySQL and MongoDB for database management. Creating scalable server-side applications with efficient data handling.'
  },
  {
    icon: SparklesIcon,
    title: 'Full-Stack Development',
    description: 'JSON data structures, API integration, authentication, and deployment. Experienced in building complete web applications from concept to production with modern development workflows.'
  },
];

const education = [
  {
    degree: 'Full-Stack Web Development Certificate',
    institution: 'University of Denver',
    years: '2023',
    description: 'Intensive full-stack development program covering front-end technologies (HTML, CSS, JavaScript, React.js) and back-end technologies (Node.js, Express.js, MySQL, MongoDB). Collaborated on team-based projects with demanding deadlines to build full-stack web applications.',
    link: 'https://www.credly.com/badges/0a0d890f-6789-43e2-9827-01c273bf84fa/public_url' // Replace with your actual Credly badge URL
  },
];

export default function AboutSection() {
  return (
    <div id="about" className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Section - Image Card and About Me */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Left Column - Image Card */}
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pt-64 pb-9 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 dark:bg-gray-800">
              <Image
                alt="Professional workspace"
                src="/Liam.jpg"
                fill
                className="rounded-3xl object-cover object-top"
              />
              <figure className="relative isolate">
                <blockquote className="mt-6 text-xl/8 font-semibold text-white">
                  <p>
                    &ldquo;Always learning, Always looking for new challenges, and ways to improve&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm/6 text-gray-300">
                  <strong className="font-semibold text-white">Liam,</strong> 2025
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Right Column - About Me */}
          <div>
            {/* About Me Section */}
            <div className="text-base/7 text-gray-700 lg:max-w-lg dark:text-gray-400">
              <p className="text-base/7 font-semibold text-cyan-600 dark:text-cyan-400">About Me</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              Curiosity to Creation
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                My journey into software development started in my early teens with my first laptop—a beat-up, second-hand device that opened up endless possibilities. Without teachers, I dove in, tinkering with basic programs and online coding lessons. That thrill of turning ideas into working apps hooked me, revealing code&apos;s logical creativity.
                </p>
                <p className="mt-8">
                As years passed, my passion grew, leading me to build computers from parts for running complex code and simulations. This revealed software&apos;s power to create meaningful systems & programs. I explored languages and frameworks through self-guided projects like automation scripts, learning via trial and error how code handles data and how to innovate.
                </p>
                <p className="mt-8">
                Today, this foundation drives my software career, where I craft scalable apps to solve challenges. I thrive on lifelong learning, turning problems into efficient solutions. Always looking for new challenges & opportunities to grow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Technical Skills and Education Aligned */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Technical Skills Section */}
          <div className="lg:pr-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Technical Skills
            </h2>
            <ul role="list" className="mt-8 space-y-6">
              {skills.map((skill, idx) => (
                <li key={idx} className="flex gap-x-3">
                  <skill.icon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-cyan-600 dark:text-cyan-400"
                  />
                  <span className="text-gray-600 dark:text-gray-400">
                    <strong className="font-semibold text-gray-900 dark:text-white">{skill.title}.</strong>{' '}
                    {skill.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Education
            </h2>
            <div className="mt-8 space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="border-l-4 border-cyan-500 dark:border-cyan-400 pl-4">
                  <div className="flex items-start gap-x-3">
                    <AcademicCapIcon
                      aria-hidden="true"
                      className="mt-1 size-6 flex-none text-cyan-600 dark:text-cyan-400"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {edu.institution} • {edu.years}
                      </p>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {edu.description}
                      </p>
                      {edu.link && (
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center text-sm font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
                        >
                          View Certificate →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper icon component (if ServerIcon is not available)
function ServerIcon({ className, ...props }: { className?: string; [key: string]: unknown }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M4.464 3.162A2 2 0 0 1 6.28 2h7.44a2 2 0 0 1 1.816 1.162l1.154 2.5c.067.145.115.291.145.438A2 2 0 0 1 18 8v2.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5V8a2 2 0 0 1 1.165-1.9c.03-.147.078-.293.145-.438l1.154-2.5ZM7.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 12.5v2a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 2.5 12h15a.5.5 0 0 1 .5.5ZM7.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2.5 17a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-15Z" />
    </svg>
  );
}

