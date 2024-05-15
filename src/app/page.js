import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export default async function Home() {
  const faqs = [
    {
      question: "How ?",
      answer: "yes"
    },
    {
      question: "When ?",
      answer: "yes"
    }
  ];

  return (
    <div>
      <section id="home">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="/Hero-image.png" className="max-w-[300px] rounded-lg" />
            <div>
              <h1 className="text-3xl font-bold">Tailored Stays for Every Fur-tastic Friend</h1>
              <p className="py-6">Welcome to our pet hotel, where personalized care awaits every wagging tail, purring cat, and binky-hopping rabbit! 🐾✨.</p>
              <a className="btn btn-primary" href="/#service-type">Let&apos;s take a look ^-^ </a>
            </div>
          </div>
        </div>
      </section>
        
      <section id="service-type">
        <div className="divider"><h2 className="text-2xl font-bold">Our Service Type</h2></div>

        <div className="flex flex-wrap gap-4 justify-center">
          {serverRuntimeConfig.serviceTypes.map(function(service, index){
            return (
                <div key={index} className="card card-compact w-72 bg-base-100 shadow-xl">
                  <figure><img src={service.image} alt={service.title} /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
            );
          })}
        </div>
        
      </section>

      <section id="pacakage">
        <div className="divider"><h2 className="text-2xl font-bold">Our Packages</h2></div>
        <div className="flex flex-wrap gap-4 justify-center">
          {serverRuntimeConfig.servicePackages.map(function(pckg, index) {
            return (
              <div key={index} className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img src={pckg.image} alt={pckg.name} /></figure>
                <div className="card-body">
                      <h2 className="card-title">{pckg.name}</h2>
                      {pckg.includeService.map(function(service, index) {
                        return (
                          <div key={index} className="badge badge-outline">{service}</div>
                        )
                      })}
                      <p className="font-bold text-2xl">IDR {pckg.price}</p>
                    </div>


              </div>
            )
          })}
        </div>
      </section>

      <section id="review" className="bg-base-200 h-fit">
        <div className="divider"><h2 className="text-2xl font-bold">Our Happy Customer</h2></div>
        <div className="flex flex-wrap gap-4">
            <div className="card">
              <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-12 rounded-full">
                      <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
                  <p>- Pet Owner</p>
              </div>
            </div>
            
            <div className="card">
              <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-12 rounded-full">
                      <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="chat-bubble">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </div>
                  <p>- Pet Owner</p>
              </div>
            </div>

            <div className="card">
              <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-12 rounded-full">
                      <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="chat-bubble">Lorem ipsum dolor sit amet, </div>
                  <p>- Pet Owner</p>
              </div>
            </div>
        </div>
      </section>
      
      <section id="faq">
        <div className="divider"><h2 className="text-2xl font-bold">FAQ</h2></div>
        {faqs.map(function(faq, index) {
          return (
            <div key={index} className="collapse bg-base-200 mb-4">
            <input type="radio" name="my-accordion-1" defaultChecked={index === 0} /> 
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content"> 
              <p>{faq.answer}</p>
            </div>
          </div>
          );
        })}

        
      </section>
    </div>
  );
}
