import { Button, rem } from "@mantine/core";

export const ServingProp = (props: {name: string, value: number, disabled?: boolean, onClick?: () => void}) => {
    return (
        <Button miw={rem(50)} disabled={props.disabled} variant="light" size="xs" onClick={props.onClick}>
            {props.name} - {props.value}g
        </Button>
    );
};
