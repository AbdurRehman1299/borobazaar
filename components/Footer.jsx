import { assets } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32 mb-5" src={assets.logo} alt="logo" />
          <p className="mt-b text-sm">
            Discover a curated collection of products designed to elevate your
            everyday life. From the latest trends to timeless classics, we bring
            you quality, style, and value all in one place. Enjoy secure
            checkout, fast shipping, and a hassle-free return policy. Join
            thousands of happy shoppers and experience shopping made simple.
          </p>
        </div>

        <div className="w-1 flex items-center jusitfy-start md:jusitfy-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <Link href={"/"} className="hover:underline transition">
                <li>Home</li>
              </Link>
              <Link href={"/about"} className="hover:underline transition">
                <li>About us</li>
              </Link>
              <Link href={"/contact"} className="hover:underline transition">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p>abdurrehman76001@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2026 &copy; AbdurRehman. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
