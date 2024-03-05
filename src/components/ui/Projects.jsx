export default function Projects({ name, img, alt, link }) {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
      >
        <img
          className="w-screen duration-700 ease-in-out group-hover:scale-105"
          src={img}
          alt={alt}
          width="800"
          height="600"
        />
      </a>
      <div className="mt-4">
        <div className="mb-3 flex space-x-2"></div>
        <div className="2xl:space-y-3">
          <h3 className="text-works-title font-medium uppercase text-primary-200 2xl:text-5xl">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
}
