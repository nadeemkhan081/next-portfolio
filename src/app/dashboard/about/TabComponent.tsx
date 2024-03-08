import {
  CircularProgress,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableCaption,
  TableContainer,
  Tabs,
  TabsProvider,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript, TbBrandNodejs, TbBrandNextjs, TbBrandHtml5, TbBrandCss3, TbBrandTailwind } from "react-icons/tb";
import { SiMui } from "react-icons/si";

const TabComponent: NextPage = () => {
  return (
    <div>
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab fontFamily="monospace" fontWeight="bold">
            Languages
          </Tab>
          <Tab fontFamily="monospace" fontWeight="bold">
            Web Technologies
          </Tab>
          <Tab fontFamily="monospace" fontWeight="bold">
            Databases
          </Tab>
        </TabList>
        <TabPanels>

          {/* ===========================LANGUAGES============================ */}
          <TabPanel>
            <div className="flex space-x-48 mt-8">
              <div className="flex gap-4">
                <Heading>Javascript</Heading>
                <TbBrandJavascript size={48} />
              </div>
              <CircularProgress
                value={30}
                color="orange.400"
                thickness="12px"
              />
            </div>
            <div className="flex space-x-48 mt-8 ">
              <div className="flex gap-4">
                <Heading>NodeJS</Heading>
                <TbBrandNodejs size={48} />
              </div>
              <CircularProgress
                value={30}
                color="orange.400"
                thickness="12px"
              />
            </div>
          </TabPanel>

          {/* =====================WEB TECHNOLOGIES=========================== */}
          <TabPanel>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th fontSize={24}>React</Th>
                    <Th>
                      <FaReact size={48} />
                    </Th>
                    <Th>
                      <CircularProgress
                        value={30}
                        color="orange.400"
                        thickness="12px"
                      />
                    </Th>
                  </Tr>
                  <Tr>
                    <Th fontSize={24}>NextJS</Th>
                    <Th>
                      <TbBrandNextjs size={48} />
                    </Th>
                    <Th>
                      <CircularProgress
                        value={50}
                        color="orange.400"
                        thickness="12px"
                      />
                    </Th>
                  </Tr>
                  <Tr>
                    <Th fontSize={24}>HTML5</Th>
                    <Th>
                      <TbBrandHtml5 size={48} />
                    </Th>
                    <Th>
                      <CircularProgress
                        value={55}
                        color="orange.400"
                        thickness="12px"
                      />
                    </Th>
                  </Tr>
                  <Tr>
                    <Th fontSize={24}>CSS3</Th>
                    <Th>
                      <TbBrandCss3 size={48} />
                    </Th>
                    <Th>
                      <CircularProgress
                        value={55}
                        color="orange.400"
                        thickness="12px"
                      />
                    </Th>
                  </Tr>
                  <Tr>
                    <Th fontSize={24}>TailwindCSS</Th>
                    <Th>
                      <TbBrandTailwind size={48} />
                    </Th>
                    <Th>
                      <CircularProgress
                        value={55}
                        color="orange.400"
                        thickness="12px"
                      />
                    </Th>
                  </Tr>
                  <Tr>
                    <Th fontSize={24}>Material UI</Th>
                    <Th>
                      <SiMui size={48} />
                    </Th>
                    <Th>
                      <CircularProgress
                        value={90}
                        color="orange.400"
                        thickness="12px"
                      />
                    </Th>
                  </Tr>
                </Thead>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* =========================DATABASES======================================= */}
          <TabPanel>
            <p>Databases...</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabComponent;
