import Image from "next/image";
import ImageSet from "@components/ImageSet";
import styles from "./page.module.css";
import Counter from "@components/Counter";
import type { Metadata } from "next";
import ClientMessage from "@components/ClientMessage";

export const metadata: Metadata = {
  title: "H&E",
  description: "A love story",
  openGraph: {
    title: "H&E",
    description: "A love story",
    images: [
      {
        url: "https://storage.googleapis.com/wizard-cdn-core/web-prev-liz.jpg",
        width: 1200,
        height: 630,
        alt: "preview-page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const HeartsComponent = () => {
  const heartWidth = 90;
  const heartHeight = 100;
  return (
    <div className="flex justify-center items-center mx-auto mt-12 mb-20">
      <div className="relative outline-none group">
        <Image
          className="relative z-10"
          src="/images/blended-heart-alt.png"
          width={heartWidth}
          height={heartHeight}
          alt="blue heart"
        />
        <div className="absolute left-0 top-0 h-full w-full duration-1500 ">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <Image
                className={styles["phantom-card"]}
                key={`${i}-phantom-image`}
                src="/images/blended-heart.png"
                width={heartWidth}
                height={heartHeight}
                alt="blue heart"
              />
            ))}
        </div>
      </div>
    </div>
  );
};
const months = [
  {
    title: "July",
    subTitle: "2023",
    srcList: [
      "https://storage.googleapis.com/wizard-cdn-core/july-23/IMG_3721.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/july-23/IMG_3678.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/july-23/IMG_4101.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/july-23/IMG_3838.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/july-23/IMG_2980.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/july-23/IMG_0310.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/july-23/IMG_0089.jpeg",
    ],
  },
  {
    title: "August",
    subTitle: "2023",
    srcList: [
      "https://storage.googleapis.com/wizard-cdn-core/aug-23/IMG_1931.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/aug-23/IMG_4064.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/aug-23/IMG_0982.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/aug-23/IMG_2505.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/aug-23/IMG_4051.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/aug-23/IMG_4083.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/aug-23/IMG_4097.jpeg",
    ],
  },
  {
    title: "September",
    subTitle: "2023",
    srcList: [
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_4284.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_4326.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_3302.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_1109.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_6618.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_F4F5E.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_3998.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_3794.jpeg",
    ],
  },
  {
    title: "October",
    subTitle: "2023",
    srcList: [
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_5731.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_4774.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_rendered.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_4851.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_5044_jpg.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_247B.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_4987.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_5288.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_5096.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_5106.jpeg",
    ],
  },
];

export default function LizPage() {
  return (
    <main className="pt-8">
      <Counter />
      <div className="flex flex-col gap-2 px-1 mx-auto mt-12 mb-4">
        {months.map(({ title, subTitle, srcList }) => {
          return <ImageSet key={`${title}-${subTitle}`} title={title} subtitle={subTitle} srcList={srcList} />;
        })}
      </div>
      <ClientMessage />
      <HeartsComponent />
    </main>
  );
}
