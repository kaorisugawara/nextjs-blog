import Head from 'next/head'
import styled from '@emotion/styled'
import { Layout } from '../../components/layout'
import { Date } from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'

const StyledTitle = styled.h1`
	font-size: 2.5rem;
	line-height: 1.2;
	font-weight: 800;
	letter-spacing: -0.05rem;
	margin: 1rem 0;
`;

const StyledDateWrapper = styled.div`
    color: #999;
`;

const Post = ({ postData }) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <StyledTitle>{postData.title}</StyledTitle>
                <div>id: {postData.id}</div>
                <StyledDateWrapper>
                    <Date dateString={postData.date} />
                </StyledDateWrapper>
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>

        </Layout>
    )
}

export const getStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default Post