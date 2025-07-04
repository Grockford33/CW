import React from "react";

export default function CWFramework() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CW Industrial</h1>
        <nav className="space-x-4">
          <a href="#products" className="hover:underline">Products</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#industries" className="hover:underline">Industries</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#quote"><button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Request Quote</button></a>
        </nav>
      </header>

      <section className="text-center py-10 bg-blue-50">
        <h2 className="text-3xl font-bold mb-4">Reliable Equipment. Real Results.</h2>
        <p className="text-lg">Serving Canada's industrial, drilling, and mining sectors for over 35 years.</p>
      </section>

      <section id="products" className="py-12 max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-bold text-lg mb-2">Triplex Mud Pumps</h4>
            <p>5000–7500 PSI rated, ready for Canadian field conditions.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-bold text-lg mb-2">Centrifugal Pumps</h4>
            <p>High-efficiency water and fluid transfer units.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-bold text-lg mb-2">Motors & Drives</h4>
            <p>Custom AC/DC solutions for industrial power systems.</p>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 bg-gray-50 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Services</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>In-house fabrication & repair</li>
          <li>Custom system builds</li>
          <li>Emergency field response (24/7)</li>
        </ul>
      </section>

      <section id="industries" className="py-12 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Industries Served</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Oil & Gas Drilling</li>
          <li>Mining & Mineral Processing</li>
          <li>Forestry & Manufacturing</li>
        </ul>
      </section>

      <section id="quote" className="py-12 bg-blue-50 px-4 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center">Request a Quote</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" required className="w-full p-2 border border-gray-300 rounded" />
          <input type="email" placeholder="Email Address" required className="w-full p-2 border border-gray-300 rounded" />
          <input type="text" placeholder="Company Name" className="w-full p-2 border border-gray-300 rounded" />
          <textarea placeholder="Describe your project or part requirements" rows={5} required className="w-full p-2 border border-gray-300 rounded" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Submit Request</button>
        </form>
      </section>

      <footer id="contact" className="bg-gray-900 text-white py-6 text-sm text-center">
        <p>CW Industrial | 1207 – 10th St, Nisku, AB | +1 780-986-9695 | sales@cw-industrial.net</p>
        <p className="mt-2">&copy; 2025 CW Industrial</p>
      </footer>
    </div>
  );
}
