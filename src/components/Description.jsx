import pic from "../assets/shared/mobile/image-best-gear.jpg";

export const Description = () => {
  return (
    <main className=" description-section container text-center text-md-start d-flex flex-column flex-md-row justify-content-md-between align-items-md-center gap-5 mb-4">
      <div>
        <div className="description-text ">
          <h1>
            Bringing you the <span className="best">best</span> audio gear
          </h1>
          <p className="text-muted">
            {" "}
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
      <div className="rounded guy-pic ">
        <img src={pic} alt="guy with headphones" className="img-fluid" />
      </div>
    </main>
  );
};
