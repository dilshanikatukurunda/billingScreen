// "use client";

// import { Dropdown, Button, Drawer } from "flowbite-react";

// import { useState, React } from "react";

// export default function Products() {
//   const [isOpen, setIsOpen] = useState(true);
//   const [productDetails, setProductDetails] = useState({});

//   const handleImageClick = (details) => {
//     setProductDetails(details);
//     setIsOpen(true);
//   };
//   const handleClose = () => setIsOpen(false);

//   const products = [
//     {
//       src: "https://th.bing.com/th?id=OIF.DW5iJznQ%2bz05dWtsQBAgiQ&w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//       brand: "Brand A",
//       category: "Category A",
//       subcategory: "Subcategory A",
//       price: "$100",
//       qty: "10",
//     },
//     {
//       src: "https://th.bing.com/th/id/OIF.yCsJa30xJCo5Wq9rSs7kCw?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//       brand: "Brand B",
//       category: "Category B",
//       subcategory: "Subcategory B",
//       price: "$150",
//       qty: "5",
//     },
//     // Add more products as needed
//   ];
//////////////////////////

// return (
//   <div className="flex w-full h-vh-100 ">
//     <div className=" z-10 flex flex-row bg-red-200 w-full fixed gap-2 p-4 justify-around mt-0 ">
//       <div className="flex bg-slate-300 border w-32 text-center ">ff</div>
//       <div className="flex border w-auto ">
//         <div className=" mr-2 ">
//           <Dropdown
//             label="Brand"
//             dismissOnClick={false}
//             className=" bg-slate-300  "
//           >
//             <Dropdown.Item>Dashboard</Dropdown.Item>
//             <Dropdown.Item>Settings</Dropdown.Item>
//             <Dropdown.Item>Earnings</Dropdown.Item>
//             <Dropdown.Item>Sign out</Dropdown.Item>
//           </Dropdown>
//         </div>

//         <div className=" mr-2">
//           <Dropdown label="Category" dismissOnClick={false}>
//             <Dropdown.Item>Dashboard</Dropdown.Item>
//             <Dropdown.Item>Settings</Dropdown.Item>
//             <Dropdown.Item>Earnings</Dropdown.Item>
//             <Dropdown.Item>Sign out</Dropdown.Item>
//           </Dropdown>
//         </div>
//         <div>
//           <Dropdown label="Sub-category" dismissOnClick={false}>
//             <Dropdown.Item>Dashboard</Dropdown.Item>
//             <Dropdown.Item>Settings</Dropdown.Item>
//             <Dropdown.Item>Earnings</Dropdown.Item>
//             <Dropdown.Item>Sign out</Dropdown.Item>
//           </Dropdown>
//         </div>
//       </div>
//     </div>
//     <div className="flex bg-orange-300 h-screen w-full relative justify-between">
//       <div className="relative mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  py-3 m-4 object-cover overflow-auto">
//         <img
//           src="https://th.bing.com/th?id=OIF.DW5iJznQ%2bz05dWtsQBAgiQ&w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//           alt="sssssssss"
//         />
//         <img
//           src="https://th.bing.com/th/id/OIF.yCsJa30xJCo5Wq9rSs7kCw?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//           alt="sssssssss"
//         />
//         <img
//           src="https://th.bing.com/th?id=OIF.YK2yhAEAC3HN2S19ych%2bLw&w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//           alt="sssssssss"
//         />
//         <img
//           src="https://th.bing.com/th/id/OIP.D9y2BvddR9H7DPO_xO1DngHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//           alt="sssssssss"
//         />
//         <img
//           src="https://th.bing.com/th/id/OIP.T_ycGmpz-ajajYT2uK0QWwHaKk?w=186&h=265&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//           alt="sssssssss"
//         />
//         <img
//           src="https://th.bing.com/th/id/OIF.d9icFXL9bB1VWMySaKtOrg?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//           alt="sssssssss"
//         />
//         <img
//           src="https://th.bing.com/th?id=OIF.d2G5v%2fGmaHQRBn2dbG%2floA&w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//           alt="sssssssss"
//         />
//         <img
//           src="https://th.bing.com/th?id=OIF.bMjomd9oNMM8xvo3e%2fGRdg&w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//           alt="sssssssss"
//         />
//       </div> // works fine

{
  /* <div className="flex flex-col bg-orange-400 w-1/4 sm:w-1/3 h-100vh items-center mt-20">
          <div className="flex flex-col bg-orange-300 gap-2 p-4 m-8 justify-center items-center">
            <img src="" alt="ssssss" />
          </div>
          <div className="p_info">
            <div className="flex flex-col bg-orange-300 gap-2 p-4 m-2 justify-center">
              <p>Product Name</p>
              <p>Brand</p>
              <p>Category</p>
              <p>Sub-category</p>
              <p>Price</p>
              <p>Stock</p>
              <p>Discount</p>
              <p>Rating</p>
            </div>
          </div>
        </div> */
} // not wanted

