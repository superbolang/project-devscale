'use client';

export const LandingPage = () => {
  return (
    <div className='bg-gray-100'>
      {/* <!-- Navigation Bar Section --> */}
      <nav className='bg-gray-800 text-white py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <a href='#' className='text-2xl font-bold'>
            Logo
          </a>
          <ul className='flex space-x-4'>
            <li>
              <a href='#' className='hover:text-gray-300'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-300'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-300'>
                Services
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-300'>
                Contact
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-300'>
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <section className='h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>Welcome to Our Website</h1>
          <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded-full focus:outline-none'>Get Started</button>
        </div>
      </section>

      {/* <!-- Reviews Section --> */}
      <section className='bg-gray-200 py-8'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold'>Customer Reviews</h2>
          <p className='mt-4'>Check out what our customers are saying about us</p>
        </div>
      </section>

      {/* <!-- Services Section --> */}
      <section className='py-8'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold'>Our Services</h2>
          <p className='mt-4'>Discover the services we offer</p>
        </div>
      </section>

      {/* <!-- Call to Action Section --> */}
      <section className='bg-blue-500 text-white py-8'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold'>Ready to get started?</h2>
          <p className='mt-4'>Contact us now to begin</p>
          <button className='bg-white hover:bg-gray-200 text-blue-500 font-bold mt-4 py-2 px-4 rounded-full focus:outline-none'>Contact Us</button>
        </div>
      </section>

      {/* <!-- Frequently Asked Questions Section --> */}
      <section className='py-8'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold'>Frequently Asked Questions</h2>
          <p className='mt-4'>Some common questions and answers</p>
        </div>
      </section>

      {/* <!-- Footer Section --> */}
      <footer className='bg-gray-800 text-white py-4'>
        <div className='container mx-auto text-center'>
          <p>&copy; 2021 Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};
