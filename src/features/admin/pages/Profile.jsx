import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

// UIs
import { ToastMessage } from "../../../ui/ToastNotification";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/images/admin/user-img.png",
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage("/images/admin/user-img.png");
  };

  const handleForm = async (data) => {
    console.log("Form Data:", data);

    toast.success(
      <ToastMessage
        title="Changes Saved"
        message="Your personal details have been successfully updated."
      />,
    );

    reset();
  };

  return (
    <main className="">
      <section className="w-full rounded-2xl bg-white p-6">
        <form
          onSubmit={handleSubmit(handleForm)}
          className="flex w-full max-w-screen-lg flex-col gap-4 lg:gap-6"
        >
          <div className="flex flex-row items-center gap-6 py-6">
            <img src={selectedImage} alt="" className="size-32 rounded-full" />
            <label
              htmlFor="imageUpload"
              className="btn btn-pry w-fit cursor-pointer"
            >
              Upload
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="hidden"
                {...register("profileImage", {
                  onChange: (e) => handleImageUpload(e),
                })}
              />
            </label>
            <button
              type="button"
              onClick={handleRemoveImage}
              disabled={!selectedImage}
              className="btn btn-pry--outline w-fit text-grey-900"
            >
              Remove
            </button>
          </div>
          {errors.profileImage && (
            <p className="text-red-500 text-sm">
              {errors.profileImage.message}
            </p>
          )}
          <div className="border-t border-grey-200 pt-6">
            <h2 className="font-inter text-base font-semibold text-grey-900 lg:text-xl">
              Personal Information
            </h2>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-6 *:basis-[500px]">
              <div className="grow">
                <label
                  htmlFor="fullName"
                  className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
                    placeholder="Enter Full Name"
                    aria-invalid={errors.fullName ? true : false}
                    {...register("fullName", {
                      required: "Full name is required.",
                    })}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div className="grow">
                <label
                  htmlFor="email"
                  className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
                    placeholder="Enter Email Address"
                    aria-invalid={errors.email ? true : false}
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address.",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="grow-0">
                <label
                  htmlFor="role"
                  className="mb-2 block font-inter text-sm font-medium after:ml-0.5 after:content-['*'] lg:text-xl"
                >
                  Role
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="role"
                    placeholder="Super Admin"
                    className="block w-full rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-pry w-full lg:ml-auto lg:w-fit"
          >
            Save Changes
          </button>
        </form>
      </section>
    </main>
  );
};

export default Profile;
