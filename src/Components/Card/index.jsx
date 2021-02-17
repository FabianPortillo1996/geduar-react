import React from "react";
import {Grid, Button} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import styles from './styles';


const useStyles = makeStyles(styles);


export const CardComponent = ({title, subtitle = '', description, buttonTitle, url, withButton = true, image}) => {


    const classes = useStyles();


    return <Grid component={'div'}>
        <div className={`${classes.card} ${classes.cardProfile}`}>
            <div className={`${classes.cardHeader} ${classes.cardHeaderImage}`}>
                <a onClick={e => e.preventDefault()}>
                    <img src={image} alt="user-image"/>
                    <div className={classes.cardTitleAbsolute}>
                        {title}
                    </div>
                </a>
                <div
                    className={classes.coloredShadow}
                    style={{
                        backgroundImage: `url(${image})`,
                        opacity: "1"
                    }}
                />
            </div>
            <div className={classes.cardBody}>
                <div className={`${classes.defaultFontStyle} ${classes.infoText}`}>
                    <h6 className={classes.cardCategory}>{subtitle}</h6>
                </div>
                <p className={classes.cardDescription}>
                    {description}
                </p>
            </div>
            <div
                className={`${classes.justifyContentCenter} ${classes.cardFooter} ${classes.cardFooterProfile}`}
            >
                {withButton && <Link to={url}>
                    <Button variant="contained" color="primary">
                        {buttonTitle}
                    </Button>
                </Link>}
            </div>
        </div>
    </Grid>
};
