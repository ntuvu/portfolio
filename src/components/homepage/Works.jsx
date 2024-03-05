import gensi from "/src/assets/images/gensi.webp";
import donexpro from "/src/assets/images/donexpro.webp";
import easeofmind from "/src/assets/images/easeofmind.webp";
import citrine from "/src/assets/images/citrine.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://gensi.vn/"
            img={gensi}
            alt="Gensi card"
            name="Gensi card"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://donexpro.com/"
            img={donexpro}
            alt="donexpro"
            name="Donex Sport"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://ease-of-mind.com/"
            img={easeofmind}
            alt="easeofmind"
            name="YOGA"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://citrineacademy.com/"
            img={citrine}
            alt="citrine"
            name="Ctrine Elearning"
          />
        </div>
      </div>
    </section>
  );
}
