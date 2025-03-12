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
                  Contact: Mr. Dayo(CTO) -{' '}
                  <a href="mailto:dayo@luday.se">dayo@luday.se</a>
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
                <p>
                  <strong>
                    <em>Soft Skills:</em>
                  </strong>
                </p>
                <List>
                  <ListItem>
                    Strong problem-solving abilities and a keen attention to detail.
                  </ListItem>
                  <ListItem>
                    Effective teamwork and collaboration skills, fostering a productive
                    and positive work environment.
                  </ListItem>
                  <ListItem>
                    Adaptability and continuous learning to stay updated with the latest
                    technological advancements.
                  </ListItem>
                </List>
                <p>
                  My skill set reflects a balance between front-end and back-end
                  development, machine learning expertise, and a commitment to delivering
                  high-quality software solutions.
                </p>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Achivements</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p>
                  <strong>
                    <em>Academic Excellence:</em>
                  </strong>
                </p>
                <List>
                  <ListItem>
                    <strong>Top Performer in Software Engineering Cohort</strong>:
                    Consistently achieved high grades and recognition for outstanding
                    performance in key subjects including Object-Oriented Programming (C++
                    and Python), Java, Compilers, Algorithms, Operating Systems, Data
                    Structures, Artificial Intelligence, Machine Learning, and Deep
                    Learning.
                  </ListItem>
                </List>
                <p>
                  <strong>
                    <em>Certifications:</em>
                  </strong>
                </p>
                <List>
                  <ListItem>
                    <strong>JavaScript Advanced, Tuition Bear (10/2022 - 12/2022)</strong>
                    : <br />
                    Advanced proficiency in JavaScript, enhancing skills in front-end
                    development and dynamic web applications.
                  </ListItem>
                  <ListItem>
                    <strong>
                      Data Analytics Professional, Google INC. (03/2024 - 04/2024)
                    </strong>
                    : <br />
                    Comprehensive training in data analytics, equipping with skills to
                    analyze and interpret complex datasets.
                  </ListItem>
                  <ListItem>
                    <strong>
                      Supervised Machine Learning: Regression and Classification,
                      Deeplearning.ai (04/2024 - 05/2024)
                    </strong>
                    : <br />
                    Advanced understanding of supervised machine learning techniques, with
                    practical experience in regression and classification models.
                  </ListItem>
                </List>
                <p>
                  Languages I am a native or bilingual speaker of Bangla, ensuring
                  seamless communication and cultural understanding in my native language.
                  I possess full professional proficiency in English, enabling me to
                  effectively communicate and collaborate in diverse professional
                  settings. Additionally, I have professional studying proficiency in
                  Chinese, which allows me to engage and work efficiently in environments
                  where English & Chinese is the primary language.
                </p>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Publicatios</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <p>
                  <strong>
                    <em>
                      The Role of Artificial Intelligence in Revolutionizing Construction
                      Project Management: Enhancing Efficiency and Sustainability
                    </em>
                  </strong>
                </p>
                <List>
                  <ListItem>
                    This marks a significant milestone in my journey as a researcher. In
                    the paper, we discuss how AI is revolutionizing construction by
                    improving efficiency, safety, and sustainability through predictive
                    analytics, machine learning, and automation. Despite challenges, AI is
                    helping to optimize resources, reduce waste, and promote greener
                    practices. Learning.
                  </ListItem>
                  <ListItem>
                    <strong>Article Refference:</strong> North American Academic Research,
                    8(1), 56-76. doi:
                    <a href="https://doi.org/10.5281/zenodo.14840458"> Link to DOI</a>
                  </ListItem>
                  <ListItem>
                    <strong>Links: </strong>
                    <a href="https://twasp.info/journal/4F5217xs/the-role-of-artificial-intelligence-in-revolutionizing-construction-project-management-enhancing-efficiency-and-sustainability">
                      NAAR
                    </a>
                    ,{' '}
                    <a href="https://www.researchgate.net/publication/389706991_The_Role_of_Artificial_Intelligence_in_Revolutionizing_Construction_Project_Management_Enhancing_Efficiency_and_Sustainability">
                      ResearchGate
                    </a>
                  </ListItem>
                </List>
                <p>
                  <strong>
                    <em>
                      Software Requirement Elicitation Technique: Gamification using
                      Decision Tree Method
                    </em>
                  </strong>
                </p>
                <List>
                  <ListItem>
                    This study presents an innovative approach that combines gamification
                    techniques with the Decision Tree Method to improve stakeholder
                    engagement and the overall requirements elicitation process.
                    Gamification fosters collaboration and creativity, while the Decision
                    Tree Method systematically helps prioritize and resolve conflicts
                    around requirements.
                  </ListItem>
                  <ListItem>
                    <strong>Article Refference:</strong> North American Academic Research,
                    8(2), 77-92. doi:
                    <a href="https://doi.org/10.5281/zenodo.14884787"> Link to DOI</a>
                  </ListItem>
                  <ListItem>
                    <strong>Links: </strong>
                    <a href="https://twasp.info/journal/lx39205A/software-requirement-elicitation-technique-gamification-using-decision-tree-methody">
                      NAAR
                    </a>
                    ,{' '}
                    <a href="https://www.researchgate.net/publication/389707025_Software_Requirement_Elicitation_Technique_Gamification_using_Decision_Tree_Method?_sg%5B0%5D=_wtn8jfXzGFc9AufyU2P8UlY4VLzREiGVAWiWwOO0w5QMj858IV49bwCDq35MkFbS2JjtaqrL2afCuedyDlIkRQwhK5Dc7rqzi6fd1PN.LchF5IiVWOX-yCtaRfSu03LBU96bXMbf1ksAjoh_WE-rVOS_xTjse9S3cM0t1zkpMzSlTeF6OztDOFBFUlDZlg&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6Il9kaXJlY3QiLCJwYWdlIjoicHJvZmlsZSIsInByZXZpb3VzUGFnZSI6InByb2ZpbGUiLCJwb3NpdGlvbiI6InBhZ2VDb250ZW50In19">
                      ResearchGate
                    </a>
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
