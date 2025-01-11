"use client"

import Image from "next/image";

import React,{useEffect,useRef} from 'react';
import Typed from 'typed.js';


export default function Home() {

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Web-development', 'JavaScript', 'Python', 'HTML'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  


  return (
    <main>

      {/* Another section */}
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required
                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>


      {/* Another section */}


      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="bg-gray-100 dark:bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">Pricing Plans</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Choose a plan that fits your needs.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Basic</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">$10/month</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300"><del>5GB Storage</del></span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300"><del>Email Support</del></span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300"><del>Single User</del></span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">Community Access</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">Weekly Updates</span>
                  </li>

                </ul>
                <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Choose Plan</button>
              </div>

              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl border-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Standard</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">$20/month</p>
                <div className="inline-block bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-2">Bestseller</div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">50GB Storage</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">Priority Email Support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">Up to 5 Users</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">Community Access</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">Daily Updates</span>
                  </li>

                </ul>
                <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Choose Plan</button>
              </div>

              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Premium</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">$30/month</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">200GB Storage</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">24/7 Support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">Unlimited Users</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">Community Access</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500">✔</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">Real-time Updates</span>
                  </li>

                </ul>
                <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Another section */}

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Hear from our satisfied clients.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <p className="text-lg text-gray-700 dark:text-gray-300">"TechBlog has transformed the way I stay updated with the latest tech trends. The insights are invaluable!"</p>
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">- Alex Johnson</h3>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <p className="text-lg text-gray-700 dark:text-gray-300">"A must-visit site for any tech enthusiast. The articles are well-researched and engaging."</p>
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">- Maria Garcia</h3>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <p className="text-lg text-gray-700 dark:text-gray-300">"I love the community aspect of TechBlog. It's great to connect with like-minded individuals."</p>
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">- Liam Smith</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Another section */}

      {/* <section className="py-12 bg-green-100 dark:bg-green-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-extrabold text-green-900 dark:text-green-100">Meet Our Team</h2>
      <p className="mt-4 text-lg text-green-600 dark:text-green-300">Get to know the people behind our success.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white dark:bg-green-800 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <img className="w-24 h-24 rounded-full mx-auto" src="team-member1.jpg" alt="Team Member 1"/>
        <h3 className="mt-4 text-xl font-semibold text-green-800 dark:text-green-100 text-center">John Doe</h3>
        <p className="mt-2 text-green-600 dark:text-green-300 text-center">CEO</p>
      </div>
      <div className="bg-white dark:bg-green-800 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <img className="w-24 h-24 rounded-full mx-auto" src="team-member2.jpg" alt="Team Member 2"/>
        <h3 className="mt-4 text-xl font-semibold text-green-800 dark:text-green-100 text-center">Jane Smith</h3>
        <p className="mt-2 text-green-600 dark:text-green-300 text-center">CTO</p>
      </div>
      <div className="bg-white dark:bg-green-800 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <img className="w-24 h-24 rounded-full mx-auto" src="team-member3.jpg" alt="Team Member 3"/>
        <h3 className="mt-4 text-xl font-semibold text-green-800 dark:text-green-100 text-center">Emily Johnson</h3>
        <p className="mt-2 text-green-600 dark:text-green-300 text-center">CFO</p>
      </div>
      <div className="bg-white dark:bg-green-800 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <img className="w-24 h-24 rounded-full mx-auto" src="team-member4.jpg" alt="Team Member 4"/>
        <h3 className="mt-4 text-xl font-semibold text-green-800 dark:text-green-100 text-center">Michael Brown</h3>
        <p className="mt-2 text-green-600 dark:text-green-300 text-center">COO</p>
      </div>
    </div>
  </div>
</section> */}

      {/* Another Section */}

      {/* <section className="py-12 bg-purple-100 dark:bg-purple-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-extrabold text-purple-900 dark:text-purple-100">Contact Us</h2>
      <p className="mt-4 text-lg text-purple-600 dark:text-purple-300">We'd love to hear from you. Get in touch with us!</p>
    </div>
    <div className="max-w-lg mx-auto">
      <form className="bg-white dark:bg-purple-800 shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-purple-800 dark:text-purple-100 mb-2" for="name">Name</label>
          <input className="w-full px-3 py-2 border rounded-lg dark:bg-purple-700 dark:text-white" type="text" id="name" placeholder="Your Name"/>
        </div>
        <div className="mb-4">
          <label className="block text-purple-800 dark:text-purple-100 mb-2" for="email">Email</label>
          <input className="w-full px-3 py-2 border rounded-lg dark:bg-purple-700 dark:text-white" type="email" id="email" placeholder="Your Email"/>
        </div>
        <div className="mb-4">
          <label className="block text-purple-800 dark:text-purple-100 mb-2" for="message">Message</label>
          <textarea className="w-full px-3 py-2 border rounded-lg dark:bg-purple-700 dark:text-white" id="message" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Send Message</button>
      </form>
      <div className="mt-8 text-center text-purple-800 dark:text-purple-100">
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@yourwebsite.com</p>
      </div>
    </div>
  </div>
</section> */}


      <section className="py-16 bg-indigo-100 dark:bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-indigo-900 dark:text-indigo-100">Top Blogs</h2>
            <p className="mt-6 text-xl text-indigo-600 dark:text-indigo-300">Explore our most popular blog posts.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white dark:bg-indigo-800 shadow-2xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <img className="w-full h-48 object-cover" src="/1.jpg" alt="Blog Image One" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-100">Blog Title One</h3>
                <p className="mt-6 text-indigo-600 dark:text-indigo-300">A brief summary of the blog post content that provides an engaging overview.</p>
                <a href="#" className="mt-8 inline-block">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Read More</button>
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-indigo-800 shadow-2xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <img className="w-full h-48 object-cover" src="/2.jpg" alt="Blog Image Two" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-100">Blog Title Two</h3>
                <p className="mt-6 text-indigo-600 dark:text-indigo-300">A brief summary of the blog post content that provides an engaging overview.</p>
                <a href="#" className="mt-8 inline-block">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Read More</button>
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-indigo-800 shadow-2xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <img className="w-full h-48 object-cover" src="/3.jpg" alt="Blog Image Three" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-100">Blog Title Three</h3>
                <p className="mt-6 text-indigo-600 dark:text-indigo-300">A brief summary of the blog post content that provides an engaging overview.</p>
                <a href="#" className="mt-8 inline-block">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Read More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
