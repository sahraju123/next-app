// import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

// export default function ProfessionalCards(
//     {
//         name="Unknown",
//         url = "www.unknown.com",
//         details = ".....",
//         image ="./profile.jpg",
//         externalUrl = url

//     }
// ) {
//   return (
//     <Card className="max-w-[400px] bg-gray-900">
//       <CardHeader className="flex gap-3">
//         <Image
//           alt="nextui logo"
//           height={40}
//           radius="sm"
//           src={image}
//           width={40}
//         />
//         <div className="flex flex-col ">
//           <p className="text-md text-white">{name}</p>
//           <p className="text-small text-default-500">{url}</p>
//         </div>
//       </CardHeader>
//       <Divider/>
//       <CardBody className>
//         <p className="text-white px-5">{details}.</p>
//       </CardBody>
//       <Divider/>
//       <CardFooter>
//         <Link
//           isExternal
//           showAnchorIcon
//           href={externalUrl}
//         >
//           Visit.
//         </Link>
//       </CardFooter>
//     </Card>
//   );
// }

"use client"
import { Card, CardHeader, CardBody, Divider, Image, CardFooter, Link } from "@nextui-org/react";
import {  useState } from "react";

export default function ProfessionalCards({
    name = "Unknown",
    url = "www.unknown.com",
    details = ".....",
    image = "./profile.jpg",
    redirect = false,
    cardbody = true,
    children

}) {
    const [isExpanded, setIsExpanded] = useState(false);
    // const { isOpen, setIsOpen } = useGlobalContext();
    // const { universityUrl, setUniversityUrl } = useGlobalContext();


    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    // const handleOpenModal = (url) => {
    //     setUniversityUrl(url);
    //     setIsOpen(true);
    // };

    // const handleCloseModal = () => {
    //     setIsOpen(false);
    //     setUniversityUrl('');
    // };

    return (
        <Card className="max-w-[400px] bg-gray-900">
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={image}
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md text-white text-left">{name}</p>
                    <p className="text-small text-default-500">{url}</p>
                </div>
            </CardHeader>
            <Divider />
            {cardbody &&
                <CardBody>
                    <p className="text-white px-5">
                        {isExpanded ? details : `${details.substring(0, 100)}...`}
                        <button
                            onClick={toggleReadMore}
                            className="text-blue-400 underline mt-2 text-sm"
                        >
                            {isExpanded ? "Read Less" : "Read More"}
                        </button>
                    </p>


                </CardBody>}
            <Divider />
            {!children && redirect && (
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href={`https://${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit this University.
                    </Link>
                </CardFooter>
            )}
            {children && <CardFooter>
                {children}
            </CardFooter>}
        </Card>
    );
}