{
  /* <div className="flex min-h-[50vh] w-1/4 sm:w-1/3 items-end mb-4 justify-center">
          <Button onClick={() => setIsOpen(true)}>Show right drawer</Button>
        </div> */
}

{
  /* <Drawer open={isOpen} onClose={handleClose} position="right">
          <Drawer.Header title="Drawer" />
          <Drawer.Items>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Supercharge your hiring by taking advantage of our&nbsp;
              <a
                href="#"
                className="text-cyan-600 underline hover:no-underline dark:text-cyan-500"
              >
                limited-time sale
              </a>
              &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K
              top-ranked candidates and the #1 design job board.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <a
                href="#"
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Learn more
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Get access&nbsp;
                <svg
                  className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </Drawer.Items>
        </Drawer> */
} // drawer

//     </div>
//   </div>
// );

//////////////////////////
//   return (
//     <div className="flex w-full h-vh-100 ">
//       <div className=" z-10 flex flex-row bg-red-200 w-full fixed gap-2 p-4 justify-around mt-0 ">
//         <div className="flex bg-slate-300 border w-32 text-center ">ff</div>
//         <div className="flex border w-auto ">
//           <div className=" mr-2 ">
//             <Dropdown
//               label="Brand"
//               dismissOnClick={false}
//               className=" bg-slate-300  "
//             >
//               <Dropdown.Item>Dashboard</Dropdown.Item>
//               <Dropdown.Item>Settings</Dropdown.Item>
//               <Dropdown.Item>Earnings</Dropdown.Item>
//               <Dropdown.Item>Sign out</Dropdown.Item>
//             </Dropdown>
//           </div>

//           <div className=" mr-2">
//             <Dropdown label="Category" dismissOnClick={false}>
//               <Dropdown.Item>Dashboard</Dropdown.Item>
//               <Dropdown.Item>Settings</Dropdown.Item>
//               <Dropdown.Item>Earnings</Dropdown.Item>
//               <Dropdown.Item>Sign out</Dropdown.Item>
//             </Dropdown>
//           </div>
//           <div>
//             <Dropdown label="Sub-category" dismissOnClick={false}>
//               <Dropdown.Item>Dashboard</Dropdown.Item>
//               <Dropdown.Item>Settings</Dropdown.Item>
//               <Dropdown.Item>Earnings</Dropdown.Item>
//               <Dropdown.Item>Sign out</Dropdown.Item>
//             </Dropdown>
//           </div>
//         </div>
//       </div>
//       <div className="flex bg-orange-300 h-screen w-full relative justify-between">
//         <div className="relative mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3 m-4 object-cover overflow-auto">
//           {products.map((product, index) => (
//             <img
//               key={index}
//               src={product.src}
//               alt={`Product ${index + 1}`}
//               onClick={() => handleImageClick(product)}
//               className="cursor-pointer"
//             />
//           ))}
//         </div>

//         <Drawer open={isOpen} onClose={handleClose} position="right">
//           <Drawer.Header title="Product Details" />
//           <Drawer.Items>
//             <div className="p-4">
//               <p>
//                 <strong>Brand:</strong> {productDetails.brand}
//               </p>
//               <p>
//                 <strong>Category:</strong> {productDetails.category}
//               </p>
//               <p>
//                 <strong>Subcategory:</strong> {productDetails.subcategory}
//               </p>
//               <p>
//                 <strong>Price:</strong> {productDetails.price}
//               </p>
//               <p>
//                 <strong>Quantity:</strong> {productDetails.qty}
//               </p>
//             </div>
//           </Drawer.Items>
//         </Drawer>
//       </div>
//     </div>
//   );
// }

