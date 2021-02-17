import {
    container,
    coloredShadow,
    title,
    cardTitle,
    description,
    mlAuto,
    infoColor,
    whiteColor,
    roseColor,
    grayColor,
    hexToRgb,
    blackColor,
    defaultFont
} from "./../../Jss/styles";

import imageStyles from "./../../Jss/imageStyles";

import rotatingCards from "./../../Jss/cardRotateStyles";

const styles = {
    container,
    coloredShadow,
    title,
    mlAuto,
    cardTitle,
    ...imageStyles,
    ...rotatingCards,
    grid: {
        position: "relative",
        width: "100%",
        minHeight: "1px",
        paddingRight: "15px",
        paddingLeft: "15px"
    },
    sectionGray: {
        background: grayColor[14]
    },
    sectionWhite: {
        background: whiteColor
    },
    cardTitleAbsolute: {
        ...cardTitle,
        position: "absolute !important",
        bottom: "15px !important",
        left: "15px !important",
        color: whiteColor + " !important",
        fontSize: "1.125rem !important",
        textShadow: "0 2px 5px rgba(" + hexToRgb(grayColor[9]) + ", 0.5) !important"
    },
    cardTitleWhite: {
        "&, & a": {
            ...title,
            marginTop: ".625rem",
            marginBottom: "0",
            minHeight: "auto",
            color: whiteColor + " !important"
        }
    },
    cardCategory: {
        marginTop: "10px",
        "& svg": {
            position: "relative",
            top: "8px"
        }
    },
    cardCategorySocial: {
        marginTop: "10px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "22px",
            position: "relative",
            marginTop: "-4px",
            top: "2px",
            marginRight: "5px"
        },
        "& svg": {
            position: "relative",
            top: "5px"
        }
    },
    cardCategorySocialWhite: {
        marginTop: "10px",
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "22px",
            position: "relative",
            marginTop: "-4px",
            top: "2px",
            marginRight: "5px"
        },
        "& svg": {
            position: "relative",
            top: "5px"
        }
    },
    cardCategoryWhite: {
        marginTop: "10px",
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.7)"
    },
    cardCategoryFullWhite: {
        marginTop: "10px",
        color: whiteColor
    },
    cardDescription: {
        ...description
    },
    cardDescriptionWhite: {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
    },
    author: {
        display: "inline-flex",
        "& a": {
            color: grayColor[1]
        }
    },
    authorWhite: {
        display: "inline-flex",
        "& a": {
            color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
        }
    },
    avatar: {
        width: "30px",
        height: "30px",
        overflow: "hidden",
        borderRadius: "50%",
        marginRight: "5px"
    },
    statsWhite: {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
        display: "inline-flex",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            fontSize: "18px",
            lineHeight: "18px"
        },
        "& svg": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            width: "18px",
            height: "18px"
        }
    },
    stats: {
        color: grayColor[0],
        display: "flex",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            fontSize: "18px",
            lineHeight: "18px"
        },
        "& svg": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            width: "18px",
            height: "18px"
        }
    },
    justifyContentCenter: {
        WebkitBoxPack: "center !important",
        MsFlexPack: "center !important",
        justifyContent: "center !important"
    },
    iconWrapper: {
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)",
        margin: "10px auto 0",
        width: "130px",
        height: "130px",
        border: "1px solid " + grayColor[14],
        borderRadius: "50%",
        lineHeight: "174px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "55px",
            lineHeight: "55px"
        },
        "& svg": {
            width: "55px",
            height: "55px"
        }
    },
    iconWrapperColor: {
        borderColor: "rgba(" + hexToRgb(whiteColor) + ", 0.25)"
    },
    iconWhite: {
        color: whiteColor
    },
    iconRose: {
        color: roseColor[0]
    },
    iconInfo: {
        color: infoColor[0]
    },
    marginTop30: {
        marginTop: "30px"
    },
    textCenter: {
        textAlign: "center"
    },
    marginBottom20: {
        marginBottom: "20px"
    },
    card: {
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
        background: whiteColor,
        width: "100%",
        boxShadow:
            "0 2px 2px 0 rgba(" +
            hexToRgb(blackColor) +
            ", 0.14), 0 3px 1px -2px rgba(" +
            hexToRgb(blackColor) +
            ", 0.2), 0 1px 5px 0 rgba(" +
            hexToRgb(blackColor) +
            ", 0.12)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem",
        "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
            display: "inline-block !important"
        }
    },
    cardProfile: {
        marginTop: "30px",
        textAlign: "center"
    },
    cardHeader: {
        borderRadius: "3px",
        padding: "1rem 15px",
        marginLeft: "15px",
        marginRight: "15px",
        marginTop: "-30px",
        border: "0",
        marginBottom: "0"
    },
    cardHeaderImage: {
        position: "relative",
        padding: "0",
        zIndex: "1",
        marginLeft: "15px",
        marginRight: "15px",
        marginTop: "-30px",
        borderRadius: "6px",
        "& img": {
            width: "100%",
            borderRadius: "6px",
            pointerEvents: "none",
            boxShadow:
                "0 5px 15px -8px rgba(" +
                hexToRgb(blackColor) +
                ", 0.24), 0 8px 10px -5px rgba(" +
                hexToRgb(blackColor) +
                ", 0.2)"
        },
        "& a": {
            display: "block"
        }
    },
    cardBody: {
        padding: "0.9375rem 1.875rem",
        flex: "1 1 auto",
        WebkitBoxFlex: "1"
    },
    defaultFontStyle: {
        ...defaultFont,
        fontSize: "14px"
    },
    infoText: {
        "&, & *": {
            color: infoColor[0],
            display: "inline-block"
        }
    },
    cardFooter: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        padding: "0.9375rem 1.875rem",
        paddingTop: "0"
    },
    cardFooterProfile: {
        marginTop: "-15px"
    },
};

export default styles;

