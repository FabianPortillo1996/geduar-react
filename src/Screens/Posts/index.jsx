import React, {useEffect} from 'react';

import {
    useParams
} from "react-router-dom";
import {Grid, makeStyles} from "@material-ui/core";
import styles from "../Users/styles";
import {useDispatch, useSelector} from "react-redux";
import cardBlog from './../../Assets/img/card-blog.jpg';
import {getListPostUserRequesting} from "../../Redux/posts/actions";
import {CardComponent} from "../../Components/Card";

const useStyles = makeStyles(styles);

export const ListPostScreen = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const classes = useStyles();
    const {posts} = useSelector(state => state.post);


    useEffect(() => {
        dispatch(getListPostUserRequesting(id));
    }, [id]);

    return <Grid container component={'div'} className={classes.grid}>
        {posts.map(({id, title, body}) => <Grid component={'div'}
                                                key={id} item xs={12} sm={6}
                                                md={6} lg={4}
                                                className={classes.gridItem}>
            <CardComponent
                subtitle={title}
                description={body}
                image={cardBlog}
                buttonTitle={'Ver Comentarios'}
                url={`/posts/${id}/comments`}
            />
        </Grid>)}
    </Grid>
};
