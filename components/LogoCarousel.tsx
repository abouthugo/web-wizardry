import { useMediaQuery } from "@react-hookz/web";
import Image, { type ImageLoader } from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const imageLoader: ImageLoader = ({ src }) => {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons${src}`;
};

const logos = [
  {
    alt: "html",
    src: "/html5/html5-original.svg",
  },
  {
    alt: "css",
    src: "/css3/css3-original.svg",
  },
  {
    alt: "js",
    src: "/javascript/javascript-original.svg",
  },
  {
    alt: "typescript",
    src: "/typescript/typescript-original.svg",
  },
  {
    alt: "python",
    src: "/python/python-original.svg",
  },
  {
    alt: "nodejs",
    src: "/nodejs/nodejs-original.svg",
  },
  {
    alt: "react",
    src: "/react/react-original.svg",
  },
  {
    alt: "solid",
    src: "/solidjs/solidjs-original.svg",
  },
  {
    alt: "angular",
    src: "/angularjs/angularjs-original.svg",
  },
  {
    alt: "nextjs",
    src: "/nextjs/nextjs-original.svg",
  },
  {
    alt: "tailwind",
    src: "/tailwindcss/tailwindcss-original.svg",
  },
  {
    alt: "sass",
    src: "/sass/sass-original.svg",
  },
  {
    alt: "jest",
    src: "/jest/jest-plain.svg",
  },
  {
    alt: "socket.io",
    src: "/socketio/socketio-original.svg",
    invert: true,
  },
  {
    alt: "graphql",
    src: "/graphql/graphql-plain.svg",
  },
  {
    alt: "mysql",
    src: "/mysql/mysql-original.svg",
  },
  {
    alt: "mongodb",
    src: "/mongodb/mongodb-original.svg",
  },
  {
    alt: "postgresql",
    src: "/postgresql/postgresql-original.svg",
  },
  {
    alt: "kafka",
    src: "/apachekafka/apachekafka-original.svg",
    invert: true,
  },
  {
    alt: "docker",
    src: "/docker/docker-original.svg",
  },
  {
    alt: "git",
    src: "/git/git-original.svg",
  },
  {
    alt: "kubernetes",
    src: "/kubernetes/kubernetes-plain.svg",
  },
  {
    alt: "gcp",
    src: "/googlecloud/googlecloud-original.svg",
  },
  {
    alt: "azure",
    src: "/azure/azure-original.svg",
  },
];

type Props = {
  onMarqueeMounted: () => void;
};
const LogoCarousel: React.FC<Props> = ({ onMarqueeMounted }) => {
  const isMobile = useMediaQuery("only screen and (max-width: 768px)");
  const [_, setImageList] = useState<boolean[]>(
    new Array(logos.length).fill(false),
  );
  const [flags, setFlags] = useState({
    marqueeMounted: false,
    imagesReady: false,
  });

  useEffect(() => {
    if (flags.marqueeMounted && flags.imagesReady) onMarqueeMounted();
  }, [flags, onMarqueeMounted]);

  const handleMarqueeMounted = () =>
    setFlags({ ...flags, marqueeMounted: true });

  /**
   * NOTE: we wait for all the images to load with a callback function to avoid running into
   * stale state
   */
  const handleImageLoaded = (i: number) => {
    setImageList((prev) => {
      const newImageList = prev.map(
        (isLoaded, index) => index === i || isLoaded,
      );
      const isAllReady = newImageList.every(Boolean);

      if (isAllReady) {
        setFlags((currentFlags) => ({ ...currentFlags, imagesReady: true }));
      }

      return newImageList;
    });
  };

  return (
    <div className="w-full my-12">
      <Marquee
        gradient={true}
        gradientColor="black"
        gradientWidth={isMobile ? 60 : 200}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction={"left"}
        onMount={handleMarqueeMounted}
      >
        {logos.map((logo, index) => (
          <div
            className="w-36 min-w-fit h-fit flex flex-col items center justify center m-3 sm:m-5 rounded-lg group relative cursor-pointer hover:scale-110 transition-all duration-300 ease-spring"
            key={logo.src}
          >
            <div className="h-full w-full rounded-lg shadow-none shadow-gray-50 group-hover:border-blue-500 transition-all duration-300 ease-spring">
              <div className="flex flex-col justify-center items-center gap-3 p-6">
                <div className="h-8 md:h-10">
                  <Image
                    loader={imageLoader}
                    src={logo.src}
                    alt={logo.alt}
                    width={40}
                    height={40}
                    className={`h-full w-auto ${logo.invert ? "invert" : ""}`}
                    onLoad={() => handleImageLoaded(index)}
                    priority
                  />
                </div>
                <p className="text-white text-md">{logo.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoCarousel;
