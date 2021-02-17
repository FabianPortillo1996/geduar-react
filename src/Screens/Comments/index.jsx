import React, {useEffect} from 'react';

import {
    useParams
} from "react-router-dom";
import {Grid, makeStyles} from "@material-ui/core";
import styles from "../Users/styles";
import {useDispatch, useSelector} from "react-redux";
import {CardComponent} from "../../Components/Card";
import {getListCommentPostRequesting} from "../../Redux/comments/actions";
import cardProject from './../../Assets/img/card-project.jpg';

const useStyles = makeStyles(styles);

export const ListCommentScreen = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const classes = useStyles();
    const {comments} = useSelector(state => state.comment);


    useEffect(() => {
        dispatch(getListCommentPostRequesting(id));
    }, [id]);

    return <Grid container component={'div'} className={classes.grid}>
        {comments.map(({id, body, name, email}) => <Grid component={'div'}
                                                         key={id} item xs={12} sm={6}
                                                         md={6} lg={4}
                                                         className={classes.gridItem}>
            <CardComponent
                title={email}
                subtitle={name}
                description={body}
                withButton={false}
                image={cardProject}
            />
        </Grid>)}
    </Grid>
};
