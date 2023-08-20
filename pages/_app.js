import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "../utils";
import { MUIProvider } from "../providers";
import "slick-carousel/slick/slick.css";
import "../styles/globals.css";
import "../styles/react-slick.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>
                    Dentist in Chembur | Dental Clinic Chembur - Dr. Akshay's DentAvenue
                </title>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "Dr. Akshay's DentAvenue Dental Clinic",
                            image:
                                "https://www.dentavenue.in/_next/image?url=%2Fimages%2Fherodental2.jpg&w=1920&q=75",
                            "@id": "",
                            url: "https://www.dentavenue.in/",
                            telephone: "79000 74487",
                            priceRange: "$",

                            address: {
                                "@type": "PostalAddress",
                                streetAddress:
                                    "302, Third Floor, Abhishek Complex, Opposite to BMC M WEST WARD OFFICE, 1st Road, Chembur",
                                addressLocality: "Mumbai",
                                postalCode: "400071",
                                addressCountry: "IN",
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: 19.0607957,
                                longitude: 72.8997529,
                            },
                            openingHoursSpecification: [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Friday",
                                        "Thursday",
                                        "Saturday",
                                    ],
                                    opens: "10:00",
                                    closes: "21:00",
                                },
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: "Sunday",
                                    opens: "10:00",
                                    closes: "16:00",
                                },
                            ],
                            sameAs: [
                                "https://www.facebook.com/profile.php?id=100082969286996",
                                "https://twitter.com/DentavenueM",
                                "https://www.youtube.com/channel/UCzTOsuUtM6GgJ6oUFEy5NvQ",
                                "https://www.instagram.com/drakshaysdentavenue/",
                                "https://www.linkedin.com/in/dr-akshay-s-dentavenue-282741255/",
                            ],
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Dentist",
                            name: "Dr. Akshay Bandewar",
                            image:
                                "https://www.dentavenue.in/_next/image?url=%2Fimages%2Fdr%2Fdr12.jpg&w=1920&q=75",
                            "@id": "",
                            url: "https://www.dentavenue.in/",
                            telephone: "79000 74487",
                            priceRange: "$",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress:
                                    "302, Third Floor, Abhishek Complex, Opposite to BMC M WEST WARD OFFICE, 1st Road, Chembur",
                                addressLocality: "Mumbai",
                                postalCode: "400071",
                                addressCountry: "IN",
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: 19.0607957,
                                longitude: 72.8997529,
                            },
                            openingHoursSpecification: [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: [
                                        "Tuesday",
                                        "Monday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday",
                                        "Saturday",
                                    ],
                                    opens: "10:00",
                                    closes: "21:00",
                                },
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: "Sunday",
                                    opens: "10:00",
                                    closes: "16:00",
                                },
                            ],
                            sameAs: [
                                "https://www.practo.com/mumbai/doctor/akshay-bandewar-dentist-2",
                                "https://www.bajajfinservhealth.in/doctor/mumbai/dentist/dr-akshay-bandewar",
                                "https://www.lybrate.com/navi-mumbai/doctor/dr-akshay-bandewar-dentist",
                                "https://www.clinicspots.com/clinic/dr-akshays-dentavenue",
                                "https://www.dentavenue.in/",
                            ],
                        }),
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Dentist",
                            name: "Dr. Saudnya Rudrawar",
                            image:
                                "https://www.dentavenue.in/_next/image?url=%2Fimages%2Fdr%2Fdr11.jpg&w=1920&q=97",
                            "@id": "",
                            url: "https://www.dentavenue.in/",
                            telephone: "79000 74487",
                            priceRange: "$",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress:
                                    "302, Third Floor, Abhishek Complex, Opposite to BMC M WEST WARD OFFICE, 1st Road, Chembur",
                                addressLocality: "Mumbai",
                                postalCode: "400071",
                                addressCountry: "IN",
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: 19.0607957,
                                longitude: 72.8997529,
                            },
                            openingHoursSpecification: [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: [
                                        "Tuesday",
                                        "Monday",
                                        "Wednesday",
                                        "Friday",
                                        "Thursday",
                                        "Saturday",
                                    ],
                                    opens: "10:00",
                                    closes: "21:00",
                                },
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: "Sunday",
                                    opens: "10:00",
                                    closes: "16:00",
                                },
                            ],
                            sameAs: [
                                "https://www.practo.com/mumbai/doctor/saudnya-rudrawar-dentist",
                                "https://www.lybrate.com/mumbai/doctor/dr-saudnya-bandewar-dentist",
                                "https://www.clinicspots.com/doctor/saudnya-rudrawar",
                                "https://www.linkedin.com/in/dr-saudnya-rudrawar-380b4421/",
                            ],
                        }),
                    }}
                />
            </Head>
            <MUIProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
            </MUIProvider>
        </CacheProvider>
    );
}
