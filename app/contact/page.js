import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | BoroBazaar",
  description:
    "Get in touch with BoroBazaar — find our address, phone, and email.",
};

const Contact = () => {
  const details = [
    {
      label: "Visit Us",
      value: "123 Gadget Street, Tech City, 54790",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      ),
    },
    {
      label: "Call Us",
      value: "+1-234-567-890",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      ),
    },
    {
      label: "Email Us",
      value: "abdurrehman76001@gmail.com",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="px-6 md:px-16 lg:px-32 pt-14 pb-20 flex-1">
        <div className="flex flex-col items-center text-center mb-14">
          <p className="text-4xl font-medium text-gray-800">Contact Us</p>
          <div className="w-16 h-0.5 bg-green-600 rounded-full mt-3"></div>
          <p className="text-gray-500 max-w-lg mt-5">
            We're here to help. Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {details.map(({ label, value, icon }) => (
            <div
              key={label}
              className="border border-gray-500/20 rounded-lg p-8 text-center hover:shadow-md transition"
            >
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-5">
                <div className="text-green-600">{icon}</div>
              </div>
              <p className="text-lg font-medium text-gray-800 mb-2">{label}</p>
              <p className="text-sm text-gray-500">{value}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
