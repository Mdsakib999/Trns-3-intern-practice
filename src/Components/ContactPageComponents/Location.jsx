import worldbg from "/assets/world-map-bg.png";
import locationIcon from "/assets/LocationIcon.png";

function Location() {
  return (
    <div className="bg-[#FAFAFA] mt-20">
      <div className="flex justify-between py-10 mx-5">
        <div>
          <h1 className="text-3xl font-semibold">Location</h1>
          <div className="mt-10 flex flex-col gap-4">
            <div>
              <div className="flex gap-8">
                <img src={locationIcon} alt="" className="h-8 w-8" />
                <div className="flex flex-col gap-4 w-1/2">
                  <h1 className="text-xl font-semibold">
                    North America Headquarters
                  </h1>
                  <p className="font-sm">
                    Our central hub for freight operations across the U.S.,
                    Canada, and Mexico, ensuring seamless cross-border
                    logistics.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-8">
                <img src={locationIcon} alt="" className="h-8 w-8" />
                <div className="flex flex-col gap-4 w-1/2">
                  <h1 className="text-xl font-semibold">
                    North America Headquarters
                  </h1>
                  <p className="font-sm">
                    Our central hub for freight operations across the U.S.,
                    Canada, and Mexico, ensuring seamless cross-border
                    logistics.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-8">
                <img src={locationIcon} alt="" className="h-8 w-8" />
                <div className="flex flex-col gap-4 w-1/2">
                  <h1 className="text-xl font-semibold">
                    North America Headquarters
                  </h1>
                  <p className="font-sm">
                    Our central hub for freight operations across the U.S.,
                    Canada, and Mexico, ensuring seamless cross-border
                    logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <img src={worldbg} alt="" className="w-1/2" />
      </div>
    </div>
  );
}
export default Location;