import { Dropdown, Drawer, Card } from "flowbite-react";
import { useState, React, useMemo } from "react";
import { FaSearch } from "react-icons/fa";

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [productDetails, setProductDetails] = useState<{
    brand?: string;
    category?: string;
    subcategory?: string;
    price?: string;
    qty?: string;
  }>({});
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState({
    brand: "",
    category: "",
    subcategory: "",
  });

  const handleImageClick = (details: {
    brand?: string;
    category?: string;
    subcategory?: string;
    price?: string;
    qty?: string;
  }) => {
    if (!details.brand || !details.category || !details.subcategory) {
      console.error("Missing product details:", details);
      return;
    }
    setProductDetails(details);
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  const updateFilter = (key: string, value: string) => {
    setFilter((prevFilter) => ({ ...prevFilter, [key]: value }));
  };

  const products = useMemo(
    () => [
      {
        src: "https://th.bing.com/th?id=OIF.DW5iJznQ%2bz05dWtsQBAgiQ&w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name: "Product A",
        brand: "Brand A",
        category: "Category A",
        subcategory: "Subcategory A",
        price: "$100",
        qty: "10",
      },
      {
        src: "https://th.bing.com/th/id/OIF.yCsJa30xJCo5Wq9rSs7kCw?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name: "Product B",
        brand: "Brand B",
        category: "Category A",
        subcategory: "Subcategory B",
        price: "$150",
        qty: "5",
      },
      {
        src: "https://th.bing.com/th?id=OIF.YK2yhAEAC3HN2S19ych%2bLw&w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name: "Product C",
        brand: "Brand C",
        category: "Category B",
        subcategory: "Subcategory C",
        price: "$200",
        qty: "8",
      },
      {
        src: "https://th.bing.com/th/id/OIP.D9y2BvddR9H7DPO_xO1DngHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name: "Product D",
        brand: "Brand A",
        category: "Category B",
        subcategory: "Subcategory D",
        price: "$250",
        qty: "3",
      },
      {
        src: "https://th.bing.com/th/id/OIP.T_ycGmpz-ajajYT2uK0QWwHaKk?w=186&h=265&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name: "Product E",
        brand: "Brand B",
        category: "Category C",
        subcategory: "Subcategory E",
        price: "$300",
        qty: "12",
      },
    ],
    []
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearchText = product.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const brandMatch = filter.brand ? product.brand === filter.brand : true;
      const categoryMatch = filter.category
        ? product.category === filter.category
        : true;
      const subcategoryMatch = filter.subcategory
        ? product.subcategory === filter.subcategory
        : true;
      return (
        matchesSearchText && brandMatch && categoryMatch && subcategoryMatch
      );
    });
  }, [searchText, filter, products]);

  return (
    <div className="flex w-full h-vh-100 ">
      <div className="z-10 flex flex-row bg-orange-400 w-full fixed gap-2 p-4 justify-around rounded-lg mt-0 ">
        <div className="flex bg-slate-300 border sm:w-full lg:w-96 h-10 px-4 items-center justify-start rounded-2xl gap-2">
          <FaSearch className="text-center" />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-transparent border-none p-2 outline-none"
          ></input>
        </div>
        <div className="flex w-auto">
          <div className="mr-2">
            <Dropdown
              label="Brand"
              dismissOnClick={false}
              className="bg-slate-300"
            >
              <Dropdown.Item onClick={() => updateFilter("brand", "Brand A")}>
                Brand A
              </Dropdown.Item>
              <Dropdown.Item onClick={() => updateFilter("brand", "Brand B")}>
                Brand B
              </Dropdown.Item>
              <Dropdown.Item onClick={() => updateFilter("brand", "Brand C")}>
                Brand C
              </Dropdown.Item>
              <Dropdown.Item onClick={() => updateFilter("brand", "")}>
                Clear
              </Dropdown.Item>
            </Dropdown>
          </div>

          <div className="mr-2">
            <Dropdown label="Category" dismissOnClick={false}>
              <Dropdown.Item
                onClick={() => updateFilter("category", "Category A")}
              >
                Category A
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => updateFilter("category", "Category B")}
              >
                Category B
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => updateFilter("category", "Category C")}
              >
                Category C
              </Dropdown.Item>
              <Dropdown.Item onClick={() => updateFilter("category", "")}>
                Clear
              </Dropdown.Item>
            </Dropdown>
          </div>

          <div>
            <Dropdown label="Sub-category" dismissOnClick={false}>
              <Dropdown.Item
                onClick={() => updateFilter("subcategory", "Subcategory A")}
              >
                Subcategory A
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => updateFilter("subcategory", "Subcategory B")}
              >
                Subcategory B
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => updateFilter("subcategory", "Subcategory C")}
              >
                Subcategory C
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => updateFilter("subcategory", "Subcategory D")}
              >
                Subcategory D
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => updateFilter("subcategory", "Subcategory E")}
              >
                Subcategory E
              </Dropdown.Item>
              <Dropdown.Item onClick={() => updateFilter("subcategory", "")}>
                Clear
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="flex bg-gray-300 h-screen w-full relative justify-between">
        <div className="relative w-full mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 py-3 m-16 object-cover justify-items-stretch overflow-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Card
                key={index}
                className="max-w-sm cursor-pointer"
                renderImage={() => (
                  <img
                    src={product.src}
                    alt={`Product ${index + 1}`}
                    width={500}
                    height={500}
                    title={product.name}
                    className="object-cover w-full h-60"
                  />
                )}
                onClick={() => handleImageClick(product)}
              >
                <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                  {product.brand}
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {product.category} - {product.subcategory}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {product.price}
                </p>
              </Card>
            ))
          ) : (
            <p className="text-center w-full">
              No products match the filter criteria.
            </p>
          )}
        </div>

        <Drawer open={isOpen} onClose={handleClose} position="right">
          <Drawer.Header title="Product Details" />
          <Drawer.Items>
            <div className="p-4">
              <div>Image</div>
              <p>
                <strong>Brand:</strong> {productDetails.brand}
              </p>
              <p>
                <strong>Category:</strong> {productDetails.category}
              </p>
              <p>
                <strong>Subcategory:</strong> {productDetails.subcategory}
              </p>
              <p>
                <strong>Price:</strong> {productDetails.price}
              </p>
              <p>
                <strong>Quantity:</strong> {productDetails.qty}
              </p>
            </div>
          </Drawer.Items>
        </Drawer>
      </div>
    </div>
  );
}
