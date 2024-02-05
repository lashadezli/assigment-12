import classes from '../modules/AccordionList.module.scss';
import Logo from '../assets/images/icon-star.svg';
import plus from '../assets/images/icon-plus.svg';
import minus from '../assets/images/icon-minus.svg';


export const List = () => 
{
  return (
    <div className={classes['Main']}>
        <div className={classes['Top']}>
            <img src={Logo} alt="" /> 
            <h1>FAQs</h1>
         </div>
           <div className={classes['First-part']}>
                <h1>What is Fronetend Mentor, and how will it help me?</h1>
                <img src={minus} alt="" />
          </div>
           <p className={classes['title']}>
           Frontend Mentor offers realistic coding challenges to help <br/> developers improve their frontend coding skills with projects in<br/> HTML, CSS, and JavaScript. It's suitable for all levels and ideal for <br/>portfolio building.
           </p>
           <hr />
           <div className={classes['First-part']}>
                <h1>is Fronetend Mentor free?</h1>
                <img src={plus} alt="" />
          </div>
          <hr />
          <div className={classes['First-part']}>
                <h1>Can i use Frontend Mentor projects in my portfolio?</h1>
                <img src={plus} alt="" />
          </div>
          <hr />
          <div className={classes['First-part']}>
                <h1>How can i get help if i'm stuck on a challange?</h1>
                <img src={plus} alt="" />
          </div>
           
    </div>
  )
}