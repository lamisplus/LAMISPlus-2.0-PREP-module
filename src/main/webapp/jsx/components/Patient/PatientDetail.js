import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PatientCardDetail from './PatientCard'
import { useHistory } from "react-router-dom";
import SubMenu from './SubMenu';
import RecentHistory from './../History/RecentHistory';
import ClinicVisit from '../Consultation/Index'
import PrEPCommencementForm from './../PrepServices/PrEPCommencementForm';
import PrEPDiscontinuationsInterruptions from './../PrepServices/PrEPDiscontinuationsInterruptions';
import PrEPEligibiltyScreeningForm from './../PrepServices/PrEPEligibiltyScreeningForm';
import PrEPVisit from './../PrepServices/PrEPVisit';
import PrEPRegistrationForm from './../PrepServices/PrEPRegistrationForm';
import Biometrics from './Biometric'


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '20.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});


function PatientCard(props) {
    let history = useHistory();
    const [art, setArt] = useState(false);
    const [activeContent, setActiveContent] = useState({route:"recent-history", id:"", activeTab:"home", actionType:"create", obj:{}});
    const { classes } = props;
    const patientObj = history.location && history.location.state ? history.location.state.patientObj : {}
    
  return (
    <div className={classes.root}>
      <div className="row page-titles mx-0" style={{marginTop:"0px", marginBottom:"-10px"}}>
			<ol className="breadcrumb">
				<li className="breadcrumb-item active"><h4> <Link to={"/"} >PrEp /</Link> Patient Dashboard</h4></li>
			</ol>
		  </div>
      <Card >
        <CardContent>
            <PatientCardDetail patientObj={patientObj} setArt={setArt} setActiveContent={setActiveContent}/>            
            <SubMenu patientObj={patientObj} art={art} setActiveContent={setActiveContent}/>
            <br/>
          {activeContent.route==='recent-history' &&(<RecentHistory patientObj={patientObj} setActiveContent={setActiveContent} activeContent={activeContent}/>)}
          {activeContent.route==='biometrics' &&(<Biometrics patientObj={patientObj} setActiveContent={setActiveContent} activeContent={activeContent}/>)}
          {activeContent.route==='consultation' &&( <ClinicVisit patientObj={patientObj} setActiveContent={setActiveContent} activeContent={activeContent}/>)}
          {/* {activeContent==='child-consultation' &&( <ChildConsultation patientObj={patientObj} setActiveContent={setActiveContent}/>)} */}
          {activeContent.route==='prep-commencement' &&( <PrEPCommencementForm patientObj={patientObj} setActiveContent={setActiveContent} activeContent={activeContent}/>)}
          {activeContent.route==='prep-interruptions' &&( <PrEPDiscontinuationsInterruptions patientObj={patientObj} setActiveContent={setActiveContent} activeContent={activeContent}/>)}
          {activeContent.route==='prep-screening' &&( <PrEPEligibiltyScreeningForm patientObj={patientObj} setActiveContent={setActiveContent} activeContent={activeContent}/>)}
          {activeContent.route==='prep-visit' &&( <PrEPVisit />)}
          {activeContent.route==='prep-registration' &&( <PrEPRegistrationForm patientObj={patientObj} setActiveContent={setActiveContent} activeContent={activeContent}/>)} 
                    
          {/* History Pages */}
         
         </CardContent>
      </Card>
    </div>
  );
}

PatientCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientCard);
