import worldbg from "/assets/world-map-bg.png";
import locationIcon from "/assets/LocationIcon.png";

function Location() {
  return (
    <div className="bg-[#FAFAFA] mt-20">
      <div className="flex flex-col lg:flex-row justify-between py-10 px-4 sm:px-6 lg:px-10 gap-10">
        {/* Text section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-semibold">Location</h1>
          <div className="mt-10 flex flex-col gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex gap-4 sm:gap-8">
                <img
                  src={locationIcon}
                  alt=""
                  className="h-8 w-8 flex-shrink-0"
                />
                <div className="flex flex-col gap-2 sm:gap-4 w-full">
                  <h2 className="text-lg sm:text-xl font-semibold">
                    North America Headquarters
                  </h2>
                  <p className="text-sm text-gray-600">
                    Our central hub for freight operations across the U.S.,
                    Canada, and Mexico, ensuring seamless cross-border
                    logistics.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image section */}
        <div className="w-full lg:w-1/2">
          <img
            src={worldbg}
            alt="World Map Background"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Location;
