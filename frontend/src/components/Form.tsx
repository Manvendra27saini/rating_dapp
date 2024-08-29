import { FC } from "react";

interface FormProps {
  title: string;
  description: string;
  location: string;
  rating: number | ""; // Allow rating to be empty
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  setLocation: (value: string) => void;
  setRating: (value: number | "") => void; // Allow rating to be empty
  handleSubmit: () => void;
}

const ReviewForm: FC<FormProps> = ({
  title,
  description,
  location,
  rating,
  setTitle,
  setDescription,
  setLocation,
  setRating,
  handleSubmit,
}) => {
  const formSubmit = (e: any) => {
    e.preventDefault();

    if (rating === "" || (typeof rating === "number" && (rating < 0 || rating > 10))) {
      alert("Rating must be between 0 and 10 or empty.");
      return;
    }
    
    handleSubmit();
  };

  return (
    <form
      className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-gray-800 mx-auto mt-40"
      onSubmit={(e) => formSubmit(e)}
      style={{ width: "340px" }} // Set width to 340px
    >
      <div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Rating
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rating"
            type="number"
            placeholder="Rating"
            value={rating === "" ? "" : rating} // Allow empty value
            onChange={(e) => {
              const value = e.target.value === "" ? "" : Number(e.target.value);
              setRating(value);
            }}
            max={10}
            min={0}
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
