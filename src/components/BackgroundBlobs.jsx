import Image from "next/image";

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#121261] via-[#132244] to-[#070226]">
      <Image
        src="/blobs/blob.svg"
        alt="blob"
        width={400}
        height={400}
        className="absolute top-[-10px] left-[-10px] opacity-30 blob-animate"
      />
      <Image
        src="/blobs/blob (3).svg"
        alt="blob"
        width={500}
        height={500}
        className="absolute bottom-[-20px] right-[-10px] opacity-20 blob-animate"
      />
      <Image
        src="/blobs/blob (5).svg"
        alt="blob"
        width={300}
        height={300}
        className="absolute top-[30%] left-[60%] opacity-10 blob-animate"
      />
      <Image
        src="/blobs/blob (2).svg"
        alt="blob"
        width={350}
        height={350}
        className="absolute top-[-60px] right-[20px] opacity-15 blob-animate"
      />
      <Image
        src="/blobs/blob (4).svg"
        alt="blob"
        width={450}
        height={450}
        className="absolute bottom-[-100px] left-[-100px] opacity-20 blob-animate"
      />
      <Image
        src="/blobs/blob (6).svg"
        alt="blob"
        width={300}
        height={300}
        className="absolute top-[40%] left-[10%] opacity-10 blob-animate"
      />
    </div>
  );
}
