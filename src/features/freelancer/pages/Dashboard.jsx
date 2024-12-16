import { useEffect,useState } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import useFreelancerAuth from "../auth/useFreelancerAuth";
import axios from "axios";
axios.defaults.withCredentials = true;
// UIs
import { ToastMessage } from "../../../ui/ToastNotification";
import { BellIcon } from "@heroicons/react/24/outline";

// Configs
import { API } from "../../../config";
import { useReducedMotion } from "framer-motion";



// Contents
const tabContent = {
  applied: {
    title: "No Applied Projects Yet",
    description: "It looks like you haven't applied for any projects yet.",
  },
  saved: {
    title: "No Saved Projects",
    description:
      "You haven't saved any projects. Save projects that catch your eye so you can easily find and apply to them later.",
  },
  decision: {
    title: "No Project Decisions Yet",
    description:
      "You haven't received any decisions on your project applications.",
  },
};

const appliedContent = [
  // {
  //   projectId: "1232",
  //   projectTitle: "Frontend Developer for E-commerce Website",
  //   timeApplied: "Applied 3w ago",
  //   status: "Under review",
  // },
  // {
  //   projectId: "1232",
  //   projectTitle: "Frontend Developer for E-commerce Website",
  //   timeApplied: "Applied 3w ago",
  //   status: "Application viewed 3 hours ago",
  // },
  // {
  //   projectId: "1232",
  //   projectTitle: "Frontend Developer for E-commerce Website",
  //   timeApplied: "Applied 3w ago",
  //   status: "Application viewed 3 hours ago",
  // },
];

const DashboardBanner = () => {
  const { user,updateUserAvailability } = useFreelancerAuth(); 
  const [isAvailable, setIsAvailable] = useState(user?.isAvailable || false);

  useEffect(() => {
    setIsAvailable(user?.isAvailable || false);
  }, [user]);

  const handleToggle = async () => {
    const updatedAvailability = !isAvailable;
    
    try {
      const success = await updateUserAvailability(updatedAvailability);
      
      if (success) {
        setIsAvailable(updatedAvailability);
        toast.success(
          <ToastMessage message="Your work availability has been successfully updated." />
        );
      } else {
        toast.error(
          <ToastMessage message="Failed to update availability." />
        );
      }
    } catch (error) {
      console.error("Error updating availability:", error);
      toast.error(
        <ToastMessage message="An error occurred while updating availability." />
      );
    }

  };


  const firstName = user?.name.split(' ')[0];

  return (
    <section className="dashboard-banner-gradient flex w-full flex-row items-center justify-between gap-2 rounded-2xl px-5 py-4 font-inter text-white shadow-lg lg:p-8">
      <div>
        <h1 className="mb-1 text-lg font-semibold text-sec-50 lg:text-3xl">
          Hello, {firstName || "Freelancer"} 
        </h1>
        <p className="text-xs font-normal text-sec-50 lg:text-base">
          Welcome to your dashboard
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <label
          htmlFor="availability"
          aria-label="set your availability status"
          className="relative h-5 w-8 cursor-pointer rounded-full bg-[hsla(240,3%,49%,0.16)] transition has-[:checked]:bg-[hsla(135,59%,49%,1)] lg:h-8 lg:w-12"
        >
          <input
            type="checkbox"
            id="availability"
            checked={isAvailable}
            onChange={handleToggle}
            className="peer sr-only"
          />
          <span className="shadow-[0px_3px_1px_0px_hsla(0, 0%, 0%, 0.06),0px_3px_8px_0px_hsla(0, 0%, 0%, 0.15),0px_0px_0px_1px_hsla(0, 0%, 0%, 0.04)] absolute left-[2px] top-[2px] size-4 rounded-full bg-white transition-all peer-checked:start-[calc(100%-18px)] lg:size-7 lg:peer-checked:start-[calc(100%-30px)]"></span>
        </label>
        <span className="text-xs font-semibold lg:text-2xl">
          {isAvailable ? "Available" : "Unavailable"}
        </span>
      </div>
    </section>
  );
};

