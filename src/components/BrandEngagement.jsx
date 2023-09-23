// import "./brandengagement.css";
const BrandEngagement = () => {
  return (
    <>
      {/* <div className="w-[1000px]">
        <div className="grid max-w-700px">
          <div className="bg-red-100"></div>
          <div className="bg-blue-100"></div>
        </div>
      </div> */}
      <div className="brand-engagement | flex flex-col items-center lg:items-start lg:flex-row justify-items-center">
        {/*  TODO: Change heading*/}
        <div className="brand-engagement__text | flex-1">
          <h3 className="text-2xl uppercase">
            Bringing you the <span style={{ color: "orange" }}>best</span> audio
            gear
          </h3>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <div className="flex-1 max-w-sm ">
          <picture>
            <source
              media="(max-width: 480px)"
              srcSet="/assets/shared/mobile/image-best-gear.jpg"
            />
            <source
              media="(max-width: 768px)"
              srcSet="/assets/shared/tablet/image-best-gear.jpg"
            />
            <img
              className="brand-engagement__image | mx-auto"
              src="/assets/shared/desktop/image-best-gear.jpg"
              alt="Responsive content"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default BrandEngagement;
