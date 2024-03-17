import { Button, rem } from "@mantine/core";

export const ServingProp = (props: {name: string, value: number, onClick?: () => void}) => {
    return (
        <Button miw={rem(50)} disabled={props.name === 'Standard' && props.value === 100} variant="light" size="xs" onClick={props.onClick}>
            {props.name} - {props.value}g
        </Button>
    );
};
