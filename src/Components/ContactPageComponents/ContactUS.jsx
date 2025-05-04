import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import Title from "../Shared/Title";
function ContactUS() {
  return (
    <div className="mt-[100px]">
      <div className="py-5">
        <Title title={"Contact Us"} />
      </div>
      <div className="flex justify-between items-center">
        {/* heading */}
        <h1 className="text-6xl font-semibold my-12">
          Get in touch with us. <br /> We&apos;re here to assist you.
        </h1>

        {/* Social icons */}
        <div className="flex flex-col gap-4">
          <div className="border rounded-full p-3 hover:bg-orange-500 hover:text-white">
            <FaFacebookF />
          </div>
          <div className="border rounded-full p-3 hover:bg-orange-500 hover:text-white">
            <FaInstagram />
          </div>
          <div className="border rounded-full p-3 hover:bg-orange-500 hover:text-white">
            <FaTwitter />
          </div>
        </div>
      </div>
      {/* Input section */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col">
            <label className="text-sm mb-1">Your Name</label>
            <input type="text" className="border-b-2 focus:outline-none" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">Email Address</label>
            <input type="email" className="border-b-2 focus:outline-none" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">Phone Number (optional)</label>
            <input type="text" className="border-b-2 focus:outline-none" />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Message</label>
          <textarea className="border-b-2 focus:outline-none"></textarea>
        </div>

        <button className="flex items-center bg-orange-500 text-white py-2 px-6 rounded-full space-x-2 hover:bg-orange-600 transition">
          <span>Send Message</span>
          <div className="border rounded-full p-2 bg-white">
            <IoIosSend className="text-orange-500 text-xl" />
          </div>
        </button>
      </div>
    </div>
  );
}
export default ContactUS;
