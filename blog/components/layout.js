import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';

const StyledContainer = styled.div`
	max-width: 36rem;
	padding: 0 1rem;
	margin: 3rem auto 6rem;
`;

const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 100%;
`;

const StyledIcon = styled.img`
	width: 8rem;
	height: 8rem;
`;

const StyledTitle = styled.h1`
	font-size: 2.5rem;
	line-height: 1.2;
	font-weight: 800;
	letter-spacing: -0.05rem;
	margin: 1rem 0;
`;

const StyledTitle2 = styled.h2`
	font-size: 1.5rem;
	line-height: 1.4;
	margin: 1rem 0;
`;

const StyledColorInherit = styled.a`color: inherit;`;

const StyledBackToHome = styled.div`margin: 3rem 0 0;`;

const name = 'gaaaaaasuuuufe';
export const siteTitle = 'Next.js Smaple Website';

const Layout = ({ home, children }) => {
	return (
		<StyledContainer>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<StyledHeader>
				{home ? (
					<>
						<StyledIcon src="/images/banana.jpg" alt={name} />
						<StyledTitle>{name}</StyledTitle>
					</>
				) : (
						<>
							<Link href="/">
								<a>
									<StyledIcon src="/images/banana.jpg" alt={name} />
								</a>
							</Link>
							<StyledTitle2>
								<Link href="/">
									<StyledColorInherit>{name}</StyledColorInherit>
								</Link>
							</StyledTitle2>
						</>
					)}
			</StyledHeader>

			<main>{children}</main>

			{!home && (
				<StyledBackToHome>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</StyledBackToHome>
			)}
		</StyledContainer>
	);
};

export { Layout };
