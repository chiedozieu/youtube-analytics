"use client";

import axios from "axios";
import { ArrowUp, ImagePlayIcon, User, X } from "lucide-react";
import Image from "next/image";
import React from "react";

function AiThumbnailGenerator() {
  const [userInput, setUserInput] = React.useState<string>();
  const [referenceImage, setReferenceImage] = React.useState<any>();
  const [faceImage, setFaceImage] = React.useState<any>();
  const [referenceImagePreview, setReferenceImagePreview] =
    React.useState<string>();
  const [faceImagePreview, setFaceImagePreview] = React.useState<string>();

  const onHandleFileChange = (field: string, e: any) => {
    const selectedFile = e.target.files[0];
    if (field == "referenceImage") {
      setReferenceImage(selectedFile);
      setReferenceImagePreview(URL.createObjectURL(selectedFile));
    } else {
      setFaceImage(selectedFile);
      setFaceImagePreview(URL.createObjectURL(selectedFile));
    }
  };

  const onSubmit = async () => {
    const formData = new FormData()
    userInput  && formData.append("userInput", userInput);
    referenceImage && formData.append("refImage", referenceImage);
    faceImage && formData.append("faceImage", faceImage);
   // api call
   const result = await axios.post('/api/generate-thumbnail', formData);

   console.log(result.data);

    // if (result.data.success) {
    //   alert("Thumbnail generated successfully!");
    // } else {
    //   alert("Failed to generate thumbnail. Please try again.");
    // }
  }

  return (
    <div>
      <div className="px-10 md:px-20 lg:px-40">
        <div className="flex flex-col gap-2 items-center justify-center mt-20">
          <h2 className="text-2xl font-bold">Ai Thumbnail Generator</h2>
          <p className="text-gray-400 text-center ">
            Generate high-performing thumbnails with our AI technology. Increase
            your video's visibility and attract more clicks with our intuitive
            tool
          </p>
        </div>
        <div className="flex gap-5 items-center justify-center mt-10 border p-3 rounded-xl bg-secondary">
          <textarea
            onChange={(e) => setUserInput(e.target.value)}
            name=""
            id=""
            placeholder="Enter your youtube video title or description"
            className="w-full outline-none bg-transparent"
          />
          <div onClick={onSubmit} className="p-3 bg-gradient-to-t from-red-500 to-orange-500 text-white rounded-full cursor-pointer hover:bg-gradient-to-t hover:from-red-600 hover:to-orange-600">
            <ArrowUp className=""/>
          </div>
        </div>
        <div className="mt-3 flex gap-3">
          {!referenceImagePreview ? (
            <label htmlFor="referenceImageUpload" className="w-full">
              <div className="p-4 w-full border rounded-xl bg-secondary flex justify-center gap-2 items-center cursor-pointer hover:scale-105 transition-all duration-700">
                <ImagePlayIcon />
                <h2>Reference Image</h2>
              </div>
              <input
                type="file"
                id="referenceImageUpload"
                className="hidden"
                onChange={(e) => onHandleFileChange("referenceImage", e)}
              />
            </label>
          ) : (
            <div className="mr-2">
              <div className="relative group">
                <Image
                  src={referenceImagePreview}
                  width={100}
                  height={100}
                  className=" w-[60px] h-[60px] object-cover rounded-md"
                  alt="referenceImage"
                />
                <button
                  onClick={() => setReferenceImagePreview("")}
                  className="absolute -top-1 -right-1 p-1 rounded-full cursor-pointer hover:bg-red-600 transition-all duration-300 group-hover:opacity-100 opacity-0 bg-red-500"
                >
                  <X className="text-white " size={10} />
                </button>
              </div>
            </div>
          )}

          {!faceImagePreview ? (
            <label htmlFor="includeFaceImage" className="w-full">
              <div className="p-4 w-full border rounded-xl bg-secondary flex justify-center gap-2 items-center cursor-pointer hover:scale-105 transition-all duration-700">
                <User />
                <h2>Include Face</h2>
              </div>
              <input
                type="file"
                id="includeFaceImage"
                className="hidden"
                onChange={(e) => onHandleFileChange("faceImage", e)}
              />
            </label>
          ) : (
            <div className="ml-2">
              <div className="relative group">
                <Image
                  src={faceImagePreview}
                  width={100}
                  height={100}
                  className=" w-[60px] h-[60px] object-cover rounded-md"
                  alt="faceImage"
                />
                <button className="absolute top-0 right-0 p-1 bg-red-500 rounded-full cursor-pointer hover:bg-red-600 transition-all duration-300 group-hover:opacity-100 opacity-0">
                  <X
                    className="text-white "
                    size={10}
                    onClick={() => setFaceImagePreview(undefined)}
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AiThumbnailGenerator;
