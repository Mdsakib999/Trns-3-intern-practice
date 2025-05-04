import Title from "../Shared/Title";
import ContainerImage from "/assets/Container.png";

function OurProcess() {
  // Array of process steps for easier mapping
  const processSteps = [
    {
      number: "01",
      text: "We make it easy to find storage solutions with air freight",
      active: true,
    },
    {
      number: "02",
      text: "We make it easy to find storage solutions with air freight",
      active: false,
    },
    {
      number: "03",
      text: "We make it easy to find storage solutions with air freight",
      active: false,
    },
  ];

  return (
    <div className="bg-[#F4F4F4] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Title title={"OUR PROCESS"} />

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold my-6 md:my-10 lg:my-12">
          Shipping and Logistic
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8">
          <div className="w-full lg:w-1/2 flex flex-col gap-8 md:gap-10 lg:gap-14">
            {processSteps.map((step, index) => (
              <div key={index} className="md:max-w-sm">
                <h3
                  className={`text-xl md:text-2xl font-bold ${
                    step.active ? "text-orange-500" : "opacity-50"
                  }`}
                >
                  {step.number}
                </h3>
                <p className="text-sm opacity-50 mt-2">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={ContainerImage}
              alt="Container"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProcess;
