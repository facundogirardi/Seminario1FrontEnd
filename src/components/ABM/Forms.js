import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import OneForm from './OneForm';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) =>
    ({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
    })
);

function Forms(props) {

    const classes = useStyles();
    const [forms, setForms] = React.useState([])
    const [loadingForms, setLoadingForms] = React.useState(true);

    return (
        <div>
            <div>
                <CssBaseline />
                {loadingForms ? (<CircularProgress />) : ""}
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={6}>
                        {forms.map((form, i) => (
                            <OneForm formData={form} key={i} />
                        ))}
                    </Grid>
                </Container>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Forms;
