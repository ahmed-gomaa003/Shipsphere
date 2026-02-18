import React from "react";
import type { FormEvent } from "react";
import { Phone, Mail, MessageCircle, Building2, ExternalLink, Info, SendHorizontal } from "lucide-react";
import FooterContact from "@/components/FooterContact";

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <>
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* LEFT SIDE - FORM */}
        <div className="p-10">
          <span className="text-sm bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-medium">
            GET IN TOUCH
          </span>

          <h2 className="text-3xl font-semibold mt-4">
            Contact Our Logistics Experts
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            We're here to help with your shipping needs 24/7. Send Us a message
            and we will respond shortly
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Shipping Rates Comparison</option>
              <option>Tracking Shipment</option>
              <option>Business Inquiry</option>
            </select>

            <textarea
              rows={4}
              placeholder="How can we help you today?"
              className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg shadow-md"
            >
              <span className="flex items-center gap-3">
                Send Message <SendHorizontal size={16} />
              </span>
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - SUPPORT INFO */}
        <div className="bg-blue-50 p-10 ">
          <div className="flex items-center mb-3 gap-4">
            <Info className="text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-6">Support Channels</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="text-blue-600" />
              <div>
                <h4 className="font-medium">Phone Support</h4>
                <p className="text-gray-500">+1 (555) 000-1234</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MessageCircle className="text-blue-600" />
              <div>
                <h4 className="font-medium">Live WhatsApp</h4>
                <p className="text-gray-500">+971 50 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-blue-600" />
              <div>
                <h4 className="font-medium">Email Us</h4>
                <p className="text-gray-500">support@shipsphere.com</p>
              </div>
            </div>

            <div className="mt-10 bg-white rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Building2 className="text-blue-600" />
                <div>
                  <h4 className="font-medium">Regional Hub - Egypt</h4>
                  <p className="text-gray-500 my-3">
                    Nile Business Tower, Floor 10 <br />
                    Smart Village, Giza, Egypt
                  </p>
                  <a
                    className="text-blue-400 flex items-center gap-2"
                    href="#"
                  >
                    View on Map
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterContact/>
    </>
    
  );
};

export default Contact;
