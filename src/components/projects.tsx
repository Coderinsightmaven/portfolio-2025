import Image from 'next/image'
import Link from 'next/link'

const posts = [
    {
      id: 2,
      title: 'Tempuz Live Scoreboard',
      href: 'https://github.com/Coderinsightmaven/tempuz-scoreboard',
      description:
        'Live Data Integration, for Ioncourt a scoring application for ITA Tennis Tournaments built with Tauri v2, Vite, Tailwind, Typescript, and Rust',
      imageUrl:
        '/tempuzscoreboard2.png',
      date: 'Sept 25th, 2025',
      datetime: '2025-09-25',
    },
    {
        id: 1,
        title: 'Match Point Systems Tennis Api',
        href: 'https://github.com/Coderinsightmaven/mps-tennisapi',
        description:
          'Live Data Integration, for Ioncourt a scoring application for ITA Tennis Tournaments built with Tauri v2, Vite, Tailwind, Typescript, and Rust',
        imageUrl:
          'https://teachyourkidscode.com/wp-content/uploads/2022/02/best-coding-language-for-games.jpg',
        date: 'Sept 15th, 2025',
        datetime: '2025-09-25',
      },
  ]
  
  export default function Projects() {
    return (
      <div id="projects" className="bg-white py-24 sm:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
              Past Projects
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">
                    
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80 dark:bg-gray-800"
              >
                <Image alt="" src={post.imageUrl} fill className="absolute inset-0 -z-10 object-contain" />
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40 dark:from-black/80 dark:via-black/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time dateTime={post.datetime}>
                    {post.date}
                  </time>
                </div>
                <h3 className="mt-3 text-lg/6 font-semibold text-white">
                  <Link href={post.href} target="_blank" rel="noopener noreferrer">
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  