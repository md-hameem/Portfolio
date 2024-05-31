import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
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
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Automatic Birthday mail';
const description =
  'Automating routine tasks like sending birthday wishes can indeed streamline our lives, ensuring that we maintain meaningful connections without the risk of oversight or forgetfulness. With a Python script tailored to this purpose, you can effortlessly extend warm greetings to your friends at the stroke of midnight, regardless of your schedule. This sophisticated solution not only showcases your thoughtfulness but also underscores your commitment to nurturing relationships in the digital age. By harnessing the power of automation, you can infuse a touch of elegance into your interactions, leaving a lasting impression on your friends while freeing up valuable time for other pursuits. Embrace the efficiency and convenience of modern technology, and let your Python script become the silent orchestrator of heartfelt birthday wishes, ensuring that no celebration goes unnoticed or unacknowledged.';
const roles = ['Pandas', 'datetime', 'smtplib', 'time', 'requests', 'win10toast'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/md-hameem/Auto-Birthday-Mail"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Features</ProjectSectionHeading>
              <ProjectSectionText>
                <List>
                  <ListItem>
                    <strong>Automated Email Sending:</strong> Sends personalized birthday
                    wishes via email.
                  </ListItem>
                  <ListItem>
                    <strong>Automated SMS Sending: </strong> Sends personalized birthday
                    wishes via SMS.
                  </ListItem>
                  <ListItem>
                    <strong>Desktop Notifications: </strong> Displays a desktop
                    notification when an email or SMS is sent.
                  </ListItem>
                  <ListItem>
                    <strong>Excel Integration: </strong> Reads from an Excel file
                    containing the birthday details and updates it to track the greetings
                    sent.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Prepare the Excel Sheet</ProjectSectionHeading>
              <ProjectSectionText>
                Ensure you have an Excel sheet (excelsheet.xlsx) with the following
                columns:
                <List>
                  <ListItem>
                    <strong>`NAME:`</strong> The name of the person.
                  </ListItem>
                  <ListItem>
                    <strong>`Birthday:`</strong> The birthday date in YYYY-MM-DD format.
                  </ListItem>
                  <ListItem>
                    <strong>`Email:`</strong> The email address of the person.
                  </ListItem>
                  <ListItem>
                    <strong>`Contact:`</strong> The phone number of the person.
                  </ListItem>
                  <ListItem>
                    <strong>`Year:`</strong> The years when the greetings were sent,
                    separated by commas.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Code Explanation</ProjectSectionHeading>
              <ProjectSectionText>
                <List>
                  <ListItem>
                    <strong>Sending Email: </strong> The send_email function connects to
                    the Gmail SMTP server, logs in using your credentials, and sends an
                    email.
                  </ListItem>
                  <ListItem>
                    <strong>Sending SMS: </strong> The send_sms function sends an SMS
                    using the Fast2SMS API.
                  </ListItem>
                  <ListItem>
                    <strong>Main Script: </strong> The script reads the Excel file, checks
                    for birthdays matching the current date, sends the wishes, and updates
                    the Excel file with the current year.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project Configuration</ProjectSectionHeading>
              <ProjectSectionText>
                <h5>Update Gmail Credentials</h5>
                <p>
                  Replace <code>your_email_here</code> and <code>your_password_here</code>{' '}
                  with your Gmail ID and password in the script.
                </p>

                <h5>Update Fast2SMS API Key</h5>
                <p>
                  Replace <code>API_KEY_HERE</code> with your actual Fast2SMS API key in
                  the script.
                </p>
                <br />
                <ProjectSectionHeading>Usage</ProjectSectionHeading>
                <h5>Run the Script</h5>
                <p>Execute the following command in your terminal:</p>
                <pre>
                  <code>python main.py</code>
                </pre>

                <h5>Ensure the Script Runs Daily</h5>
                <p>
                  Use a task scheduler (e.g., Windows Task Scheduler) to run the script
                  daily at midnight.
                </p>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
