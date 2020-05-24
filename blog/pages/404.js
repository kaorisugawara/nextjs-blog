import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';

const StyledContainer = styled.div`
max-width: 36rem;
padding: 0 1rem;
margin: 3rem auto 6rem;
`;

const StyledIcon = styled.img`
	width: 30rem;
	height: 20rem;
`;

const StyledText = styled.p`
    margin-bottom: 2rem;
    color: #999;
`;

const StyledBackToHome = styled.div`margin: 3rem 0 0;`;

const Custome404 = () => {
    return (
        <StyledContainer>
            <Head>
                <title>404</title>
            </Head>
            <>
                <h1>ぺーじ　のっとふぁうんど</h1>
                <StyledText>おてすおかけしまた</StyledText>
                <StyledIcon src="/images/rip.jpeg" alt="404" />

                <StyledBackToHome>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </StyledBackToHome>
            </>
        </StyledContainer>
    )
}

export default Custome404