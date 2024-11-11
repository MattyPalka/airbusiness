import { useParams } from "react-router-dom";
import { useBusinessDetails } from "../api-service/useBusinessDetails";
import { InfoText } from "../components/info-text";
import { PhotoGrid } from "../components/photo-grid/photo-grid";
import { useTranslation } from "react-i18next";
import { Icon } from "../components/icon";
import { useState } from "react";
import { useBusinessReviews } from "../api-service/useBusinessReviews";
import { Modal } from "../components/modal/modal";

export const Business = () => {
  const { id } = useParams();
  const { t } = useTranslation("translation");
  const [reviewsOpen, setReviewsOpen] = useState(false);

  const { isLoading, error, isError, data: business } = useBusinessDetails(id);
  const { isLoading: isReviewLoading, data: reviews } = useBusinessReviews(id);
  return (
    <>
      <div>
        {isError && error.message}
        {isLoading ? (
          "Loading"
        ) : (
          <div className="flex flex-col gap-4 w-full">
            <div>
              <h6 className="font-semibold text-xl">{business?.name}</h6>
            </div>
            <PhotoGrid images={business?.photos || []} />
            <div className="grid grid-cols-[3fr,_1fr]">
              <div className="flex flex-col">
                <span className="font-semibold text-md">
                  {business?.location.address1}, {business?.location.city}
                </span>
                <InfoText>
                  {business?.categories.map((category, i) => (
                    <span key={category.alias}>
                      {category.title}
                      {i + 1 < business?.categories.length && ", "}
                    </span>
                  ))}
                </InfoText>

                <div className="flex items-center gap-1">
                  <Icon icon="StarSolid" className="text-yellow-300 w-4 h-4" />
                  <p className="ms-2 text-sm font-bold text-gray-900">
                    {business?.rating}
                  </p>
                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                  <button
                    onClick={() => {
                      setReviewsOpen(true);
                    }}
                    className="text-sm font-medium text-gray-900 underline hover:no-underline"
                  >
                    {t("translation:reviews", {
                      count: business?.review_count,
                    })}
                  </button>
                </div>
              </div>
              <div className="w-full border-solid border border-gray-400 rounded-md p-4 shadow bg-slate-100 flex justify-center flex-col gap-2 items-center">
                <InfoText>{business?.phone}</InfoText>
                <a
                  href={`tel:${business?.phone}`}
                  className="text-xl bg-green-400 px-4 py-2 rounded-md w-full text-center cursor-pointer hover:bg-green-500 ease-in-out transition duration-300"
                >
                  {t("translation:call")}
                </a>
              </div>
            </div>
            <div>map</div>
          </div>
        )}
      </div>

      <Modal
        isOpen={reviewsOpen}
        onClose={() => {
          setReviewsOpen(false);
        }}
        title={t("translation:review_header")}
      >
        {isReviewLoading && (
          <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {reviews?.reviews.map((review) => (
          <div key={review.id} className="border-b pb-4 flex gap-2 flex-col">
            <InfoText>
              <div className="flex gap-2 items-center">
                <Icon icon="StarSolid" className="w-3 h-3 text-yellow-300" />
                {review.rating}
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <strong>
                  {new Date(review.time_created).toLocaleDateString()}
                </strong>
              </div>
            </InfoText>
            <p className="text-base leading-relaxed text-gray-500 ">
              {review.text}
            </p>
          </div>
        ))}
      </Modal>
    </>
  );
};
