import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AntSwitch from './AntSwitch';

import { useTranslation } from "react-i18next";
import i18next from "i18next";



const LanguageSwitch = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        if (i18n.language === "es")
            i18n.changeLanguage("en")
        else
            i18n.changeLanguage("es")
    }
    
    return (
        <Stack direction="row" spacing={1} alignItems="center" >
          <Typography>Es</Typography>
            <AntSwitch onChange={changeLanguage}
                checked={i18n.language==="es"?(false):(true)}
                inputProps={{ 'aria-label': 'ant design' }}
            />
           <Typography>En</Typography>
        </Stack >
)
}

export default LanguageSwitch;

