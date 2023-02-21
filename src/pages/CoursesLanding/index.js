import React from "react";

import { Img, Text, Button, Line, List, Input } from "components";

const CoursesLandingPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-start justify-start mx-[auto] md:w-[100%] sm:w-[100%] w-[auto]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="bg-white_A700 flex flex-col gap-[13px] items-center justify-start pb-[109px] w-[100%]">
            <header className="flex md:flex-col flex-row gap-[40px] h-[96px] md:h-[auto] sm:h-[auto] items-center justify-center px-[144px] sm:px-[20px] md:px-[40px] py-[28px] w-[100%]">
              <div className="flex flex-1 sm:flex-col flex-row gap-[48px] items-center justify-start md:self-stretch sm:self-stretch w-[100%]">
                <Img
                  src="images/img_logo.svg"
                  className="h-[20px] w-[75px]"
                  alt="Logo"
                />
                <Text
                  className="font-medium text-bluegray_500 text-left w-[auto]"
                  variant="body3"
                >
                  Home
                </Text>
                <Text
                  className="font-medium text-bluegray_500 text-left w-[auto]"
                  variant="body3"
                >
                  Components
                </Text>
                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  <div className="bg-deep_orange_600 h-[6px] rounded-radius50 w-[6px]"></div>
                  <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-[auto]"
                      variant="body3"
                    >
                      Pages
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[16px] w-[16px]"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <Text
                  className="font-medium text-bluegray_500 text-left w-[auto]"
                  variant="body3"
                >
                  Documentation
                </Text>
              </div>
              <ul className="flex flex-row gap-[20px] sm:hidden items-center justify-start w-[auto] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] w-[14%]">
                  <Button className="flex h-[36px] items-center justify-center rounded-radius50">
                    <Img
                      src="images/img_search.svg"
                      className="h-[20px]"
                      alt="search"
                    />
                  </Button>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[14%]">
                  <Button className="flex h-[36px] items-center justify-center rounded-radius50">
                    <Img
                      src="images/img_signal.svg"
                      className="h-[20px]"
                      alt="signal"
                    />
                  </Button>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[1%] my-[6px]">
                  <Line className="bg-bluegray_300_3d h-[24px] w-[1px]" />
                </li>
                <li className="mt-[9px] mb-[5px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-medium hover:h-[undefinedpx] text-[14px] text-bluegray_900 text-left hover:w-[undefinedpx]"
                    href="#"
                  >
                    Login
                  </a>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] text-center">
                  <Button
                    className="cursor-pointer font-semibold text-[14px] text-center text-white_A700"
                    shape="RoundedBorder8"
                    size="sm"
                    variant="FillBluegray900"
                  >
                    Join Us
                  </Button>
                </li>
              </ul>
            </header>
            <div className="flex md:flex-col sm:flex-col flex-row font-barlow gap-[24px] items-center justify-start max-w-[1152px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
              <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[466px]">
                <Text
                  className="leading-[80.00px] text-bluegray_900 text-left"
                  as="h1"
                  variant="h1"
                >
                  <span className="sm:text-[48px] md:text-[48px] text-bluegray_900 text-[64px] font-barlow font-bold">
                    Free
                  </span>
                  <span className="sm:text-[48px] md:text-[48px] text-bluegray_900 text-[64px] font-barlow font-bold">
                    {" "}
                  </span>
                  <span className="sm:text-[48px] md:text-[48px] text-bluegray_300 text-[64px] font-barlow font-bold">
                    Online
                  </span>
                  <span className="sm:text-[48px] md:text-[48px] text-bluegray_900 text-[64px] font-barlow font-bold">
                    {" "}
                    <br />
                  </span>
                  <a
                    href="javascript:"
                    className="sm:text-[48px] md:text-[48px] text-deep_orange_600 text-[64px] font-barlow font-bold underline"
                  >
                    Courses
                  </a>
                  <span className="sm:text-[48px] md:text-[48px] text-bluegray_900 text-[64px] font-barlow font-bold">
                    {" "}
                    From The Experts
                  </span>
                </Text>
                <div className="flex flex-col font-poppins items-start justify-start pb-[40px] pt-[24px] sm:w-[100%] w-[auto]">
                  <Text
                    className="leading-[28.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[466px] not-italic text-bluegray_500 text-left"
                    variant="body1"
                  >
                    Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                    laoreet sapien, quis venenatis ante odio sit amet eros.{" "}
                  </Text>
                </div>
                <div className="flex flex-row font-barlow gap-[24px] items-center justify-start pb-[64px] w-[auto]">
                  <Button
                    className="flex items-center justify-center text-center"
                    rightIcon={
                      <Img
                        src="images/img_arrowright.svg"
                        className="ml-[8px] text-center"
                        alt="arrow_right"
                      />
                    }
                    shape="RoundedBorder8"
                    size="lg"
                    variant="FillDeeporange600"
                  >
                    <div className="bg-transparent cursor-pointer font-bold text-[15px] text-left text-white_A700">
                      Ready Start
                    </div>
                  </Button>
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Button
                      className="flex h-[48px] items-center justify-center rounded-radius50 w-[48px]"
                      size="mdIcn"
                      variant="icbOutlineCyan4003d"
                    >
                      <Img
                        src="images/img_play.svg"
                        className="h-[24px]"
                        alt="play"
                      />
                    </Button>
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Watch Video
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_divider.svg"
                  className="h-[1px] w-[100%]"
                  alt="Divider"
                />
                <List
                  className="sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[80px] grid sm:grid-cols-1 grid-cols-3 justify-start pt-[48px] w-[100%]"
                  orientation="horizontal"
                >
                  <div className="md:h-[72px] sm:h-[72px] h-[86px] relative w-[100%]">
                    <div className="absolute bg-amber_500_3d h-[24px] left-[0] rounded-radius50 top-[9%] w-[24px]"></div>
                    <div className="absolute flex flex-col gap-[4px] h-[max-content] inset-y-[0] items-start justify-end my-[auto] right-[0] w-[auto]">
                      <Text
                        className="font-barlow text-bluegray_900 text-center w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        14k+
                      </Text>
                      <Text
                        className="font-poppins not-italic text-bluegray_500 text-center w-[auto]"
                        variant="body1"
                      >
                        Learners
                      </Text>
                    </div>
                  </div>
                  <div className="md:h-[72px] sm:h-[72px] h-[86px] relative w-[100%]">
                    <div className="absolute bg-red_500_3d h-[24px] left-[0] rounded-radius50 top-[9%] w-[24px]"></div>
                    <div className="absolute flex flex-col gap-[4px] h-[max-content] inset-[0] items-start justify-end m-[auto] w-[auto]">
                      <Text
                        className="font-barlow text-bluegray_900 text-center w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        1,05k+
                      </Text>
                      <Text
                        className="font-poppins not-italic text-bluegray_500 text-center w-[auto]"
                        variant="body1"
                      >
                        Courses
                      </Text>
                    </div>
                  </div>
                  <div className="md:h-[72px] sm:h-[72px] h-[86px] relative w-[100%]">
                    <div className="absolute bg-green_A400_3d h-[24px] left-[0] rounded-radius50 top-[9%] w-[24px]"></div>
                    <div className="absolute flex flex-col gap-[4px] h-[max-content] inset-y-[0] items-start justify-end my-[auto] right-[0] w-[86px]">
                      <Text
                        className="font-barlow text-bluegray_900 text-center w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        59k+
                      </Text>
                      <Text
                        className="font-poppins not-italic text-bluegray_500 text-center w-[auto]"
                        variant="body1"
                      >
                        Graduates
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col h-[662px] md:h-[auto] sm:h-[auto] items-center justify-start md:w-[100%] sm:w-[100%] w-[662px]">
                <div className="md:h-[584px] sm:h-[584px] h-[660px] relative md:w-[100%] sm:w-[100%] w-[96%]">
                  <div className="absolute md:h-[584px] sm:h-[584px] h-[641px] inset-[0] justify-center m-[auto] w-[100%]">
                    <div className="absolute md:h-[491px] sm:h-[491px] h-[517px] left-[0] top-[0] sm:w-[100%] w-[94%]">
                      <Img
                        src="images/img_backgroundpattern01.png"
                        className="absolute bottom-[0] h-[491px] object-cover right-[0] w-[auto]"
                        alt="backgroundpatternOne"
                      />
                      <Img
                        src="images/img_backgroundpattern02.svg"
                        className="absolute h-[491px] left-[0] top-[0] w-[auto]"
                        alt="backgroundpatternTwo"
                      />
                    </div>
                    <Img
                      src="images/img_image7.png"
                      className="absolute bottom-[18%] h-[60px] left-[16%] object-cover w-[9%]"
                      alt="imageSeven"
                    />
                    <Img
                      src="images/img_shape.png"
                      className="absolute bottom-[0] h-[584px] object-cover right-[0] w-[584px]"
                      alt="shape"
                    />
                  </div>
                  <div className="absolute md:h-[540px] sm:h-[540px] h-[641px] inset-y-[0] my-[auto] right-[4%] sm:w-[100%] w-[86%]">
                    <div className="absolute md:h-[540px] sm:h-[540px] h-[626px] inset-[0] justify-center m-[auto] sm:w-[100%] w-[79%]">
                      <div className="absolute bottom-[0] h-[540px] md:h-[auto] sm:h-[auto] inset-x-[0] mx-[auto] w-[100%]">
                        <Img
                          src="images/img_img.png"
                          className="h-[540px] m-[auto] object-cover rounded-radius80 w-[100%]"
                          alt="IMG"
                        />
                        <Img
                          src="images/img_.png"
                          className="absolute bottom-[25%] h-[110px] object-cover right-[32%] w-[110px]"
                          alt="One"
                        />
                      </div>
                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
                        <Img
                          src="images/img_img_286x422.png"
                          className="h-[286px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                          alt="IMG One"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img__green_a400.png"
                      className="absolute h-[110px] object-cover right-[6%] top-[13%] w-[110px]"
                      alt="Two"
                    />
                    <Img
                      src="images/img__purple_500.png"
                      className="absolute bottom-[37%] h-[110px] object-cover right-[9%] w-[110px]"
                      alt="Three"
                    />
                    <Img
                      src="images/img__indigo_500.png"
                      className="absolute h-[110px] left-[11%] object-cover top-[31%] w-[110px]"
                      alt="Four"
                    />
                    <div className="absolute bg-white_A700 bottom-[23%] flex flex-row gap-[12px] items-center justify-end left-[7%] p-[12px] rounded-radius24 shadow-bs1 w-[39%]">
                      <Img
                        src="images/img_image1.png"
                        className="h-[56px] md:h-[auto] sm:h-[auto] object-cover w-[56px]"
                        alt="imageOne"
                      />
                      <Text
                        className="text-blue_500 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Python
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_image6.png"
                    className="absolute h-[75px] left-[0] object-cover top-[33%] w-[10%]"
                    alt="imageSix"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[64px] items-center justify-start max-w-[1440px] px-[144px] sm:px-[20px] md:px-[40px] py-[80px] w-[100%]">
          <div className="flex flex-col gap-[24px] items-center justify-start sm:w-[100%] w-[auto]">
            <Text
              className="font-barlow text-bluegray_900 text-center w-[auto]"
              as="h2"
              variant="h2"
            >
              We Work With
            </Text>
            <Text
              className="font-poppins not-italic text-bluegray_500 text-center w-[auto]"
              variant="body1"
            >
              Quisque aliquet, libero consequat elementum convallis.
            </Text>
          </div>
          <div className="md:gap-[40px] sm:gap-[40px] gap-[64px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-center max-w-[956px] mx-[auto] w-[100%]">
            <Img
              src="images/img_brandsbrandspotify.svg"
              className="flex-1 h-[32px] w-[100%]"
              alt="brandsbrandspotify"
            />
            <Img
              src="images/img_brandsbrandslack.svg"
              className="flex-1 h-[32px] w-[100%]"
              alt="brandsbrandslack"
            />
            <Img
              src="images/img_brandsbrandnetflix.svg"
              className="flex-1 h-[32px] w-[100%]"
              alt="brandsbrandnetflix"
            />
            <Img
              src="images/img_brandsbrandheroku.svg"
              className="flex-1 h-[32px] w-[100%]"
              alt="brandsbrandheroku"
            />
            <Img
              src="images/img_brandsbrandvimeo.svg"
              className="flex-1 h-[32px] w-[100%]"
              alt="brandsbrandvimeo"
            />
            <Img
              src="images/img_brandsbrandairbnb.svg"
              className="flex-1 h-[32px] w-[100%]"
              alt="brandsbrandairbnb"
            />
          </div>
        </div>
        <div className="bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[80px] items-start justify-start max-w-[1440px] px-[144px] sm:px-[20px] md:px-[40px] py-[120px] w-[100%]">
          <Text
            className="font-semibold text-deep_orange_600 text-left uppercase w-[auto]"
            variant="body5"
          >
            Nullam accumsan lorem in dui.
          </Text>
          <div className="flex md:flex-col sm:flex-col flex-row gap-[122px] md:gap-[40px] sm:gap-[40px] items-center justify-between max-w-[1152px] mx-[auto] w-[100%]">
            <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
              <Img
                src="images/img_img_621x466.png"
                className="h-[621px] md:h-[auto] sm:h-[auto] object-cover rounded-radius16 w-[100%]"
                alt="IMG Two"
              />
            </div>
            <div className="flex flex-1 flex-col md:gap-[40px] sm:gap-[40px] gap-[80px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
              <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                <Text
                  className="font-barlow leading-[54.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[564px] text-bluegray_900 text-left"
                  as="h3"
                  variant="h3"
                >
                  Phasellus gravida semper nisi. Vestibulum rutrum, mi{" "}
                </Text>
                <Text
                  className="font-poppins leading-[28.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[564px] not-italic text-bluegray_500 text-left"
                  variant="body1"
                >
                  Curabitur a felis in nunc fringilla tristique. Fusce egestas
                  elit eget lorem. Etiam vitae tortor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  hymenaeos.
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[80px] items-start justify-start w-[100%]">
                <div className="flex flex-1 flex-col gap-[24px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <div className="bg-deep_orange_600 h-[3px] rounded-radius1 w-[10%]"></div>
                  <Text
                    className="font-normal leading-[26.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[242px] not-italic text-bluegray_500 text-left"
                    variant="body3"
                  >
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis{" "}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[24px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <div className="bg-deep_orange_600 h-[3px] rounded-radius1 w-[10%]"></div>
                  <Text
                    className="font-normal leading-[26.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[242px] not-italic text-bluegray_500 text-left"
                    variant="body3"
                  >
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis{" "}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[80px] items-start justify-start pb-[120px] pt-[80px] px-[144px] sm:px-[20px] md:px-[40px] md:w-[100%] sm:w-[100%] w-[auto]">
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-end justify-between max-w-[1152px] mx-[auto] w-[100%]">
            <div className="flex md:flex-1 sm:flex-1 flex-col gap-[24px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
              <Text
                className="font-barlow text-bluegray_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Featured Courses
              </Text>
              <Text
                className="font-poppins not-italic text-bluegray_500 text-left w-[auto]"
                variant="body1"
              >
                Nullam accumsan lorem in dui. Praesent ac massa at ligula
                laoreet iaculis.
              </Text>
            </div>
            <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
              <Button className="flex h-[36px] items-center justify-center rounded-radius50 w-[36px]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="h-[20px]"
                  alt="arrowleft"
                />
              </Button>
              <Button className="flex h-[36px] items-center justify-center rounded-radius50 w-[36px]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="h-[20px]"
                  alt="arrowright One"
                />
              </Button>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-[32px] sm:gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-between max-w-[1152px] mx-[auto] w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-col h-[703px] md:h-[auto] sm:h-[auto] items-center justify-start rounded-radius16 shadow-bs2 w-[362px]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <Img
                    src="images/img_img_348x362.png"
                    className="h-[348px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                    alt="IMG Three"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                <div className="flex flex-row font-poppins items-center justify-between w-[100%]">
                  <Text
                    className="font-semibold text-center text-deep_orange_600 uppercase w-[auto]"
                    variant="body5"
                  >
                    Management
                  </Text>
                  <div className="flex flex-col font-barlow items-start justify-start w-[auto]">
                    <Text
                      className="font-bold text-bluegray_900 text-right w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      {" "}
                      $39
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-barlow leading-[28.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[314px] text-bluegray_900 text-left"
                  as="h6"
                  variant="h6"
                >
                  Don&#39;t Waste Time! 7 Facts Until You Reach Your Event
                </Text>
                <div className="flex flex-row font-poppins gap-[12px] items-center justify-start w-[auto]">
                  <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[20px] w-[20px]"
                      alt="star"
                    />
                    <Text
                      className="font-barlow text-bluegray_900 text-center w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      4.8
                    </Text>
                    <Text
                      className="font-normal font-poppins not-italic text-bluegray_500 text-center w-[auto]"
                      variant="body3"
                    >
                      (1,089)
                    </Text>
                  </div>
                  <Line className="bg-bluegray_300_3d h-[20px] w-[1px]" />
                  <div className="flex flex-row items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-bluegray_900 text-center w-[auto]"
                      variant="body3"
                    >
                      180k
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                      variant="body3"
                    >
                      {" "}
                      students
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-poppins gap-[8px] items-center justify-start w-[auto]">
                  <div className="flex flex-col h-[40px] items-center justify-start rounded-radius50 w-[40px]">
                    <Img
                      src="images/img_img_40x40.png"
                      className="h-[40px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[40px]"
                      alt="img One"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                      variant="body3"
                    >
                      Bessie Cooper
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_divider_bluegray_300.svg"
                className="h-[1px] w-[322px]"
                alt="Divider One"
              />
              <div className="bg-white_A700 flex flex-row gap-[20px] items-center justify-start px-[20px] py-[24px] w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_clock.svg"
                    className="h-[20px] w-[20px]"
                    alt="clock"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_300 text-center w-[auto]"
                    variant="body3"
                  >
                    100 hours
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_trash.svg"
                    className="h-[20px] w-[20px]"
                    alt="trash"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_300 text-center w-[auto]"
                    variant="body3"
                  >
                    Beginner
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col h-[703px] md:h-[auto] sm:h-[auto] items-center justify-start rounded-radius16 shadow-bs2 w-[362px]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <Img
                    src="images/img_img_1.png"
                    className="h-[348px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                    alt="IMG Four"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                <div className="flex flex-row font-poppins items-center justify-between w-[100%]">
                  <Text
                    className="font-semibold text-center text-deep_orange_600 uppercase w-[auto]"
                    variant="body5"
                  >
                    Management
                  </Text>
                  <div className="flex flex-col font-barlow items-start justify-start w-[auto]">
                    <Text
                      className="font-bold text-bluegray_900 text-right w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      {" "}
                      $99
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-barlow leading-[28.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[314px] text-bluegray_900 text-left"
                  as="h6"
                  variant="h6"
                >
                  The 7 Most Successful Event Companies In Region
                </Text>
                <div className="flex flex-row font-poppins gap-[12px] items-center justify-start w-[auto]">
                  <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[20px] w-[20px]"
                      alt="star One"
                    />
                    <Text
                      className="font-barlow text-bluegray_900 text-center w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      4.8
                    </Text>
                    <Text
                      className="font-normal font-poppins not-italic text-bluegray_500 text-center w-[auto]"
                      variant="body3"
                    >
                      (1,089)
                    </Text>
                  </div>
                  <Line className="bg-bluegray_300_3d h-[20px] w-[1px]" />
                  <div className="flex flex-row items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-bluegray_900 text-center w-[auto]"
                      variant="body3"
                    >
                      180k
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                      variant="body3"
                    >
                      {" "}
                      students
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-poppins gap-[8px] items-center justify-start w-[auto]">
                  <div className="flex flex-col h-[40px] items-center justify-start rounded-radius50 w-[40px]">
                    <Img
                      src="images/img_img_40x40.png"
                      className="h-[40px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[40px]"
                      alt="img One One"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                      variant="body3"
                    >
                      Annette Black
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_divider_bluegray_300.svg"
                className="h-[1px] w-[322px]"
                alt="Divider Two"
              />
              <div className="bg-white_A700 flex flex-row gap-[20px] items-center justify-start px-[20px] py-[24px] w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_clock.svg"
                    className="h-[20px] w-[20px]"
                    alt="clock One"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_300 text-center w-[auto]"
                    variant="body3"
                  >
                    100 hours
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_trash.svg"
                    className="h-[20px] w-[20px]"
                    alt="trash One"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_300 text-center w-[auto]"
                    variant="body3"
                  >
                    Beginner
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col h-[703px] md:h-[auto] sm:h-[auto] items-center justify-start rounded-radius16 shadow-bs2 w-[362px]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="h-[348px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                  <Img
                    src="images/img_img_2.png"
                    className="h-[348px] m-[auto] object-cover w-[100%]"
                    alt="IMG Five"
                  />
                  <div className="absolute flex flex-col h-[44px] md:h-[auto] sm:h-[auto] items-start justify-end left-[0] p-[12px] top-[0] w-[200px]">
                    <Text
                      className="bg-amber_400 font-semibold justify-center px-[8px] rounded-radius6 text-bluegray_900 text-center w-[auto]"
                      variant="body5"
                    >
                      BEST SELLER
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                <div className="flex flex-row font-poppins items-center justify-between w-[100%]">
                  <Text
                    className="font-semibold text-center text-deep_orange_600 uppercase w-[auto]"
                    variant="body5"
                  >
                    Management
                  </Text>
                  <div className="flex flex-row font-barlow items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold line-through text-bluegray_300 text-right w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      $99
                    </Text>
                    <Text
                      className="font-bold text-bluegray_900 text-right w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      {" "}
                      $59
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-barlow leading-[28.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[314px] text-bluegray_900 text-left"
                  as="h6"
                  variant="h6"
                >
                  Think Your Event Is Safe? 7 Ways You Can Lose It Today
                </Text>
                <div className="flex flex-row font-poppins gap-[12px] items-center justify-start w-[auto]">
                  <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_star.svg"
                      className="h-[20px] w-[20px]"
                      alt="star Two"
                    />
                    <Text
                      className="font-barlow text-bluegray_900 text-center w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      4.8
                    </Text>
                    <Text
                      className="font-normal font-poppins not-italic text-bluegray_500 text-center w-[auto]"
                      variant="body3"
                    >
                      (1,089)
                    </Text>
                  </div>
                  <Line className="bg-bluegray_300_3d h-[20px] w-[1px]" />
                  <div className="flex flex-row items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-bluegray_900 text-center w-[auto]"
                      variant="body3"
                    >
                      180k
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                      variant="body3"
                    >
                      {" "}
                      students
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-poppins gap-[8px] items-center justify-start w-[auto]">
                  <div className="flex flex-col h-[40px] items-center justify-start rounded-radius50 w-[40px]">
                    <Img
                      src="images/img_img_40x40.png"
                      className="h-[40px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[40px]"
                      alt="img One Two"
                    />
                  </div>
                  <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                      variant="body3"
                    >
                      Brooklyn Simmons
                    </Text>
                    <a
                      className="font-normal not-italic text-[14px] text-bluegray_500 text-center underline w-[auto]"
                      href="#"
                    >
                      +10 teachers
                    </a>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_divider_bluegray_300.svg"
                className="h-[1px] w-[322px]"
                alt="Divider Three"
              />
              <div className="bg-white_A700 flex flex-row gap-[20px] items-center justify-start px-[20px] py-[24px] w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_clock.svg"
                    className="h-[20px] w-[20px]"
                    alt="clock Two"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_300 text-center w-[auto]"
                    variant="body3"
                  >
                    100 hours
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_trash.svg"
                    className="h-[20px] w-[20px]"
                    alt="trash Two"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_300 text-center w-[auto]"
                    variant="body3"
                  >
                    Beginner
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
        <div className="bg-gray_50 flex md:flex-col sm:flex-col flex-row gap-[122px] md:gap-[40px] sm:gap-[40px] items-start justify-start px-[144px] sm:px-[20px] md:px-[40px] py-[120px] md:w-[100%] sm:w-[100%] w-[auto]">
          <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
            <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
              <Text
                className="font-barlow leading-[64.00px] text-bluegray_900 text-left"
                as="h2"
                variant="h2"
              >
                Featured
                <br />
                Category
              </Text>
              <Text
                className="font-poppins leading-[28.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[368px] not-italic text-bluegray_500 text-left"
                variant="body1"
              >
                Since wire-frame renderings are relatively simple and fast to
                calculate, they are often used in cases
              </Text>
            </div>
            <Button
              className="cursor-pointer font-semibold min-w-[144px] text-[15px] text-center text-white_A700 w-[auto]"
              shape="RoundedBorder8"
              size="md"
              variant="FillDeeporange600"
            >
              Explore more
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[662px] w-[100%]">
            <div className="md:gap-[20px] sm:gap-[20px] gap-[23px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
              <div className="border hover:border-0 border-bluegray_300_3d border-solid hover:cursor-pointer flex flex-1 flex-col gap-[8px] items-start justify-start p-[24px] sm:px-[20px] rounded-radius12 md:self-stretch sm:self-stretch hover:shadow-bs3 hover:w-[100%] w-[100%]">
                <Text
                  className="font-barlow text-bluegray_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Python
                </Text>
                <Text
                  className="font-poppins not-italic text-bluegray_500 text-left w-[auto]"
                  variant="body4"
                >
                  28,965,389 students
                </Text>
              </div>
              <div className="border hover:border-0 border-bluegray_300_3d border-solid hover:cursor-pointer flex flex-1 flex-col gap-[8px] items-start justify-start p-[24px] sm:px-[20px] rounded-radius12 md:self-stretch sm:self-stretch hover:shadow-bs3 hover:w-[100%] w-[100%]">
                <Text
                  className="font-barlow text-bluegray_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Management
                </Text>
                <Text
                  className="font-poppins not-italic text-bluegray_500 text-left w-[auto]"
                  variant="body4"
                >
                  9,506,045 students
                </Text>
              </div>
              <div className="border hover:border-0 border-bluegray_300_3d border-solid hover:cursor-pointer flex flex-1 flex-col gap-[8px] items-start justify-start p-[24px] sm:px-[20px] rounded-radius12 md:self-stretch sm:self-stretch hover:shadow-bs3 hover:w-[100%] w-[100%]">
                <Text
                  className="font-barlow text-bluegray_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Web Development
                </Text>
                <Text
                  className="font-poppins not-italic text-bluegray_500 text-left w-[auto]"
                  variant="body4"
                >
                  9,506,045 students
                </Text>
              </div>
              <div className="border hover:border-0 border-bluegray_300_3d border-solid hover:cursor-pointer flex flex-1 flex-col gap-[8px] items-start justify-start p-[24px] sm:px-[20px] rounded-radius12 md:self-stretch sm:self-stretch hover:shadow-bs3 hover:w-[100%] w-[100%]">
                <Text
                  className="font-barlow text-bluegray_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Photoshop
                </Text>
                <Text
                  className="font-poppins not-italic text-bluegray_500 text-left w-[auto]"
                  variant="body4"
                >
                  28,965,389 students
                </Text>
              </div>
              <div className="bg-white_A700 border hover:border-0 border-bluegray_300_3d border-solid hover:cursor-pointer flex flex-1 flex-col gap-[8px] items-start justify-start p-[24px] sm:px-[20px] rounded-radius12 md:self-stretch sm:self-stretch hover:shadow-bs3 shadow-bs3 hover:w-[100%] w-[100%]">
                <Text
                  className="font-barlow text-deep_orange_600 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Machine Learning
                </Text>
                <Text
                  className="font-poppins not-italic text-bluegray_500 text-left w-[auto]"
                  variant="body4"
                >
                  9,506,045 students
                </Text>
              </div>
              <div className="border hover:border-0 border-bluegray_300_3d border-solid hover:cursor-pointer flex flex-1 flex-col gap-[8px] items-start justify-start p-[24px] sm:px-[20px] rounded-radius12 md:self-stretch sm:self-stretch hover:shadow-bs3 hover:w-[100%] w-[100%]">
                <Text
                  className="font-barlow text-bluegray_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Cyber Security
                </Text>
                <Text
                  className="font-poppins not-italic text-bluegray_500 text-left w-[auto]"
                  variant="body4"
                >
                  9,506,045 students
                </Text>
              </div>
              <div className="border hover:border-0 border-bluegray_300_3d border-solid hover:cursor-pointer flex flex-1 flex-col gap-[8px] items-start justify-start p-[24px] sm:px-[20px] rounded-radius12 md:self-stretch sm:self-stretch hover:shadow-bs3 hover:w-[100%] w-[100%]">
                <Text
                  className="font-barlow text-bluegray_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Marketing
                </Text>
                <Text
                  className="font-poppins not-italic text-bluegray_500 text-left w-[auto]"
                  variant="body4"
                >
                  28,965,389 students
                </Text>
              </div>
              <div className="border hover:border-0 border-bluegray_300_3d border-solid hover:cursor-pointer flex flex-1 flex-col gap-[8px] items-start justify-start p-[24px] sm:px-[20px] rounded-radius12 md:self-stretch sm:self-stretch hover:shadow-bs3 hover:w-[100%] w-[100%]">
                <Text
                  className="font-barlow text-bluegray_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Machine Learning
                </Text>
                <Text
                  className="font-poppins not-italic text-bluegray_500 text-left w-[auto]"
                  variant="body4"
                >
                  9,506,045 students
                </Text>
              </div>
              <div className="border hover:border-0 border-bluegray_300_3d border-solid hover:cursor-pointer flex flex-1 flex-col gap-[8px] items-start justify-start p-[24px] sm:px-[20px] rounded-radius12 md:self-stretch sm:self-stretch hover:shadow-bs3 hover:w-[100%] w-[100%]">
                <Text
                  className="font-barlow text-bluegray_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Cyber Security
                </Text>
                <Text
                  className="font-poppins not-italic text-bluegray_500 text-left w-[auto]"
                  variant="body4"
                >
                  9,506,045 students
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[80px] items-center justify-start max-w-[1440px] px-[144px] sm:px-[20px] md:px-[40px] py-[120px] w-[100%]">
          <div className="flex flex-col gap-[24px] items-center justify-start sm:w-[100%] w-[564px]">
            <Text
              className="font-barlow text-bluegray_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Meet Our Teachers
            </Text>
            <Text
              className="font-poppins leading-[28.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[564px] not-italic text-bluegray_500 text-center"
              variant="body1"
            >
              Since wire-frame renderings are relatively simple and fast to
              calculate, they are often used in cases
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1152px] mx-[auto] w-[100%]"
            orientation="horizontal"
          >
            <div className="border border-bluegray_300_14 border-solid flex flex-1 md:flex-1 sm:flex-1 flex-col h-[362px] md:h-[auto] sm:h-[auto] items-start justify-start rounded-radius16 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="bg-white_A700 flex flex-col gap-[4px] items-center justify-start pb-[12px] pt-[24px] sm:px-[20px] px-[24px] w-[100%]">
                <Text
                  className="font-barlow text-bluegray_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Eleanor Pena
                </Text>
                <Text
                  className="font-poppins not-italic text-bluegray_300 text-left w-[auto]"
                  variant="body4"
                >
                  UI Designer
                </Text>
              </div>
              <div className="flex flex-col h-[270px] items-center justify-start w-[270px]">
                <div className="h-[270px] md:h-[auto] sm:h-[auto] relative w-[270px]">
                  <Img
                    src="images/img_img_270x270.png"
                    className="h-[270px] m-[auto] object-cover w-[270px]"
                    alt="IMG Six"
                  />
                  <Img
                    src="images/img_shape_white_a700.svg"
                    className="absolute h-[8px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                    alt="SHAPE One"
                  />
                </div>
              </div>
            </div>
            <div className="border border-bluegray_300_14 border-solid flex flex-1 md:flex-1 sm:flex-1 flex-col h-[362px] md:h-[auto] sm:h-[auto] items-start justify-start rounded-radius16 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="bg-white_A700 flex flex-col gap-[4px] items-center justify-start pb-[12px] pt-[24px] sm:px-[20px] px-[24px] w-[100%]">
                <Text
                  className="font-barlow text-bluegray_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Kathryn Murphy
                </Text>
                <Text
                  className="font-poppins not-italic text-bluegray_300 text-left w-[auto]"
                  variant="body4"
                >
                  Hr Manager
                </Text>
              </div>
              <div className="flex flex-col h-[270px] items-center justify-start w-[270px]">
                <div className="h-[270px] md:h-[auto] sm:h-[auto] relative w-[270px]">
                  <Img
                    src="images/img_img_3.png"
                    className="h-[270px] m-[auto] object-cover w-[270px]"
                    alt="IMG Seven"
                  />
                  <Img
                    src="images/img_shape_white_a700.svg"
                    className="absolute h-[8px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                    alt="SHAPE Two"
                  />
                </div>
              </div>
            </div>
            <div className="border border-bluegray_300_14 border-solid flex flex-1 md:flex-1 sm:flex-1 flex-col h-[362px] md:h-[auto] sm:h-[auto] items-start justify-start rounded-radius16 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="bg-white_A700 flex flex-col gap-[4px] items-center justify-start pb-[12px] pt-[24px] sm:px-[20px] px-[24px] w-[100%]">
                <Text
                  className="font-barlow text-bluegray_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Dianne Russell
                </Text>
                <Text
                  className="font-poppins not-italic text-bluegray_300 text-left w-[auto]"
                  variant="body4"
                >
                  Leader
                </Text>
              </div>
              <div className="flex flex-col h-[270px] items-center justify-start w-[270px]">
                <div className="h-[270px] md:h-[auto] sm:h-[auto] relative w-[270px]">
                  <Img
                    src="images/img_img_4.png"
                    className="h-[270px] m-[auto] object-cover w-[270px]"
                    alt="IMG Eight"
                  />
                  <Img
                    src="images/img_shape_white_a700.svg"
                    className="absolute h-[8px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                    alt="SHAPE Three"
                  />
                </div>
              </div>
            </div>
            <div className="border border-bluegray_300_14 border-solid flex flex-1 md:flex-1 sm:flex-1 flex-col h-[362px] md:h-[auto] sm:h-[auto] items-start justify-start rounded-radius16 shadow-bs2 md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="bg-white_A700 flex flex-col gap-[4px] items-center justify-start pb-[12px] pt-[24px] sm:px-[20px] px-[24px] w-[100%]">
                <Text
                  className="font-barlow text-bluegray_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Esther Howard
                </Text>
                <Text
                  className="font-poppins not-italic text-bluegray_300 text-left w-[auto]"
                  variant="body4"
                >
                  Project Manager
                </Text>
              </div>
              <div className="flex flex-col h-[270px] items-center justify-start w-[270px]">
                <div className="h-[270px] md:h-[auto] sm:h-[auto] relative w-[270px]">
                  <Img
                    src="images/img_img_5.png"
                    className="h-[270px] m-[auto] object-cover w-[270px]"
                    alt="IMG Nine"
                  />
                  <Img
                    src="images/img_shape_white_a700.svg"
                    className="absolute h-[8px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                    alt="SHAPE Four"
                  />
                </div>
              </div>
            </div>
          </List>
          <Button
            className="cursor-pointer font-semibold min-w-[178px] text-[15px] text-bluegray_900 text-center w-[auto]"
            shape="RoundedBorder8"
            size="md"
            variant="OutlineBluegray30051"
          >
            View All Teachers
          </Button>
        </div>
        <div className="bg-gray_50 flex flex-col font-barlow md:gap-[40px] sm:gap-[40px] gap-[80px] items-center justify-start px-[144px] sm:px-[20px] md:px-[40px] py-[120px] md:w-[100%] sm:w-[100%] w-[auto]">
          <Text
            className="text-bluegray_900 text-left w-[auto]"
            as="h2"
            variant="h2"
          >
            What Our Students Say
          </Text>
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between max-w-[1152px] mx-[auto] w-[100%]">
            <Button className="flex h-[40px] items-center justify-center w-[40px]">
              <Img
                src="images/img_arrowleft.svg"
                className="h-[24px]"
                alt="arrowleft One"
              />
            </Button>
            <div className="flex sm:flex-1 flex-col items-center justify-start sm:w-[100%] w-[auto]">
              <div className="flex flex-col items-start justify-start pb-[24px] w-[auto]">
                <Img
                  src="images/img_calculator.svg"
                  className="h-[48px] w-[48px]"
                  alt="calculator"
                />
              </div>
              <Text
                className="font-medium leading-[36.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[564px] text-bluegray_900 text-center"
                as="h4"
                variant="h4"
              >
                Amazing experience i love it a lot. Thanks to the team that
                dreams come true, great! I appreciate there attitude and
                approach. Truly professionals!
              </Text>
              <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start pb-[24px] pt-[40px] sm:w-[100%] w-[auto]">
                <div className="flex flex-row gap-[40px] items-start justify-start w-[auto]">
                  <div className="flex flex-col h-[48px] items-center justify-start rounded-radius50 w-[48px]">
                    <Img
                      src="images/img_img_48x48.png"
                      className="h-[48px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[48px]"
                      alt="img Ten"
                    />
                  </div>
                  <div className="flex flex-col h-[48px] items-center justify-start rounded-radius50 w-[48px]">
                    <Img
                      src="images/img_img_6.png"
                      className="h-[48px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[48px]"
                      alt="img Eleven"
                    />
                  </div>
                </div>
                <div className="flex flex-col h-[96px] items-center justify-start rounded-radius50 w-[96px]">
                  <Img
                    src="images/img_img_96x96.png"
                    className="h-[96px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[96px]"
                    alt="img Twelve"
                  />
                </div>
                <div className="flex flex-row gap-[40px] items-start justify-start w-[auto]">
                  <div className="flex flex-col h-[48px] items-center justify-start rounded-radius50 w-[48px]">
                    <Img
                      src="images/img_img_7.png"
                      className="h-[48px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[48px]"
                      alt="img Thirteen"
                    />
                  </div>
                  <div className="flex flex-col h-[48px] items-center justify-start rounded-radius50 w-[48px]">
                    <Img
                      src="images/img_img_8.png"
                      className="h-[48px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[48px]"
                      alt="img Fourteen"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-center justify-start w-[auto]">
                <Text
                  className="font-barlow text-bluegray_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Robert Fox
                </Text>
                <Text
                  className="font-poppins not-italic text-bluegray_500 text-left w-[auto]"
                  variant="body4"
                >
                  Designer
                </Text>
              </div>
            </div>
            <Button className="flex h-[40px] items-center justify-center w-[40px]">
              <Img
                src="images/img_arrowleft.svg"
                className="h-[24px]"
                alt="arrowright Two"
              />
            </Button>
          </div>
        </div>
        <div className="bg-white_A700 flex flex-col font-barlow md:gap-[40px] sm:gap-[40px] gap-[80px] items-start justify-start max-w-[1440px] px-[144px] sm:px-[20px] md:px-[40px] py-[120px] w-[100%]">
          <div className="flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between max-w-[1152px] mx-[auto] pb-[40px] w-[100%]">
            <Text
              className="text-bluegray_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Latest Posts
            </Text>
            <div className="flex flex-row font-poppins gap-[8px] items-center justify-center px-[12px] py-[11px] rounded-radius8 w-[auto]">
              <Text
                className="text-deep_orange_600 text-left w-[auto]"
                variant="body2"
              >
                View All
              </Text>
              <Img
                src="images/img_arrowright_deep_orange_600.svg"
                className="h-[22px] w-[22px]"
                alt="arrowright Three"
              />
            </div>
          </div>
          <List
            className="sm:flex-col flex-row font-poppins gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1150px] mx-[auto] w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 border border-bluegray_300_3d border-solid flex flex-col items-start justify-start rounded-radius16 w-[362px]">
              <div className="flex flex-col h-[362px] items-center justify-start w-[362px]">
                <Img
                  src="images/img_img_362x362.png"
                  className="h-[362px] md:h-[auto] sm:h-[auto] object-cover w-[362px]"
                  alt="IMG Fifteen"
                />
              </div>
              <div className="flex flex-row gap-[24px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col items-center justify-start w-[auto]">
                  <Text
                    className="font-poppins font-semibold text-bluegray_900 text-center w-[auto]"
                    variant="body3"
                  >
                    Jul
                  </Text>
                  <div className="flex flex-col items-start justify-start pb-[4px] pt-[8px] w-[56px]">
                    <Img
                      src="images/img_divider_bluegray_300_1x56.svg"
                      className="h-[1px] w-[100%]"
                      alt="Divider Four"
                    />
                  </div>
                  <Text
                    className="font-barlow text-bluegray_900 text-center w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    12
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[20px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-barlow leading-[30.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[234px] text-bluegray_900 text-left"
                      as="h5"
                      variant="h5"
                    >
                      The 7 Best Things About Event
                    </Text>
                    <Text
                      className="font-normal font-poppins leading-[26.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[234px] not-italic text-bluegray_500 text-left"
                      variant="body3"
                    >
                      Moment in the life of any aspiring astronomer of that it
                      is time to.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <div className="flex flex-col h-[40px] items-center justify-start rounded-radius50 w-[40px]">
                      <Img
                        src="images/img_img_9.png"
                        className="h-[40px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[40px]"
                        alt="img One Three"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body3"
                      >
                        Arlene McCoy
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                        variant="body5"
                      >
                        8 min read
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 border border-bluegray_300_3d border-solid flex flex-col items-start justify-start rounded-radius16 w-[362px]">
              <div className="flex flex-col h-[362px] items-center justify-start w-[362px]">
                <Img
                  src="images/img_img_10.png"
                  className="h-[362px] md:h-[auto] sm:h-[auto] object-cover w-[362px]"
                  alt="IMG Sixteen"
                />
              </div>
              <div className="flex flex-row gap-[24px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col items-center justify-start w-[auto]">
                  <Text
                    className="font-poppins font-semibold text-bluegray_900 text-center w-[auto]"
                    variant="body3"
                  >
                    Sep
                  </Text>
                  <div className="flex flex-col items-start justify-start pb-[4px] pt-[8px] w-[56px]">
                    <Img
                      src="images/img_divider_bluegray_300_1x56.svg"
                      className="h-[1px] w-[100%]"
                      alt="Divider Five"
                    />
                  </div>
                  <Text
                    className="font-barlow text-bluegray_900 text-center w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    24
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[20px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-barlow leading-[30.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[234px] text-bluegray_900 text-left"
                      as="h5"
                      variant="h5"
                    >
                      Event Is Your Worst Enemy. 7 Ways To Defeat It
                    </Text>
                    <Text
                      className="font-normal font-poppins leading-[26.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[234px] not-italic text-bluegray_500 text-left"
                      variant="body3"
                    >
                      Moment in the life of any aspiring astronomer of that it
                      is time to.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <div className="flex flex-col h-[40px] items-center justify-start rounded-radius50 w-[40px]">
                      <Img
                        src="images/img_img_40x40.png"
                        className="h-[40px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[40px]"
                        alt="img One Four"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body3"
                      >
                        Cody Fisher
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                        variant="body5"
                      >
                        8 min read
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 border border-bluegray_300_3d border-solid flex flex-col items-start justify-start rounded-radius16 w-[362px]">
              <div className="flex flex-col h-[362px] items-center justify-start w-[362px]">
                <Img
                  src="images/img_img_11.png"
                  className="h-[362px] md:h-[auto] sm:h-[auto] object-cover w-[362px]"
                  alt="IMG Seventeen"
                />
              </div>
              <div className="flex flex-row gap-[24px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col items-center justify-start w-[auto]">
                  <Text
                    className="font-poppins font-semibold text-bluegray_900 text-center w-[auto]"
                    variant="body3"
                  >
                    Dec
                  </Text>
                  <div className="flex flex-col items-start justify-start pb-[4px] pt-[8px] w-[56px]">
                    <Img
                      src="images/img_divider_bluegray_300_1x56.svg"
                      className="h-[1px] w-[100%]"
                      alt="Divider Six"
                    />
                  </div>
                  <Text
                    className="font-barlow text-bluegray_900 text-center w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    29
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[20px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-barlow leading-[30.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[234px] text-bluegray_900 text-left"
                      as="h5"
                      variant="h5"
                    >
                      Thinking About Event? 7 Reasons Why It&#39;s ...
                    </Text>
                    <Text
                      className="font-normal font-poppins leading-[26.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[234px] not-italic text-bluegray_500 text-left"
                      variant="body3"
                    >
                      Moment in the life of any aspiring astronomer of that it
                      is time to.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <div className="flex flex-col h-[40px] items-center justify-start rounded-radius50 w-[40px]">
                      <Img
                        src="images/img_img_12.png"
                        className="h-[40px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[40px]"
                        alt="img One Five"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body3"
                      >
                        Marvin McKinney
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                        variant="body5"
                      >
                        8 min read
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row font-barlow md:gap-[40px] sm:gap-[40px] items-start justify-between max-w-[1440px] px-[144px] sm:px-[20px] md:px-[40px] py-[120px] w-[100%]">
          <div className="flex sm:flex-1 flex-col md:gap-[40px] sm:gap-[40px] gap-[64px] items-start justify-start sm:w-[100%] w-[466px]">
            <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
              <Text
                className="font-barlow text-bluegray_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Download App
              </Text>
              <Text
                className="font-poppins leading-[28.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[466px] not-italic text-bluegray_500 text-left"
                variant="body1"
              >
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Phasellus leo dolor, tempus non, auctor
                et, hendrerit quis, nisi.
              </Text>
            </div>
            <div className="border border-bluegray_300_3d border-solid flex flex-col gap-[40px] items-center justify-start p-[40px] sm:px-[20px] rounded-radius16 w-[100%]">
              <div className="flex flex-row gap-[24px] items-center justify-start w-[auto]">
                <Img
                  src="images/img_iconicqrcode.svg"
                  className="h-[120px] w-[120px]"
                  alt="iconicqrcode"
                />
                <Text
                  className="leading-[28.00px] text-bluegray_900 text-left"
                  as="h6"
                  variant="h6"
                >
                  Scan QR code to <br />
                  install on your device
                </Text>
              </div>
              <Img
                src="images/img_divider_bluegray_300_1x386.svg"
                className="h-[1px] w-[100%]"
                alt="Divider Seven"
              />
              <List
                className="sm:flex-col flex-row gap-[16px] grid grid-cols-2 justify-start w-[auto]"
                orientation="horizontal"
              >
                <div className="bg-gradient  border border-black_900_3d border-solid flex flex-row gap-[8px] h-[56px] md:h-[auto] sm:h-[auto] items-center justify-center px-[12px] rounded-radius8">
                  <div className="flex flex-col items-start justify-start py-[14px] w-[auto]">
                    <Img
                      src="images/img_eye.svg"
                      className="h-[28px] w-[28px]"
                      alt="eye"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[75%]">
                    <Text
                      className="font-normal font-poppins not-italic text-center text-white_A700_9b w-[auto]"
                      variant="body5"
                    >
                      Download on the
                    </Text>
                    <Text
                      className="font-barlow mt-[2px] text-center text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Apple Store
                    </Text>
                  </div>
                </div>
                <div className="bg-gradient  border border-black_900_3d border-solid flex flex-row gap-[8px] h-[56px] md:h-[auto] sm:h-[auto] items-center justify-center px-[12px] rounded-radius8">
                  <div className="flex flex-col items-start justify-start py-[14px] w-[auto]">
                    <Img
                      src="images/img_iconicgoogleplay.png"
                      className="h-[28px] md:h-[auto] sm:h-[auto] object-cover w-[28px]"
                      alt="iconicgoogleplay"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[74%]">
                    <Text
                      className="font-normal font-poppins not-italic text-center text-white_A700_9b w-[auto]"
                      variant="body5"
                    >
                      Download from
                    </Text>
                    <Text
                      className="font-barlow mt-[2px] text-center text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Google Play
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="md:h-[565px] sm:h-[565px] h-[727px] px-[102px] sm:px-[20px] md:px-[40px] relative shadow-bs4 sm:w-[100%] w-[auto]">
            <div className="absolute h-[562px] md:h-[auto] sm:h-[auto] left-[14%] top-[0] w-[34%]">
              <div className="absolute h-[562px] md:h-[auto] sm:h-[auto] inset-[0] justify-center m-[auto] w-[99%]">
                <Img
                  src="images/img_device.png"
                  className="h-[562px] m-[auto] object-cover w-[100%]"
                  alt="Device"
                />
                <Img
                  src="images/img_mockup.png"
                  className="absolute h-[547px] inset-y-[0] my-[auto] object-cover right-[3%] w-[88%]"
                  alt="Mockup"
                />
              </div>
              <Img
                src="images/img_shadow.png"
                className="absolute bottom-[0] h-[420px] object-cover right-[0] w-[46%]"
                alt="Shadow"
              />
            </div>
            <div className="absolute bottom-[0] h-[565px] md:h-[auto] sm:h-[auto] right-[14%] w-[38%]">
              <Img
                src="images/img_device_565x211.png"
                className="h-[565px] m-[auto] object-cover w-[100%]"
                alt="Device One"
              />
              <Img
                src="images/img_mockup_548x185.png"
                className="absolute h-[548px] inset-y-[0] left-[4%] my-[auto] object-cover w-[88%]"
                alt="Mockup One"
              />
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex flex-col font-poppins items-start justify-center max-w-[1440px] px-[144px] sm:px-[20px] md:px-[40px] py-[120px] w-[100%]">
          <div className="bg-deep_orange_600_14 flex md:flex-col sm:flex-col flex-row gap-[122px] md:gap-[40px] sm:gap-[40px] items-center justify-center max-w-[1152px] mx-[auto] md:px-[20px] sm:px-[20px] py-[80px] rounded-radius24 w-[100%]">
            <div className="flex sm:flex-1 flex-col gap-[40px] items-center justify-start sm:w-[100%] w-[466px]">
              <div className="flex flex-col gap-[20px] items-start justify-start sm:w-[100%] w-[auto]">
                <Text
                  className="font-barlow leading-[54.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[466px] text-bluegray_900 text-center"
                  as="h3"
                  variant="h3"
                >
                  Register Now Forget 20% Discount Every Courses
                </Text>
                <Text
                  className="font-poppins leading-[28.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[466px] not-italic text-bluegray_900 text-center"
                  variant="body1"
                >
                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel,
                  lacus. Sed magna purus, fermentum eu
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-row items-center justify-between pb-[2px] pr-[2px] rounded-radius8 w-[100%]">
                  <div className="flex flex-col items-start justify-start pl-[12px] py-[14px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_300 text-left w-[auto]"
                      variant="body3"
                    >
                      Enter your email
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold min-w-[107px] mr-[2px] my-[3px] text-[15px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillDeeporange600"
                  >
                    Register
                  </Button>
                </div>
              </div>
            </div>
            <Img
              src="images/img_asset12.svg"
              className="h-[368px] w-[368px]"
              alt="AssetTwelve"
            />
          </div>
        </div>
        <div className="flex flex-col font-poppins items-start justify-start max-w-[1440px] w-[100%]">
          <Img
            src="images/img_divider_bluegray_300_1x56.svg"
            className="h-[1px] w-[100%]"
            alt="Divider Eight"
          />
          <div className="flex flex-col items-start justify-start pb-[32px] pt-[80px] px-[144px] sm:px-[20px] md:px-[40px] md:w-[100%] sm:w-[100%]">
            <Img
              src="images/img_logo.svg"
              className="h-[20px] w-[73px]"
              alt="Logo One"
            />
            <div className="flex md:flex-col sm:flex-col flex-row gap-[122px] md:gap-[40px] sm:gap-[40px] items-start justify-between max-w-[1152px] mx-[auto] py-[24px] w-[100%]">
              <Text
                className="leading-[24.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[270px] not-italic text-bluegray_500 text-left"
                variant="body4"
              >
                The starting point for your next project based on
                easy-to-customize Material-UI © helps you build apps faster and
                better.
              </Text>
              <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_iconsbasic.svg"
                    className="h-[20px] w-[20px]"
                    alt="IconsBasic"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                    variant="body3"
                  >
                    info@example.com
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_location.svg"
                    className="h-[20px] w-[20px]"
                    alt="location"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                    variant="body3"
                  >
                    655 Schaefer Dale
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-start justify-start w-[366px]">
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                  wrapClassName="sm:w-[100%] w-[85%]"
                  type="email"
                  name="TextField"
                  placeholder="Email address"
                ></Input>
                <Button
                  className="flex h-[48px] items-center justify-center w-[48px]"
                  shape="icbRoundedBorder8"
                  size="lgIcn"
                  variant="icbFillDeeporange600"
                >
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-[18px]"
                    alt="arrowright Four"
                  />
                </Button>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-[auto]">
              <Button className="flex h-[36px] items-center justify-center rounded-radius50 w-[36px]">
                <Img
                  src="images/img_facebook.svg"
                  className="h-[20px]"
                  alt="facebook"
                />
              </Button>
              <Button className="flex h-[36px] items-center justify-center rounded-radius50 w-[36px]">
                <Img
                  src="images/img_camera.svg"
                  className="h-[20px]"
                  alt="camera"
                />
              </Button>
              <Button className="flex h-[36px] items-center justify-center rounded-radius50 w-[36px]">
                <Img
                  src="images/img_linkedin.svg"
                  className="h-[20px]"
                  alt="linkedin"
                />
              </Button>
              <Button className="flex h-[36px] items-center justify-center rounded-radius50 w-[36px]">
                <Img
                  src="images/img_twitter.svg"
                  className="h-[20px]"
                  alt="twitter"
                />
              </Button>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between max-w-[1152px] mx-[auto] pt-[80px] w-[100%]">
              <Text
                className="not-italic text-bluegray_500 text-left w-[auto]"
                variant="body4"
              >
                © 2021. All rights reserved
              </Text>
              <div className="flex flex-row gap-[24px] items-start justify-start w-[auto]">
                <Text
                  className="not-italic text-bluegray_500 text-left w-[auto]"
                  variant="body4"
                >
                  Help Center
                </Text>
                <Text
                  className="not-italic text-bluegray_500 text-left w-[auto]"
                  variant="body4"
                >
                  Terms of Service
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesLandingPage;
