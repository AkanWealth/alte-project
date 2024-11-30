import {
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  IdentificationIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
  PhoneIcon,
  Square3Stack3DIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Freelancer = () => {
  return (
    <main className="flex flex-col gap-8 lg:gap-10">
      <section className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 border-b border-grey-100 pb-8 lg:pb-10">
        <div className="grid aspect-square w-full max-w-28 grid-cols-1 grid-rows-[auto_auto] lg:max-w-44">
          <img
            src="/images/admin/user-img.png"
            alt=""
            className="col-start-1 col-end-2 row-start-1 row-end-3 w-full rounded-full"
          />
          <p className="text-grey-30 col-start-1 col-end-2 row-start-2 row-end-3 mx-auto -mb-2 w-fit rounded bg-grey-50 px-2 py-1 font-inter text-xs font-normal lg:text-base">
            Unavailable
          </p>
        </div>
        <ul className="flex shrink grow flex-col gap-2 whitespace-nowrap font-inter text-sm font-normal text-grey-500 *:flex *:flex-row *:items-center *:gap-2 lg:gap-3 lg:text-xl">
          <li>
            <h1 className="text-xl font-bold text-pry-500 lg:text-3xl">
              Anjola Mercy
            </h1>
          </li>
          <li>
            <IdentificationIcon className="size-5" />
            Product Manager
          </li>
          <li>
            <EnvelopeIcon className="size-5" />
            anjolamercy@gmail.com
          </li>
          <li>
            <PhoneIcon className="size-5" />
            +2347082065455
          </li>
        </ul>
        <ul className="flex shrink grow flex-col gap-2 self-start whitespace-nowrap font-inter text-sm font-normal text-grey-500 *:flex *:flex-row *:items-center *:gap-2 lg:gap-3 lg:text-xl">
          <li>
            <h2 className="text-base lg:text-lg">LINKS</h2>
          </li>
          <li className="underline">
            <LinkIcon className="size-5" />
            instagram
          </li>
          <li>
            <MapPinIcon className="size-5" />
            Lagos, Nigeria
          </li>
        </ul>
        <div className="shrink grow self-start whitespace-nowrap font-inter font-normal">
          <p>
            <span className="text-base lg:text-lg">RATE</span>
            <span className="mt-2 block w-fit rounded bg-success-100 px-5 py-2 text-sm font-bold text-grey-500 lg:text-base">
              $10 - $15/hr
            </span>
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-start gap-x-16 gap-y-6 lg:flex-row lg:items-stretch">
          <div>
            <h2 className="mb-6 flex flex-row items-center gap-2 font-inter text-xl font-bold text-pry-500 lg:mb-8 lg:text-2xl">
              <UserIcon className="size-8 rounded-full bg-pry-500 p-1 text-sec-500 lg:size-10 lg:p-2" />
              PERSONAL DETAILS
            </h2>
            <div className="mb-4 lg:mb-6">
              <h3 className="mb-2 font-inter text-lg font-bold text-grey-900 lg:mb-4 lg:text-xl">
                ABOUT ME
              </h3>
              <p className="font-inter text-base font-normal text-grey-400">
                <span className="line-clamp-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, qui. Quaerat facilis, in facere sunt at eveniet
                  voluptatem fugiat! Itaque nemo ratione harum sint, aspernatur
                  sequi dolorem earum consequatur iure quo quaerat quidem animi
                  minima deleniti maiores quasi repellat enim. Sunt, praesentium
                  accusantium consectetur molestias voluptas hic porro ullam
                  aliquam, excepturi magni aspernatur cupiditate asperiores
                  mollitia ipsa nesciunt amet facilis ipsum officiis beatae
                  dicta corporis! Ullam, facere perferendis at distinctio quas
                  aliquid esse cum, accusamus repellendus reiciendis, vel
                  corrupti reprehenderit eligendi illo eaque ea unde laboriosam.
                  Soluta consequuntur voluptate sed earum laudantium dignissimos
                  ad inventore veritatis, nobis cupiditate animi error.
                </span>
                <span className="fobt-semibold text-pry-500">read more</span>
              </p>
            </div>
            <div className="mb-4 lg:mb-6">
              <h3 className="mb-2 font-inter text-lg font-bold text-grey-900 lg:mb-4 lg:text-xl">
                SKILLS
              </h3>
              <ul className="flex flex-wrap items-center gap-2 text-sm *:w-fit *:rounded *:bg-success-50 *:px-2 *:py-1 lg:gap-3 lg:text-base">
                <li>Webflow Design</li>
                <li>Webflow Design</li>
                <li>Webflow Design</li>
                <li>Webflow Design</li>
                <li>Webflow Design</li>
                <li>Webflow Design</li>
                <li>Webflow Design</li>
              </ul>
            </div>
            <div className="">
              <h3 className="mb-2 font-inter text-lg font-bold text-grey-900 lg:mb-4 lg:text-xl">
                Languages
              </h3>
              <ul className="flex flex-col gap-1 font-inter text-base font-normal text-grey-900 *:flex *:flex-row *:items-center *:gap-1 lg:gap-2">
                <li>
                  <span>English:</span>
                  <span className="text-grey-400">Fluent</span>
                </li>
                <li>
                  <span>English:</span>
                  <span className="text-grey-400">Fluent</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="min-w-[40%] border-grey-300 lg:border-l lg:pl-16">
            <h2 className="mb-6 flex flex-row items-center gap-2 font-inter text-xl font-bold text-pry-500 lg:mb-8 lg:text-2xl">
              <BuildingOffice2Icon className="size-8 rounded-full bg-pry-500 p-1 text-sec-500 lg:size-10 lg:p-2" />
              WORK EXPERIENCE
            </h2>
            <ul className="flex flex-col gap-4 font-inter font-normal lg:gap-6">
              <li className="">
                <span className="flex flex-row items-center gap-1">
                  <BuildingOfficeIcon className="size-6" />
                  ReCreaX
                </span>
                <span className="block text-base font-bold text-grey-900 lg:text-lg">
                  Product Manager
                </span>
                <span className="block text-grey-300">
                  Feb 2021 - Present · 3 yrs 8 mos
                </span>
              </li>
              <li className="">
                <span className="flex flex-row items-center gap-1">
                  <BuildingOfficeIcon className="size-6" />
                  ReCreaX
                </span>
                <span className="block text-base font-bold text-grey-900 lg:text-lg">
                  Product Manager
                </span>
                <span className="block text-grey-300">
                  Feb 2021 - Present · 3 yrs 8 mos
                </span>
              </li>
              <li className="">
                <span className="flex flex-row items-center gap-1">
                  <BuildingOfficeIcon className="size-6" />
                  ReCreaX
                </span>
                <span className="block text-base font-bold text-grey-900 lg:text-lg">
                  Product Manager
                </span>
                <span className="block text-grey-300">
                  Feb 2021 - Present · 3 yrs 8 mos
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:m5-10 mt-6">
          <h2 className="mb-6 flex flex-row items-center gap-2 font-inter text-xl font-bold text-pry-500 lg:mb-8 lg:text-2xl">
            <Square3Stack3DIcon className="size-8 rounded-full bg-pry-500 p-1 text-sec-500 lg:size-10 lg:p-2" />
            DOCUMENTS
          </h2>
          <ul className="flex flex-wrap items-center justify-between gap-x-4 gap-y-6 *:flex *:shrink *:grow *:flex-col *:gap-3">
            <li>
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
            <li>
              <span className="font-inter text-lg font-normal text-grey-900">
                Certificate
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
        </div>
      </section>
    </main>
  );
};

export default Freelancer;
