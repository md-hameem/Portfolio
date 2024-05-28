import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="About me"
          description="Hello! I'm Mohammad Hamim, a dedicated Software Engineering student at Zhengzhou University with a profound interest in Machine Learning and Deep Learning. My passion for technology is reflected in my hands-on experience in developing robust web applications and innovative software solutions"
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Employment History</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p>
                  <b>
                    Full Stack Web App Developer (Intern) | Luday AB | Remote | 02/2024 -
                    04/2024 | Sweden
                  </b>
                </p>
                <p>
                  During my internship at Luday AB, I gained extensive hands-on experience
                  with React, Next.js, and Python Flask, developing robust SAAS projects.
                  My role involved:
                </p>
                <br></br>
                <List>
                  <ListItem>
                    Leading the creation of platforms such as a social media management
                    tool and a family networking app.
                  </ListItem>
                  <ListItem>
                    Enhancing team productivity through the use of VS Codes Live Share.
                  </ListItem>
                  <ListItem>
                    Achieving a 95% bug-fix success rate by resolving critical issues left
                    by previous developers.
                  </ListItem>
                  <ListItem>
                    Developing innovative platforms and fostering a collaborative
                    environment to ensure successful project completion.
                  </ListItem>
                </List>
                <p>
                  Contact: Mr. Dayo - <a href="mailto:dayo@luday.se">dayo@luday.se</a>
                </p>
              </ProjectSectionText>

              <ProjectSectionText as="div">
                <p>
                  <b>
                    Full Stack Web Developer | Flamingo Footwear Limited | 01/2021 -
                    04/2021 | Bangladesh
                  </b>
                </p>
                <p>
                  At Flamingo Footwear Limited, I was responsible for developing UI
                  components for global trade platforms and optimizing performance by 78%.
                  My key responsibilities included:
                </p>
                <br></br>
                <List>
                  <ListItem>
                    Creating seamless user experiences and ensuring responsive websites
                    across various devices.
                  </ListItem>
                  <ListItem>
                    Handling both front-end and back-end tasks with proficiency in
                    React.js and JavaScript.
                  </ListItem>
                  <ListItem>
                    Designing data models and implementing robust security measures.
                  </ListItem>
                  <ListItem>
                    Integrating payment gateways for e-commerce sites to facilitate smooth
                    transactions.
                  </ListItem>
                </List>
                <p>
                  Contact: Md. Jahirul Islam (CEO) -{' '}
                  <a href="mailto:ceo@ftipvt.com">ceo@ftipvt.com</a>
                </p>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Skills & technologies</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p>
                  I possess a diverse set of skills and expertise in various technologies,
                  which have been instrumental in my development as a proficient software
                  engineer. My technical proficiencies include:
                </p>
                <br></br>
                <p>
                  <strong>
                    <em>Programming Languages:</em>
                  </strong>
                </p>
                <List>
                  <ListItem>
                    <b>Python:</b> Extensive experience in developing applications using
                    Python, including web development with Flask and machine learning
                    projects with TensorFlow and OpenCV.
                  </ListItem>
                  <ListItem>
                    <b>JavaScript:</b> Proficient in both front-end and back-end
                    development using JavaScript, with strong command of React and Next.js
                    for building dynamic user interfaces.
                  </ListItem>
                  <ListItem>
                    <b>Java and C++:</b> Solid foundation in object-oriented programming,
                    compilers, algorithms, and operating systems.
                  </ListItem>
                </List>
                <p>
                  <strong>
                    <em>Web Development:</em>
                  </strong>
                </p>
                <List>
                  <ListItem>
                    <Link href="https://reactjs.org/">
                      <b>React</b>
                    </Link>
                    : Expertise in building responsive and intuitive user interfaces.
                  </ListItem>
                  <ListItem>
                    <Link href="https://nextjs.org/">
                      <b>Next.js</b>
                    </Link>
                    : Experience in developing server-rendered React applications.
                  </ListItem>
                  <ListItem>
                    <Link href="https://flask.palletsprojects.com/">
                      <b>Flask</b>
                    </Link>
                    : Proficient in developing server-side logic and APIs using Flask.
                  </ListItem>
                  <ListItem>
                    <b>Tailwind CSS:</b> Skilled in using Tailwind CSS for creating modern
                    and responsive designs.
                  </ListItem>
                </List>
                <p>
                  <strong>
                    <em>Machine Learning and Deep Learning:</em>
                  </strong>
                </p>
                <List>
                  <ListItem>
                    <Link href="https://www.tensorflow.org/">
                      <b>TensorFlow</b>
                    </Link>
                    : Hands-on experience with developing and deploying machine learning
                    models.
                  </ListItem>
                  <ListItem>
                    <Link href="https://opencv.org/">
                      <b>OpenCV</b>
                    </Link>
                    : Knowledge of computer vision techniques and deep learning frameworks
                    for image recognition.
                  </ListItem>
                </List>
                <p>
                  <strong>
                    <em>Development Tools:</em>
                  </strong>
                </p>
                <List>
                  <ListItem>
                    <b>Git</b>: Proficient in using Git for version control and
                    collaborative development.
                  </ListItem>
                  <ListItem>
                    <b>VS Code:</b> Experienced with Visual Studio Code, including
                    features like Live Share to enhance team productivity.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Desktop</TableHeadCell>
                    <TableCell>
                      Custom built (AMD Ryzen 5 5500X, RX5500XT, 16GB)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Windows</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>1080p IPS 144hz LG</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Redragon K552-R KUMARA</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Razer Viper Mini</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>MSI Modern 15</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
