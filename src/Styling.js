import { makeStyles } from '@material-ui/core';
import image from './res/HomeImg.jpg'
const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  homeContainerHead2: {
    width: '100% important',
    height: theme.spacing(50),
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    background: `url('${image}') no-repeat center center`,
    backgroundSize: 'cover'
  },
  overlay2: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100% !important',
    height: '100%',
    opacity: '0.4',
    backgroundColor: 'black'
  },
  homeTitleHolder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(2),
    alignItems: 'center',
    color: 'white',
    zIndex: 1
  },
  card: {
    root: 275,
  },
  grid: {
    display: 'flex',
    justifyContent: 'center'
  },
  submitBtn: {
    width: "50%",
    backgroundColor: 'rgb(128, 188, 49)',
    color: "white",
    '&:hover': {
      backgroundColor: 'rgb(113, 174,33)',
      color: "black"
    },
  },
  confirmBtns: {
    width: "125%",
    backgroundColor: 'rgb(128, 188, 49)',
    color: "white",
    '&:hover': {
      backgroundColor: 'rgb(113, 174,33)',
      color: "black"
    },
  },
  cancelBtn: {
    width: "200%",
    backgroundColor: 'rgb(211,211,211)',
    color: 'black',
    '&:hover': {
      backgroundColor: 'rgb(188, 72, 49)',
      color: "white"
    },
  },
  updateCancelBtn : {
    width: "35%",
    backgroundColor: 'rgb(211,211,211)',
    color: 'black',
    '&:hover': {
      backgroundColor: 'rgb(188, 72, 49)',
      color: "white"
    },
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // [theme.breakpoints.up('md')]: {
    //   display: 'none',
    // },
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  links: {
    textDecoration: 'none'
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: 'rgb(100,150,80)'
  },
  signInAppBar: {
    background: 'rgb(100,150,80)'
  },
  nestedList: {
    paddingLeft: theme.spacing(4),
    color: 'white'
  },
  iconColor: {
    color: 'white'
  },
  accountIcons: {
    color: 'white',
    '&:hover': {
      color: 'rgb(211,211,211)'
    }
  },
  menuToggle: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
      background: 'black'
    },
    color: 'white'
  },
  more: {
    display: 'flex',
    justifyContent: 'right'
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      flexShrink: 0,
      width: drawerWidth
    }
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'rgb(100,150,80)'
  },
  itemHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: "15px"
  },
  itemColor: {
    color: 'white'
  },
  dataContainer: {
    paddingTop: theme.spacing(4)
  },
  dateTimeField: {
    height: 40,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  infoPaper: {
    width: '100% !important'
  },
  basicContainer: {
    marginTop: theme.spacing(2),
    height: '35rem'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3)
  },
  moreInfoAvatar: {
    width: '5rem',
    height: '5rem'
  },
  basicHeader: {
    fontWeight: 'bold'
  },
}));

export default useStyle;