import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

const useStylesCards = makeStyles({
    root: {
        width: "98%",
        margin: '0 10px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const useStylesText = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '98%',
        },
    },
}));

export default function Formulario() {
    const clase1 = useStylesCards();
    const clase3 = useStylesText();

    const [respuesta1, setRespuesta1] = React.useState('');
    const [respuesta2, setRespuesta2] = React.useState("");

    const handleRespuesta1 = (event) => {
        setRespuesta1(event.target.value);
    }
    const handleRespuesta2 = (event) => {
        setRespuesta2(event.target.value);
    }

    return (
        <Card className={clase1.root}>
            <CardContent>
                <form className={clase3.root} autoComplete="off">
                    <TextField
                        required
                        id="Respuesta1"
                        label="Respuesta1"
                        inputProps={{
                            onChange: (event) => handleRespuesta1(event),
                        }}
                    />
                    <TextField
                        required
                        id="Respuesta2"
                        label="Respuesta2"
                        inputProps={{
                            onChange: (event) => handleRespuesta2(event),
                        }}
                    />
                </form>
            </CardContent>
        </Card>
    );
}