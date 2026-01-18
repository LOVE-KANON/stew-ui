import {
    Box,
    Grid,
    TextField,
    Typography,
} from "@mui/material";

const PageUserDetails = () => {

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>ユーザID</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="userId"
                        fullWidth
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>ユーザ連番</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="userSeq"
                        fullWidth
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>姓</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="sei"
                        fullWidth
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>名</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="mei"
                        fullWidth
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>メールアドレス</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="mailAddress"
                        fullWidth
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>パスワード</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>入社日</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="joinedDate"
                        fullWidth
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>退社日</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="retiredDate"
                        fullWidth
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" gutterBottom>役職</Typography>
                <Box sx={{ maxWidth: 360 }}>
                    <TextField
                        name="position"
                        fullWidth
                        variant="outlined"
                        size="small"
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

export default PageUserDetails;
