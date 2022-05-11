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
import { AiOutlineMail, AiOutlineLinkedin, AiFillGithub, AiOutlineWhatsApp} from "react-icons/ai";





export const Context = React.createContext({ white: false, setColor: () => { } });

function App() {
  const { t } = useTranslation()
  const [white, setColor] = useState(false)

  return (
    <div className="App">
      <section>
        
        <div className={white ? ("top top-white") : ("top top-dark")}>
          <div className="top-left">
            <Typography variant="h3" id="curriculum-vitae">{t('title')}</Typography>
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
            {/* <img className="image" src={image} alt="First Person"></img> */}
            <div className="low-contact">
              <Typography variant="h5">Full-Stack Developer</Typography>
            <br />
              <GoLocation color="#fafafa" size="1.5em" />
            <a>Córdoba, Argentina</a>
            <br />
            <br />
              <a className="contact-link" href="mailto:matischroder99@gmail.com" target="_blank" rel="noreferrer">
            <AiOutlineMail size="1.5em"/>
              </a>
              <a className="contact-link" href="wa.me/5493515212248" target="_blank" rel="noreferrer">
                <AiOutlineWhatsApp size="1.5em"/>
                </a>
              <a className="contact-link" href="https://www.linkedin.com/in/matischroder/" target="_blank" rel="noreferrer">
            <AiOutlineLinkedin size="1.5em"/>
            </a>
              <a href="https://github.com/matischroder" target="_blank" rel="noreferrer">
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
                delay="25"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              />
              </Typography>
              <br/>
            <ul>
              <li>
                <ReactTextTransition
                  text={t('experience.first.experience')}
                  direction="up"
                  delay="50"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                />
                  </li>
              </ul>
              <br />
              <br />
            <Typography variant="h5" id="proyectos-facultativos">
              <ReactTextTransition
                text={t('projects.title')}
                direction="up"
                delay="75"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              />
            </Typography>
            <ul>
              <li>
                  <a href="https://malucar.herokuapp.com/" target="_blank" rel="noreferrer">
                <ReactTextTransition
                  text={t('projects.first.title')}
                    direction="up"
                    delay="100"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                />
                  </a>
                  <ReactTextTransition
                    text={t('projects.first.description')}
                    direction="up"
                    delay="125"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  />
                <ReactTextTransition
                  text={t('projects.technologies')}
                  direction="up"
                  delay="150"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
                  />
                  <a> </a>
                <ReactTextTransition
                  text={t('projects.first.technologies')}
                  direction="up"
                  delay="175"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
                  />
                </li>
                <br />
                <li><a href="https://voluntariadoing.ucc.edu.ar/" target="_blank" rel="noreferrer"><ReactTextTransition
                text={t('projects.second.title')}
                direction="up"
                delay="200"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
              />
              </a>
                  <ReactTextTransition
                    text={t('projects.second.description')}
                    direction="up"
                    delay="225"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                />
                <ReactTextTransition
                  text={t('projects.technologies')}
                  direction="up"
                  delay="250"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
                  />
                  <a> </a>
                <ReactTextTransition
                  text={t('projects.second.technologies')}
                  direction="up"
                  delay="275"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
                /></li>
            </ul>
              <br />
              <br />


            <Typography variant="h5" id="proyectos-propios"> <ReactTextTransition
              text={t('ownprojects.title')}
              direction="up"
              delay="300"
              springConfig={{ mass: 1, tension: 7, friction: 5 }}
              noOverflow
            /></Typography>
            <ul>
                <li>
                  <a href="https://gimplanes.netlify.app/" target="_blank" rel="noreferrer">
                  <ReactTextTransition
                  text={t('ownprojects.app')}
                    direction="up"
                    delay="325"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                      noOverflow
                      inline
                  />
                  </a>
                  <a> </a>
                  <ReactTextTransition
                    text={t('ownprojects.first.description')}
                    direction="900"
                    delay="350"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                    inline                    
                  />
                  <br />
                  <ReactTextTransition
                    text={t('ownprojects.technologies')}
                    direction="up"
                    delay="375"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                    inline
                  />
                  <a> </a>
                  <ReactTextTransition
                    text={t('ownprojects.technologie.one')}
                    direction="up"
                    delay="400"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                    inline
                  />
                  <br />
                  <br />
                  <a href="https://campanadonacionlalonja.netlify.app/" target="_blank" rel="noreferrer"><ReactTextTransition
                  text={t('ownprojects.app')}
                  direction="up"
                  delay="425"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
                  /></a>
                  <a> </a>
                  <ReactTextTransition
                    text={t('ownprojects.second.description')}
                    direction="up"
                    delay="450"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                    inline
                  />
                  <br />
                  <ReactTextTransition
                    text={t('ownprojects.technologies')}
                    direction="up"
                    delay="475"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                    inline
                  />
                  <a> </a>
                  <ReactTextTransition
                    text={t('ownprojects.technologie.one')}
                    direction="up"
                    delay="500"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                    inline
                  />
                  <br />
                  <br />
                  <a href="https://escribaniaschroder.netlify.app/" target="_blank" rel="noreferrer"><ReactTextTransition
                  text={t('ownprojects.web')}
                  direction="up"
                  delay="525"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                  inline
                  /></a>
                  <a> </a>
                  <ReactTextTransition
                    text={t('ownprojects.third.description')}
                    direction="up"
                    delay="550"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                    inline
                  />
                  <br />
                  <ReactTextTransition
                    text={t('ownprojects.technologies')}
                    direction="up"
                    delay="575"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                    inline
                  />
                  <a> </a>
                  <ReactTextTransition
                    text={t('ownprojects.technologie.one')}
                    direction="up"
                    delay="600"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                    inline
                  />
                </li>
            </ul>
            </div>
            
           
          </div>
        </div>
        <div className={white ? ("split2 right white") : ("split2 right dark")}>
          <div className="text-frame">
            <div className="skills vertical-align">
              <Typography variant="h4" id="habilidades"><ReactTextTransition
                text={t('skills.title')}
                direction="up"
                delay="625"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></Typography>
              <Typography variant="h5" id="proyectos-facultativos">
                <ReactTextTransition
                  text={"Bockchains"}
                  direction="up"
                  delay="625"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                />
                <ul>
                  <li><ReactTextTransition
                    text={"Ethereum"}
                    direction="up"
                    delay="650"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                  />
                  </li>
                </ul>
                <ReactTextTransition
                  text={"DeFi"}
                  direction="up"
                  delay="625"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                />
                <ul>
                  <li><ReactTextTransition
                    text={"Aave"}
                    direction="up"
                    delay="650"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                  />
                  </li>
                  <li><ReactTextTransition
                    text={"Uniswap"}
                    direction="up"
                    delay="650"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                  />
                  </li>
                  <li><ReactTextTransition
                    text={"Sushiswap"}
                    direction="up"
                    delay="650"
                    springConfig={{ mass: 1, tension: 7, friction: 5 }}
                    noOverflow
                  />
                  </li>
                </ul>
              </Typography>
              <Typography variant="h5" id="proyectos-facultativos">
                <ReactTextTransition
                  text={"Languages"}
                  direction="up"
                  delay="625"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                />
              </Typography>
              <ul>
                <li><ReactTextTransition
                  text={"Solidity"}
                  direction="up"
                  delay="650"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                />
                </li>
                <li><ReactTextTransition
                  text={"NodeJs"}
                  direction="up"
                  delay="675"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                /></li>
                <li><ReactTextTransition
                  text={"ReactJs"}
                  direction="up"
                  delay="700"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                /></li>
                <li><ReactTextTransition
                  text={"C++"}
                  direction="up"
                  delay="725"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                /></li>
                <li><ReactTextTransition
                  text={"Javascript"}
                  direction="up"
                  delay="750"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                /></li>
                <li><ReactTextTransition
                  text={"Git"}
                  direction="up"
                  delay="800"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                /></li>
                <li><ReactTextTransition
                  text={"Docker"}
                  direction="up"
                  delay="825"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                /></li>
                <li><ReactTextTransition
                  text={"Linux"}
                  direction="up"
                  delay="850"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                /></li>
                <li><ReactTextTransition
                  text={"Agile"}
                  direction="up"
                  delay="875"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                /></li>
                <li><ReactTextTransition
                  text={"Python"}
                  direction="up"
                  delay="900"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                /></li>
              </ul>
            </div>
            
            <div className="education vertical-align">
            <Typography variant="h4" id="educación"><ReactTextTransition
              text={t('education.title')}
              direction="up"
              delay="925"
              springConfig={{ mass: 1, tension: 7, friction: 5 }}
              noOverflow
            /></Typography>
            <ul>
              <li><ReactTextTransition
                text={t('education.first')}
                direction="up"
                delay="950"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
              <li><ReactTextTransition
                text={t('education.second')}
                direction="up"
                delay="975"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
              <li><ReactTextTransition
                text={t('education.third')}
                direction="up"
                delay="1000"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
              /></li>
            </ul>
            </div>

            <div className="extra vertical-align">
            <Typography variant="h5" id="certificaciones"><ReactTextTransition
              text={t('extra.title')}
              direction="up"
              delay="1025"
              springConfig={{ mass: 1, tension: 7, friction: 5 }}
              noOverflow
            /></Typography>
            <ul>
              <li><strong><ReactTextTransition
                text={t('extra.first')}
                direction="up"
                delay="1050"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
                inline
              /></strong> <em><ReactTextTransition
                text={t('extra.cambridge')}
                  direction="up"
                  delay="3600"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                inline
              /></em></li>
              <li><strong><ReactTextTransition
                text={t('extra.second')}
                direction="up"
                delay="1075"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
                inline
              /></strong> <em><ReactTextTransition
                text={t('extra.trinity')}
                  direction="up"
                  delay="1100"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                inline
              /></em></li>
              <li><strong><ReactTextTransition
                text={t('extra.third')}
                direction="up"
                delay="1125"
                springConfig={{ mass: 1, tension: 7, friction: 5 }}
                noOverflow
                inline
              /></strong> <em><ReactTextTransition
                text={t('extra.trinity')}
                  direction="up"
                  delay="1150"
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
              delay="1175"
              springConfig={{ mass: 1, tension: 7, friction: 5 }}
              noOverflow
              /></Typography>
            <ul>
              <li>
                <ReactTextTransition
                  text={t('languages.spanish')}
                  direction="up"
                  delay="1200"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                />
              </li>
              <li>
                <ReactTextTransition
                  text={t('languages.english')}
                  direction="up"
                  delay="1225"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                />
              </li>
              <li>
                <ReactTextTransition
                  text={t('languages.portuguese')}
                  direction="up"
                  delay="1250"
                  springConfig={{ mass: 1, tension: 7, friction: 5 }}
                  noOverflow
                />
              </li>
            </ul>
            </div>

          

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
