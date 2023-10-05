// MUI コンポーネント
//// Inputコンポーネント
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
//// DataDisplayコンポーネント
import { Avatar, Typography } from '@mui/material';
//// Navigationコンポーネント
import { Link } from '@mui/material';
//// Layoutコンポーネント
import { Box, Container, Stack } from '@mui/material';
//// アイコンコンポーネント
import AcUnitIcon from '@mui/icons-material/AcUnit';

// サインインページサンプル
export function SignInPage({ authState, setAuthState }) {

    // POSTサブミットハンドラー
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.debug({
            email: data.get('email'),
            password: data.get('password'),
        });
        setAuthState(true);
    };

    // テキストフィールド共通プロパティ
    const textFieldProps = {
        margin: "normal",
        required: true,
        fullWidth: true,
        autoComplete: "email",
        autoFocus: true
    };

    return (
        <SignInPageLayout>
            {/* ヘッダー領域 アイコン/タイトル */}
            <SignInPageHeader />
            {/* フォーム領域 */}
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    {...textFieldProps}
                    id="email"
                    label="メールアドレス"
                    name="email"
                />
                <TextField
                    {...textFieldProps}
                    name="password"
                    label="パスワード"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="パスワードを保存"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    ログイン
                </Button>
                {/* フッター領域 アカウント追加/パスワードリセット */}
                <SignInPageFooter />
            </Box>
        </SignInPageLayout>
    );
}

// レイアウト
function SignInPageLayout({ children }) {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {children}
            </Box>
        </Container>
    );
}

// ヘッダー領域
function SignInPageHeader() {
    return (
        <>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <AcUnitIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                ログイン
            </Typography>
        </>
    );
}

// フッター領域
function SignInPageFooter() {
    return (
        <Stack spacing={2}>
            <Link href="#" variant="body2">
                パスワードを忘れた場合
            </Link>
            <Link href="#" variant="body2">
                {"アカウント登録"}
            </Link>
        </Stack>
    );
}