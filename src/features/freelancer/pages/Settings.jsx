import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// UIs
import { ToastMessage } from "../../../ui/ToastNotification";

const PasswordUpdateForm = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleForm = async (data) => {
    const { currentPassword, newPassword } = data;

    toast.success(
      <ToastMessage
        title="Password Updated"
        message="Your password has been successfully been updated."
      />,
    );

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="flex flex-col gap-4 lg:gap-6"
    >
      <div className="">
        <label
          htmlFor="currentPassword"
          className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
        >
          Current Password
        </label>
        <div className="relative">
          <input
            type={showCurrentPassword ? "text" : "password"}
            id="currentPassword"
            className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
            placeholder="*************"
            aria-invalid={errors.currentPassword ? true : false}
            {...register("currentPassword", {
              required: true,
            })}
          />
          <button
            type="button"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            className="absolute right-0 top-0 mr-2 h-full"
          >
            {showCurrentPassword ? (
              <EyeIcon className="size-6" />
            ) : (
              <EyeSlashIcon className="size-6" />
            )}
          </button>
        </div>
      </div>
      <div className="">
        <label
          htmlFor="newPassword"
          className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
        >
          New Password
        </label>
        <div className="relative">
          <input
            type={showNewPassword ? "text" : "password"}
            id="newPassword"
            className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
            placeholder="*************"
            aria-invalid={errors.newPassword ? true : false}
            {...register("newPassword", {
              required: true,
            })}
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-0 top-0 mr-2 h-full"
          >
            {showNewPassword ? (
              <EyeIcon className="size-6" />
            ) : (
              <EyeSlashIcon className="size-6" />
            )}
          </button>
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-pry w-full lg:ml-auto lg:w-fit"
      >
        Update Password
      </button>
    </form>
  );
};

const Settings = () => {
  return (
    <main className="flex flex-wrap justify-between gap-10 bg-[hsla(165,100%,99%,1)]">
      <section className="w-full max-w-xl">
        <h2 className="font-inter text-base font-semibold text-grey-900 lg:text-xl">
          Notifications
        </h2>
        <p className="pt-1 font-inter text-xs font-normal text-grey-300 lg:text-base">
          Select your preference by notification type
        </p>
        <div className="mt-4 flex flex-col gap-3 lg:mt-8 lg:gap-6">
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="max-w-[80%]">
              <h2 className="font-inter text-sm font-medium text-grey-900 lg:text-lg">
                New Project Alerts
              </h2>
              <p className="pt-1 font-inter text-xs font-normal text-grey-300 lg:text-base">
                Receive emails when new projects match your skills.
              </p>
            </div>
            <label
              htmlFor="projectAlerts"
              className="relative h-5 w-8 cursor-pointer rounded-full bg-[hsla(240,3%,49%,0.16)] transition has-[:checked]:bg-[hsla(135,59%,49%,1)] lg:h-8 lg:w-12"
            >
              <input
                type="checkbox"
                id="projectAlerts"
                className="peer sr-only"
              />
              <span className="shadow-[0px_3px_1px_0px_hsla(0, 0%, 0%, 0.06),0px_3px_8px_0px_hsla(0, 0%, 0%, 0.15),0px_0px_0px_1px_hsla(0, 0%, 0%, 0.04)] absolute left-[2px] top-[2px] size-4 rounded-full bg-white transition-all peer-checked:start-[calc(100%-18px)] lg:size-7 lg:peer-checked:start-[calc(100%-30px)]"></span>
            </label>
          </div>
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="max-w-[80%]">
              <h2 className="font-inter text-sm font-medium text-grey-900 lg:text-lg">
                Project Updates
              </h2>
              <p className="pt-1 font-inter text-xs font-normal text-grey-300 lg:text-base">
                Stay informed with email updates on your applied projects.
              </p>
            </div>
            <label
              htmlFor="projectUpdates"
              className="relative h-5 w-8 cursor-pointer rounded-full bg-[hsla(240,3%,49%,0.16)] transition has-[:checked]:bg-[hsla(135,59%,49%,1)] lg:h-8 lg:w-12"
            >
              <input
                type="checkbox"
                id="projectUpdates"
                className="peer sr-only"
              />
              <span className="shadow-[0px_3px_1px_0px_hsla(0, 0%, 0%, 0.06),0px_3px_8px_0px_hsla(0, 0%, 0%, 0.15),0px_0px_0px_1px_hsla(0, 0%, 0%, 0.04)] absolute left-[2px] top-[2px] size-4 rounded-full bg-white transition-all peer-checked:start-[calc(100%-18px)] lg:size-7 lg:peer-checked:start-[calc(100%-30px)]"></span>
            </label>
          </div>
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="max-w-[80%]">
              <h2 className="font-inter text-sm font-medium text-grey-900 lg:text-lg">
                All Notifications
              </h2>
              <p className="pt-1 font-inter text-xs font-normal text-grey-300 lg:text-base">
                Receive instant push notifications for all alerts and updates.
              </p>
            </div>
            <label
              htmlFor="allNotifications"
              className="relative h-5 w-8 cursor-pointer rounded-full bg-[hsla(240,3%,49%,0.16)] transition has-[:checked]:bg-[hsla(135,59%,49%,1)] lg:h-8 lg:w-12"
            >
              <input
                type="checkbox"
                id="allNotifications"
                className="peer sr-only"
              />
              <span className="shadow-[0px_3px_1px_0px_hsla(0, 0%, 0%, 0.06),0px_3px_8px_0px_hsla(0, 0%, 0%, 0.15),0px_0px_0px_1px_hsla(0, 0%, 0%, 0.04)] absolute left-[2px] top-[2px] size-4 rounded-full bg-white transition-all peer-checked:start-[calc(100%-18px)] lg:size-7 lg:peer-checked:start-[calc(100%-30px)]"></span>
            </label>
          </div>
        </div>
      </section>
      <section className="w-full max-w-lg rounded-2xl bg-white p-6">
        <h2 className="font-inter text-base font-semibold text-grey-900 lg:text-xl">
          Update Password
        </h2>
        <p className="pb-6 pt-1 font-inter text-xs font-normal text-grey-300 lg:pb-10 lg:text-base">
          Enter your current password to make update
        </p>
        <PasswordUpdateForm />
      </section>
    </main>
  );
};

export default Settings;
