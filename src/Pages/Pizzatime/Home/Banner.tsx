import { image } from "../../../Utils/imageController";

const Banner = () => {
  return (
    <section className="h-[50vh]">
      <img
        src={image.Banner}
        alt="banner"
        className="w-full h-[45vh] object-cover"
      />
    </section>
  );
};

export default Banner;
