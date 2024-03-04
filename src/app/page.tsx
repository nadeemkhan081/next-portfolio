// "use client";

// import { Button, ChakraProvider, Stack } from "@chakra-ui/react";
// import { IoMdArrowRoundForward } from "react-icons/io";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <ChakraProvider>

//       <div
//         className="text-center "
//         style={{ background: "linear-gradient(to right, #ffecd2, #fcb69f)" }}
//       >
//         <h2 className="text-6xl font-bold text-pink-700 py-40">
//           Welcome to my world!
//         </h2>
//           <Link href="/dashboard/about">
//             <Button
//               rightIcon={<IoMdArrowRoundForward />}
//               variant={"outline"}
//               colorScheme={"red"}
//             >
//               Enter
//             </Button>
//           </Link>
//         </div>

//     </ChakraProvider>
//   );
// }

"use client";

import { Button, ChakraProvider } from "@chakra-ui/react";
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from "next/link";

export default function Home() {
  return (
    <ChakraProvider>
      <div>
        <style jsx global>{`
          body,
          html {
            margin: 0;
            padding: 0;
            height: 100%;
          }

          body {
            background: linear-gradient(to right, #ffecd2, #fcb69f);
          }
        `}</style>

        <div className="text-center" style={{ height: "100vh" }}>
          <h2 className="text-6xl font-bold text-pink-700 py-40">
            Welcome to my world!
          </h2>
          <Link href="/dashboard/about">
            <Button
              rightIcon={<IoMdArrowRoundForward />}
              variant={"outline"}
              colorScheme={"red"}
            >
              Enter
            </Button>
          </Link>
        </div>
      </div>
    </ChakraProvider>
  );
}
