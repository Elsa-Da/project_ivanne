
import './about.scss';
import classnames from 'classnames';

function About(props) {
  const { isMenuActive, onOverLayClick } = props

    const sideMenuClasses = classnames('side-menu', { 'side-menu--active': isMenuActive, });
    const sideMenuContentClasses = classnames('side-menu__content', { 'side-menu__content--active': isMenuActive, });
    return (<aside className={sideMenuClasses}>
        <div className="side-menu__overlay" onClick={onOverLayClick}/>
        <div className={sideMenuContentClasses}>{props.children}</div>
    </aside>);
}

export default About;