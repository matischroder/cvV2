import './App.css';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from './LanguageSwitch';
import BackgroundSwitch from './BackgroundSwitch'
import { useState } from 'react';
import React from 'react';
import ReactTextTransition from "react-text-transition";
import image from "./assets/images/image.png"
import { GoLocation } from "react-icons/go";
import { AiOutlineMail, AiOutlineLinkedin, AiFillGithub} from "react-icons/ai";





export const Context = React.createContext({ white: false, setColor: () => { } });

function App() {
  const { t, i18n } = useTranslation()
  const [white, setColor] = useState(false)

  return (
    <div className="App">
      <section>
        
        <div className={white ? ("top top-white") : ("top top-dark")}>
          <div className="top-left">
            <Typography variant="h3" id="currículum-vítae">{t('title')}</Typography>
          </div>
          <div className="top-right">
           <LanguageSwitch />
                       <br />
            <Context.Provider value={{white,setColor}}>
              <BackgroundSwitch />
            </Context.Provider>
            </div>
        </div>
        <div className={white ? ("split1 left contact-white") : ("split1 left contact-dark")}>
          <div className="centered contact-div">
            <img className="image" src={image} alt="First Person"></img>
            <div className="low-contact">
            <br />
              <GoLocation color="#fafafa" size="1.5em" />
            <a>Córdoba, Argentina</a>
            <br />
            <br />
            <a className="contact-link" href="mailto:matischroder99@gmail.com">
            <AiOutlineMail href="mailto:matischroder99@gmail.com" size="1.5em"/>
            </a>
            <a className="contact-link" href="https://www.linkedin.com/in/matischroder/">
            <AiOutlineLinkedin size="1.5em"/>
            </a>
            <a href="https://github.com/matischroder">
              <AiFillGithub size="1.5em" color="#fafafa"/>
            </a>
          </div>
          </div>
        </div>
        <div className={white ? ("split2 middle white") : ("split2 middle dark")}>
          <div className="text-frame">
            
            <div className="intro vertical-align">
            <Typography variant="body1">
              <ReactTextTransition
                text={t('intro')}
                direction="up"
                delay="0"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              />       
            </Typography>
            </div>

            <div className="experience vertical-align">
            <Typography variant="h4" id="experiencia">
              <ReactTextTransition
                text={t('experience.title')}
                direction="up"
                delay="400"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              />
            </Typography>
            <ul>
              <li>
                <ReactTextTransition
                  text={t('experience.experience1')}
                  direction="up"
                  delay="400"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                />
                  </li>
            </ul>

            <Typography variant="h5" id="proyectos-facultativos">
              <ReactTextTransition
                text={t('projects.title')}
                direction="up"
                delay="800"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              />
            </Typography>
            <ul>
              <li>
                <a href="https://malucar.herokuapp.com/">
                <ReactTextTransition
                  text={t('projects.first.title')}
                    direction="up"
                    delay="800"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                    inline
                />
                </a>
                <a> </a>
                <ReactTextTransition
                  text={t('projects.technologies')}
                  direction="up"
                  delay="900"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
                />
                <ReactTextTransition
                  text={t('projects.first.technologies')}
                  direction="up"
                  delay="900"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
                />
              </li>
              <li><a href="https://voluntariadoing.ucc.edu.ar/"><ReactTextTransition
                text={t('projects.second.title')}
                direction="up"
                delay="1000"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
                inline
              />
              </a>
                <a> </a>
                <ReactTextTransition
                  text={t('projects.technologies')}
                  direction="up"
                  delay="1000"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
                />
                <ReactTextTransition
                  text={t('projects.second.technologies')}
                  direction="up"
                  delay="1100"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
                /></li>
            </ul>

            <Typography variant="h5" id="proyectos-propios"> <ReactTextTransition
              text={t('ownprojects.title')}
              direction="up"
              delay="1600"
              springConfig={{ mass: 1, tension: 7, friction: 5 }}
              noOverflow
            /></Typography>
            <ul>
              <li> <ReactTextTransition
                text={t('ownprojects.technologie.one')}
                direction="up"
                delay="1800"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
                inline
              /> <a href="https://gimplanes.netlify.app/">
                  <ReactTextTransition
                  text={t('ownprojects.app')}
                    direction="up"
                    delay="1850"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                    inline
                  />
                  </a>
                  <a> </a>
                  <ReactTextTransition
                    text={t('pipe')}
                    direction="up"
                    delay="1900"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                    inline
                  />
                  <a> </a>

                  <a href="https://campanadonacionlalonja.netlify.app/"><ReactTextTransition
                  text={t('ownprojects.app')}
                  direction="up"
                  delay="1950"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
                  /></a>
                  <a> </a>
                  <ReactTextTransition
                    text={t('pipe')}
                    direction="up"
                    delay="2000"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                    inline
                  />
                  <a> </a>
                  <a href="https://escribaniaschroder.netlify.app/"><ReactTextTransition
                  text={t('ownprojects.web')}
                  direction="up"
                  delay="2050"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
              /></a></li>
            </ul>
            </div>
            
            <div className="skills vertical-align">
            <Typography variant="h4" id="habilidades"><ReactTextTransition
              text={t('skills.title')}
              direction="up"
              delay="2200"
              springConfig={{ mass: 1, tension: 7, friction: 5 }}
              noOverflow
            /></Typography>
            <ul>
              <li><ReactTextTransition
                text={"Solidity"}
                direction="up"
                delay="2300"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
                 />
                </li>
              <li><ReactTextTransition
                text={"NodeJs"}
                direction="up"
                delay="2400"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
              <li><ReactTextTransition
                text={"ReactJs"}
                direction="up"
                delay="2500"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
              <li><ReactTextTransition
                text={"C++"}
                direction="up"
                delay="2600"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
              <li><ReactTextTransition
                text={"Javascript"}
                direction="up"
                delay="2700"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
              <li><ReactTextTransition
                text={"Git"}
                direction="up"
                delay="2800"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
              <li><ReactTextTransition
                text={"Docker"}
                direction="up"
                delay="2900"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
              <li><ReactTextTransition
                text={"Linux"}
                direction="up"
                delay="3000"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
              <li><ReactTextTransition
                text={"Agile"}
                direction="up"
                delay="3100"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
              <li><ReactTextTransition
                text={"Python"}
                direction="up"
                delay="3200"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
            </ul>
            </div>
          </div>
        </div>
        <div className={white ? ("split2 right white") : ("split2 right dark")}>
          <div className="text-frame">
            <div className="education vertical-align">
            <Typography variant="h4" id="educación"><ReactTextTransition
              text={t('education.title')}
              direction="up"
              delay="3400"
              springConfig={{ mass: 1, tension: 7, friction: 5 }}
              noOverflow
            /></Typography>
            <ul>
              <li><ReactTextTransition
                text={t('education.first')}
                direction="up"
                delay="3600"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
              <li><ReactTextTransition
                text={t('education.second')}
                direction="up"
                delay="3600"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
              <li><ReactTextTransition
                text={t('education.third')}
                direction="up"
                delay="3600"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
            </ul>
            </div>

            <div className="extra vertical-align">
            <Typography variant="h5" id="certificaciones"><ReactTextTransition
              text={t('extra.title')}
              direction="up"
              delay="3800"
              springConfig={{ mass: 1, tension: 7, friction: 5 }}
              noOverflow
            /></Typography>
            <ul>
              <li><strong><ReactTextTransition
                text={t('extra.first')}
                direction="up"
                delay="4000"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
                inline
              /></strong> <em><ReactTextTransition
                text={t('extra.cambridge')}
                  direction="up"
                  delay="4000"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                inline
              /></em></li>
              <li><strong><ReactTextTransition
                text={t('extra.second')}
                direction="up"
                delay="4100"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
                inline
              /></strong> <em><ReactTextTransition
                text={t('extra.trinity')}
                  direction="up"
                  delay="4100"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                inline
              /></em></li>
              <li><strong><ReactTextTransition
                text={t('extra.third')}
                direction="up"
                delay="4200"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
                inline
              /></strong> <em><ReactTextTransition
                text={t('extra.trinity')}
                  direction="up"
                  delay="4200"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                inline
              /></em></li>
            </ul>
            </div>

            <div className="languages vertical-align">
            <Typography variant="h5" id="idiomas"><ReactTextTransition
              text={t('languages.title')}
              direction="up"
              delay="4400"
              springConfig={{ mass: 1, tension: 7, friction: 5 }}
              noOverflow
              /></Typography>
            <ul>
              <li>
                <ReactTextTransition
                  text={t('languages.spanish')}
                  direction="up"
                  delay="4500"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                />
              </li>
              <li>
                <ReactTextTransition
                  text={t('languages.english')}
                  direction="up"
                  delay="4500"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                />
              </li>
              <li>
                <ReactTextTransition
                  text={t('languages.portuguese')}
                  direction="up"
                  delay="4500"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                />
              </li>
            </ul>
            </div>

            <div className="contact vertical-align">
            <Typography variant="h4" id="información-importante">
              <ReactTextTransition
                text={t('contact.title')}
                direction="up"
                delay="4600"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              />
            </Typography>
            <ul>
              <li><strong> <ReactTextTransition
                text={t('contact.direction.title')}
                direction="up"
                delay="4700"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
                inline
              /></strong> <ReactTextTransition
                  text={t('contact.direction.description')}
                  direction="up"
                  delay="4700"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
                /></li>
              <li><strong> <ReactTextTransition
                text={"Email:"}
                direction="up"
                delay="4800"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
                inline
              /></strong> <ReactTextTransition
                  text={"matischroder99@gmail.com"}
                  direction="up"
                  delay="4800"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
                /></li>
              <li><strong><ReactTextTransition
                text={"Linkedin:"}
                direction="up"
                delay="4900"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
                inline
              /></strong> <a href="https://www.linkedin.com/in/matischroder/"><ReactTextTransition
                  text={"Matías Schröder"}
                  direction="up"
                  delay="4900"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
              /></a></li>
              <li><strong><ReactTextTransition
                text={"Github:"}
                direction="up"
                delay="5000"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
                inline
              /></strong> <a href="https://github.com/matischroder"><ReactTextTransition
                text={"matischroder"}
                  direction="up"
                  delay="5000"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                inline
              /></a></li>
            </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
