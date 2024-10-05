import { useParams } from "react-router-dom";
import { caseStudiesContent } from "../../../../contents/caseStudies";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

const CaseStudy = () => {
  const { id } = useParams();
  const data = caseStudiesContent.find((caseStudy) => caseStudy.id === id);

  return (
    <main>
      <section className="flex flex-col bg-pry-500 px-5 py-6 md:py-10 lg:px-10 lg:py-14">
        <div className="inner flex flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-20">
          <div className="text-white">
            <p className="mb-6 mt-3 font-raleway text-sm font-normal lg:mb-12 lg:mt-6 lg:max-w-[40ch] lg:text-xl">
              {data.type}
            </p>
            <h2 className="font-raleway text-2xl font-semibold text-sec-500 lg:max-w-[22ch] lg:text-4xl">
              {data.client.name}
            </h2>
          </div>
          <img
            src={data.client.img}
            alt="C-suite Executive"
            className="w-full max-w-[641px] rounded-lg"
          />
        </div>
      </section>
      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="inner mx-auto px-4">
          <h3 className="text-center font-raleway text-3xl font-bold text-pry-700 md:text-4xl lg:text-5xl">
            The Challenge
          </h3>
          <div className="mt-8 flex justify-center">
            <div className="max-w-4xl rounded-lg border-[#FFBA00] bg-sec-100 px-6 py-8">
              <p className="text-center font-raleway text-lg font-normal text-pry-700 md:text-xl">
                {data.challenge}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F9F6F0] p-8">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-green-800 mb-6 text-3xl font-bold">
            The Solution
          </h2>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <img
                  src={data.solution.img}
                  alt="Solution"
                  className="h-auto w-full max-w-[641px] rounded-lg object-cover shadow-md"
                />
              </div>
            </div>

            <div className="flex flex-col justify-start">
              {data.solution.list.map((step, index) => (
                <div key={index} className="mb-8">
                  <div className="mb-3 flex items-start">
                    <span className="mr-3 p-2">
                      <Cog6ToothIcon className="size-6 rounded-lg border-black bg-black object-cover text-sec-500 shadow-md" />
                    </span>
                    <h3 className="text-green-900 font-raleway text-xl font-semibold">
                      {step.title}
                    </h3>
                  </div>
                  <ul className="text-gray-700 list-inside list-disc font-raleway">
                    {step.items.map((item, i) => (
                      <li key={i} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-10">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col justify-start">
                <h2 className="text-green-800 text-left font-raleway text-3xl font-bold">
                  The Result
                </h2>

                <div className="mt-4 space-y-4">
                  <div className="max-w-4xl rounded-lg border-[#FFBA00] bg-sec-100 px-6 py-8">
                    <span className="text-2xl text-black">✨</span>
                    <p className="text-center font-raleway text-lg font-normal text-pry-700 md:text-xl">
                      {data.result.paragraph}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start">
                <img
                  src={data.result.images[2]}
                  alt="C-suite Executive"
                  className="h-auto w-full max-w-[641px] shadow-md"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex justify-center lg:justify-start">
                <img
                  src={data.result.images[0]}
                  alt="C-suite Executive"
                  className="h-auto w-full max-w-[641px] shadow-md"
                />
              </div>

              {/* Third image */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src={data.result.images[1]}
                  alt="C-suite Executive"
                  className="h-auto w-full max-w-[641px] shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudy;
