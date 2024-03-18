// "use client";

// import type { NextPage } from "next";
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   Button,
//   FormControl,
//   FormLabel,
//   Grid,
//   Input,
//   Textarea,
// } from "@chakra-ui/react";

// const Contact: NextPage = () => {
//   const form = useRef<HTMLFormElement>(null);

//   const sendEmail = (e: { preventDefault: () => void }) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_4r0pmsd", "template_406y5x9", form.current, {
//         publicKey: "YkBN4TkhLlhivvrJS",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };
//   return (
//     // <form ref={form} onSubmit={sendEmail}>
//     //   <label>Name</label>
//     //   <input type="text" name="user_name" />
//     //   <label>Email</label>
//     //   <input type="email" name="user_email" />
//     //   <label>Message</label>
//     //   <textarea name="message" />
//     //   <input type="submit" value="Send" />
//     // </form>

//     <form ref={form} onSubmit={sendEmail} className="w-1/2">
//       <FormControl>
//         <FormLabel>Name</FormLabel>
//         <Input type="text" name="user_name" />
//       </FormControl>{" "}
//       <br />
//       <FormControl>
//         <FormLabel>Email</FormLabel>
//         <Input type="email" name="user_email" />
//       </FormControl>{" "}
//       <br />
//       <FormControl>
//         <FormLabel>Message</FormLabel>
//         <Textarea name="message" rows={8} />
//       </FormControl>{" "}
//       <br />
//       <Button colorScheme="blue" type="submit">
//         Send
//       </Button>
//     </form>
//   );
// };

// export default Contact;


"use client";

import type { NextPage } from "next";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Textarea,
} from "@chakra-ui/react";

const Contact: NextPage = () => {
  const form = useRef<HTMLFormElement>(null); // Specify the type explicitly

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      // Check if form.current is not null before using it
      emailjs
        .sendForm("service_4r0pmsd", "template_406y5x9", form.current, {
          publicKey: "YkBN4TkhLlhivvrJS",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  
  return (
    <form ref={form} onSubmit={sendEmail} className="w-1/2">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" name="user_name" />
      </FormControl>{" "}
      <br />
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="user_email" />
      </FormControl>{" "}
      <br />
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea name="message" rows={8} />
      </FormControl>{" "}
      <br />
      <Button colorScheme="blue" type="submit">
        Send
      </Button>
    </form>
  );
};

export default Contact;
