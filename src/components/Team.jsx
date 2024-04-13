import Image from 'next/image';

import stephen from '@/images/avatars/stephen.png';
import reem from '@/images/avatars/reem.png';
import emma from '@/images/avatars/emma.png';
import evan from '@/images/avatars/evan.png';

const people = [
  {
    name: 'Stephen Chow',
    role: 'Software Engineer',
    imageUrl: stephen,
    githubUrl: 'https://github.com/stc415',
    linkedinUrl: '#',
  },
  {
    name: 'Reem Abi Ammar',
    role: 'Software Engineer',
    imageUrl: reem,
    githubUrl: 'https://github.com/RGA29',
    linkedinUrl: 'https://www.linkedin.com/in/reem-abi-ammar-09305b62/',
  },
  {
    name: 'Emma Ijiogbe',
    role: 'Software Engineer',
    imageUrl: emma,
    githubUrl: 'https://github.com/emmagawd',
    linkedinUrl: 'http://linkedin.com/in/eijiogbe',
  },
  {
    name: 'Evan Griffith',
    role: 'Software Engineer',
    imageUrl: evan,
    githubUrl: 'https://github.com/EvanCG',
    linkedinUrl: 'https://www.linkedin.com/in/evancgriffith/',
  },
]

export function Team() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Crafted with care</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
          Our team wanted to provide the best developer experience they could, and created an experience they want to use in their own applications.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image className="mx-auto h-56 w-56 rounded-full" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a href={person.githubUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Github</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 98 98">
                      <path
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
