import Image from "next/image";

export const Loader: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <Image
          src={"/images/share-icon.gif"}
          height={150}
          width={150}
          className="rounded-full"
          alt="loading"
        />
      </div>
    </div>
  );
};
