import classes from './Footer.module.scss';
import Card from '../UI/Card';

const Footer = props => {
  return (
    <footer className={classes.footer}>
      <Card className={classes.footer__container}>
        <div className={classes.footer__menu}>menu 1</div>
        <div className={classes.footer__contact}>+98900133356</div>
        <div className={classes.footer__desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </div>
      </Card>
    </footer>
  );
};

export default Footer;
