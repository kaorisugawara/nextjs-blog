import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Layout, siteTitle } from '../components/layout';
import { Date } from '../components/date';
import { getSortedPostsData } from '../lib/posts';

const StyledSection = styled.section`
	font-size: 1.2rem;
	line-height: 1.5;
`;

const StyledContainer = styled.div`
	max-width: 36rem;
	padding: 0 1rem;
	margin: 3rem auto 6rem;
`;

const StyledTitle2 = styled.h2`
	font-size: 1.5rem;
	line-height: 1.4;
	margin: 1rem 0;
`;

const StyledList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

const StyledListItem = styled.li`
	margin: 0 0 1.25rem;
`;

const StyledDateWrapper = styled.small`
    color: #999;
`;

export const getStaticProps = (async () => {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
})

const Home = ({ allPostsData }) => {
	return (
		<Layout home>
			<StyledContainer>
				<Head>
					<title>{siteTitle}</title>
				</Head>

				<StyledSection>
					<p>フロントエンドのエンジニアさんになりたかった人っぽいなにか。溶ける。くにくに。しゃんぷーおいしー！</p>
					<p>
						(This is a sample website - you’ll be building a site like this on{' '}
						<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
					</p>
				</StyledSection>

				<StyledSection>
					<StyledTitle2>Blog</StyledTitle2>
					<StyledList>
						{allPostsData.map(({ id, date, title }) => (
							<StyledListItem key={id}>
								<Link href="/posts/[id]" as={`/posts/${id}`}>
									<a>{title}</a>
								</Link>
								<br />
								<StyledDateWrapper>
									<Date dateString={date} />
								</StyledDateWrapper>
							</StyledListItem>
						))}
					</StyledList>

				</StyledSection>
			</StyledContainer>
		</Layout>
	);
}

export default Home;