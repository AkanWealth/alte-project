const systemActions = [
  "Client Management",
  "Freelancer & Job Management",
  "Job Posting",
  "User Account",
  "System Notifications",
  "Blog",
];

const CreateNewRole = () => {
  return (
    <main>
      <h2 className="font-inter text-2xl font-semibold text-grey-900">
        Create New Role
      </h2>
      <div className="my-5 flex flex-col items-start gap-2">
        <label
          htmlFor="role"
          className="font-inter text-sm font-medium lg:text-xl"
        >
          Role Name
        </label>
        <input
          type="text"
          className="block rounded-lg border border-grey-400 bg-white p-2.5 font-inter text-sm font-normal text-black outline-none placeholder:text-xs placeholder:text-grey-100 lg:text-xl lg:placeholder:text-sm [&[aria-invalid=true]]:border-error-500"
          placeholder="Enter role name"
        />
      </div>
      <div className="overflow-x-auto rounded-lg border border-grey-50 bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="font-inter text-sm font-semibold text-grey-900 *:border *:border-grey-50 *:px-6 *:py-3 *:text-start">
              <th>Action</th>
              <th>View</th>
              <th>Manage</th>
              <th>Delete</th>
              <th>Export</th>
            </tr>
          </thead>
          <tbody className="*:font-inter *:text-sm *:font-normal *:text-grey-400">
            {systemActions.map((item) => (
              <tr
                key={item}
                className="*:w-max *:whitespace-nowrap *:border *:border-grey-50 *:px-6 *:py-5 focus-within:bg-sec-50 hover:bg-sec-50"
              >
                <td>{item}</td>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-sec-500 checked:bg-sec-500 checked:after:inline"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-sec-500 checked:bg-sec-500 checked:after:inline"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-sec-500 checked:bg-sec-500 checked:after:inline"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    className="relative aspect-square min-w-5 appearance-none overflow-hidden rounded-md border border-black bg-center after:absolute after:hidden after:size-full after:bg-[url('/icons/check.svg')] after:bg-[50%] after:bg-no-repeat checked:border-sec-500 checked:bg-sec-500 checked:after:inline"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="ml-auto mt-5 flex w-fit flex-row items-start gap-3 lg:gap-4">
        <button className="btn btn-pry">Create Role</button>
        <button to="user-roles-and-permission" className="btn btn-sec--outline">
          Cancel
        </button>
      </div>
    </main>
  );
};

export default CreateNewRole;
