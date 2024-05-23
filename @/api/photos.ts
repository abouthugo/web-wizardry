"use client";

const ENDPOINT = String(process.env.NEXT_PUBLIC_PHOTO_ENDPOINT);

type IPhoto = {
  title: string;
  subTitle: string;
  srcList: string[];
};

export async function getPhotos(): Promise<{ months: IPhoto[] }> {
  const response = await fetch(ENDPOINT, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
}
