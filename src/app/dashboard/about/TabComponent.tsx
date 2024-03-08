import {
  CircularProgress,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsProvider,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript, TbBrandNodejs } from "react-icons/tb";

const TabComponent: NextPage = () => {
  return (
    <div>
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>Languages</Tab>
          <Tab>Web Technologies</Tab>
          <Tab>Databases</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="flex space-x-48 mt-8">
              <div className="flex gap-4">
              <Heading>Javascript</Heading>
              <TbBrandJavascript size={48} />
              </div>
              <CircularProgress value={30} color="orange.400" thickness='12px' />
            </div>
            <div className="flex space-x-48 mt-8">
              <div className="flex gap-4">
              <Heading>NodeJS</Heading>
              <TbBrandNodejs size={48} />
              </div>
              <CircularProgress value={30} color="orange.400" thickness='12px' />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabComponent;
