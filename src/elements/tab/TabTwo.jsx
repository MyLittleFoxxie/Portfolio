import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      tab2 = "Experience",
      tab3 = "Education",
      tab4 = "Certifications";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Big Data <span> - Data Engineering</span>
                          </a>
                          Data pipelines, Data lakes, Docker, Databricks...
                        </li>
                        <li>
                          <a href="/service">
                            Full stack developer
                            <span> - Software Engineer</span>
                          </a>
                          Websites, platforms, databases...
                        </li>
                        <li>
                          <a href="/service">
                            Machine Learning <span> - Data Science</span>
                          </a>
                          Computer Vision, algorithms, evaluation...
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Full Stack Developer <span>- Vetta</span>
                          </a>{" "}
                          2023 - Current
                        </li>
                        <li>
                          <a href="/service">
                            Trainee Analyst <span>- Accenture</span>
                          </a>{" "}
                          2022 - 2023
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                      <li>
                          <a href="/service">
                            Post-graudate in Data Engineering <span>- PUC-Minas</span>
                          </a>{" "}
                          2024 - Current
                        </li>
                      <li>
                          <a href="/service">
                            Bachelor in Computer Engineering <span>- CEFET-MG</span>
                          </a>{" "}
                          2018 - 2023
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Fluent English
                            <span> - British Council IELTS</span>
                          </a>{" "}
                          January 2024
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
