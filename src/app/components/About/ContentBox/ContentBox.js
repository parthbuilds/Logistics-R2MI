import styles from './contentbox.module.css';

const ContentBlock = () => {
  return (
    <section className={`${styles.ContentBlock_section__hC1BU} ${styles.ContentBlock_dark__NxVhu}`}>
      <div className={`${styles.ContentBlock_container___Mv_I} ${styles.ContentBlock_dark__NxVhu}`}>
        <div className={`${styles.ContentBlock_contentWrapper__rqZhG} ${styles.ContentBlock_dark__NxVhu}`} style={{ opacity: 1, transform: 'none' }}>
          <div className={`${styles.ContentBlock_textWrapper__KsnuB} prose ${styles.ContentBlock_left__vxT9B}`}>
            <h4 className={styles.ContentBlock_title__SwFp8}>Sustainability</h4>
            <p>As a logistics partner, we are committed to the environment and recognize the vital significance of tracking and disclosing greenhouse gas (GHG) emissions.</p>
            <p>We embrace our environmental responsibility and pledge to initiate meaningful change.&nbsp;We understand that addressing climate change is a collective endeavor, and we are wholeheartedly devoted to being part of the solution. We actively
              contribute to a sustainable future, reduce our carbon footprint, and help build a healthier planet for present and future generations. More about how we do our part can be found in the <a target="_self" aria-label="/esg" href="/esg">ESG</a> section.</p>
          </div>
          <div className={`${styles.ContentBlock_imageWrapper__ZH9Dh} ${styles.ContentBlock_left__vxT9B}`} style={{ transform: 'translateY(-0.393185px) translateZ(0px)' }}>
            <img alt="Manuport logistics" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className={`${styles.ContentBlock_image__5kqcq} Image_storyblok-image__oDocz Image_is-loaded__RCqPL`}
              src="https://a.storyblok.com/f/240783/3000x1684/e8e7f4d2b4/dji_0040-2.jpg/m/1024x1024/filters:quality(95):focal()"
              srcSet="https://a.storyblok.com/f/240783/3000x1684/e8e7f4d2b4/dji_0040-2.jpg/m/600x600/filters:quality(95):focal() 1x, https://a.storyblok.com/f/240783/3000x1684/e8e7f4d2b4/dji_0040-2.jpg/m/1024x1024/filters:quality(95):focal() 2x"
              style={{ color: 'transparent' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;