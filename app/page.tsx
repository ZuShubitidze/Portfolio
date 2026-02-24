import { ModeToggle } from "@/components/theme/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen my-8 mx-30 flex flex-col gap-10">
      {/* Theme Toggle */}
      <span className="absolute top-4 right-4">
        <ModeToggle />
      </span>
      <section className="container mx-auto flex flex-col gap-10 items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to my portfolio!</h1>
        {/* Description */}
        <p className="text-2xl">
          My name is Zura Shubitidze, and I am a software developer with a
          passion for building web applications. This is a simple portfolio
          website built with Next.js and Tailwind CSS / Shadcn. And here, I will
          be showcasing some of my projects and skills. Feel free to explore and
          contact me on my
          <a href="mailto:zurashubitidze123@gmail.com"> email </a>
          or <a href="tel:+995558188548"> phone </a>if you have any questions or
          opportunities!
        </p>
      </section>
      {/* My Projects */}
      <section className="container mx-auto">
        <ul className="flex flex-col gap-10">
          {/* Ecommerce */}
          <li className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Project 1 - Ecommerce</h1>
            <p className="text-2xl">
              This is an ecommerce website built with React, Redux, Firebase,
              Stripe and Tailwind / Shadcn. Products from external API are
              imported. It allows users to browse products, add them to
              favorites or cart, and use checkout using Stripe, while I manage
              state in Redux.
            </p>
            {/* Images */}
            <section className="flex flex-col md:flex-row gap-4">
              <Image
                src="/Ecommerce Cart.png"
                alt="Ecommerce Cart"
                width={800}
                height={400}
              />
              <Image
                src="/Ecommerce Homepage.png"
                alt="Ecommerce Homepage"
                width={800}
                height={400}
              />
            </section>
            {/* Links */}
            <section className="flex flex-row gap-10">
              <a
                href="https://github.com/ZuShubitidze/Ecommerce.git"
                className="text-3xl font-bold dark:text-blue-400 dark:hover:bg-amber-200 text-indigo-800 hover:bg-blue-400 p-6 transition-all duration-500"
              >
                Github Repo
              </a>
              <a
                href="https://ecommerce-q2g6fir3i-zuras-projects-8476b601.vercel.app/"
                className="text-3xl font-bold dark:text-blue-400 dark:hover:bg-amber-200 text-indigo-800 hover:bg-blue-400 p-6 transition-all duration-500"
              >
                Vercel
              </a>
            </section>
          </li>
          {/* Recipe Finder */}
          <li className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Project 2 - Recipe-Finder</h1>
            {/* Description */}
            <section>
              <p className="text-2xl">
                This is a simple Recipe-Finder built with Next.js, Firebase,
                Tailwind / Shadcn. This web-app allows users to register and
                sign in and find recipes based on <strong>keyword</strong> or{" "}
                <strong>category</strong>.
              </p>
              <p className="text-2xl">
                I used firebase authentication, after login or registration,
                using Firebase userCredentials, I get token and set it as a
                cookie named AuthToken. On logout, this cookie is deleted.
              </p>
            </section>
            {/* Images */}
            <section className="flex flex-col md:flex-row gap-4">
              <Image
                src="/RecipeFinderMainPage.png"
                alt="Recipe Finder Main Page"
                width={800}
                height={400}
              />
              <Image
                src="/RecipeFinderDynamicPage.png"
                alt="Recipe Finder Dynamic Page"
                width={800}
                height={400}
              />
            </section>
            {/* Links */}
            <section className="flex flex-row gap-10">
              <a
                href="https://github.com/ZuShubitidze/Recipe-Finder.git"
                className="text-3xl font-bold dark:text-blue-400 dark:hover:bg-amber-200 text-indigo-800 hover:bg-blue-400 p-6 transition-all duration-500"
              >
                Github Repo
              </a>
              <a
                href="https://recipe-finder-j4lacvan8-zuras-projects-8476b601.vercel.app/"
                className="text-3xl font-bold dark:text-blue-400 dark:hover:bg-amber-200 text-indigo-800 hover:bg-blue-400 p-6 transition-all duration-500"
              >
                Vercel
              </a>
            </section>
          </li>
          {/* Blog */}
          <li className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Project 3 - Blog</h1>
            {/* Description */}
            <section>
              <p className="text-2xl">
                A reddit-like small web-application that I made, practicing
                structural work.
              </p>
              <p className="text-2xl">
                Similar to the previous project, built using Next.js, Firebase,
                Tailwind / Shadcn. Users can login or register, create posts,
                comment on other people's posts and reply to comments as well.
              </p>
              <p className="text-2xl">
                UI isn't polished, as structure and code was my goal for this
                project, not the looks.
              </p>
            </section>
            {/* Images */}
            <section className="flex flex-col md:flex-row gap-4">
              <Image
                src="/Blog Post.png"
                alt="Blog Post"
                width={800}
                height={400}
              />
              <Image
                src="/Blog Add Post.png"
                alt="Blog Add Post"
                width={800}
                height={400}
              />
            </section>
            {/* Links */}
            <section className="flex flex-row gap-10">
              <a
                href="https://github.com/ZuShubitidze/Personal-Blog.git"
                className="text-3xl font-bold dark:text-blue-400 dark:hover:bg-amber-200 text-indigo-800 hover:bg-blue-400 p-6 transition-all duration-500"
              >
                Github Repo
              </a>
              <a
                href="https://personal-blog-709xxp027-zuras-projects-8476b601.vercel.app/"
                className="text-3xl font-bold dark:text-blue-400 dark:hover:bg-amber-200 text-indigo-800 hover:bg-blue-400 p-6 transition-all duration-500"
              >
                Vercel
              </a>
            </section>
          </li>
          {/* Personal Website */}
          <li className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Project 4 - Marble</h1>
            {/* Description */}
            <section>
              <p className="text-2xl">
                A small website I've made for an acquaintance, offering marble
                products and services.
              </p>
            </section>
            {/* Images */}
            <section className="flex flex-col md:flex-row gap-4">
              <Image
                src="/MarmariloGranitiHome.png"
                alt="Home Page"
                width={800}
                height={400}
              />
              <Image
                src="/MarmariloGranitiProducts.png"
                alt="Products Page"
                width={800}
                height={400}
              />
            </section>
            {/* Links */}
            <section className="flex flex-row gap-10">
              <a
                href="https://github.com/ZuShubitidze/Kaxa-sWeb2.git"
                className="text-3xl font-bold dark:text-blue-400 dark:hover:bg-amber-200 text-indigo-800 hover:bg-blue-400 p-6 transition-all duration-500"
              >
                Github Repo
              </a>
              <a
                href="https://marmarilograniti.ge/"
                className="text-3xl font-bold dark:text-blue-400 dark:hover:bg-amber-200 text-indigo-800 hover:bg-blue-400 p-6 transition-all duration-500"
              >
                Website
              </a>
            </section>
          </li>
        </ul>
      </section>
    </main>
  );
}
