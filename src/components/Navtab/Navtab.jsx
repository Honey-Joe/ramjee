import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import Coursedesc from "../Coursedesc/Coursedesc";
import Curriculam from "../Curiculam/Curriculam";
import Instructor from "../Instructor/Instructor";

function Navtab() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
    ],
  };

  return (
    <>
      <div className="">
        <div className="">
          <Tabs defaultValue={1}>
            <TabsList className="p-5">
              <div className="slider-container pb-5">
                <Slider {...settings}>
                  <div className="pb-5">
                    <Tab
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Pro] ${
                            selected
                              ? " shadow-[4px_6px_0px_0px_#050071] text-white bg-[#5751e1]"
                              : "text-[#6d6c80] bg-[#E6E9EF] focus:text-black hover:text-white  hover:bg-[#5751e1] hover:shadow-[4px_6px_0px_0px_#050071]"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } py-[14px] px-[30px] rounded-full font-[Pro] text-base font-semibold`,
                        }),
                      }}
                      value={1}
                    >
                      Overview
                    </Tab>
                  </div>
                  <div className="pb-5">
                    <Tab
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Pro]  ${
                            selected
                              ? "shadow-[4px_6px_0px_0px_#050071] text-white bg-[#5751e1]"
                              : "text-[#6d6c80] bg-[#E6E9EF] focus:text-black hover:text-white  hover:bg-[#5751e1] hover:shadow-[4px_6px_0px_0px_#050071]"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          }  py-[14px] px-[30px] rounded-full font-[Pro] text-base font-semibold`,
                        }),
                      }}
                      value={2}
                    >
                      Curriculam
                    </Tab>
                  </div>
                  <div className="pb-5">
                    <Tab
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Pro] ${
                            selected
                              ? "shadow-[4px_6px_0px_0px_#050071] text-white bg-[#5751e1]"
                              : "text-[#6d6c80] bg-[#E6E9EF] focus:text-black hover:text-white  hover:bg-[#5751e1] hover:shadow-[4px_6px_0px_0px_#050071]"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          }  py-[14px] px-[30px] rounded-full font-[Pro] text-base font-semibold`,
                        }),
                      }}
                      value={3}
                    >
                      Instructors
                    </Tab>
                  </div>
                </Slider>
              </div>
            </TabsList>
            <TabPanel value={1}>
              <Coursedesc></Coursedesc>
            </TabPanel>
            <TabPanel value={2}>
              <Curriculam></Curriculam>
            </TabPanel>
            <TabPanel value={3}>
              <Instructor></Instructor>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Navtab;
