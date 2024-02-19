import { Grid, Container, Box, Button } from "@mui/material";
import MainCoverSection from "../../components/mainCover";
import { useState, useEffect } from "react";
import { checkLoadImages } from "../../utilies/utiliesFuctions";
import { GET_EVENT } from "../../services/endpoints";
import useFetch from "../../components/useFetch/useFetch";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import AutoPagination from "../../components/customPagination";
import CustomLoader from "../../components/customLoader";
import MainEventCards from "../../components/event/mainEventCards";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import Typography from '@mui/material/Typography';
import ArrowForward from "@mui/icons-material/ArrowForward";

export default function EventTypes(props) {
  const { data, theme, headerType } = props;
  console.log(props)
  const Router = useRouter();
  const [currentPage, setCurrentPage] = useState(parseInt(Router.query.p) || 1);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(data?.data?.pageItems?.totalPages);
  let { t } = useTranslation("common");
  const [pageInfo, setPageInfo] = useState({
    title: data?.data?.pageDetail?.title,
    description: data?.data?.pageDetail?.description,
    image: data?.data?.pageDetail?.image,
    breadcrumbs: [
      {
        title: "home",
        link: "/",
      },
      {
        title: data?.data?.pageDetail?.title,
        link: "",
      },
    ],
    headerType: headerType,
  });
  const handleChangeCurrentPage = (value) => {
    setCurrentPage(value);
    Router.push(`${Router.pathname}?p=${value}`);
  };
  const useStyles = makeStyles((theme) => ({
    container: {
      position: 'relative',
      marginTop: theme.spacing(24),
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(16),
      },
    },
    grid: {
      marginTop: theme.spacing(8),
    },
    card: {
      position: 'relative',
      overflow: 'hidden',
      boxShadow: theme.palette.mode === 'dark' ? theme.shadows[8] : 'none',
      backgroundColor: 'transparent', // Making the card background transparent
      '&:hover': {
        transform: 'scale(1.05)',
        transition: 'transform 0.5s ease-in-out',
      },
    },
    content: {
      position: 'relative',
      overflow: 'hidden',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      padding: theme.spacing(2),
      marginTop: theme.spacing(4),
    },
  }));
  const classes = useStyles();
  function convertToPlain(html) {
    if (typeof window === "object") {
        let tempDivElement = document.createElement("div");
        tempDivElement.innerHTML = html;
        let text = tempDivElement.textContent || tempDivElement.innerText || "";
        
        // Split the text into an array of words
        let words = text.trim().split(/\s+/);
        
        // Take the first 150 words and join them back together
        let truncatedText = words.slice(0, 30).join(" ");

        // If the text was truncated, add ellipsis
        if (words.length > 120) {
            truncatedText += " ...";
        }

        return truncatedText;
    }

      }
  useEffect(() => {
    checkLoadImages(setLoading);
  }, []);
  return (
    <div>
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
      <div className={loading ? "hidden" : undefined}>
        <MainCoverSection
          breadcrumbs={pageInfo.breadcrumbs}
          title={pageInfo.title}
          description={pageInfo.description}
          image={pageInfo.image || "/images/pageMainCover.png"}
          headerType={headerType}
        />
        <Box sx={{ backgroundColor: "background.main" }}>
          <Container maxWidth="lg" sx={{ paddingBottom: "75px" }}>
            <Head>
              <title>{pageInfo.title}</title>
            </Head>
            <Grid container spacing={4} sx={{ mt: "-40px" }}>
              {data?.data?.pageItems?.items.map((item) => {
                return (
                  <Link href={`/events/${item.slug}`}>
                    <Grid item xs={12} md={4} key={item.id}>
            <div className={classes.card}>
              <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
              <img
                         
                          // width='95%'
                          height="30px"
                          // src="/images/ourEvents1.png"
                          src={item?.image ? item?.image : "/images/no-image.png"}
                          alt=""
                        />
              </div>
              <div className={classes.content}>
                <Typography variant="h5" component="a" href="page-items.html" className="title h5 text-lg font-medium hover:text-indigo-600">
                  {item.title}
                </Typography>
                <Typography variant="body1" className="text-slate-400 mt-3">
                
          {convertToPlain(item?.description)}
                </Typography>
                <div className="mt-5">
                <Button
      variant="text"
      style={{ color: theme.primaryColor }}
    >
      Read More <ArrowForward />
    </Button>
                </div>
              </div>
            </div>
          </Grid>
                   </Link>  
                );
              })}
            </Grid>
            <div className="paginationContainer">
              <AutoPagination
                currentPage={currentPage}
                pageCount={pageCount}
                onChangeCurrentPage={handleChangeCurrentPage}
              />
            </div>
          </Container>
        </Box>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  let page = context?.query?.p || 1;
  let locale = context?.locale;
  const [getFetch] = useFetch();
  const res = await getFetch(
    GET_EVENT(page, 9),
    process.env.NEXT_PUBLIC_MERCHANT,
    locale
  );
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}
