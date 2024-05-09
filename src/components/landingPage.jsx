'use client';

export const LandingPage = () => {
  return (
    <div class='bg-gray-100'>
      {/* <!-- Navigation Bar Section --> */}
      <nav class='bg-gray-800 text-white py-4'>
        <div class='container mx-auto flex justify-between items-center'>
          <a href='#' class='text-2xl font-bold'>
            Logo
          </a>
          <ul class='flex space-x-4'>
            <li>
              <a href='#' class='hover:text-gray-300'>
                Home
              </a>
            </li>
            <li>
              <a href='#' class='hover:text-gray-300'>
                About
              </a>
            </li>
            <li>
              <a href='#' class='hover:text-gray-300'>
                Services
              </a>
            </li>
            <li>
              <a href='#' class='hover:text-gray-300'>
                Contact
              </a>
            </li>
            <li>
              <a href='#' class='hover:text-gray-300'>
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <section class='h-screen flex items-center justify-center'>
        <div class='text-center'>
          <h1 class='text-4xl font-bold'>Welcome to Our Website</h1>
          <p class='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded-full focus:outline-none'>Get Started</button>
        </div>
      </section>

      {/* <!-- Reviews Section --> */}
      <section class='bg-gray-200 py-8'>
        <div class='container mx-auto text-center'>
          <h2 class='text-3xl font-bold'>Customer Reviews</h2>
          <p class='mt-4'>Check out what our customers are saying about us</p>
        </div>
      </section>

      {/* <!-- Services Section --> */}
      <section class='py-8'>
        <div class='container mx-auto text-center'>
          <h2 class='text-3xl font-bold'>Our Services</h2>
          <p class='mt-4'>Discover the services we offer</p>
        </div>
      </section>

      {/* <!-- Call to Action Section --> */}
      <section class='bg-blue-500 text-white py-8'>
        <div class='container mx-auto text-center'>
          <h2 class='text-3xl font-bold'>Ready to get started?</h2>
          <p class='mt-4'>Contact us now to begin</p>
          <button class='bg-white hover:bg-gray-200 text-blue-500 font-bold mt-4 py-2 px-4 rounded-full focus:outline-none'>Contact Us</button>
        </div>
      </section>

      {/* <!-- Frequently Asked Questions Section --> */}
      <section class='py-8'>
        <div class='container mx-auto text-center'>
          <h2 class='text-3xl font-bold'>Frequently Asked Questions</h2>
          <p class='mt-4'>Some common questions and answers</p>
        </div>
      </section>

      {/* <!-- Footer Section --> */}
      <footer class='bg-gray-800 text-white py-4'>
        <div class='container mx-auto text-center'>
          <p>&copy; 2021 Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};
