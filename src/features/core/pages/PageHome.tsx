import {
    Container,
    Box,
    Typography,
} from "@mui/material";

const PageHome = () => {

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4">
                    Home
                </Typography>
    
                <Typography sx={{ mt: 2 }}>
                    ホーム画面（認証なし・仮）
                </Typography>
    
            </Box>
        </Container>
    );
};

export default PageHome;
