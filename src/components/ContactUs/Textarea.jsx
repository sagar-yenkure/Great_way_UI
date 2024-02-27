export const Textarea = (name) => {
  return (
    <textarea
      id="message"
      name={name}
      rows="4"
      placeholder="DESCRIPTION"
      className=" mt-4 p-2 bg-slate-600 bg-opacity-30 text-white rounded-md border-violet-500 border-l-4 shadow-md"
    ></textarea>
  );
};
