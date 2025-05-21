import Heading from "@/components/shared/Heading";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "We Source",
      description: (
        <p>
          Sourcing from where the commmodity is plentiful to where they are needed
        </p>
      ),
    },
    {
      step: "02",
      title: "We Move",
      description: (
        <p>
          Ensure on-time, reliable transportation with cutting-edge 
          tracking and expert handling for smooth delivery.
        </p>
      ),
    },
    {
      step: "03",
      title: "We Store",
      description: (
        <p>
         With BML FTWZ from warehousing to providing last mile delivery, we have got you covered
        </p>
      ),
    },
   
  ];
    return (
      <div className="sjcontainer mx-auto px-4 py-16">
        {/* Badge and Title */}
        <div className="text-center mb-16">
         
        <Heading className="!mb-20 text-center" title="Revolutionizing the Sourcing journey through innovation, precision, and excellence." />
            
        </div>
  
        {/* Timeline Section */}
        <div className="relative">
          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div
                data-aos="fade-up"
                key={step.step}
                className={`text-center relative ${
                  index === 1 ? "md:mt-20" : "md:-mt-4"
                }`}
              >
                {/* Step Number Badge */}
                <div className="inline-block mb-4">
                  <div
                    variant="secondary"
                    className="bg-amber-100 px-4 py-1.5 text-sm rounded-full text-amber-500"
                  >
                    STEP - {step.step}
                  </div>
                </div>
  
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
  
          {/* Curved Lines - Hidden on mobile */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none">
            <img src="/home/timeline.png" alt="Timeline Illustration" />
          </div>
        </div>
      </div>
    );
  }
  