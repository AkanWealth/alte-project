import Details from "../components/Details";

const Faq = () => {
  return (
    <div className="">
      <ul className="relative flex flex-col gap-5 lg:gap-8">
        <li>
          <Details
            title="What industries does Alte specialize in?"
            text="Alte serves a wide range of industries including technology, healthcare, finance, e-commerce, and more. Our versatile expertise allows us to tailor solutions to fit your industry-specific needs."
          />
        </li>
        <li>
          <Details
            title="Can Alte assist with existing projects or only new development?"
            text="We can support both existing projects that needs optimization or enhancement, as well as new project from ideation to execution."
          />
        </li>
        <li>
          <Details
            title="How does Alte ensure data security and confidentiality?"
            text="At Alte, we prioritize data security and confidentiality. We implement industry best practices, secure technologies, and strict internal policies to safeguard your sensitive information.
"
          />
        </li>
        <li>
          <Details
            title="What are the typical timelines for project completion with Alte?"
            text="Project timelines vary based on scope and complexity. We work closely with clients to establish realistic timelines and milestones, ensuring timely delivery while maintaining quality standards."
          />
        </li>
        <li>
          <Details
            title="How does Alte handle changes or revisions during the product lifecycle?"
            text="We have a flexible approach to accommodate changes and revisions. Our team maintains open communication and adapts the project plan as needed to meet evolving requirements"
          />
        </li>
        <li>
          <Details
            title="What sets Alte apart from other digital consulting agencies?"
            text="Alte stands out for our commitment to innovation, client-centric approach, and proven track record of delivering successful digital solutions that drive business growth."
          />
        </li>
        <li>
          <Details
            title="How can I stay updated with the latest news and insights from Alte?"
            text="Subscribe to our newsletter or follow us on social media to receive updates on industry trends, company news, and insightful articles from our blog."
          />
        </li>
        <li>
          <Details
            title="Does Alte offer customized training or workshops for our team after project implementation?"
            text="Yes, we provide tailored training sessions and workshops to ensure your team is equipped to effectively use and manage the new digital solutions we implement."
          />
        </li>
        <li>
          <Details
            title="What geographical regions does Alte serve?"
            text="Alte provides services globally, with a client base spanning across various countries and regions."
          />
        </li>
      </ul>
    </div>
  );
};

export default Faq;
