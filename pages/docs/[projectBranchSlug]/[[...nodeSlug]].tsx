import { docsPageStaticFuncs, withDevPortalDocsPage } from '../../../plugin';
import { config } from '../../../stoplight.config';

const { getStaticPaths, getStaticProps } = docsPageStaticFuncs(config);

export { getStaticPaths, getStaticProps };

export default withDevPortalDocsPage();
