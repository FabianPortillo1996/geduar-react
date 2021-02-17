import React, {useEffect} from 'react';
import styles from './styles';
import {makeStyles, Grid} from "@material-ui/core";
import {CardComponent} from "../../Components/Card";
import {useDispatch, useSelector} from "react-redux";
import {getUserRequesting} from "../../Redux/users/actions";
import cardProfile from './../../Assets/img/card-profile.jpg';

const useStyles = makeStyles(styles);

export const UserScreen = () => {


    const dispatch = useDispatch();
    const {users} = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getUserRequesting());
    }, []);

    const classes = useStyles();

    return <Grid container component={'div'} className={classes.grid}>
        {users.map(({id,name, username, email, company}) => <Grid component={'div'} key={id} item xs={12} sm={6}
                                                               md={6} lg={4} className={classes.gridItem}>
            <CardComponent
                title={`${name} - ${username} - ${email}`}
                subtitle={company.name}
                description={company.catchPhrase}
                buttonTitle={'Ver Posts'}
                url={`/posts/${id}`}
                image={cardProfile}
            />
        </Grid>)}

    </Grid>

};
