import * as React from 'react';
import Button from '@mui/material/Button';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';


function ButtonField(props) {
    const {
        setOpen,
        id,
        disabled,
        InputProps: { ref } = {},
        inputProps: { 'aria-label': ariaLabel } = {},
    } = props;

    return (
        <Button
            variant="outlined"
            id={id}
            disabled={disabled}
            ref={ref}
            aria-label={ariaLabel}
            onClick={() => setOpen?.((prev) => !prev)}
        >
            <ScheduleOutlinedIcon />
            {/*label ? `Current date: ${label}` : 'Pick a date'*/}
        </Button>
    );
}

export function ButtonDateTimePicker(props) {
    const [open, setOpen] = React.useState(false);

    return (
        <DateTimePicker
            slots={{ field: ButtonField, ...props.slots }}
            slotProps={{ field: { setOpen } }}
            {...props}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        />
    );
}