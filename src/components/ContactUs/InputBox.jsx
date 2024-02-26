export const InputBox = (name) => {
  const placeholder = ("Your " + name).toString().toUpperCase();
  return (
    <input
      type="text"
      id="name"
      name={name}
      placeholder={placeholder}
      className="mt-4  w-full p-2 bg-slate-600 bg-opacity-30 text-white rounded-md flex  border-violet-500 border-l-4 shadow-md"
    />
  );
};
