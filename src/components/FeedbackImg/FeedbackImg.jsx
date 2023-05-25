// import propTypes from 'prop-types';
import css from './FeedbackImg.module.css';
import notepadSpring from '../img/notepad-spring.jpg';

export const FeedbackImg = () =>
  (<div>
    <img className={css.imgFeedback} src={notepadSpring} alt='notepad spring' width='100%'/>
  </div>)
