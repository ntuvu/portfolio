import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = ["Frontend Development", "Backend Development"];

  const toolBoxItems = [
    "JavaScript",
    "HTML",
    "CSS",
    "VueJS",
    "ReactJS",
    "NextJS",
    "NuxtJS",
    "NodeJS",
    "NestJS",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I concentrate on all aspects of web development. Through every service I offer, my aim is to provide a significant and uplifting experience in the digital realm for all."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="This is my preferred technology stack for bringing projects to life. I'm constantly keen on deepening my knowledge of my existing stack and exploring new technologies to broaden my skill set."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
