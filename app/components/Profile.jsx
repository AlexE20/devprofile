import Image from "next/image";
export default function Profile({ image, name, charge, location, bio }) {
  return (
    <>
      <div className="flex flex-row w-full">
        <div className="mt-5 ml-5">
          <Image
            src={image}
            alt={name}
            className="w-40 h-40 rounded-full"
            width={160}
            height={160}
          />
        </div>
        <div className="flex flex-col ml-10 mt-5 gap-3 flex-1">
          <h2 className="text-black font-bold text-3xl">{name}</h2>
          <p className="text-gray-600">{charge}</p>
          <p className="text-gray-400">{location}</p>
          <button className="bg-blue-400 text-white px-6 py-1 rounded-full  hover:bg-blue-600 w-fit">
            Follow
          </button>
        </div>
      </div>
      <div className="mt-10 ml-5">
        <p className="text-gray-500">{bio}</p>
      </div>
    </>
  );
}
