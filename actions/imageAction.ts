"use server";

import { imagekit } from "@/lib/utils";

export const imageAction = async (
  formData: FormData,
  settings: {
    type: "original" | "square" | "wide";
    sensitive: boolean;
  }
) => {
  const file = formData.get("file") as File;

  // const desc = formData.get("desc") as string;

  const bytes = await file.arrayBuffer();

  const buffer = Buffer.from(bytes);

  const transformation = `w-600, ${
    settings.type === "square"
      ? "ar-1-1"
      : settings.type === "wide"
      ? " ar-16-9"
      : ""
  }`;

  console.log("file is ", file);
  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/x-clone",
      //the transformation should only be applied to images type
      ...(file.type.includes("image") && {
        transformation: {
          pre: transformation,
        },
      }),
      customMetadata: {
        sensitive: settings.sensitive,
      },
    },
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );
};

// Serve as a Blob (for download)

// //backend
// import { NextResponse } from "next/server";

// export const imageAction = async (formData: FormData) => {
//   const file = formData.get("file") as File;
//   const bytes = await file.arrayBuffer();
//   const buffer = Buffer.from(bytes);

//   return new NextResponse(buffer, {
//     headers: {
//       "Content-Type": file.type,
//       "Content-Disposition": `attachment; filename="${file.name}"`,
//     },
//   });
// };

// // frontend download
// const downloadFile = async () => {
//     const res = await fetch("/api/download");
//     const blob = await res.blob();
//     const url = URL.createObjectURL(blob);

//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "downloaded-file.png"; // Change as needed
//     document.body.appendChild(a);
//     a.click();
//     URL.revokeObjectURL(url);
//   };

// viewing on the browser

// const base64String = buffer.toString("base64");
// const mimeType = file.type; // Get the MIME type from the uploaded file
// const dataUrl = `data:${mimeType};base64,${base64String}`;

// console.log(dataUrl);

// if (mimeType.startsWith("image/")) {
//     console.log(`<img src="${dataUrl}" alt="Uploaded Image" />`);
//   } else if (mimeType === "application/pdf") {
//     console.log(`<iframe src="${dataUrl}" width="100%" height="600px"></iframe>`);
//   } else {
//     console.log(
//       `<a href="${dataUrl}" download="${file.name}">Download ${file.name}</a>`
//     );
//   }
