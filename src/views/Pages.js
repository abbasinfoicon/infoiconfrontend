import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosCall from "../components/axios";
import Banner from "../components/parts/Banner";
import Breadcrumb from "../components/parts/Breadcrumb";
import Sidebar from "../components/templates/Sidebar";

const Pages = () => {
  const params = useParams();
  const [page, setPage] = useState();

  useEffect(() => {
    axiosCall("page").then((res) => {
      res.data.map((page) => {
        if (page.slug === params.name) {
          page.categories.map((category) => {
            category.sub_categories.map((sub) => {
              if (sub.slug === params.slug) {
                setPage({ ...sub });
              }
            });
          });
        }
      });
    });
  }, [params]);

  console.log("Page-details: ", page);
  console.log("Params-Slug", params);

  return (
    <>
      {page && (
        <>
          <Banner title={page.name} banner={page.banner} />

          <Breadcrumb name={page.name} />

          <div className="midCon">
            <div className="container clearfix">
              <div className="service-detail-con d-flex flex-wrap">
                <div className="midRgt contct">
                  <Sidebar />
                </div>

                <div className="midLft">
                  <div className="aboutBig">{page.smallDesc}</div>
                  <div className="content-wrap">
                    <div className="our_company">{page.desc}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Pages;
