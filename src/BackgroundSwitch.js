import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AntSwitch from './AntSwitch';

import { useContext,useEffect } from 'react';
import { Context } from './App';


const LanguageSwitch = () => {
    const { white, setColor } = useContext(Context)

    const changeColor = () => {
        if (white)
            setColor(false)
        else
            setColor(true)
    }

    useEffect(() => {
        const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        console.log(dark)
        if (dark)
            setColor(false)
        else
            setColor(true)
    }, [])

    return (
        <Stack 
            direction="row"
            spacing={1}
            alignItems="center" >
            <Typography>Light</Typography>
            <AntSwitch
                onChange={changeColor}
                checked={white?(false):(true)}
                inputProps={{ 'aria-label': 'ant design' }}
            />
            <Typography>Dark</Typography>
        </Stack >
    )
}

export default LanguageSwitch;

