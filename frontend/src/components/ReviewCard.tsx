import { Review } from "@/models/Review";
import React, { FC } from "react";

interface CardProps {
  review: Review;
}

const ReviewCard: FC<CardProps> = ({ review }) => {
  const { title, description, rating, location } = review;

  return (
    <div className="relative group rounded-lg border border-gray-300 px-6 py-5 m-6 bg-gray-200 dark:border-neutral-700 dark:bg-neutral-900/50 transition-colors max-w-md">
      <h2 className="mb-4 text-2xl font-bold">{title.toUpperCase()}</h2>
      <p className="m-0 text-base opacity-90">{description}</p>
      <p className="m-0 text-sm opacity-60 mt-1">
        {location.toUpperCase()}
      </p>
      <p className="mt-6 text-base font-medium opacity-80">{`${rating}/10`}</p>
    </div>
  );
};

export default ReviewCard;
