import { useEffect, useState } from "react";
import { getAllUsers } from "../api/User";

const product = {
  name: "Basic Tee 6-Pack",

  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
};

export default function UserDetails() {
  const [user, setUser] = useState();
  async function getUsers() {
    const user = await getAllUsers();
    console.log("hello", user);
    setUser(user);
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={user?.picture.large}
              className="h-80 w-80 flex items-center justify-center object-cover object-center"
            />
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 pb-6">
              <h1 className="text-gray-900 font-bold text-2xl sm:text-3xl">
                {user?.name.first}
                {"     "}
                {user?.name.last}
              </h1>
            </div>
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 pb-5">
              <h1 className="text-2xl font-bold flex items-start tracking-tight text-gray-900 sm:text-3xl">
                {user?.gender}
              </h1>
            </div>
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 pb-5">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {user?.phone}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
