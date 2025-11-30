import Image from "next/image"; // Next image

const Avatar = () => {
  return (
    <div className="flex justify-center items-center xl:block xl:max-w-none">
      <Image
        src={"/avatar.webp"}
        width={737}
        height={678}
        alt=""
        className="translate-z-0 w-[420px] sm:w-[500px] h-auto xl:w-full"
      />
    </div>
  );
};

export default Avatar;
