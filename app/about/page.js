import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { assets } from "@/lib/assets";
import Link from "next/link";

export const metadata = {
  title: "About Us | BoroBazaar",
  description: "Learn about BoroBazaar — our story, values, and mission.",
};

const About = () => {
  const values = [
    {
      title: "Quality",
      description: "We rigorously test every product to ensure it meets the highest standards of performance and durability.",
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    {
      title: "Trust",
      description: "Transparent pricing, secure checkout, and hassle-free returns — because you deserve peace of mind.",
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description: "We stay ahead of the curve, bringing you the latest tech before it hits the mainstream.",
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="px-6 md:px-16 lg:px-32 pt-14 space-y-20 pb-20 flex-1">
        <div className="flex flex-col items-center text-center">
          <p className="text-4xl font-medium text-gray-800">About BoroBazaar</p>
          <div className="w-16 h-0.5 bg-green-600 rounded-full mt-3"></div>
          <p className="text-gray-500 max-w-2xl mt-5 text-lg">
            Your destination for premium gadgets and accessories — curated for
            quality, designed for life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-2xl font-medium text-gray-800">Our Story</p>
            <div className="w-16 h-0.5 bg-green-600 rounded-full"></div>
            <p className="text-gray-500 leading-relaxed">
              BoroBazaar was founded with a simple mission: make cutting-edge
              technology accessible to everyone. What started as a small passion
              project has grown into a trusted destination for gadgets,
              accessories, and lifestyle electronics.
            </p>
            <p className="text-gray-500 leading-relaxed">
              We partner with top brands and emerging innovators to bring you
              products that combine quality, performance, and value. Every item
              in our collection is hand-picked to ensure it meets our standards.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden bg-gray-500/10 p-4 flex items-center justify-center">
            <Image
              src={assets.macbook_image}
              alt="MacBook"
              className="w-100 h-auto object-cover mix-blend-multiply"
              width={1280}
              height={720}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center mb-12">
            <p className="text-2xl font-medium text-gray-800">Our Values</p>
            <div className="w-16 h-0.5 bg-green-600 rounded-full mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ title, description, icon }) => (
              <div
                key={title}
                className="border border-gray-500/20 rounded-lg p-8 hover:shadow-md transition"
              >
                <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                  {icon}
                </div>
                <p className="text-lg font-medium text-gray-800 mb-2">
                  {title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Happy Customers", value: "10K+" },
            { label: "Products", value: "500+" },
            { label: "Brands", value: "50+" },
            { label: "Satisfaction", value: "99%" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="text-center border border-gray-500/20 rounded-lg py-8"
            >
              <p className="text-3xl font-bold text-green-600">{value}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-600 rounded-xl py-14 px-8 text-center text-white space-y-4">
          <p className="text-3xl font-medium">
            Ready to find your next gadget?
          </p>
          <p className="text-green-100 max-w-lg mx-auto">
            Explore our collection and discover products that fit your
            lifestyle.
          </p>
          <Link
            href="/all-products"
            className="inline-block bg-white text-green-600 font-medium px-8 py-3 rounded-full hover:bg-green-50 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
