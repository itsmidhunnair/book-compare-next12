import { useRouter } from "next/router";
import { MdArrowBackIos } from "react-icons/md";

import HeaderLogo from "@components/common/headerLogo";
import BookCompare from "@components/comparison/bookCompare";

const Page = () => {
  const router = useRouter();
  return (
    <div className="mx-4 overflow-hidden">
      <div className="py-2">
        <HeaderLogo />
      </div>
      <div className="border-t-2">
        <div className="relative top-16 left-5">
          <button
            onClick={() => {
              router.back();
            }}
            className="absolute -left-3 -top-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-700"
          >
            <MdArrowBackIos className="pl-1 text-white" />
          </button>
        </div>
        <BookCompare />
      </div>
    </div>
  );
};

export default Page;
