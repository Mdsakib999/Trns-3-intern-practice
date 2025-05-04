import Title from "../Shared/Title";
import ContainerIamge from "/assets/Container.png";

function OurProcess() {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="mx-10 py-5">
        <Title title={"OUR PROCESS"} />
        <h1 className="text-4xl font-semibold my-12">Shipping and Logistic</h1>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-14 w-1/2">
            <div className="lg:w-1/3">
              <h3 className="text-2xl text-orange-500 font-bold">01</h3>
              <p className="text-sm opacity-50">
                We make it easy to find storage solutions with air freight
              </p>
            </div>
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-bold opacity-50">02</h3>
              <p className="text-sm opacity-50">
                We make it easy to find storage solutions with air freight
              </p>
            </div>
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-bold opacity-50">03</h3>
              <p className="text-sm opacity-50">
                We make it easy to find storage solutions with air freight
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <img src={ContainerIamge} alt="ContainerImage" className="w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurProcess;
