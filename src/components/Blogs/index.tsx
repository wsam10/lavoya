'use client'
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

// Define the type for the blog data
interface BlogData {
  title: string;
  description: string;
  imageUrl: string;
}

// Blog data array with explicit type
const blogData: BlogData[] = [
  {
    title: "Drake-backed Dave’s Hot Chicken opened in JBR in September, followed by a branch in Motor City.",
    description: "Now, a third branch has opened its doors to serve spicy fried chicken in Dubai Mall (on level two by the ice rink).",
    imageUrl: "/images/blog/blog-1.webp",
  },
  {
    title: "Another exciting news for food lovers in Dubai.",
    description: "A new restaurant has opened in the heart of the city, offering unique dishes and experiences.",
    imageUrl: "/images/blog/blog-2.webp",
  },
  {
    title: "Another exciting news for food lovers in Dubai.",
    description: "A new restaurant has opened in the heart of the city, offering unique dishes and experiences.",
    imageUrl: "/images/blog/blog-3.webp",
  },
];

// Define the props type for BlogCard
interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

// BlogCard component
const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageUrl }) => (
  <div className="flex items-center flex-col gap-8 w-full group p-2">
    <Parallax speed={4}>
      <Image
        width={700}
        height={700}
        alt="project"
        className="rounded-xl object-cover w-96 h-96 relative z-0 transition-all duration-300 hover:scale-105"
        src={imageUrl}
      />
    </Parallax>
    <Parallax speed={2}>
      <div className="flex items-center justify-between w-[406px] lg:max-w-full w-full lg:px-0">
        <div className="block">
          <h4 className="text-2xl font-manrope font-semibold text-[#0F1014] dark:text-white mb-1 line-clamp-2">
            {title}
          </h4>
          <p className="font-medium text-lg text-gray-600 dark:text-gray-400 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Parallax>
  </div>
);

// Blogs component
const Blogs: React.FC = () => {
  return (
    <section id="Blogs" className="pt-32 bg-white dark:bg-[#0F1014]">
      <div className="bg-white dark:bg-[#25272B] pt-20 pb-20 rounded-xl py-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mt-4 text-[#25272B] text-center dark:text-white font-bold text-4xl lg:text-7xl">NEWS</h1>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((project, index) => (
            <BlogCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mx-auto p-2 w-96 mt-10 mb-20">
        <Parallax speed={10}>
          <div className="group relative mt-0 inline-flex">
            <a
              href="#"
              className="mt-8 group relative inline-block text-xl font-medium text-gray-900 focus:outline-none focus:ring"
            >
              <span className="absolute inset-0 rounded-lg border border-[#FDB940]"></span>
              <span className="block rounded-lg bg-[#FDB940] px-12 py-3 transition-transform group-hover:bg-white group-hover:text-dark group-hover:-translate-x-2 group-hover:-translate-y-2">
                EXPLORE MORE
              </span>
            </a>
            <div className="-scale-x-100 absolute left-0 -bottom-14 lg:-bottom-10 h-10 w-10 -rotate-12 text-[#FDB940] md:inline-flex">
              <svg viewBox="0 0 82 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="..."
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default Blogs;
