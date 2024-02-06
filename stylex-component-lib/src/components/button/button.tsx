import { ButtonProps } from '@mui/base';
import { useButton } from '@mui/base/useButton';
import { Button } from '@mui/base';
import React from 'react';
import * as stylex from '@stylexjs/stylex';

interface GDSButtonProps extends ButtonProps {
    size?: 'small' | 'medium' | 'large';
    overrideStyles?: stylex.StyleXStyles[] | stylex.StyleXStyles;
}

export const GDSButton = React.forwardRef(function CustomButton(props: GDSButtonProps, ref: React.ForwardedRef<any>) {

    const { children,size, overrideStyles} = props;

    const { getRootProps } = useButton({
        ...props,
        rootRef: ref,
    });

    return (
        <Button
          {...getRootProps()}
          {...stylex.props(styles[size ?? 'medium'], styles.base, overrideStyles)}
        >
          {children}
        </Button>
    );
});

const styles = stylex.create({
    small: {
        fontSize: '1rem',
    },
    medium: {
        fontSize: '1.5rem',
    },
    large: {
        fontSize: '2rem',
    },
    base: {
        backgroundColor: {
            default: 'hsla(310,82%,42%,1)',
            ':hover': 'hsla(310,82%,42%,0.75)',
            ':active': 'hsla(310,82%,42%,1)',
        },
        ':disabled': {
            opacity: 0.25,
        },
        fontFamily: "Quicksand",
        borderRadius: '0.75em',
        color: 'hsl(210,40%,98%)',
        border: 'none',
        display: 'inline-flex',
        padding: '5px 10px',
    },
})