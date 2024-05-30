import volkiharBackgroundLarge from '~/assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from '~/assets/volkihar-background-placeholder.jpg';
import volkiharBannerLarge from '~/assets/volkihar-banner-large.jpg';
import volkiharBannerPlaceholder from '~/assets/volkihar-banner-placeholder.jpg';
import volkiharEnderalLarge from '~/assets/volkihar-enderal-large.jpg';
import volkiharEnderalPlaceholder from '~/assets/volkihar-enderal-placeholder.jpg';
import detectAdblock from '~/assets/detect-adblock.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { List, ListItem } from '~/components/list';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment} from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './volkihar-knight.module.css';


const title = 'AdBlock Detector';
const description =
  'The AdBlock Detector is a sophisticated JavaScript utility I developed to identify the presence of ad blockers on web pages. This tool is essential for websites relying on ad revenue, providing them with the ability to detect and respond to ad blocker usage.';
const roles = ['JavaScript', 'AJAX', 'HTML & CSS'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export function VolkiharKnight() {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --primary: oklch(87.71% 0.084 85.29);
              --accent: oklch(87.71% 0.084 85.29);
            }
            [data-theme='light'] {
              --primary: oklch(52.25% 0.121 81.53);
              --accent: oklch(52.25% 0.121 81.53);
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${volkiharBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="View Repository"
          url="https://github.com/md-hameem/AdBlocker-Detector/blob/main/adBlockDetector.js"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${volkiharBannerLarge} 1100w`}
              width={800}
              height={436}
              placeholder={volkiharBannerPlaceholder}
              alt="AdBlock detector no more"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectImage
              srcSet={`${detectAdblock} 1100w`}
              width={800}
              height={436}
              placeholder={volkiharBannerPlaceholder}
              alt="AdBlock detector no more"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />

            <div className={styles.textSection}>
              <ProjectSectionHeading>Implementation</ProjectSectionHeading>
              <ProjectSectionText>
                Integrating the AdBlock Detector into a website is straightforward. By
                configuring options such as detection delay, maximum attempts, and
                callback functions, developers can tailor the detector to their specific
                needs. This utility not only enhances user experience by identifying ad
                blocker usage but also helps in strategizing responses to ensure ad
                revenue is not adversely affected.
              </ProjectSectionText>
              <ProjectSectionText>
                Including the AdBlock Detector in my portfolio demonstrates my ability to
                solve practical problems using JavaScript. It showcases my skills in web
                development, AJAX, and client-side scripting, highlighting my capability
                to create tools that enhance website functionality and revenue assurance.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>How It Works</ProjectSectionHeading>
              <ProjectSectionText>
                The AdBlock Detector works by injecting a bait element into the webpage.
                Ad blockers typically hide or remove these bait elements, and the script
                detects these changes to determine the presence of an ad blocker.
                Additionally, it can fetch remote blocklists to enhance detection
                accuracy. The detection results can be handled using custom callback
                functions, making it easy to integrate with any website’s workflow.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
       
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={`${volkiharEnderalLarge} 1920w`}
              width={1280}
              height={720}
              placeholder={volkiharEnderalPlaceholder}
              alt="k"
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <ProjectSectionText>
                <List>
                  <ListItem>
                  <strong>Bait Element Detection:</strong> Utilizes invisible bait elements to detect ad blockers.
                  </ListItem>
                  <ListItem>
                  <strong>Remote Blocklist Checks: </strong> Supports fetching and evaluating remote blocklists via AJAX.
                  </ListItem>
                  <ListItem>
                  <strong>Customizable Callbacks: </strong> Provides flexibility through customizable callbacks for detection results.
                  </ListItem>
                  <ListItem>
                  <strong>Configurable Parameters: </strong> Allows configuration of detection parameters such as delay between checks and maximum attempts.
                  </ListItem>
                  <ListItem>
                  <strong>BDebug Mode: </strong> Includes a debug mode for detailed logging, aiding in troubleshooting and development.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
