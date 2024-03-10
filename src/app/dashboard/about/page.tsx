// import { Box, Divider, Heading } from "@chakra-ui/react";
// import type { NextPage } from "next";

// const About: NextPage = () => {
//   return (
//     <Box style={{display: 'flex'}}>
//       <Box className="py-12" style={{paddingRight: '20px'}}>
//         <Heading as='h4' size='2xl'>Passionate</Heading>
//         <Heading as='h4' size='3xl' className="text-amber-900">React Developer</Heading>
//       </Box>
//       <Divider orientation="vertical" />
//       <Box style={{paddingLeft: '20px'}}>
//         <Heading as='h5' size='lg'> Right Content</Heading>
//       </Box>
//     </Box>
//   );
// };

// export default About;

import { Box, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Tabs from "./TabComponent";
import TabComponent from "./TabComponent";

const About: NextPage = () => {
  return (
    <Box display="flex">
      <Box flex={1} py={12} pr={20}>
        <Heading as="h4" size="2xl" color="chocolate">
          Passionate
        </Heading>
        <Heading as="h4" size="3xl" color="amber.900">
          <span style={{ color: "red" }}>React</span> Developer
        </Heading>
        <Text textAlign="justify" mt={8} fontSize={18} fontWeight={600}>
        &quot;I am a skilled and passionate React developer with 1 year of
          experience in building dynamic and interactive web applications.
          Proficient in JavaScript, HTML, CSS, and other relevant technologies
          like React, NextJS, erpNext etc. I excel at leveraging React to create
          responsive user interfaces that enhance the overall user experience.
          With a strong foundation in front-end development principles and a
          keen eye for detail, I thrive in collaborative environments where I
          can contribute innovative ideas and solutions to drive project
          success. Continuously staying updated with the latest industry trends
          and best practices, I am dedicated to delivering high-quality code and
          exceeding client expectations.&quot;
        </Text>
      </Box>
      <Box width="1px" bg="gray.300" />
      <Box flex={1} pl={20}>
        <Heading as="h5" size="lg" py={12}>
          Technical Skills
        </Heading>
        <TabComponent />
      </Box>
    </Box>
  );
};

export default About;
