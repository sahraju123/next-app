// // "use client";

// // import React, { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { useRouter } from "next/navigation"; // Correct import for Next.js 13+

// // export default function InteractiveNavBar() {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const router = useRouter(); // Get the router object

// //   // Handle scroll event to change navbar style based on scroll position
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 100);
// //       console.log(router)
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);


// //   return (
// //     <nav
// //       className={`fixed top-0 left-0 w-full ${isScrolled ? "bg-gray-900" : "bg-transparent"} text-white p-4 z-50 transition-all duration-300`}
// //     >
// //       <div className="container mx-auto flex justify-between items-center">
// //         <div className="text-2xl font-semibold">{isScrolled ? "Prince Shrestha" : "My Portfolio"}</div>
// //         <div className="space-x-9">
// //           <Link href="/" className={"py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"}>
// //             Home
// //           </Link>
// //           <Link href="/login" className={"py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"}>
// //             Login
// //           </Link>
// //           <Link href="/register" className={"py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"}>
// //             Register
// //           </Link>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }



// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useGlobalContext } from "../../context/GlobalContext"

// export default function InteractiveNavBar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { menuOpen, setMenuOpen } = useGlobalContext();; // State to toggle menu

//   // Handle scroll event to change navbar style based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full ${
//         isScrolled ? "bg-gray-900" : "bg-transparent"
//       } text-white p-4 z-50 transition-all duration-300`}
//     >
//       <div className="container mx-2 flex justify-between ">
//         {/* Title centered */}
//         <div className={`text-2xl font-semibold ml-8  "`}>
//           {isScrolled ? "Prince Shrestha" : "My Portfolio"}
//         </div>

//         {/* Hamburger icon for small screens */}
//         <button
//           className="md:hidden block text-white focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Links: Hidden on small screens, shown on medium+ */}
//         <div className="hidden md:flex space-x-9 m-2">
//           <Link
//             href="/"
//             className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             href="/login"
//             className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
//           >
//             Login
//           </Link>
//           <Link
//             href="/register"
//             className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
//           >
//             Register
//           </Link>
//         </div>
//       </div>

//       {/* Dropdown menu for small screens */}
//       {menuOpen && (
//         // <div className="md:hidden mt-4 space-y-2 bg-gray-800 rounded-lg p-4  ">
//         <div className="md:hidden mt-4 space-y-1 bg-gray-800 rounded-lg p-4 w-[50%] fixed right-0 top-8 z-1000">
//   <Link
//     href="/"
//     className="block py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
//   >
//     Home
//   </Link>
//   <Link
//     href="/login"
//     className="block py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
//   >
//     Login
//   </Link>
//   <Link
//     href="/register"
//     className="block py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
//   >
//     Register
//   </Link>
// </div>

//       )}
//     </nav>
//   );
// }


"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useGlobalContext } from "../../context/GlobalContext";

interface Iprops{
  token : string | null
}

export default function InteractiveNavBar(props:Iprops) {

  const token = props.token

  const [isScrolled, setIsScrolled] = useState(false);
  const { menuOpen, setMenuOpen } = useGlobalContext(); // State to toggle menu
  const menuRef = useRef(null); // Ref to detect clicks outside the menu

  // Handle scroll event to change navbar style based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef, setMenuOpen]);



  return (
    <nav
      className={`fixed top-0 left-0 w-full  ${
        isScrolled ? "bg-gray-900" : "bg-transparent"
      } text-white p-4 z-50 transition-all duration-300`}
    >
      <div className="container mx-2 flex justify-between items-end ">
        {/* Title centered */}
        <div className={`text-2xl font-semibold ml-8`}>
          <Link href="/">{isScrolled ? "Prince Shrestha" : "My Portfolio"}</Link>
          
        </div>

        {/* Hamburger icon for small screens */}
        <button
          className="md:hidden block text-white focus:outline-none mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Links: Hidden on small screens, shown on medium+ */}
        <div className="hidden md:flex space-x-9  flex items-end">
          <Link
            href="/"
            className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
         {
          !token && (<> <Link
            href="/login"
            className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Register
          </Link></>)
         }
          {
            token && <> <Link
            href="/ucan"
            className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
          >
             USA
          </Link>
          <Link href={"/login"}
          onClick={()=>{
            localStorage.removeItem("token")
          }}
           className="py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
          >
          Logout
          </Link>
          </>
          }
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <div
          ref={menuRef} // Attach the ref to the dropdown menu
          className="md:hidden mt-4 space-y-1 bg-gray-800 rounded-lg p-4 w-[50%] fixed right-0 top-8 z-1000"
        >
          <Link
            href="/"
            className="block py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
          { !token && <Link
            href="/login"
            className="block py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Login {token}
          </Link>}
         {
          !token && 
          <Link
          href="/register"
          className="block py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
        >
          Register
        </Link>
         }
          {token && <> <Link
            href="/ucan"
            className="block py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Ucan / USA
          </Link>

          <Link href={"/login"}
          onClick={()=>{
            localStorage.removeItem("token")
          }}
          className="block py-2 px-4 rounded-md hover:bg-white hover:text-blue-600 transition duration-300"

          >
          Logout
          </Link>
          
          </>}
        </div>
      )}
    </nav>
  );
}
