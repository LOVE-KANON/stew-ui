import * as React from "react";

export const useHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    return {
        anchorEl,
        setAnchorEl,
    };
};
