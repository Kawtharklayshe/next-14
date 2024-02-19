import { Grid, Container, Box, Typography } from "@mui/material";
import MainCoverSection from "../../components/mainCover";
import WorkShopCard from "../../components/common/workShop";
import { useState, useEffect } from "react";
import { checkLoadImages } from "../../utilies/utiliesFuctions";
import { GET_NEWS } from "../../services/endpoints";
import { GET_EVENTS_PAGE } from "../../services/endpoints";
import useFetch from "../../components/useFetch/useFetch";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import AutoPagination from "../../components/customPagination";
import CustomLoader from "../../components/customLoader";
import EventCardType from './EventCard';
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/controller";
import "swiper/css";
import useStyles from "./EventCard/style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Params } from "../../components/pages/Home/NewsSection/config";
export default function WorkShop(props) {
  const { data, theme, headerType } = props;
console.log("workshop",data?.data?.pageItems?.pastEvents)
  const Router = useRouter();
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(parseInt(Router.query.p) || 1);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(data?.data?.pageItems?.totalPages);
  let { t } = useTranslation("common");

  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const [pageInfo, setPageInfo] = useState({
    title: "",
    description: "",
    image: "",
    pageItems: "",
    breadcrumbs: [],
    headerType: 1,
    comingEvents: [],
    pastEvents: [],
  });

  const handleChangeCurrentPage = (value) => {
    setCurrentPage(value);
    Router.push(`${Router.pathname}?p=${value}`);
  };

  useEffect(() => {
    setPageInfo({
      title: data?.data?.pageDetail?.title,
      description: data?.data?.pageDetail?.description,
      image: data?.data?.pageDetail?.image,
      pageItems: data?.data?.pageItems,
      breadcrumbs: [],
      headerType: headerType,
      comingEvents: data?.data?.pageItems?.comingEvents,
      pastEvents: data?.data?.pageItems?.pastEvents,
    });
  }, [Router.asPath]);

  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);

  if (loading || !data?.data?.pageDetail?.title) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#fcfcfc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: "1000",
        }}
        className={!loading ? "none" : undefined}
      >
        <CustomLoader />
      </div>
    );
  }

  return (
    <div>
      <div className={loading ? "hidden" : undefined}>
        <MainCoverSection
          breadcrumbs={pageInfo.breadcrumbs}
          title={pageInfo.title}
          description={pageInfo.description}
          image={
            pageInfo.image ||
            "/images/File_0fe150aa-7f9f-404e-b5d4-f13754b55b62637961707201468632.webp"
          }
          headerType={headerType}
        />
        <Box sx={{ backgroundColor: "background.main" }}>
          <Container maxWidth="lg" sx={{ paddingBottom: "75px" }}>
            <Head>
              <title>{pageInfo.title}</title>
            </Head>

            <Grid container direction="column" alignItems="center" paddingBottom={8} textAlign="center">
  <Typography variant="h3" component="h3" gutterBottom marginTop={6} marginBottom={6}>
   {pageInfo.title}
  </Typography>

  <Typography variant="body1" color="textSecondary" maxWidth="xl">
  {pageInfo.description}
  </Typography>
</Grid>
        
            {/* {pageInfo.title ? (
              
              <WorkShopCard data={pageInfo} theme={theme} />
            ) : (
              ""
            )} */}

            
          <Swiper
              {...Params}
              dir={Router.locale == "ar" ? "rtl" : "ltr"}
              className={classes.swiperRoot}
          
            >
 <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
 {data?.data?.pageItems?.pastEvents.map((props, idx) => (
 <SwiperSlide
                    dir={Router.locale == "ar" ? "RTL" : "LTR"}
                    key={idx}
                    className={classes.slider}
                  >
                 

    <EventCardType key={idx} {...props} />

</SwiperSlide>
))}
</div>
</Swiper>
          </Container>
        </Box>
      </div>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const [getFetch] = useFetch();
  const slug = context?.params?.eventTypeSlug;

  const locale = context?.locale;
  const res = await getFetch(
    GET_EVENTS_PAGE(slug),
    process.env.NEXT_PUBLIC_MERCHANT,
    locale
  );
  const data = await res?.json();

  return {
    props: {
      data: data,
    },
  };
};
