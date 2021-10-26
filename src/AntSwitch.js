import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 42,
    height: 24,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 22.5,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(13.5px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 3,
        '&.Mui-checked': {
            transform: 'translateX(18px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 3px 6px 0 rgb(0 35 11 / 20%)',
        width: 18,
        height: 18,
        borderRadius: 9,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 24 / 2,
        opacity: 1,
        backgroundColor: '#656c75',
        boxSizing: 'border-box',
    },
}));

export default AntSwitch;