import {
  DocumentTextIcon,
  EnvelopeIcon,
  PhoneIcon,
  Square3Stack3DIcon,
  Squares2X2Icon,
  UserIcon,
} from "@heroicons/react/24/outline";

// Components
import CopyEmailButton from "../../components/CopyEmailButton";

const Client = () => {
  return (
    <main className="flex flex-col gap-4 lg:gap-8">
      <ul className="flex flex-col gap-3 whitespace-nowrap rounded-lg border border-grey-100 p-4 font-inter text-sm font-normal text-grey-500 *:flex *:flex-row *:items-center *:gap-2 lg:rounded-2xl lg:p-6">
        <li>
          <h2 className="flex flex-row items-center gap-2 font-inter text-xl font-bold text-pry-500 lg:text-2xl">
            <UserIcon className="size-8 rounded-full bg-pry-500 p-1 text-sec-500 lg:size-10 lg:p-2" />
            Syntax Telecommunication
          </h2>
        </li>
        <li>
          <span>Representative:</span>
          <span className="font-semibold text-grey-500">Anjola Mercy</span>
        </li>
        <li>
          <EnvelopeIcon className="size-6" />
          <span className="flex flex-row items-center gap-1">
            anjolamercy@gmail.com
            <CopyEmailButton email="anjolamercy@gmail.com" />
          </span>
        </li>
        <li>
          <PhoneIcon className="size-5" />
          +2347082065455
        </li>
      </ul>
      <ul className="flex flex-wrap gap-x-6 rounded-lg border border-grey-100 p-4 font-inter text-sm font-normal text-grey-500 *:flex *:flex-col *:gap-1 lg:rounded-2xl lg:p-6">
        <li className="mb-3 basis-full lg:mb-6">
          <h2 className="flex flex-row items-center gap-2 font-inter text-xl font-bold text-pry-500 lg:text-2xl">
            <Squares2X2Icon className="size-8 rounded-full bg-pry-500 p-1 text-sec-500 lg:size-10 lg:p-2" />
            CLIENT REQUEST
          </h2>
        </li>
        <li className="mb-3 basis-full lg:mb-6">
          <span className="text-lg font-semibold text-grey-400 lg:text-xl">
            Services
          </span>
          <p className="flex flex-row items-center gap-2 *:w-fit *:rounded *:bg-success-50 *:px-2 *:py-1">
            <span className="">Product Discovery</span>
            <span className="">Product Discovery</span>
          </p>
        </li>
        <li className="mb-3 basis-[400px] lg:m-0 lg:shrink lg:grow">
          <span className="text-lg font-semibold text-grey-400 lg:text-xl">
            Specify Request
          </span>
          <p className="font-inter text-base font-normal text-grey-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus culpa quam a eligendi alias est asperiores unde sit
            animi odio deserunt provident eveniet repudiandae molestias ex,
            necessitatibus sunt cupiditate aperiam ipsum quas aspernatur
            officiis omnis amet. Quidem reprehenderit totam quas sequi
            laboriosam vitae. Perspiciatis earum rem excepturi maxime suscipit
            corrupti.
          </p>
        </li>
        <li className="mb-3 basis-[400px] lg:m-0 lg:shrink lg:grow">
          <span className="text-lg font-semibold text-grey-400 lg:text-xl">
            Tell us about your business
          </span>
          <p className="font-inter text-base font-normal text-grey-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus culpa quam a eligendi alias est asperiores unde sit
            animi odio deserunt provident eveniet repudiandae molestias ex,
            necessitatibus sunt cupiditate aperiam ipsum quas aspernatur
            officiis omnis amet. Quidem reprehenderit totam quas sequi
            laboriosam vitae. Perspiciatis earum rem excepturi maxime suscipit
            corrupti.
          </p>
        </li>
      </ul>
      <ul className="flex flex-wrap gap-4 whitespace-nowrap rounded-lg border border-grey-100 p-4 font-inter text-sm font-normal text-grey-500 *:flex *:flex-col *:gap-2 lg:rounded-2xl lg:p-6">
        <li className="basis-full">
          <h2 className="flex flex-row items-center gap-2 font-inter text-xl font-bold text-pry-500 lg:text-2xl">
            <Square3Stack3DIcon className="size-8 rounded-full bg-pry-500 p-1 text-sec-500 lg:size-10 lg:p-2" />
            DOCUMENTS
          </h2>
        </li>
        <li className="">
          <span className="font-inter text-lg font-normal text-grey-900">
            Resume
          </span>
          <span className="flex w-fit flex-row items-center gap-3 rounded-lg border border-grey-200 px-4 py-3">
            <DocumentTextIcon className="size-8" />
            <span className="font-inter text-base font-semibold text-grey-500">
              Demilade Omotayo CV.pdf
              <span className="block text-sm font-normal text-grey-400">
                Uploaded 3 weeks ago
              </span>
            </span>
          </span>
        </li>
        <li className="">
          <span className="font-inter text-lg font-normal text-grey-900">
            Resume
          </span>
          <span className="flex w-fit flex-row items-center gap-3 rounded-lg border border-grey-200 px-4 py-3">
            <DocumentTextIcon className="size-8" />
            <span className="font-inter text-base font-semibold text-grey-500">
              Demilade Omotayo CV.pdf
              <span className="block text-sm font-normal text-grey-400">
                Uploaded 3 weeks ago
              </span>
            </span>
          </span>
        </li>
      </ul>
    </main>
  );
};

export default Client;