const ProfileCompletionWidget = () => {
  const { user } = useFreelancerAuth();
  const [profileCompletion, setProfileCompletion] = useState({
    basicInfo: false,
    resume: false,
    workExperience: false
  });
  const [completionPercentage, setCompletionPercentage] = useState(30);

  useEffect(() => {
    const checkProfileCompletion = async () => {
      if (!user?.id) return;

      try {
        // Check work experiences
        const workExperienceResponse = await axios.get(`${API}/api/Alte/WorkExperiences/freelancer/${user.id}`);
        const workExperiences = workExperienceResponse.data;

        // Check resumes
        const resumeResponse = await axios.get(`${API}/api/Alte/WorkExperiences/resume/${user.id}`);
        const resumes = resumeResponse.data;

        // Update profile completion state
        setProfileCompletion(prev => ({
          ...prev,
          basicInfo: user?.name && user?.email, // Basic check for basic info
          resume: resumes && resumes.length > 0,
          workExperience: workExperiences && workExperiences.length > 0
        }));
      } catch (error) {
        console.error("Error checking profile completion:", error);
      }
    };

    checkProfileCompletion();
  }, [user]);

  // Calculate completion percentage
  useEffect(() => {
    const completedItems = Object.values(profileCompletion).filter(Boolean).length;
    const percentage = completedItems === 3 ? 100 : (30 * completedItems);
    setCompletionPercentage(percentage);
  }, [profileCompletion]);
  return (
    <div className="w-full rounded-md border border-grey-50 bg-white p-8 shadow-xl lg:w-1/2">
      <h2 className="text-lg font-semibold">
        Your Profile is <span className="font-bold">{completionPercentage}% complete</span>
      </h2>

      {/* Completion Checklist */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked
            readOnly
            className="form-checkbox h-4 w-4 text-pry-500"
          />
          <span>Complete Basic Profile Info</span>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={profileCompletion.resume}
            readOnly
            className="form-checkbox h-4 w-4 text-pry-500"
          />
          <span>Add Resume and Cover Letter</span>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={profileCompletion.workExperience}
            readOnly
            className="form-checkbox h-4 w-4 text-pry-500"
          />
          <span>Add Work Experience</span>
        </div>
      </div>

      <p className="mt-4 text-grey-500">
        Complete profiles stand a higher chance of getting hired
      </p>

      {/* Update Profile Button */}
      <button className="mt-36 w-full rounded-md bg-sec-500 py-2 font-raleway text-grey-500">
        Update Profile
      </button>
    </div>
  );
};

const TabEmptyState = ({ tab }) => {
  return (
    <div className="flex w-full max-w-[26ch] flex-col items-center text-center lg:max-w-[32ch] lg:pt-16">
      <img
        src="/images/freelancer/project.png"
        alt="Projects"
        className="mb-4 size-14 lg:size-32"
      />

      <h3 className="font-inter text-base font-semibold text-grey-900 lg:text-lg">
        {tabContent[tab].title}
      </h3>
      <p className="mb-6 mt-2 text-xs text-grey-600 lg:mb-12 lg:mt-4 lg:text-sm">
        {tabContent[tab].description}
      </p>
      <Link to="projects" className="btn btn-pry btn--large">
        Explore Projects
      </Link>
    </div>
  );
};

const AppliedTab = () => {
  const { user } = useFreelancerAuth();
  const [appliedContent, setAppliedContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserApplications = async () => {
      if (!user?.id) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API}/api/Alte/ProjectApplication/getUserApplications/${user.id}`);
        
        // Transform the response to match the expected format
        const transformedApplications = response.data.map(application => ({
          projectTitle: application.projectTitle,
          timeApplied: formatTimeApplied(application.applicationDate),
          status: application.applicationStatus
        }));

        setAppliedContent(transformedApplications);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user applications:", error);
        setIsLoading(false);
      }
    };

    fetchUserApplications();
  }, [user]);

  // Helper function to format the time applied
  const formatTimeApplied = (applicationDate) => {
    if (!applicationDate) return "Applied recently";
    
    const appliedDate = new Date(applicationDate);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - appliedDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) return "Applied today";
    if (diffDays === 1) return "Applied 1 day ago";
    if (diffDays < 7) return `Applied ${diffDays} days ago`;
    if (diffDays < 30) return `Applied ${Math.floor(diffDays / 7)} weeks ago`;
    return `Applied ${Math.floor(diffDays / 30)} months ago`;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-4">
        Loading applications...
      </div>
    );
  }

  if (appliedContent.length <= 0) return <TabEmptyState tab="applied" />;

  return (
    <ul className="flex w-full flex-col gap-4 rounded-lg border border-grey-100 bg-white p-2 font-inter lg:p-4">
      {appliedContent.map((item, index) => (
        <li
          key={index}
          className="flex flex-row items-start justify-between gap-4 border-b border-grey-200 pb-2"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-grey-900 lg:text-lg">
              {item.projectTitle}
            </h3>
            <p className="text-xs font-normal text-grey-400 lg:text-base">
              {item.timeApplied}
            </p>
            <p className="flex flex-row items-center gap-1 text-[10px] lg:text-sm">
              <BellIcon className="size-4 text-success-500" />
              {item.status}
            </p>
          </div>
          <p className="rounded bg-success-500 p-1 text-[10px] font-normal text-white lg:p-2 lg:text-sm">
            Applied
          </p>
        </li>
      ))}
    </ul>
  );
};

const activeTabClasses =
  "font-medium lg:font-semibold text-grey-900 after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-grey-900";

const Dashboard = () => {
  const { user, isLoggedIn } = useFreelancerAuth();
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "applied";

  useEffect(() => {
    console.log("Dashboard user:", user);
    console.log("Is Logged In:", isLoggedIn);
  }, [user, isLoggedIn]);

  // if (!user) {
  //   return <div>Loading or No User</div>;
  // }

  // Perform side effects when user and isLoggedIn change
  // useEffect(() => {
  //   if (isLoggedIn && user) {
  //     console.log("User data available for dashboard:", user);
  //     // Fetch additional data if necessary
  //   }
  // }, [isLoggedIn, user]);

  return (
    <main className="flex flex-col gap-6 lg:gap-12">
      <DashboardBanner />
      <section className="flex flex-col-reverse justify-between gap-6 lg:flex-row lg:gap-12">
        <div className="w-full">
          <h2 className="mb-2 font-inter text-lg font-semibold text-grey-900 lg:mb-4 lg:text-xl">
            My Projects
          </h2>
          <div className="flex flex-col gap-4">
            <nav className="w-full">
              <menu className="flex w-full flex-row items-center justify-between gap-2 border-b border-grey-200 font-inter text-xs font-normal text-grey-300 lg:text-base xl:pr-16">
                <li className="relative px-2 py-1">
                  <NavLink
                    to="?tab=applied"
                    className={currentTab === "applied" && activeTabClasses}
                  >
                    Applied (0)
                  </NavLink>
                </li>
                <li className="relative px-2 py-1">
                  <NavLink
                    to="?tab=saved"
                    className={currentTab === "saved" && activeTabClasses}
                  >
                    Saved (0)
                  </NavLink>
                </li>
                <li className="relative px-2 py-1">
                  <NavLink
                    to="?tab=decision"
                    className={currentTab === "decision" && activeTabClasses}
                  >
                    Decision (0)
                  </NavLink>
                </li>
              </menu>
            </nav>
            <div className="flex flex-col items-center">
              {currentTab === "applied" && <AppliedTab />}
            </div>
          </div>
        </div>
        <ProfileCompletionWidget />
      </section>
    </main>
  );
};

export default Dashboard;
