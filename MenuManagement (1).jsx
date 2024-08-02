import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { postData } from "../Utils/utils";
export default function MenuManagement() {
  const [Category, setCategory] = useState([]);
  const [Menu, setMenu] = useState([]);
  const [cuisineCatId, setcuisineCatId] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  const CategoryDetails = async (e) => {
    try {
      const response = await postData("v1/cuisine/cat/lists");
      if (response?.status) {
        const menuData = response?.data?.map((item) => ({
          Id: item?._id,
          Name: item?.title,
        }));

        setCategory(menuData);

        setShowLoader(false);
      }
    } catch (error) {
      toast.error("network error");
    }
  };

  const MenuDetails = async (e) => {
    try {
      const response = await postData("v1/cuisine/lists", { cuisineCatId });
      if (response?.status) {
        const menuData = response?.data;

        setMenu(menuData);
        console.log({ menuData });
        setShowLoader(false);
      }
    } catch (error) {
      toast.error("network error");
    }
  };

  useEffect(() => {
    CategoryDetails();
    MenuDetails();
  }, []);

  useEffect(() => {
    MenuDetails();
  }, [cuisineCatId]);

  return (
    <>
      <div className="food-menu-area"style={{backgroundColor:"#1e1e1e"}}>
        <div className="container" >
          <div className="row" >
            <div className="col-md-12 text-center">
              <div className="section-title center inner" data-aos="zoom-in">
                <div className="section-thumb">
                  {/* <img src="assets/images/home-1/section-shape1.png" alt="" /> */}
                  <img
                    src="assets/images/home-1/logo-1.png"
                    style={{ width: 200 }}
                    alt=""
                  />
                </div>
                <h1>Restaurant Menu</h1>
              </div>
            </div>
          </div>

          <div
            class="row d-flex align-items-center justify-content-center"
            data-aos="zoom-in"
          >
            <div class="col-md-6">
              <div class="form-group">
                <label class="mb-2" for="categorySelect">
                  Food Category
                </label>
                <select
                  class="form-control"
                  id="categorySelect"
                  onChange={(e) => setcuisineCatId(e.target.value)}
                >
                  {Category?.map((item) => (
                    <option key={item?.Id} value={item?.Id}>
                      {item?.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-12">
              <div className="food-tab-item">
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active">
                    <div className="row">
                    {Menu?.map((item) => (
                        <div className="col-lg-4 col-md-4 ">
                          <div
                            className="single-food-item-box1 rounded"
                            data-aos="zoom-in"
                          >
                            <div
                              className="row mb-2 col-md-12 p-0 w-100
                             "
                            >
                              <img
                                src={
                                  item?.image ||
                                  "assets/images/inner/food-1.jpg"
                                }
                                alt=""
                                className="rounded-top"
                              />
                            </div>

                            <div
                              className="row mb-2 col-md-12 w-100
                             pt-3"
                            >
                              <div className="col-8">
                                <h6 className="text-left">{item?.title?.replace(/\//g, ' / ')}</h6>
                              </div>
                              <div className="col-4">
                                <div className="food-price">
                                  <span>₹ {item?.price}/-</span>
                                </div>
                              </div>
                            </div>
                            {item?.description && (
                              <div className="row col-md-12 w-100">
                                <div className="col-12">
                                  <p className="text-left">
                                    {item?.description?.substring(0,50)}...
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row my-5">
            <div className="col-md-12">
              <div className="food-tab-item">
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div
                          className="single-food-item-box"
                          data-aos="zoom-in"
                        >
                          <div className="food-thumb">
                            <img src="assets/images/inner/food-1.jpg" alt="" />
                          </div>
                          <div className="food-item-content">
                            <h4>Fride Rice</h4>
                            <span>$49.00</span>
                            <p>
                              Professionally deliver fully researched scenarios
                              with turnkey communities competently
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div
                          className="single-food-item-box"
                          data-aos="zoom-in"
                        >
                          <div className="food-thumb">
                            <img src="assets/images/inner/food-2.jpg" alt="" />
                          </div>
                          <div className="food-item-content">
                            <h4>Chicken</h4>
                            <span>$59.00</span>
                            <p>
                              Professionally deliver fully researched scenarios
                              with turnkey communities competently
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div
                          className="single-food-item-box"
                          data-aos="zoom-in"
                        >
                          <div className="food-thumb">
                            <img src="assets/images/inner/food-3.jpg" alt="" />
                          </div>
                          <div className="food-item-content">
                            <h4>Fry Fishes</h4>
                            <span>$30.00</span>
                            <p>
                              Professionally deliver fully researched scenarios
                              with turnkey communities competently
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div
                          className="single-food-item-box"
                          data-aos="zoom-in"
                        >
                          <div className="food-thumb">
                            <img src="assets/images/inner/food-4.jpg" alt="" />
                          </div>
                          <div className="food-item-content">
                            <h4>Vegetables</h4>
                            <span>$35.00</span>
                            <p>
                              Professionally deliver fully researched scenarios
                              with turnkey communities competently
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

    </>
  );
}
